import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import Destruct from './components/Destruct';
import { Count } from './components/Count';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import BindEvents from './components/BindEvents';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/ConditionalRendering';
import MapMethod from './components/MapMethod';
import PersonsList from './MoreComp/PersonsList';
import Persons from './MoreComp/Persons';
import MyStyleTest from './MoreComp/MyStyleTest'
import Inline from './MoreComp/Inline';
import './AppStyles.css';
import styles from './AppStyles.module.css';
import Forms from './MoreComp/Forms';
import FormWork from './MoreComp/FormWork';
import RefDemo from './MoreComp/RefDemo';
import PortalDemo from './MoreComp/PortalDemo';
import ClickCounter from './AddComp/ClickCounter';
import HoverCounter from './AddComp/HoverCounter';
import ClickXtimes from './AddComp/ClickXtimes';
import UserProvider, { UserP } from './AddComp/UserContext'
import CompA from './AddComp/CompA';

function App() {
  return (
    <div className="App">
      <UserP value="kabirbapson">
        <CompA />
      </UserP>
      <Count />
      <ClickCounter />
      <HoverCounter />
      <ClickXtimes />

      {/* <RefDemo /> */}
      {/* <PortalDemo /> */}
      {/* <Forms /> */}
      {/* <FormWork /> */}
      {/* <h2 className='error'> App Styles Only</h2> */}
      {/* <h2 className={styles.succes}>Module Styles Only</h2> */}
      {/* <Inline /> */}
      {/* <MyStyleTest primary={true} /> */}
      {/* <PersonsList /> */}
      {/* <Persons /> */}
      {/* <MapMethod /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <BindEvents /> */}
      {/* <Counter /> */}
      {/* <ClassClick />
      <FunctionClick /> */}
      <br />
      {/* <Destruct Hello age='29' /> */}
      {/* <Message /> */}
      {/* <Greet name='Hassan' hname='Lai Mohd'>
        <p>These are the children</p>
      </Greet> 
      <Greet name='Lawan' hname='Big Bro'>
        <button>Action Submit</button>
      </Greet>
      <Greet name='Idi' hname='Alaji Matsolo' />

      <Welcome name='Gambo' hname='Matsolo' />
      <Hello /> 
      */}
    </div >
  );
}

export default App;
