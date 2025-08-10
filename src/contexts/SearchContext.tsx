import React, { createContext, useContext, useState, useCallback } from 'react';

interface SearchItem {
    id: string;
    title: string;
    description: string;
    category: string;
    url: string;
    content: string;
    tags: string[];
}

interface SearchContextType {
    searchQuery: string;
    searchResults: SearchItem[];
    isSearching: boolean;
    setSearchQuery: (query: string) => void;
    performSearch: (query: string) => void;
    clearSearch: () => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearch = () => {
    const context = useContext(SearchContext);
    if (context === undefined) {
        throw new Error('useSearch must be used within a SearchProvider');
    }
    return context;
};

// Mock search data - in a real app, this would come from an API
const searchData: SearchItem[] = [
    // Components
    {
        id: 'button-component',
        title: 'Button',
        description: 'Interactive button component with multiple variants and sizes',
        category: 'Components',
        url: '/pannel/Button',
        content: 'Button component primary secondary tertiary small medium large icon',
        tags: ['component', 'interactive', 'form', 'action']
    },
    {
        id: 'card-component',
        title: 'Card',
        description: 'Flexible container for displaying content with consistent styling',
        category: 'Components',
        url: '/pannel/Card',
        content: 'Card container layout bordered shadow header content',
        tags: ['component', 'layout', 'container']
    },
    {
        id: 'input-component',
        title: 'Input',
        description: 'Text input field with validation and various configurations',
        category: 'Components',
        url: '/pannel/Input',
        content: 'Input text field form validation placeholder',
        tags: ['component', 'form', 'input', 'validation']
    },
    {
        id: 'modal-component',
        title: 'Modal',
        description: 'Overlay dialog component for displaying content above the main interface',
        category: 'Components',
        url: '/pannel/Modal',
        content: 'Modal dialog overlay popup window',
        tags: ['component', 'overlay', 'dialog']
    },
    {
        id: 'table-component',
        title: 'Table',
        description: 'Data table component with sorting and pagination capabilities',
        category: 'Components',
        url: '/pannel/Table',
        content: 'Table data grid rows columns sorting pagination',
        tags: ['component', 'data', 'table', 'grid']
    },
    {
        id: 'autocomplete-component',
        title: 'AutoComplete',
        description: 'Smart input field with auto-suggestion and search capabilities',
        category: 'Components',
        url: '/pannel/AutoComplete',
        content: 'AutoComplete search suggestions dropdown input',
        tags: ['component', 'search', 'input', 'suggestions']
    },
    {
        id: 'checkbox-component',
        title: 'CheckBox',
        description: 'Checkbox input for boolean selections and form controls',
        category: 'Components',
        url: '/pannel/CheckBox',
        content: 'CheckBox boolean selection form control',
        tags: ['component', 'form', 'boolean', 'selection']
    },
    {
        id: 'accordion-component',
        title: 'Accordion',
        description: 'Collapsible content sections for organizing information',
        category: 'Components',
        url: '/pannel/Accordion',
        content: 'Accordion collapsible expandable sections content',
        tags: ['component', 'layout', 'collapsible']
    },
    {
        id: 'grid-component',
        title: 'Grid',
        description: 'Responsive grid layout system for organizing content',
        category: 'Layout',
        url: '/pannel/Grid',
        content: 'Grid layout responsive columns rows system',
        tags: ['layout', 'grid', 'responsive']
    },
    {
        id: 'sidebar-component',
        title: 'Sidebar',
        description: 'Navigation sidebar component for app layouts',
        category: 'Layout',
        url: '/pannel/Sidebar',
        content: 'Sidebar navigation menu layout app',
        tags: ['layout', 'navigation', 'sidebar']
    },
    {
        id: 'alert-component',
        title: 'Alert',
        description: 'Alert component for displaying important messages and notifications',
        category: 'Feedback',
        url: '/pannel/Alert',
        content: 'Alert notification message warning error success info',
        tags: ['feedback', 'notification', 'message']
    },
    // Documentation
    {
        id: 'installation-docs',
        title: 'Installation',
        description: 'How to install and set up Jiffy UI in your React project',
        category: 'Documentation',
        url: '/docs#installation',
        content: 'installation npm yarn pnpm setup configure react project',
        tags: ['documentation', 'setup', 'install']
    },
    {
        id: 'configuration-docs',
        title: 'Configuration',
        description: 'Configure Jiffy UI with TailwindCSS and customize themes',
        category: 'Documentation',
        url: '/docs#configuration',
        content: 'configuration tailwindcss themes customize setup',
        tags: ['documentation', 'config', 'tailwind', 'themes']
    },
    {
        id: 'theming-docs',
        title: 'Theming',
        description: 'Learn how to customize colors, fonts, and design tokens',
        category: 'Documentation',
        url: '/docs#theming',
        content: 'theming colors fonts design tokens customize variables',
        tags: ['documentation', 'theming', 'colors', 'design']
    },
    // Home page sections
    {
        id: 'home-features',
        title: 'Features',
        description: 'Explore the key features and benefits of Jiffy UI',
        category: 'Features',
        url: '/#features',
        content: 'features benefits typescript accessible responsive performance',
        tags: ['features', 'benefits', 'overview']
    },
    {
        id: 'home-getting-started',
        title: 'Getting Started',
        description: 'Quick start guide to begin building with Jiffy UI',
        category: 'Getting Started',
        url: '/',
        content: 'getting started quick start guide build components',
        tags: ['start', 'guide', 'begin']
    }
];

interface SearchProviderProps {
    children: React.ReactNode;
}

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<SearchItem[]>([]);
    const [isSearching, setIsSearching] = useState(false);

