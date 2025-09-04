import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';
import logo from '/srtlogo.png';
import int from '/internet.png';


interface MenuItem {
  title: string;
  items?: Array<{ label: string; path: string }>;
  path?: string;
}

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLanguageMenuOpen(false);
    localStorage.setItem('selectedLanguage', lng);
  };
  const headerRef = useRef<HTMLElement | null>(null);
  const languageRef = useRef<HTMLDivElement | null>(null);

  const toggleMobileSubmenu = (menuTitle: string) => {
    setExpandedMobileMenu(prev => prev === menuTitle ? null : menuTitle);
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsMobileMenuOpen(false);
        setExpandedMobileMenu(null);
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
        setExpandedMobileMenu(null);
      }
    };

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsLanguageMenuOpen(false);
        setIsMobileMenuOpen(false);
        setExpandedMobileMenu(null);
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
      title: t('header.menu.transport'),
      items: [
        { label: t('header.transportSubmenu.7Seater'), path: "/microbuses#7-seater" },
        { label: t('header.transportSubmenu.13Seater'), path: "/microbuses#13-seater" },
        { label: t('header.transportSubmenu.19Seater'), path: "/microbuses#19-seater" },
        { label: t('header.transportSubmenu.47Seater'), path: "/buses" }
      ]
    },
    {
      title: t('header.menu.tours'),
      items: [
        { label: t('header.toursSubmenu.11Day'), path: "/tours#11-day" },
        { label: t('header.toursSubmenu.7Day'), path: "/tours#7-day" },
        { label: t('header.toursSubmenu.6Day'), path: "/tours#6-day" },
        { label: t('header.toursSubmenu.5Day'), path: "/tours#5-day" },
        { label: t('header.toursSubmenu.4Day'), path: "/tours#4-day" },
        { label: t('header.toursSubmenu.3Day'), path: "/tours#3-day" }
      ]
    },
    {
      title: t('header.menu.licenses'),
      path: "/licenses"
    }
  ];

  const languages = [
    { code: 'ru', name: t('header.languages.russian') },
    { code: 'uz', name: t('header.languages.uzbek') },
    { code: 'en', name: t('header.languages.english') },
    { code: 'de', name: t('header.languages.german') }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
    setIsLanguageMenuOpen(false);
    setExpandedMobileMenu(null);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setExpandedMobileMenu(null);
  };

  return (
    <header className="header" ref={headerRef}>
      <nav className="navbar">
        <div className="navbar__left">
          <Link to="/" onClick={() => isMobile && closeMobileMenu()}>
            <img src={logo} alt={t('common.logoAlt')} className="logo" />
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
                <Link to="/contacts">{t('header.menu.contacts')}</Link>
              </div>

              <div className="language-selector" ref={languageRef}>
                <button
                  onClick={() => {
                    setIsLanguageMenuOpen(prev => !prev);
                    setIsMobileMenuOpen(false);
                  }}
                  aria-label={t('header.languageSelector')}
                  className="language-btn"
                  aria-haspopup="menu"
                  aria-expanded={isLanguageMenuOpen}
                >
                  <img src={int} alt={t('common.languageIconAlt')} className="language-icon" />
                </button>
                 {isLanguageMenuOpen && (
    <div className="language-menu" role="menu">
      {languages.map((lang) => (
        <button 
          key={lang.code} 
          onClick={() => changeLanguage(lang.code)}
          className={i18n.language === lang.code ? 'active' : ''}
        >
          {lang.name}
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
                  aria-label={t('header.languageSelector')}
                  className="language-btn"
                  aria-haspopup="menu"
                  aria-expanded={isLanguageMenuOpen}
                >
                  <img src={int} alt={t('common.languageIconAlt')} className="language-icon" />
                </button>
                 {isLanguageMenuOpen && (
    <div className="language-menu" role="menu">
      {languages.map((lang) => (
        <button 
          key={lang.code} 
          onClick={() => changeLanguage(lang.code)}
          className={i18n.language === lang.code ? 'active' : ''}
        >
          {lang.name}
        </button>
      ))}
    </div>
  )}
              </div>

              <button
                className={`burger-menu ${isMobileMenuOpen ? 'active' : ''}`}
                onClick={toggleMobileMenu}
                aria-label={t('header.openMenu')}
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
              <Link to="/contacts" onClick={closeMobileMenu}>{t('header.menu.contacts')}</Link>
            </div>

            {/* Меню "Транспорт" с подменю */}
            <div className="mobile-menu__item">
              <div 
                className="mobile-menu__header"
                onClick={() => toggleMobileSubmenu(t('header.menu.transport'))}
              >
                <span>{t('header.menu.transport')}</span>
                <span className="mobile-menu__arrow">
                  {expandedMobileMenu === t('header.menu.transport') ? '▲' : '▼'}
                </span>
              </div>
              {expandedMobileMenu === t('header.menu.transport') && (
                <div className="mobile-submenu">
                  <Link to="/microbuses#7-seater" onClick={closeMobileMenu}>{t('header.transportSubmenu.7Seater')}</Link>
                  <Link to="/microbuses#13-seater" onClick={closeMobileMenu}>{t('header.transportSubmenu.13Seater')}</Link>
                  <Link to="/microbuses#19-seater" onClick={closeMobileMenu}>{t('header.transportSubmenu.19Seater')}</Link>
                  <Link to="/buses" onClick={closeMobileMenu}>{t('header.transportSubmenu.47Seater')}</Link>
                </div>
              )}
            </div>

            {/* Меню "Туры" с подменю */}
            <div className="mobile-menu__item">
              <div 
                className="mobile-menu__header"
                onClick={() => toggleMobileSubmenu(t('header.menu.tours'))}
              >
                <span>{t('header.menu.tours')}</span>
                <span className="mobile-menu__arrow">
                  {expandedMobileMenu === t('header.menu.tours') ? '▲' : '▼'}
                </span>
              </div>
              {expandedMobileMenu === t('header.menu.tours') && (
                <div className="mobile-submenu">
                  <Link to="/tours#11-day" onClick={closeMobileMenu}>{t('header.toursSubmenu.11Day')}</Link>
                  <Link to="/tours#7-day" onClick={closeMobileMenu}>{t('header.toursSubmenu.7Day')}</Link>
                  <Link to="/tours#6-day" onClick={closeMobileMenu}>{t('header.toursSubmenu.6Day')}</Link>
                  <Link to="/tours#5-day" onClick={closeMobileMenu}>{t('header.toursSubmenu.5Day')}</Link>
                  <Link to="/tours#4-day" onClick={closeMobileMenu}>{t('header.toursSubmenu.4Day')}</Link>
                  <Link to="/tours#3-day" onClick={closeMobileMenu}>{t('header.toursSubmenu.3Day')}</Link>
                </div>
              )}
            </div>

            <div className="mobile-menu__item">
              <Link to="/licenses" onClick={closeMobileMenu}>{t('header.menu.licenses')}</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;