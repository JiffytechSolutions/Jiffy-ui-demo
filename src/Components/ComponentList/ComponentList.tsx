import { Button, Card, Grid, HorizontalFlex, TextStyle, VerticalFlex } from 'jiffy-ui'
import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'jiffy-icons'
import THumbImage from '../../assets/Image(1).png'
import autocomplete from '../../assets/Autocomplete.png'
import checkBox from '../../assets/CheckBox.png'
import checkBoxgrp from '../../assets/checkboxGroup.png'
import accordion from '../../assets/Accordion.png'
import grid from '../../assets/Grid.png'
import card from '../../assets/Card.png'
import sidebar from '../../assets/Sidebar.png'
import alert from '../../assets/Alert.png'

const ComponentList = () => {
    const component = [
        {
            compName: "Card",
            url: "/pannel/Card",
            image: card,
            description: "Flexible containers for displaying content with consistent styling and spacing.",
            category: "Layout"
        },
        {
            compName: "AutoComplete",
            url: "/pannel/AutoComplete",
            image: autocomplete,
            description: "Smart input field with auto-suggestion and search capabilities.",
            category: "Input"
        },
        {
            compName: "Checkbox",
            url: "/pannel/Checkbox",
            image: checkBox,
            description: "Boolean input control for single selections and toggles.",
            category: "Input"
        },
        {
            compName: "Checkbox Group",
            url: "/pannel/CheckboxGroup",
            image: checkBoxgrp,
            description: "Multiple checkbox controls grouped together for multi-selection.",
            category: "Input"
        },
        {
            compName: "Accordion",
            url: "/pannel/Accordion",
            image: accordion,
            description: "Collapsible content panels for organizing information efficiently.",
            category: "Display"
        },
        {
            compName: "Grid",
            url: "/pannel/Grid",
            image: grid,
            description: "Responsive grid system for creating flexible layouts.",
            category: "Layout"
        },
        {
            compName: "Sidebar",
            url: "/pannel/Sidebar",
            image: sidebar,
            description: "Navigation sidebar with hierarchical menu structure.",
            category: "Navigation"
        },
        {
            compName: "Alert",
            url: "/pannel/Alert",
            image: alert,
            description: "Contextual feedback messages for user notifications.",
            category: "Feedback"
        }
    ]

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
            {/* Components Showcase Section */}
            <section className='components-showcase'>
                <div className='container'>
                    <VerticalFlex gap={36}>
                        <div className='section_heading'>
                            <VerticalFlex gap={16}>
                                <TextStyle as='h2' type='2XlHeading' alignment='Center'>
                                    Explore Our Components
                                </TextStyle>
                                <TextStyle as='p' type='LgBody' alignment='Center' textColor='Secondary'>
                                    Discover beautifully crafted, production-ready components designed for modern React applications
                                </TextStyle>
                            </VerticalFlex>
                        </div>
                        
                        <div className='content_container'>
                            <VerticalFlex gap={32}>
                                <Grid gap={{ "lg": "16px" }} columns={4}>
                                    {component.map((item, index) => {
                                        return (
                                            <Link to={item.url} key={index} className='component-card-link'>
                                                <Card type={'Borderd'} headerTitle="">
                                                    <VerticalFlex gap={16}>
                                                        <div className='component-image-wrapper'>
                                                            <img src={item.image} className='responsive-image' alt={item.compName} />
                                                        </div>
                                                        <VerticalFlex gap={8}>
                                                            <HorizontalFlex align={{ "lg": "spaceBetween" }}>
                                                                <TextStyle as='h5' type='LgHeading'>
                                                                    {item.compName}
                                                                </TextStyle>
                                                                <span className='component-category'>{item.category}</span>
                                                            </HorizontalFlex>
                                                            <TextStyle as='p' type='MdBody' textColor='Secondary'>
                                                                {item.description}
                                                            </TextStyle>
                                                        </VerticalFlex>
                                                    </VerticalFlex>
                                                </Card>
                                            </Link>
                                        )
                                    })}
                                </Grid>
                                
                                <HorizontalFlex align={{ "lg": 'center' }}>
                                    <Link to="/pannel">
                                        <Button 
                                            size='Large' 
                                            color='Primary' 
                                            variant='Primary'
                                            icon={<ArrowRight size={16} />}
                                            alignIcon='Right'
                                        >
                                            View All Components
                                        </Button>
                                    </Link>
                                </HorizontalFlex>
                            </VerticalFlex>
                        </div>
                    </VerticalFlex>
                </div>
            </section>

            {/* Features Section */}
            <section className='features-section'>
                <div className='container'>
                    <VerticalFlex gap={36}>
                        <div className='section_heading'>
                            <VerticalFlex gap={16}>
                                <TextStyle as='h2' type='2XlHeading' alignment='Center'>
                                    Why Choose Jiffy UI?
                                </TextStyle>
                                <TextStyle as='p' type='LgBody' alignment='Center' textColor='Secondary'>
                                    Built with modern web standards and developer experience in mind
                                </TextStyle>
                            </VerticalFlex>
                        </div>
                        
                        <div className='content_container'>
                            <Grid gap={{ "lg": "16px" }} columns={3}>
                                {features.map((item, index) => {
                                    return (
                                        <Card type={'Shadow'} headerTitle="" key={index}>
                                            <VerticalFlex gap={16}>
                                                <div className='feature-icon'>
                                                    <span className='icon-large'>{item.icon}</span>
                                                </div>
                                                <VerticalFlex gap={8}>
                                                    <TextStyle as='h5' type='LgHeading'>
                                                        {item.title}
                                                    </TextStyle>
                                                    <TextStyle as='p' type='MdBody' textColor='Secondary'>
                                                        {item.description}
                                                    </TextStyle>
                                                </VerticalFlex>
                                            </VerticalFlex>
                                        </Card>
                                    )
                                })}
                            </Grid>
                        </div>
                    </VerticalFlex>
                </div>
            </section>
        </>
    )
}

export default ComponentList
