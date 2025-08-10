import React, { useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { HorizontalFlex, VerticalFlex, TextStyle, Button, Card } from 'jiffy-ui';
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
                    <VerticalFlex gap={32}>
                        <div className="search-empty-state">
                            <div className="search-empty-icon">
                                <Search size={48} />
                            </div>
                            <VerticalFlex gap={16}>
                                <TextStyle as="h1" type="2XlHeading" alignment="Center">
                                    Search Documentation
                                </TextStyle>
                                <TextStyle as="p" type="LgBody" alignment="Center" textColor="Secondary">
                                    Enter a search term to find components, documentation, and examples.
                                </TextStyle>
                            </VerticalFlex>
                            <Button color="Primary" onClick={handleBackToHome}>
                                Back to Home
                            </Button>
                        </div>
                    </VerticalFlex>
                </div>
            </div>
        );
    }

    return (
        <div className="search-results-container">
            <div className="search-results-content">
                <VerticalFlex gap={32}>
                    {/* Search Header */}
                    <div className="search-header">
                        <VerticalFlex gap={16}>
                            <VerticalFlex gap={8}>
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
                            </VerticalFlex>
                            
                            <HorizontalFlex gap={12}>
                                <Button variant="Secondry" onClick={handleBackToHome}>
                                    Back to Home
                                </Button>
                                <Link to="/docs">
                                    <Button variant="Tertiary">
                                        View Documentation
                                    </Button>
                                </Link>
                            </HorizontalFlex>
                        </VerticalFlex>
                    </div>

                    {/* Loading State */}
                    {isSearching && (
                        <div className="search-loading">
                            <Card type="Borderd" headerTitle="">
                                <HorizontalFlex gap={12} blockAlign={{ "lg": "center" }}>
                                    <div className="loading-spinner"></div>
                                    <TextStyle as="p" type="MdBody">
                                        Searching through components and documentation...
                                    </TextStyle>
                                </HorizontalFlex>
                            </Card>
                        </div>
                    )}

                    {/* Search Results */}
                    {!isSearching && searchResults.length > 0 && (
                        <div className="search-results-list">
                            <VerticalFlex gap={16}>
                                {searchResults.map((result) => (
                                    <Card key={result.id} type="Borderd" headerTitle="">
                                        <Link to={result.url} className="search-result-link">
                                            <VerticalFlex gap={12}>
                                                <HorizontalFlex gap={12} blockAlign={{ "lg": "start" }}>
                                                    <div className="result-icon">
                                                        {getResultIcon(result.category)}
                                                    </div>
                                                    <VerticalFlex gap={8}>
                                                        <HorizontalFlex gap={12} blockAlign={{ "lg": "center" }}>
                                                            <TextStyle as="h3" type="LgHeading">
                                                                {highlightText(result.title, urlQuery)}
                                                            </TextStyle>
                                                            <span className="result-category">
                                                                {result.category}
                                                            </span>
                                                        </HorizontalFlex>
                                                        <TextStyle as="p" type="MdBody" textColor="Secondary">
                                                            {highlightText(result.description, urlQuery)}
                                                        </TextStyle>
                                                        
                                                        {/* Tags */}
                                                        {result.tags.length > 0 && (
                                                            <div className="result-tags">
                                                                <HorizontalFlex gap={8}>
                                                                    {result.tags.slice(0, 4).map((tag) => (
                                                                        <span key={tag} className="result-tag">
                                                                            {tag}
                                                                        </span>
                                                                    ))}
                                                                </HorizontalFlex>
                                                            </div>
                                                        )}
                                                        
                                                        <div className="result-url">
                                                            <TextStyle as="span" type="SmBody" textColor="Secondary">
                                                                {window.location.origin}{result.url}
                                                            </TextStyle>
                                                        </div>
                                                    </VerticalFlex>
                                                </HorizontalFlex>
                                                
                                                <div className="result-hover-indicator">
                                                    <ArrowRight size={16} />
                                                </div>
                                            </VerticalFlex>
                                        </Link>
                                    </Card>
                                ))}
                            </VerticalFlex>
                        </div>
                    )}

                    {/* No Results */}
                    {!isSearching && searchResults.length === 0 && urlQuery && (
                        <div className="search-no-results">
                            <Card type="Shadow" headerTitle="">
                                <VerticalFlex gap={20}>
                                    <div className="no-results-icon">
                                        😔
                                    </div>
                                    <VerticalFlex gap={12}>
                                        <TextStyle as="h3" type="LgHeading" alignment="Center">
                                            No results found
                                        </TextStyle>
                                        <TextStyle as="p" type="MdBody" alignment="Center" textColor="Secondary">
                                            We couldn't find anything matching "{urlQuery}". Try searching for:
                                        </TextStyle>
                                    </VerticalFlex>
                                    
                                    <div className="search-suggestions">
                                        <VerticalFlex gap={12}>
                                            <TextStyle as="h4" type="MdHeading">
                                                Popular searches:
                                            </TextStyle>
                                            <HorizontalFlex gap={8}>
                                                {['Button', 'Card', 'Input', 'Modal', 'Installation'].map((suggestion) => (
                                                    <Link 
                                                        key={suggestion} 
                                                        to={`/search?q=${encodeURIComponent(suggestion)}`}
                                                        className="search-suggestion"
                                                    >
                                                        {suggestion}
                                                    </Link>
                                                ))}
                                            </HorizontalFlex>
                                        </VerticalFlex>
                                    </div>
                                    
                                    <HorizontalFlex gap={12} align={{ "lg": "center" }}>
                                        <Link to="/docs">
                                            <Button color="Primary">
                                                Browse Documentation
                                            </Button>
                                        </Link>
                                        <Link to="/pannel">
                                            <Button variant="Secondry">
                                                View Components
                                            </Button>
                                        </Link>
                                    </HorizontalFlex>
                                </VerticalFlex>
                            </Card>
                        </div>
                    )}
                </VerticalFlex>
            </div>
        </div>
    );
};

export default SearchResults;