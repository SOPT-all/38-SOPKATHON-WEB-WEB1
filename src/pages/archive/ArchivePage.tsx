import { useState, useEffect } from 'react';
import Layout from '../../layout/Layout';
import { Input } from '../../shared/components/Input';
import { MosCard } from '../../shared/components/MosCard';
import Header from '../home/components/Header';
import { Chip } from './components/chip';
import { getArchives } from './apis/archive';
import type { ArchiveItem } from '../../shared/types/types';

const ArchivePage = () => {
  const [sender, setSender] = useState('');
  const [receiver, setReceiver] = useState('');
  const [archives, setArchives] = useState<ArchiveItem[]>([]);
  const [selected, setSelected] = useState('전체');

  useEffect(() => {
    getArchives().then((res) => {
      console.log(res);
      setArchives(res ?? []);
    });
  }, []);

  const filteredArchives =
    sender && receiver
      ? archives.filter(
          (item) =>
            item.senderInitial === sender && item.receiverInitial === receiver,
        )
      : archives;

  return (
    <div>
      <Header title="아카이빙" />
      <Layout>
        <Input
          sender={sender}
          receiver={receiver}
          onSenderChange={(e) => setSender(e.target.value)}
          onReceiverChange={(e) => setReceiver(e.target.value)}
        />
        <div className="flex gap-2 pt-4.5 pb-7.5">
          {['전체', '사랑', '용기', '솔직함'].map((chip) => (
            <Chip
              key={chip}
              label={chip}
              isSelected={selected === chip}
              onClick={() => setSelected(chip)}
            />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3">
          {filteredArchives.map((item) => (
            <MosCard
              key={item.savedMessageId}
              content={item.content}
              sender={item.senderInitial}
              receiver={item.receiverInitial}
              date={item.createdAt}
            />
          ))}
        </div>
      </Layout>
    </div>
  );
};

export default ArchivePage;
