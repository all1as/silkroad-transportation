import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '/srtlogo.png';
import int from '/internet.png';
interface MenuItem {
  title: string;
  items?: Array<{ label: string; path: string }>;
  path?: string;
}

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const menuItems: MenuItem[] = [
    {
      title: "Транспорт",
      items: [
        { label: "7-местные", path: "/microbuses#7-seater" },
        { label: "13-местный", path: "/microbuses#13-seater" },
        { label: "19-местный", path: "/microbuses#19-seater" },
        { label: "47-местный", path: "/buses" }
      ]
    },
    {
      title: "Туры",
      items: [
        { label: "11-дневный", path: "/tours#11-day" },
        { label: "7-дневный", path: "/tours#7-day" },
        { label: "6-дневный", path: "/tours#6-day" },
        { label: "5-дневный", path: "/tours#5-day" },
        { label: "4-дневный", path: "/tours#4-day" },
        { label: "3-дневный", path: "/tours#3-day" }
      ]
    },
    {
      title: "Лицензии",
      path: "/licenses"
    }
  ];

  const languages = ["Русский", "Ozbek", "English", "Deutsch"];

  const handleDropdownToggle = (menuName: string) => {
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar__left">
          <Link to="/">
            <img src={logo} alt="Логотип компании" className="logo" />
          </Link>

          <div className="desktop-menu">
            {menuItems.map((menu) => (
              <div
                key={menu.title}
                className="menu-item"
                onMouseEnter={() => menu.items && handleDropdownToggle(menu.title)}
                onMouseLeave={() => menu.items && handleDropdownToggle(menu.title)}
              >
                {menu.path ? (
                  <Link to={menu.path}>{menu.title}</Link>
                ) : (
                  <>
                    <span>{menu.title}</span>
                    {activeDropdown === menu.title && menu.items && (
                      <div className="dropdown-menu">
                        {menu.items.map((item) => (
                          <Link key={item.label} to={item.path}>
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="navbar__right">
          <div className="menu-item">
            <Link to="/contacts">Контакты</Link>
          </div>
          
          <div className="language-selector">
            <button 
              onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
              aria-label="Выбор языка"
            >
              <img src={int} alt="Иконка языка" className="language-icon" />
            </button>
            {isLanguageMenuOpen && (
              <div className="language-menu">
                {languages.map((lang) => (
                  <button key={lang} onClick={() => setIsLanguageMenuOpen(false)}>
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;