import ProductRating from "./ProductRating.jsx";

function formatPrice(p) {
  const n = Number(p);
  return isNaN(n) ? p : n.toFixed(2) + " €";
}

export default function ProductCardStore({
  product,
  onAdd,
  rating = 0,
}) {
  const { name, description, price, imageUrl } = product || {};

  return (
    <div className="card border-0 shadow-sm mb-4 w-100">
      <div className="card-body">
        <div className="row g-3 align-items-start">

          {/* LEFT: Image */}
          <div className="col-12 col-sm-auto d-flex justify-content-center">
            <img
              src={imageUrl || "/placeholder-256x160.png"}
              alt={name}
              className="rounded"
              style={{
                width: 160,
                height: 120,
                objectFit: "cover",
                flexShrink: 0,
              }}
            />
          </div>

          {/* RIGHT: Info */}
          <div className="col">
            {/* 1. Product name */}
            <h5 className="mb-2 d-flex align-items-left gap-2">{name}</h5>

            {/* 2. Rating */}
            <div className="mb-2 d-flex align-items-left gap-2">
              <ProductRating value={rating} />
              <small className="text-secondary">(0)</small>
            </div>

            {/* 3. Description */}
            <p className="mb-2 d-flex align-items-left gap-2">{description}</p>

            {/* 4. Price + button */}
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
              <div className="fs-4 fw-bold">{formatPrice(price)}</div>
              <button
                className="btn btn-primary"
                onClick={() => onAdd?.(product)}
              >
                <i className="bi bi-cart-plus me-1" />
                Lisää koriin
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
