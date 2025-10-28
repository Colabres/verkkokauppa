export default function ProductRating({ value = 0, outOf = 5 }) {
  return (
    <div className="text-warning small">
      {Array.from({ length: outOf }).map((_, i) => (
        <i key={i} className={`bi ${i < value ? "bi-star-fill" : "bi-star"}`} />
      ))}
    </div>
  );
}
