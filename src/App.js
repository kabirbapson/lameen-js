import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';

function App() {


  return (
    <div className="App">
      <Message />
      {/* <Greet name='Hassan' hname='Lai Mohd'>
        <p>These are the children</p>
      </Greet>
      <Greet name='Lawan' hname='Big Bro'>
        <button>Action Submit</button>
      </Greet>
      <Greet name='Idi' hname='Alaji Matsolo' />

      <Welcome name='Gambo' hname='Matsolo' />
      <Hello /> */}
    </div>
  );
}

export default App;
