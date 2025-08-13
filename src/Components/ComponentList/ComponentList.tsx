import { Button, Card, FlexLayout, Grid, TextStyle } from 'jiffy-ui'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'jiffy-icons'

import autocomplete from '../../assets/Autocomplete.png'
import checkBox from '../../assets/CheckBox.png'
import checkBoxgrp from '../../assets/checkboxGroup.png'
import accordion from '../../assets/Accordion.png'
import grid from '../../assets/Grid.png'
import card from '../../assets/Card.png'
import sidebar from '../../assets/Sidebar.png'
import alert from '../../assets/Alert.png'

const ComponentList = () => {
    const [hoveredComponent, setHoveredComponent] = useState<number | null>(null)
    const [selectedCategory, setSelectedCategory] = useState('All')

    const component = [
        {
            compName: "Card",
            url: "/pannel/Card",
            image: card,
            description: "Flexible containers for displaying content with consistent styling and spacing.",
            category: "Layout",
            story: "Perfect for product listings, user profiles, and content cards",
            usage: "95%",
            downloads: "12.5k",
            interactive: true
        },
        {
            compName: "AutoComplete",
            url: "/pannel/AutoComplete",
            image: autocomplete,
            description: "Smart input field with auto-suggestion and search capabilities.",
            category: "Input",
            story: "Essential for search forms and user-friendly data entry",
            usage: "78%",
            downloads: "8.2k",
            interactive: true
        },
        {
            compName: "Checkbox",
            url: "/pannel/Checkbox",
            image: checkBox,
            description: "Boolean input control for single selections and toggles.",
            category: "Input",
            story: "Fundamental component for forms and settings panels",
            usage: "89%",
            downloads: "15.1k",
            interactive: true
        },
        {
            compName: "Checkbox Group",
            url: "/pannel/CheckboxGroup",
            image: checkBoxgrp,
            description: "Multiple checkbox controls grouped together for multi-selection.",
            category: "Input",
            story: "Ideal for filter interfaces and multi-option selections",
            usage: "67%",
            downloads: "6.8k",
            interactive: true
        },
        {
            compName: "Accordion",
            url: "/pannel/Accordion",
            image: accordion,
            description: "Collapsible content panels for organizing information efficiently.",
            category: "Display",
            story: "Great for FAQs, documentation, and space-efficient layouts",
            usage: "72%",
            downloads: "9.3k",
            interactive: true
        },
        {
            compName: "Grid",
            url: "/pannel/Grid",
            image: grid,
            description: "Responsive grid system for creating flexible layouts.",
            category: "Layout",
            story: "Foundation for responsive design and content organization",
            usage: "91%",
            downloads: "18.7k",
            interactive: true
        },
        {
            compName: "Sidebar",
            url: "/pannel/Sidebar",
            image: sidebar,
            description: "Navigation sidebar with hierarchical menu structure.",
            category: "Navigation",
            story: "Essential for dashboards and admin interfaces",
            usage: "56%",
            downloads: "4.9k",
            interactive: true
        },
        {
            compName: "Alert",
            url: "/pannel/Alert",
            image: alert,
            description: "Contextual feedback messages for user notifications.",
            category: "Feedback",
            story: "Critical for user communication and status updates",
            usage: "84%",
            downloads: "11.2k",
            interactive: true
        }
    ]

    const categories = ['All', ...Array.from(new Set(component.map(c => c.category)))]
    const filteredComponents = selectedCategory === 'All' 
        ? component 
        : component.filter(c => c.category === selectedCategory)

    const features = [
        {
            title: "🚀 React Server Components",
            icon: "🚀",
            description: "All Jiffy UI components include proper directives and work seamlessly with React Server Components and Next.js 13+."
        },
        {
            title: "♿ Accessibility First",
            icon: "♿",
            description: "Built following WAI-ARIA guidelines with keyboard support, screen reader compatibility, and proper focus management."
        },
        {
            title: "🎯 Focus Management",
            icon: "🎯",
            description: "Smart focus rings that appear only during keyboard navigation, providing clear visual feedback for accessibility."
        },
        {
            title: "📝 TypeScript Native",
            icon: "📝",
            description: "Fully typed API with comprehensive TypeScript support to catch errors early and improve developer experience."
        },
        {
            title: "⚡ Zero Runtime Styles",
            icon: "⚡",
            description: "Built on TailwindCSS with no runtime CSS-in-JS overhead, ensuring optimal performance and smaller bundles."
        },
        {
            title: "🎨 Modern Design System",
            icon: "🎨",
            description: "Carefully crafted components with consistent design language that adapts to your brand and design requirements."
        }
    ]
    return (
        <>
            {/* Interactive Components Showcase Section */}
            <section className='components-showcase'>
                <div className='container'>
                    <FlexLayout direction='column' gap={4}>
                        <div className='section_heading'>
                            <FlexLayout direction='column' gap={3}>
                                <TextStyle as='h2' type='2XlHeading' alignment='center'>
                                    Component Stories & Examples
                                </TextStyle>
                                <TextStyle as='p' type='LgBody' alignment='center' textColor='Secondary'>
                                    Discover how our components work in real-world scenarios with interactive examples
                                </TextStyle>
                            </FlexLayout>
                        </div>

                        {/* Category Filter */}
                        <div className='category-filter'>
                            <FlexLayout align={{ "lg": "center" }} gap={2}>
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                                        onClick={() => setSelectedCategory(category)}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </FlexLayout>
                        </div>
                        
                        <div className='content_container'>
                            <FlexLayout direction='column' gap={5}>
                                <Grid gap={{ "lg": "16px" }} columns={4}>
                                    {filteredComponents.map((item, index) => {
                                        return (
                                            <div 
                                                key={index} 
                                                className='interactive-component-card'
                                                onMouseEnter={() => setHoveredComponent(index)}
                                                onMouseLeave={() => setHoveredComponent(null)}
                                            >
                                                <Link to={item.url} className='component-card-link'>
                                                    <Card variant='elevated'>
                                                        <FlexLayout direction='column' gap={3}>
                                                            <div className='component-image-wrapper'>
                                                                <img src={item.image} className='responsive-image' alt={item.compName} />
                                                                {hoveredComponent === index && (
                                                                    <div className='component-overlay'>
                                                                        <div className='overlay-actions'>
                                                                            <button className='action-btn'>
                                                                                👁️
                                                                            </button>
                                                                            <button className='action-btn'>
                                                                                💻
                                                                            </button>
                                                                            <button className='action-btn'>
                                                                                ❤️
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                            
                                                            <FlexLayout direction='column' gap={2}>
                                                                <FlexLayout>
                                                                    <TextStyle as='h5' type='LgHeading'>
                                                                        {item.compName}
                                                                    </TextStyle>
                                                                    <span className='component-category'>{item.category}</span>
                                                                </FlexLayout>
                                                                
                                                                <TextStyle as='p' type='MdBody' textColor='Secondary'>
                                                                    {item.description}
                                                                </TextStyle>
                                                                
                                                                {/* Component Story */}
                                                                <div className='component-story'>
                                                                    <TextStyle as='p' type='SmBody' textColor='Secondary'>
                                                                        💡 {item.story}
                                                                    </TextStyle>
                                                                </div>
                                                                
                                                                {/* Usage Stats */}
                                                                <div className='component-stats'>
                                                                    <FlexLayout>
                                                                        <div className='stat-item'>
                                                                            ⭐ <span className='stat-text'>{item.usage}</span>
                                                                        </div>
                                                                        <div className='stat-item'>
                                                                            👥 <span className='stat-text'>{item.downloads}</span>
                                                                        </div>
                                                                    </FlexLayout>
                                                                </div>
                                                            </FlexLayout>
                                                        </FlexLayout>
                                                    </Card>
                                                </Link>
                                            </div>
                                        )
                                    })}
                                </Grid>
                                
                                <FlexLayout align={{ "lg": 'center' }}>
                                    <Link to="/pannel">
                                        <Button 
                                            size='Large' 
                                            color='Primary' 
                                            variant='Primary'
                                            icon={<ArrowRight size={16} />}
                                            alignIcon='Right'
                                        >
                                            Explore Interactive Playground
                                        </Button>
                                    </Link>
                                </FlexLayout>
                            </FlexLayout>
                        </div>
                    </FlexLayout>
                </div>
            </section>

            {/* Features Section */}
            <section className='features-section'>
                <div className='container'>
                    <FlexLayout direction='column' gap={4}>
                        <div className='section_heading'>
                            <FlexLayout direction='column' gap={2}>
                                <TextStyle as='h2' type='2XlHeading' alignment='center'>
                                    Why Choose Jiffy UI?
                                </TextStyle>
                                <TextStyle as='p' type='LgBody' alignment='center' textColor='Secondary'>
                                    Built with modern web standards and developer experience in mind
                                </TextStyle>
                            </FlexLayout>
                        </div>
                        
                        <div className='content_container'>
                            <Grid gap={{ "lg": "16px" }} columns={3}>
                                {features.map((item, index) => {
                                    return (
                                        <Card variant='elevated'  key={index}>
                                            <FlexLayout direction='column' gap={3}>
                                                <div className='feature-icon'>
                                                    <span className='icon-large'>{item.icon}</span>
                                                </div>
                                                <FlexLayout direction='column' gap={2}>
                                                    <TextStyle as='h5' type='LgHeading'>
                                                        {item.title}
                                                    </TextStyle>
                                                    <TextStyle as='p' type='MdBody' textColor='Secondary'>
                                                        {item.description}
                                                    </TextStyle>
                                                </FlexLayout>
                                            </FlexLayout>
                                        </Card>
                                    )
                                })}
                            </Grid>
                        </div>
                    </FlexLayout>
                </div>
            </section>
        </>
    )
}

export default ComponentList
