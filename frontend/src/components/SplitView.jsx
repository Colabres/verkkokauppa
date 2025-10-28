import ScrollCard from "./ScrollCard.jsx";

export default function SplitView({ left, right }) {
  return (
    <div className="container mt-4">
      <div className="row g-3">
        <div className="col-md-3">
          <ScrollCard>{left}</ScrollCard>
        </div>
        <div className="col">
          <ScrollCard>{right}</ScrollCard>
        </div>
      </div>
    </div>
  );
}
