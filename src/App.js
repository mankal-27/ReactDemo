import './App.css';
// import SayHello, { Hellofn } from './basic/buttonclick';
import { Helloworldfn } from './basic/helloworld';
// import Greetcls, { Greet } from './basic/greet';
// import ToggleMsgCls from './basic/tooglemsg';
// import ParentToChildArray from './componentCommu/parentochild';
// import ChildToParent from './componentCommu/childtoParent';
// import Mountphase from './lifecycle/mountphase';
// import UnMount from './lifecycle/unmount';
// // import useEffectcomponentUpdate from './hooks/useEffect'
// import WindowSizeUseEffect1 from './hooks/useEffect2';
// import UseRefCounter from './hooks/useRef';
// import { ContextDemo } from './hooks/useContext';
function App() {
  return (
    <div className="App">
      <h1> hello react</h1>
      <Helloworldfn/>
      {/* <SayHello/>
      <Hellofn/>
      <Greetcls name = "kiran" desg = "Developer" />
      <Greet name="kishan"/>
      <ToggleMsgCls/>
      <ParentToChildArray/>
      <ChildToParent/>
      <Mountphase/>
      <UnMount/>
      <useEffectcomponentUpdate/>
      <WindowSizeUseEffect1/> */}
      {/* <UseRefCounter/> */}
      {/* <ContextDemo/> */}
    </div>
  );
}

export default App;