    const performSearch = useCallback((query: string) => {
        console.log('SearchContext: performSearch called with query:', query);
        setIsSearching(true);
        setSearchQuery(query);

        if (!query.trim()) {
            console.log('SearchContext: Empty query, clearing results');
            setSearchResults([]);
            setIsSearching(false);
            return;
        }

        console.log('SearchContext: Starting search with', searchData.length, 'items');
        
        // Simulate search delay
        setTimeout(() => {
            const lowercaseQuery = query.toLowerCase();
            const results = searchData.filter(item => {
                const titleMatch = item.title.toLowerCase().includes(lowercaseQuery);
                const descriptionMatch = item.description.toLowerCase().includes(lowercaseQuery);
                const contentMatch = item.content.toLowerCase().includes(lowercaseQuery);
                const tagMatch = item.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery));
                const categoryMatch = item.category.toLowerCase().includes(lowercaseQuery);

                return titleMatch || descriptionMatch || contentMatch || tagMatch || categoryMatch;
            });

            console.log('SearchContext: Found', results.length, 'results');

            // Sort by relevance (title matches first, then description, then content)
            results.sort((a, b) => {
                const aTitle = a.title.toLowerCase().includes(lowercaseQuery);
                const bTitle = b.title.toLowerCase().includes(lowercaseQuery);
                const aDesc = a.description.toLowerCase().includes(lowercaseQuery);
                const bDesc = b.description.toLowerCase().includes(lowercaseQuery);

                if (aTitle && !bTitle) return -1;
                if (!aTitle && bTitle) return 1;
                if (aDesc && !bDesc) return -1;
                if (!aDesc && bDesc) return 1;
                return 0;
            });

            setSearchResults(results);
            setIsSearching(false);
            console.log('SearchContext: Search completed');
        }, 300);
    }, []);

    const clearSearch = useCallback(() => {
        setSearchQuery('');
        setSearchResults([]);
        setIsSearching(false);
    }, []);

    const value = {
        searchQuery,
        searchResults,
        isSearching,
        setSearchQuery,
        performSearch,
        clearSearch
    };

    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    );
};