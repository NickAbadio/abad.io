import "./Header.css";
function Header() {
  return (
    <div className="header-container">
      <header>
        <h1>Abad.io</h1>
        <nav>
          <ul>
            <li>
              <a href="#aboutMe">AboutMe</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="https://github.com/NickAbadio">blog</a>
            </li>
            <li>
              <a href="https://github.com/NickAbadio">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
