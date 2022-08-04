import { useEffect, useState } from 'react';
import Container from './components/Container';
import data from './data/data.json';

function App() {
  const [answer, setAnswer] = useState<string>('');

  useEffect(() => {
    const random = data[Math.floor(Math.random()*data.length)]
    setAnswer(random)
  }, [setAnswer]);

  const handleRestart = () => {
    const random = data[Math.floor(Math.random()*data.length)]
    setAnswer(random)
  }

  return (
    <div className="App">
      <h1>LET'S PLAY WORDLE🤓💭</h1>
      {answer && <Container answer={answer} handleRestart={handleRestart} />}
    </div>
  );
}

export default App;
