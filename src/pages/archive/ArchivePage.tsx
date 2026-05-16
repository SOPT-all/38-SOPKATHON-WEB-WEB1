import Layout from '../../layout/Layout';
import Header from '../home/components/Header';
import { Chip } from './components/chip';

const ArchivePage = () => {
  return (
    <div>
      <Header title="아카이빙" />
      <Layout>
        <div className="flex gap-2 pt-4.5 pb-7.5">
          <Chip label="전체" isSelected={true} />
          <Chip label="사랑" isSelected={false} />
          <Chip label="용기" isSelected={false} />
          <Chip label="솔직함" isSelected={false} />
        </div>
      </Layout>
    </div>
  );
};

export default ArchivePage;
