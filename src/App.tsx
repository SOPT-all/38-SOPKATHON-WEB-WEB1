import { useState } from 'react';
import Textarea from './shared/components/Textarea';

function App() {
  const [letter, setLetter] = useState('');

  return (
    <main className="p-[24px]">
      <Textarea value={letter} onChange={setLetter} maxLength={50} />
    </main>
  );
}

export default App;
