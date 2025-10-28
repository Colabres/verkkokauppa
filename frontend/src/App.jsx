import './App.css'

import TopNav from "./components/TopNav.jsx";
import MainPanel from "./components/MainPanel.jsx";

export default function App() {
  return (
    <>
      <TopNav userId={0} onSearch={(term) => console.log("search:", term)} />
      
      <MainPanel />
    </>
  );
}
