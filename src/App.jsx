import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { calculateSum } from "./workshop/typeFile/file1";
import { ShowText } from "./workshop/typeFile/file2";
import MyComponent from "./workshop/typeFile/file3";
import Component1 from "./workshop/createComponents/classComponet";
import Parent from "./workshop/Props/Parent";
import Parent2 from "./workshop/Props/Parent2";
import Workshop1 from "./workshop/Fragment/Workshop1";
import FunctionalComponent from "./workshop/HookTheory/FunctionalComponent";
import UseState1 from "./workshop/Hook/useState/Workshop1";
import Workshop2 from "./workshop/Hook/useState/Workshop2";
import Workshop3 from "./workshop/Hook/useState/Workshop3";
import Workshop4 from "./workshop/Hook/useState/Workshop4";
import Workshop5 from "./workshop/Hook/useState/Workshop5";
import UseReducer1 from "./workshop/Hook/useReducer/Workshop1";
import Reducer2 from "./workshop/Hook/useReducer/Reducer2";
import UseContext1 from "./workshop/Hook/useContext/UseContext1";
import CountContextProvider from "./workshop/Hook/useContext/CountContextProvider";
import ReactLifeCycle1 from "./workshop/Hook/ReactLifeCycle/ReactLifeCycle1";
import ReactLifeCycle2 from "./workshop/Hook/ReactLifeCycle/ReactLifeCycle2";
import ReactLifeCycle3 from "./workshop/Hook/ReactLifeCycle/ReactLifeCycle3";
import ReactLifeCycle4 from "./workshop/Hook/ReactLifeCycle/ReactLifeCycle4";
import ReactLifeCycle5 from "./workshop/Hook/ReactLifeCycle/ReactLifeCycle5";
import ReactLifeCycle6 from "./workshop/Hook/ReactLifeCycle/ReactLifeCycle6";
import ReactLifeCycle7 from "./workshop/Hook/ReactLifeCycle/ReactLifeCycle7";
import ReactLifeCycle8 from "./workshop/Hook/ReactLifeCycle/ReactLifeCycle8";
import ToggleTheme from "./workshop/Hook/ReactLifeCycle/ToggleTheme/ToggleTheme";
import { ThemeContextProvider } from "./workshop/Hook/ReactLifeCycle/Context/ThemeContextProvider";
// import CK1 from "./workshop/CustomHookWork/CustomHook/Component/CK1";
import Ck2 from "./workshop/CustomHookWork/CustomHook/Component/Ck2";
function App() {
  return (
    <>
      <Ck2 />
    </>
  );
}

export default App;
