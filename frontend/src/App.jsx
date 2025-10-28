import './App.css'

import TopNav from "./components/TopNav.jsx";

export default function App() {
  return (
    <>
      <TopNav userId={0} onSearch={(term) => console.log("search:", term)} />
      <div className="container py-4">
        {/* Page content will go here next (SplitView etc.) */}
        <button className="btn btn-primary">Bootstrap works</button>
      </div>
    </>
  );
}
