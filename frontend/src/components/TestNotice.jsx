export default function TestNotice({ children }) {
  return (
    <div style={{ padding: 8, border: "1px dashed #888", borderRadius: 8, margin: "8px 0", fontSize: 14 }}>
      {children}
    </div>
  );
}
