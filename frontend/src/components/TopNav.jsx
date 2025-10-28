export default function TopNav({ userId = 0, onSearch }) {
  function handleSubmit(e) {
    e.preventDefault();
    const term = new FormData(e.currentTarget).get("q")?.trim() || "";
    onSearch?.(term);
  }

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
      <div className="container">
        {/* Brand (replace with Router link later) */}
        <a className="navbar-brand" href={`/id${userId}/send0`}>Home</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="col-lg"></div>

        {/* Search */}
        <div className="col-lg-3">
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-0">
              <input name="q" type="text" className="form-control" placeholder="Search by name" />
              <button className="btn btn-outline-light" type="submit">
                <i className="bi bi-search" />
              </button>
            </div>
          </form>
        </div>

        {/* Right-side links */}
        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href={`/profile${userId}`}>Profile</a></li>
            <li className="nav-item"><a className="nav-link" href="/contactlist">Contactlist</a></li>
            <li className="nav-item"><a className="nav-link" href="/logout">Logout</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
