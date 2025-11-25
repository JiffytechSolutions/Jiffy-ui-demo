import { Hithub, Search, Menu, Sun, Moon } from 'jiffy-icons';
import {  TextStyle, Button } from 'jiffy-ui'
import React, { useState, useEffect } from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { useSearch } from '../../contexts/SearchContext';
import Footer from '../Footer/Footer';
import logo from '../../assets/uiLogo.png'

const Header = () => {
    const [value, setValue] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { theme, toggleTheme } = useTheme();
    const { performSearch, clearSearch } = useSearch();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    const navigation = [
        { name: 'Docs', href: '/docs' },
        { name: 'Components', href: '/pannel/PageTitle' },
        // { name: 'Blocks', href: '/blocks' },
        // { name: 'Charts', href: '/charts' },
        { name: 'Themes', href: '/themes' },
        { name: 'Colors', href: '/colors' }
    ];

    const isActiveRoute = (href: string) => {
        return location.pathname === href || location.pathname.startsWith(href + '/');
    };

    const handleSearch = (searchValue: string) => {
        console.log('Search triggered with value:', searchValue);
        setValue(searchValue);
        if (searchValue.trim()) {
            console.log('Performing search and navigating...');
            try {
                performSearch(searchValue);
            } catch (error) {
                console.error('Search context error:', error);
            }
            navigate(`/search?q=${encodeURIComponent(searchValue.trim())}`);
        } else {
            console.log('Clearing search...');
            try {
                clearSearch();
            } catch (error) {
                console.error('Clear search error:', error);
            }
        }
    };

    const handleSearchSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
        console.log('Key pressed:', e.key);
        if (e.key === 'Enter' && value.trim()) {
            console.log('Enter pressed, triggering search');
            e.preventDefault();
            handleSearch(value);
        }
    };

   

    const handleSearchClear = () => {
        setValue('');
        clearSearch();
        if (location.pathname === '/search') {
            navigate('/');
        }
    };

    return (
        <>
            <header className={`redesigned-header ${isScrolled ? 'scrolled' : ''}`}>
                <div className='header-content'>
                    <div className='header-main'>
                        {/* Left Section - Logo & Navigation */}
                        <div className='header-left'>
                            <Link to="/" className='brand-container'>
                                <img src={logo} alt='Jiffy UI' />
                            </Link>

                            {/* Desktop Navigation */}
                            <nav className='nav-desktop'>
                                <div className='nav-links'>
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            className={`nav-item ${isActiveRoute(item.href) ? 'active' : ''}`}
                                        >
                                            <span className='nav-text'>{item.name}</span>
                                            {isActiveRoute(item.href) && <div className='nav-indicator' />}
                                        </Link>
                                    ))}
                                </div>
                            </nav>
                        </div>

                        {/* Right Section - Search & Actions */}
                        <div className='header-right'>
                            {/* Enhanced Search */}
                            <div className={`search-enhanced ${isSearchFocused ? 'focused' : ''}`}>
                                <div className='search-wrapper'>
                                    <Search size={18} />
                                    <input
                                        type="text"
                                        value={value}
                                        onChange={(e) => setValue(e.target.value)}
                                        onKeyDown={handleSearchSubmit}
                                        onFocus={() => setIsSearchFocused(true)}
                                        onBlur={() => setIsSearchFocused(false)}
                                        placeholder='Search docs, components...'
                                        className='search-field'
                                    />
                                    {value && (
                                        <button 
                                            className='search-clear'
                                            onClick={handleSearchClear}
                                            type="button"
                                        >
                                            ×
                                        </button>
                                    )}
                                    <div className='search-kbd'>
                                        <span>⌘</span>
                                        <span>K</span>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className='action-buttons'>
                                <button
                                    className='action-btn github-btn'
                                    onClick={() => window.open('https://github.com/jiffytechsolutions/JiffyDemo', '_blank')}
                                    title="View on GitHub"
                                >
                                    <Hithub size={16} />
                                </button>
                                
                                <button
                                    className='action-btn theme-btn'
                                    onClick={toggleTheme}
                                    title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                                >
                                    {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
                                </button>

                                <button
                                    className='action-btn mobile-toggle'
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                >
                                    {isMobileMenuOpen ? '×' : <Menu size={18} />}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Navigation Overlay */}
                    {isMobileMenuOpen && (
                        <>
                            <div className='mobile-overlay' onClick={() => setIsMobileMenuOpen(false)} />
                            <div className='mobile-navigation'>
                                <div className='mobile-nav-header'>
                                    <TextStyle as='h3' type='MdHeading'>
                                        Navigation
                                    </TextStyle>
                                </div>
                                <div className='mobile-nav-body'>
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            className={`mobile-nav-item ${isActiveRoute(item.href) ? 'active' : ''}`}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            <span className='mobile-nav-text'>{item.name}</span>
                                            {isActiveRoute(item.href) && <div className='mobile-nav-indicator' />}
                                        </Link>
                                    ))}
                                </div>
                                <div className='mobile-nav-footer'>
                                    <div className='mobile-actions'>
                                        <Button
                                            variant="Secondary"
                                            size="Small"
                                            onClick={() => window.open('https://github.com/jiffytechsolutions/JiffyDemo', '_blank')}
                                            icon={<Hithub size={16} />}
                                        >
                                            GitHub
                                        </Button>
                                        <Button
                                            variant="Secondary"
                                            size="Small"
                                            onClick={toggleTheme}
                                            icon={theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
                                        >
                                            {theme === 'light' ? 'Dark' : 'Light'} Mode
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </header>
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Header
