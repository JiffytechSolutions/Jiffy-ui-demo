import React, { useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import {  TextStyle, Button, Card, FlexLayout } from 'jiffy-ui';
import { ArrowRight, Search } from 'jiffy-icons';
import { useSearch } from '../../contexts/SearchContext';

const SearchResults = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { searchQuery, searchResults, isSearching, performSearch, clearSearch } = useSearch();
    
    // Get search query from URL params
    const searchParams = new URLSearchParams(location.search);
    const urlQuery = searchParams.get('q') || '';

    useEffect(() => {
        console.log('SearchResults: useEffect triggered', { urlQuery, searchQuery });
        if (urlQuery && urlQuery !== searchQuery) {
            console.log('SearchResults: Performing search for URL query:', urlQuery);
            performSearch(urlQuery);
        } else if (!urlQuery && searchQuery) {
            console.log('SearchResults: Clearing search');
            clearSearch();
        }
    }, [urlQuery, searchQuery, performSearch, clearSearch]);

    const handleBackToHome = () => {
        navigate('/');
        clearSearch();
    };

    const getResultIcon = (category: string) => {
        switch (category) {
            case 'Components':
                return '🧩';
            case 'Documentation':
                return '📚';
            case 'Layout':
                return '📐';
            case 'Features':
                return '⭐';
            case 'Feedback':
                return '💬';
            case 'Getting Started':
                return '🚀';
            default:
                return '📄';
        }
    };

    const highlightText = (text: string, query: string) => {
        if (!query.trim()) return text;
        
        const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        const parts = text.split(regex);
        
        return parts.map((part, index) => 
            regex.test(part) ? (
                <mark key={index} className="search-highlight">{part}</mark>
            ) : part
        );
    };

    if (!urlQuery) {
        return (
            <div className="search-results-container">
                <div className="search-results-content">
                    <FlexLayout direction='column' gap={4}>
                        <div className="search-empty-state">
                            <div className="search-empty-icon">
                                <Search size={48} />
                            </div>
                            <FlexLayout direction='column' gap={4}>
                                <TextStyle as="h1" type="2XlHeading" alignment="center">
                                    Search Documentation
                                </TextStyle>
                                <TextStyle as="p" type="LgBody" alignment="center" textColor="Secondary">
                                    Enter a search term to find components, documentation, and examples.
                                </TextStyle>
                            </FlexLayout>
                            <Button color="Primary" onClick={handleBackToHome}>
                                Back to Home
                            </Button>
                        </div>
                    </FlexLayout>
                </div>
            </div>
        );
    }

    return (
        <div className="search-results-container">
            <div className="search-results-content">
                <FlexLayout direction='column' gap={4}>
                    {/* Search Header */}
                    <div className="search-header">
                        <FlexLayout direction='column' gap={4}>
                            <FlexLayout direction='column' gap={4}>
                                <TextStyle as="h1" type="2XlHeading">
                                    Search Results
                                </TextStyle>
                                <TextStyle as="p" type="LgBody" textColor="Secondary">
                                    {isSearching ? (
                                        'Searching...'
                                    ) : (
                                        <>
                                            {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for "{urlQuery}"
                                        </>
                                    )}
                                </TextStyle>
                            </FlexLayout>
                            
                            <FlexLayout gap={4}>
                                <Button variant="Secondary" onClick={handleBackToHome}>
                                    Back to Home
                                </Button>
                                <Link to="/docs">
                                    <Button variant="Tertiary">
                                        View Documentation
                                    </Button>
                                </Link>
                            </FlexLayout>
                        </FlexLayout>
                    </div>

                    {/* Loading State */}
                    {isSearching && (
                        <div className="search-loading">
                            <Card variant='outlined'>
                                <FlexLayout gap={4} blockAlign={{ "lg": "center" }}>
                                    <div className="loading-spinner"></div>
                                    <TextStyle as="p" type="MdBody">
                                        Searching through components and documentation...
                                    </TextStyle>
                                </FlexLayout>
                            </Card>
                        </div>
                    )}

                    {/* Search Results */}
                    {!isSearching && searchResults.length > 0 && (
                        <div className="search-results-list">
                            <FlexLayout direction='column' gap={4}>
                                {searchResults.map((result) => (
                                    <Card key={result.id} variant='outlined'>
                                        <Link to={result.url} className="search-result-link">
                                            <FlexLayout direction='column' gap={4}>
                                                <FlexLayout gap={4} blockAlign={{ "lg": "start" }}>
                                                    <div className="result-icon">
                                                        {getResultIcon(result.category)}
                                                    </div>
                                                    <FlexLayout direction='column' gap={4}>
                                                        <FlexLayout gap={4} blockAlign={{ "lg": "center" }}>
                                                            <TextStyle as="h3" type="LgHeading">
                                                                {highlightText(result.title, urlQuery)}
                                                            </TextStyle>
                                                            <span className="result-category">
                                                                {result.category}
                                                            </span>
                                                        </FlexLayout>
                                                        <TextStyle as="p" type="MdBody" textColor="Secondary">
                                                            {highlightText(result.description, urlQuery)}
                                                        </TextStyle>
                                                        
                                                        {/* Tags */}
                                                        {result.tags.length > 0 && (
                                                            <div className="result-tags">
                                                                <FlexLayout gap={4}>
                                                                    {result.tags.slice(0, 4).map((tag) => (
                                                                        <span key={tag} className="result-tag">
                                                                            {tag}
                                                                        </span>
                                                                    ))}
                                                                </FlexLayout>
                                                            </div>
                                                        )}
                                                        
                                                        <div className="result-url">
                                                            <TextStyle as="span" type="SmBody" textColor="Secondary">
                                                                {window.location.origin}{result.url}
                                                            </TextStyle>
                                                        </div>
                                                    </FlexLayout>
                                                </FlexLayout>
                                                
                                                <div className="result-hover-indicator">
                                                    <ArrowRight size={16} />
                                                </div>
                                            </FlexLayout>
                                        </Link>
                                    </Card>
                                ))}
                            </FlexLayout>
                        </div>
                    )}

                    {/* No Results */}
                    {!isSearching && searchResults.length === 0 && urlQuery && (
                        <div className="search-no-results">
                            <Card variant='outlined'>
                                <FlexLayout direction='column' gap={5}>
                                    <div className="no-results-icon">
                                        😔
                                    </div>
                                    <FlexLayout direction='column' gap={4}>
                                        <TextStyle as="h3" type="LgHeading" alignment="center">
                                            No results found
                                        </TextStyle>
                                        <TextStyle as="p" type="MdBody" alignment="center" textColor="Secondary">
                                            We couldn't find anything matching "{urlQuery}". Try searching for:
                                        </TextStyle>
                                    </FlexLayout>
                                    
                                    <div className="search-suggestions">
                                        <FlexLayout direction='column' gap={4}>
                                            <TextStyle as="h4" type="MdHeading">
                                                Popular searches:
                                            </TextStyle>
                                            <FlexLayout gap={3}>
                                                {['Button', 'Card', 'Input', 'Modal', 'Installation'].map((suggestion) => (
                                                    <Link 
                                                        key={suggestion} 
                                                        to={`/search?q=${encodeURIComponent(suggestion)}`}
                                                        className="search-suggestion"
                                                    >
                                                        {suggestion}
                                                    </Link>
                                                ))}
                                            </FlexLayout>
                                        </FlexLayout>
                                    </div>
                                    
                                    <FlexLayout gap={4} align={{ "lg": "center" }}>
                                        <Link to="/docs">
                                            <Button color="Primary">
                                                Browse Documentation
                                            </Button>
                                        </Link>
                                        <Link to="/pannel">
                                            <Button variant="Secondary">
                                                View Components
                                            </Button>
                                        </Link>
                                    </FlexLayout>
                                </FlexLayout>
                            </Card>
                        </div>
                    )}
                </FlexLayout>
            </div>
        </div>
    );
};

export default SearchResults;