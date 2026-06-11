import "./NavBar.scss";

import circulo from "../../assets/navBar/circulo.png";
import config from "../../assets/navBar/config.png";
import coracao from "../../assets/navBar/coracao.png";
import sino from "../../assets/navBar/sino.png";
import Logo from "../../assets/navBar/Logo.png";
import Lupa from "../../assets/navBar/Lupa.png";

const navItens = [
  { icon: coracao, label: "Favoritos" },
  { icon: sino, label: "Notificações", badge: true },
  { icon: config, label: "Configurações" },
  { icon: circulo, label: "Perfil", isAvatar: true },
];

const NavBar = () => {
  return (
    <header className="header">
      <div className="header__main">
        <img src={Logo} alt="Morent" className="header__logo" />

        <div className="header__search">
          <img src={Lupa} alt="" className="header__search-icon" />
          <input
            type="text"
            placeholder="Digite seu carro"
            className="header__search-input"
          />
          <button
            type="button"
            className="header__search-filter"
            aria-label="Filtros"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 4.5H16M5 9H13M7.5 13.5H10.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle
                cx="6"
                cy="4.5"
                r="1.5"
                fill="white"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <circle
                cx="12"
                cy="9"
                r="1.5"
                fill="white"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <circle
                cx="9"
                cy="13.5"
                r="1.5"
                fill="white"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </svg>
          </button>
        </div>

        <ul className="header__nav">
          {navItens.map(({ icon, label, badge, isAvatar }) => (
            <li
              key={label}
              className={`header__nav-item${isAvatar ? " header__nav-item--avatar" : ""}`}
            >
              <img src={icon} alt={label} />
              {badge && <span className="header__badge" />}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
