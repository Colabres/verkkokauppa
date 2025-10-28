const API = import.meta.env.VITE_API_URL;

export async function getHealth() {
  const r = await fetch(`${API}/api/health`);
  return r.json();
}

export async function getProducts() {
  const r = await fetch('/api/products');
  return r.json();
}