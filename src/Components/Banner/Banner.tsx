import { Play } from 'jiffy-icons'
import { Button, HorizontalFlex, TextStyle, VerticalFlex } from 'jiffy-ui'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
    const [currentDemo, setCurrentDemo] = useState(0)
    const [isVisible, setIsVisible] = useState(false)

    const demoComponents = [
        { name: "Button", icon: "🔘", color: "#305EFF" },
        { name: "Card", icon: "🃏", color: "#10B981" },
        { name: "Input", icon: "📝", color: "#F59E0B" },
        { name: "Modal", icon: "🪟", color: "#EF4444" },
        { name: "Table", icon: "📊", color: "#8B5CF6" }
    ]

    useEffect(() => {
        setIsVisible(true)
        const interval = setInterval(() => {
            setCurrentDemo((prev) => (prev + 1) % demoComponents.length)
        }, 2000)
        return () => clearInterval(interval)
    }, [demoComponents.length])

    return (
        <section className='hero-section'>
            <div className='hero-background-animation'></div>
            <div className='container'>
                <div className='hero-container'>
                    <VerticalFlex gap={36}>
                        {/* Interactive Badge */}
                        <div className={`hero-badge ${isVisible ? 'animate-fade-in' : ''}`}>
                            <span className='badge-text'>
                                ⚡ 35+ Production Ready Components
                            </span>
                        </div>

                        {/* Main Heading with Typewriter Effect */}
                        <VerticalFlex gap={24}>
                            <div className='hero-title-container'>
                                <TextStyle as='h1' type='2XlHeading' alignment='Center'>
                                    Build Beautiful React Apps with 
                                    <span className='gradient-text'> Jiffy UI</span>
                                </TextStyle>
                                <div className='hero-demo-showcase'>
                                    {demoComponents.map((component, index) => (
                                        <div 
                                            key={component.name}
                                            className={`demo-component ${index === currentDemo ? 'active' : ''}`}
                                        >
                                            <span className='demo-icon'>{component.icon}</span>
                                            <span className='demo-name'>{component.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <TextStyle as='p' type='MdBody' alignment='Center' textColor='Secondary'>
                                A modern, minimal, and accessible React UI library built with TailwindCSS. 
                                Get started in minutes with TypeScript support and beautiful components.
                            </TextStyle>
                        </VerticalFlex>

                        {/* Interactive Action Buttons */}
                        <HorizontalFlex align={{ "lg": "center" }} gap={16}>
                            <Link to="/pannel" className='hero-btn-link'>
                                <Button 
                                    color='Primary' 
                                    size='Large' 
                                    icon={<Play color='#fff' size={16} />} 
                                    alignIcon='Right'
                                >
                                    Live Demo
                                </Button>
                            </Link>
                            <Link to="/pannel" className='hero-btn-link'>
                                <Button 
                                    size='Large' 
                                    variant='Secondry' 
                                    alignIcon='Left'
                                >
                                    View Components
                                </Button>
                            </Link>
                        </HorizontalFlex>

                        {/* Interactive Stats */}
                        <div className='hero-stats'>
                            <HorizontalFlex align={{ "lg": "center" }} gap={36}>
                                <div className='stat-item interactive-stat' onClick={() => {}}>
                                    <div className='stat-icon'>🚀</div>
                                    <TextStyle as='label' type='LgHeading' alignment='Center'>35+</TextStyle>
                                    <TextStyle as='p' type='SmBody' alignment='Center' textColor='Secondary'>Components</TextStyle>
                                </div>
                                <div className='stat-item interactive-stat' onClick={() => {}}>
                                    <div className='stat-icon'>📝</div>
                                    <TextStyle as='label' type='LgHeading' alignment='Center'>100%</TextStyle>
                                    <TextStyle as='p' type='SmBody' alignment='Center' textColor='Secondary'>TypeScript</TextStyle>
                                </div>
                                <div className='stat-item interactive-stat' onClick={() => {}}>
                                    <div className='stat-icon'>♿</div>
                                    <TextStyle as='label' type='LgHeading' alignment='Center'>A11y</TextStyle>
                                    <TextStyle as='p' type='SmBody' alignment='Center' textColor='Secondary'>Accessible</TextStyle>
                                </div>
                                <div className='stat-item interactive-stat' onClick={() => {}}>
                                    <div className='stat-icon'>⚡</div>
                                    <TextStyle as='p' type='LgHeading' alignment='Center'>SSR</TextStyle>
                                    <TextStyle as='p' type='SmBody' alignment='Center' textColor='Secondary'>Ready</TextStyle>
                                </div>
                            </HorizontalFlex>
                        </div>
                    </VerticalFlex>
                </div>
            </div>
        </section>
    )
}

export default Banner
