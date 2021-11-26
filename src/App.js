import './App.css';
import SayHello, { Hellofn } from './basic/buttonclick';
import { Helloworldfn } from './basic/helloworld';
import Greetcls, { Greet } from './basic/greet';
import ToggleMsgCls from './basic/tooglemsg';
import ParentToChildArray from './componentCommu/parentochild';
import ChildToParent from './componentCommu/childtoParent';
import Mountphase from './lifecycle/mountphase';

function App() {
  return (
    <div className="App">
      <h1> hello react</h1>
      <Helloworldfn/>
      <SayHello/>
      <Hellofn/>
      <Greetcls name = "kiran" desg = "Developer" />
      <Greet name="kishan"/>
      <ToggleMsgCls/>
      <ParentToChildArray/>
      <ChildToParent/>
      <Mountphase/>
    </div>
  );
}

export default App;
