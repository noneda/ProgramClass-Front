import "./base.css";

const Header = () => {
  return (
    <>
      <header className="header-home">
        <div className="div-search">
          <input type="text" id="label" placeholder="Search" />
          <button className="button" id="search">
            <svg viewBox="0 0 24 24">
              <path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" />
            </svg>
          </button>
        </div>
        <button
          id="theme"
          className="button"
          onClick={() => {
            document.body.classList.toggle("dark");
          }}
        >
          <svg viewBox="0 0 48 48">
            <path d="m41.4002,26.829c1.0929-1.0929,1.3734-2.752.6987-4.1425-1.356-2.7944-3.5771-6.4401-6.936-9.8573-3.5628-3.6245-7.1565-5.7208-9.9318-7.004-1.3664-.6318-2.9803-.3211-4.0448.7434l-12.0146,12.0146c-1.4136,1.4136-1.4136,3.7055,0,5.1191l5.0474,5.0474-7.5446,7.5446c-1.3601,1.3601-1.5606,3.5977-.2733,5.027,1.3728,1.5242,3.7228,1.5701,5.1546.1383l7.6866-7.6866,5.0474,5.0474c1.4136,1.4136,3.7055,1.4136,5.1191,0l11.9914-11.9914Z" />
            <line x1="13.4895" y1="14.2652" x2="33.7268" y2="34.5025" />
          </svg>
        </button>
      </header>
    </>
  );
};

export default Header;
