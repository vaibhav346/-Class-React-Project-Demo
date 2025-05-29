import logo from './logo.svg';
import './App.css';
import MyFirstFun from './MyFirstFun';
import MyHtmlTag from './MyHtmlTag';
import ClassDemo from './ClassDemo';
import ClassState from './ClassState';
import ClassDemo1 from './ClassDemo1';
import ClassCounter from './ClassCounter';
import FunctionState from './FunctionState';
import FunctionalProbs from './FunctionalProbs';
import ConditionalRendering from './ConditionalRendering';
import MountStageExample from './MountStageExample';
import ShouldComponetUpdateDemo from './ShouldComponetUpdateDemo';
import ComponetDidUpdateDemo from './ComponetDidUpdateDemo';
import { useState } from 'react';
// import { isVisible } from '@testing-library/user-event/dist/utils';
import UnmountDemo from './UnmountDemo';
import UserEffectDemo from './UserEffectDemo';
import UseEffectUnmount from './UseEffectUnmount';
import FormExample from './FormExample';

function App() {
 let[isVisible,setIsVisible]=useState(true);
  return (
   <div>
    {/* <h1>Hi, My Name is Neha Sapkal</h1> */}
    {/* <h2>This is h2 tag</h2>
    <marquee>This is example of react js</marquee> */}
    {/* <MyFirstFun></MyFirstFun>
    <MyHtmlTag></MyHtmlTag>
    <ClassDemo></ClassDemo>
    <ClassState></ClassState>
    <ClassDemo1></ClassDemo1>
    <ClassCounter name="Neha" age={20}></ClassCounter>
    <FunctionState></FunctionState>
    <FunctionalProbs course="Spring and React" duration="6 months"></FunctionalProbs>
    <ConditionalRendering></ConditionalRendering> */}
    {/* <MountStageExample></MountStageExample>
    <ShouldComponetUpdateDemo></ShouldComponetUpdateDemo>
    <ComponetDidUpdateDemo></ComponetDidUpdateDemo> */}
{/* 
    {
      isVisible?<UnmountDemo></UnmountDemo>:null
    }
    <button onClick={()=>{setIsVisible(!isVisible)}}>update isvisisable</button>

    <UserEffectDemo></UserEffectDemo> */}

    {
    isVisible?<UseEffectUnmount></UseEffectUnmount>:null
    }
    <button  onClick={()=>{setIsVisible(!isVisible)}}>update isvisiable</button>
    <FormExample></FormExample>
   </div>
  );
}

export default App;
