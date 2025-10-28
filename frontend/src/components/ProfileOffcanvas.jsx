// ProfileOffcanvas.jsx
import { useState, useRef, useEffect } from "react";

/** Requires Bootstrap JS on the page. */
export default function ProfileOffcanvas({ show, onClose, onLogin }) {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [showPwd, setShowPwd] = useState(false);

  const ref = useRef(null);

  // Close on ESC
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose?.();
    }
    if (show) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [show, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (!show) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = prev);
  }, [show]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin?.({ email, password: pwd });
  };

  return (
    <div
      ref={ref}
      className={`offcanvas offcanvas-end ${show ? "show" : ""}`}
      tabIndex="-1"
      style={{ visibility: show ? "visible" : "hidden" }}  // mimic Bootstrap toggler
      aria-labelledby="offcanvasProfileLabel"
      role="dialog"
    >
      <div className="offcanvas-header">
        <h5 id="offcanvasProfileLabel" className="mb-0">Kirjaudu sisään</h5>
        <button type="button" className="btn-close" aria-label="Close" onClick={onClose} />
      </div>

      <div className="offcanvas-body">
        <form onSubmit={handleSubmit} className="vstack gap-3">
          <div>
            <label htmlFor="loginEmail" className="form-label">Sähköpostiosoite</label>
            <input
              id="loginEmail"
              type="email"
              className="form-control"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
              required
            />
          </div>

          <div>
            <label htmlFor="loginPwd" className="form-label">Salasana</label>
            <div className="input-group">
              <input
                id="loginPwd"
                type={showPwd ? "text" : "password"}
                className="form-control"
                placeholder="••••••••"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                required
                minLength={6}
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setShowPwd((s) => !s)}
                aria-label={showPwd ? "Piilota salasana" : "Näytä salasana"}
              >
                {showPwd ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">
                Muista minut
              </label>
            </div>
            <a href="#" className="small">Unohditko salasanasi?</a>
          </div>

        <button type="submit" className="btn btn-primary w-100">Kirjaudu sisään</button>
        </form>

        <hr className="my-4" />


      </div>
    </div>
  );
}
