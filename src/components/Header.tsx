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

  const headerRef = useRef<HTMLElement | null>(null);
  const languageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsMobileMenuOpen(false);
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
      }
    };

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsLanguageMenuOpen(false);
        setIsMobileMenuOpen(false);
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
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
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

            <div className="mobile-menu__item">
              <Link to="/tours" onClick={closeMobileMenu}>Туры</Link>
            </div>

            <div className="mobile-menu__item">
              <Link to="/microbuses" onClick={closeMobileMenu}>Микроавтобусы</Link>
            </div>

            <div className="mobile-menu__item">
              <Link to="/buses" onClick={closeMobileMenu}>Автобус</Link>
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