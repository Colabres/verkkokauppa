import ProductsPanel from "./ProductsPanel.jsx";

export default function MainPanel() {
  return (
<div className="container" style={{ minWidth: "1100px" }}>
  <div className="row">
    <div className="col">
      <h5 className="mb-3">Tuotteet</h5>
      <ProductsPanel />
    </div>
  </div>
</div>
  );
}