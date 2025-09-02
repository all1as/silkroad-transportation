import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '/srtlogo.png';
import int from '/internet.png';

interface MenuItem {
  title: string;
  items?: Array<{ label: string; path: string }>;
  path?: string;
}

const Header: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null); // ПЕРЕМЕЩЕНО ВНУТРЬ КОМПОНЕНТА

  const headerRef = useRef<HTMLElement | null>(null);
  const languageRef = useRef<HTMLDivElement | null>(null);

  const toggleMobileSubmenu = (menuTitle: string) => { // ПЕРЕМЕЩЕНО ВНУТРЬ КОМПОНЕНТА
    setExpandedMobileMenu(prev => prev === menuTitle ? null : menuTitle);
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsMobileMenuOpen(false);
        setExpandedMobileMenu(null); // ДОБАВЛЕНО СБРОС ПОДМЕНЮ
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleOutside = (e: Event) => {
      if (!headerRef.current) return;
      const target = e.target as Node | null;
      if (target && !headerRef.current.contains(target)) {
        setIsLanguageMenuOpen(false);
        setIsMobileMenuOpen(false);
        setExpandedMobileMenu(null); // ДОБАВЛЕНО СБРОС ПОДМЕНЮ
      }
    };

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsLanguageMenuOpen(false);
        setIsMobileMenuOpen(false);
        setExpandedMobileMenu(null); // ДОБАВЛЕНО СБРОС ПОДМЕНЮ
      }
    };

    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('touchstart', handleOutside);
    document.addEventListener('keydown', handleKey);

    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('touchstart', handleOutside);
      document.removeEventListener('keydown', handleKey);
    };
  }, []);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
    setIsLanguageMenuOpen(false);
    setExpandedMobileMenu(null); // ДОБАВЛЕНО СБРОС ПОДМЕНЮ
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setExpandedMobileMenu(null); // ДОБАВЛЕНО СБРОС ПОДМЕНЮ
  };

  return (
    <header className="header" ref={headerRef}>
      <nav className="navbar">
        <div className="navbar__left">
          <Link to="/" onClick={() => isMobile && closeMobileMenu()}>
            <img src={logo} alt="Логотип компании" className="logo" />
          </Link>

          {!isMobile && (
            <div className="desktop-menu">
              {menuItems.map((menu) => (
                <div
                  key={menu.title}
                  className="menu-item"
                  onMouseEnter={() => menu.items && setActiveDropdown(menu.title)}
                  onMouseLeave={() => menu.items && setActiveDropdown(null)}
                >
                  {menu.path ? (
                    <Link to={menu.path}>{menu.title}</Link>
                  ) : (
                    <>
                      <span>{menu.title}</span>
                      {activeDropdown === menu.title && menu.items && (
                        <div className="dropdown-menu" role="menu" aria-label={menu.title}>
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
          )}
        </div>

        <div className="navbar__right">
          {!isMobile && (
            <>
              <div className="menu-item">
                <Link to="/contacts">Контакты</Link>
              </div>

              <div className="language-selector" ref={languageRef}>
                <button
                  onClick={() => {
                    setIsLanguageMenuOpen(prev => !prev);
                    setIsMobileMenuOpen(false);
                  }}
                  aria-label="Выбор языка"
                  className="language-btn"
                  aria-haspopup="menu"
                  aria-expanded={isLanguageMenuOpen}
                >
                  <img src={int} alt="Иконка языка" className="language-icon" />
                </button>
                {isLanguageMenuOpen && (
                  <div className="language-menu" role="menu" aria-label="Выбор языка">
                    {languages.map((lang) => (
                      <button key={lang} onClick={() => setIsLanguageMenuOpen(false)}>
                        {lang}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}

          {isMobile && (
            <div className="navbar__mobile-controls">
              <div className="language-selector" ref={languageRef}>
                <button
                  onClick={() => {
                    setIsLanguageMenuOpen(prev => !prev);
                    setIsMobileMenuOpen(false);
                  }}
                  aria-label="Выбор языка"
                  className="language-btn"
                  aria-haspopup="menu"
                  aria-expanded={isLanguageMenuOpen}
                >
                  <img src={int} alt="Иконка языка" className="language-icon" />
                </button>
                {isLanguageMenuOpen && (
                  <div className="language-menu" role="menu" aria-label="Выбор языка">
                    {languages.map((lang) => (
                      <button key={lang} onClick={() => setIsLanguageMenuOpen(false)}>
                        {lang}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                className={`burger-menu ${isMobileMenuOpen ? 'active' : ''}`}
                onClick={toggleMobileMenu}
                aria-label="Открыть меню"
                aria-expanded={isMobileMenuOpen}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          )}
        </div>
      </nav>

      {isMobile && isMobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu__content">
            <div className="mobile-menu__item">
              <Link to="/contacts" onClick={closeMobileMenu}>Контакты</Link>
            </div>

            {/* Меню "Транспорт" с подменю */}
            <div className="mobile-menu__item">
              <div 
                className="mobile-menu__header"
                onClick={() => toggleMobileSubmenu('Транспорт')}
              >
                <span>Транспорт</span>
                <span className="mobile-menu__arrow">
                  {expandedMobileMenu === 'Транспорт' ? '▲' : '▼'}
                </span>
              </div>
              {expandedMobileMenu === 'Транспорт' && (
                <div className="mobile-submenu">
                  <Link to="/microbuses#7-seater" onClick={closeMobileMenu}>7-местные</Link>
                  <Link to="/microbuses#13-seater" onClick={closeMobileMenu}>13-местный</Link>
                  <Link to="/microbuses#19-seater" onClick={closeMobileMenu}>19-местный</Link>
                  <Link to="/buses" onClick={closeMobileMenu}>47-местный</Link>
                </div>
              )}
            </div>

            {/* Меню "Туры" с подменю */}
            <div className="mobile-menu__item">
              <div 
                className="mobile-menu__header"
                onClick={() => toggleMobileSubmenu('Туры')}
              >
                <span>Туры</span>
                <span className="mobile-menu__arrow">
                  {expandedMobileMenu === 'Туры' ? '▲' : '▼'}
                </span>
              </div>
              {expandedMobileMenu === 'Туры' && (
                <div className="mobile-submenu">
                  <Link to="/tours#11-day" onClick={closeMobileMenu}>11-дневный</Link>
                  <Link to="/tours#7-day" onClick={closeMobileMenu}>7-дневный</Link>
                  <Link to="/tours#6-day" onClick={closeMobileMenu}>6-дневный</Link>
                  <Link to="/tours#5-day" onClick={closeMobileMenu}>5-дневный</Link>
                  <Link to="/tours#4-day" onClick={closeMobileMenu}>4-дневный</Link>
                  <Link to="/tours#3-day" onClick={closeMobileMenu}>3-дневный</Link>
                </div>
              )}
            </div>

            <div className="mobile-menu__item">
              <Link to="/licenses" onClick={closeMobileMenu}>Лицензии</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;