import { Hithub, Search, Menu } from 'jiffy-icons';
import { HorizontalFlex, TextField, TextStyle, Button } from 'jiffy-ui'
import React, { useState } from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { useSearch } from '../../contexts/SearchContext';

const Header = () => {
    const [value, setValue] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { theme, toggleTheme } = useTheme();
    const { performSearch, clearSearch } = useSearch();

    const navigation = [
        { name: 'Docs', href: '/docs' },
        { name: 'Components', href: '/pannel' },
        { name: 'Blocks', href: '/blocks' },
        { name: 'Charts', href: '/charts' },
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

    const handleSearchButtonClick = () => {
        console.log('Search button clicked, value:', value);
        if (value.trim()) {
            handleSearch(value);
        } else {
            console.log('No search value to search for');
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
            <header className='modern-header'>
                <div className='header-container'>
                    <HorizontalFlex blockAlign={{ "lg": "center" }} align={{ "lg": "spaceBetween" }}>
                        {/* Logo and Brand */}
                        <HorizontalFlex gap={24} blockAlign={{ "lg": "center" }}>
                            <Link to="/" className='brand-link'>
                                <div className='brand'>
                                    <div className='brand-icon'>
                                        <div className='brand-icon-inner'></div>
                                    </div>
                                    <TextStyle as='span' type='LgHeading'>
                                        jiffy/ui
                                    </TextStyle>
                                </div>
                            </Link>

                            {/* Desktop Navigation */}
                            <nav className='desktop-nav'>
                                <HorizontalFlex gap={8}>
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            className={`nav-link ${isActiveRoute(item.href) ? 'active' : ''}`}
                                        >
                                            <TextStyle as='span' type='MdBody'>
                                                {item.name}
                                            </TextStyle>
                                        </Link>
                                    ))}
                                </HorizontalFlex>
                            </nav>
                        </HorizontalFlex>

                        {/* Right Side Actions */}
                        <HorizontalFlex gap={16} blockAlign={{ "lg": "center" }}>
                            {/* Search */}
                            <div className='search-container'>
                                <div className='search-input-wrapper'>
                                    <div className='search-field-wrapper'>
                                        <form onSubmit={(e) => { e.preventDefault(); if (value.trim()) handleSearch(value); }} className='custom-search-field'>
                                            <div style={{ cursor: 'pointer' }} onClick={handleSearchButtonClick}>
                                            <Search size={16}  />
                                            </div>
                                            <input
                                                type="text"
                                                value={value}
                                                onChange={(e) => setValue(e.target.value)}
                                                onKeyDown={handleSearchSubmit}
                                                placeholder='Search documentation...'
className='search-input'
                                            />
                                            {value && (
                                                <button 
                                                    className='search-clear-btn'
                                                    onClick={handleSearchClear}
                                                    type="button"
                                                >
                                                    X
                                                </button>
                                            )}
                                            <button type="submit" style={{ display: 'none' }}>Search</button>
                                        </form>
                                    </div>
                                    <div className='search-shortcut'>
                                        <TextStyle as='span' type='SmBody' textColor='Secondary'>
                                            ⌘K
                                        </TextStyle>
                                    </div>
                                </div>
                            </div>

                            {/* GitHub Link */}
                            <a 
                                href="https://github.com/jiffytechsolutions/JiffyDemo" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className='github-link'
                            >
                                <Hithub size={20} />
                            </a>

                            {/* Theme Toggle */}
                            <button className='theme-toggle' onClick={toggleTheme} title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
                                {theme === 'light' ? '🌙' : '☀️'}
                            </button>

                            {/* Mobile Menu Toggle */}
                            <button 
                                className='mobile-menu-toggle'
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? "X" : <Menu size={20} />}
                            </button>
                        </HorizontalFlex>
                    </HorizontalFlex>

                    {/* Mobile Navigation */}
                    {isMobileMenuOpen && (
                        <div className='mobile-nav'>
                            <div className='mobile-nav-content'>
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className={`mobile-nav-link ${isActiveRoute(item.href) ? 'active' : ''}`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <TextStyle as='span' type='MdBody'>
                                            {item.name}
                                        </TextStyle>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </header>
            <Outlet />
        </>
    )
}

export default Header
