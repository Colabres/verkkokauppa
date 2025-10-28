import { useEffect, useState } from "react";
import { getProducts } from "../api/client.js";
import ProductCardStore from "./ProductCardStore.jsx";

export default function ProductsPanel() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    getProducts().then(setItems).catch(console.error);
  }, []);

  if (!items) return <div className="text-secondary">Loading products…</div>;

  return (
    <div>
        <h5 className="container-xxl py-4">
      {items.map(p => (
        <ProductCardStore
          key={p.id}
          product={p}
          rating={0}
          condition={null}
          onAdd={(prod) => alert(`Added ${prod.name}`)}
        />
        
      ))}
      </h5>
    </div>
  );
}
