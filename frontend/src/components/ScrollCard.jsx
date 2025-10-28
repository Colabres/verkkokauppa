export default function ScrollCard({ children, maxVH = 85 }) {
  return (
    <div className="card" style={{ maxHeight: `${maxVH}vh`, overflowY: "auto" }}>
      <div className="card-body d-flex flex-column flex-fill">
        {children}
      </div>
    </div>
  );
}
