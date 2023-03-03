import "./left.css";

function Left() {
  return (
    <nav className="left">
      <div className="search">
        <button>
          <span className="material-symbols-outlined">search</span>
        </button>
      </div>
      <div className="bottom">
        <button>
          <span className="material-symbols-outlined">apps</span>
        </button>
      </div>
    </nav>
  );
}

export default Left;
