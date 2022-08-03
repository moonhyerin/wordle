import { useEffect, useState } from 'react';
import Container from './components/Container';
import data from './data/data.json';

function App() {
  const [answer, setAnswer] = useState<string>('');

  useEffect(() => {
    const random = data[Math.floor(Math.random()*data.length)]
    setAnswer(random)
  }, [setAnswer]);

  return (
    <div className="App">
      <h1>Wordle</h1>
      {answer && <Container answer={answer}/>}
    </div>
  );
}

export default App;
