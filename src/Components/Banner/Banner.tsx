import { ArrowRight, Hithub, Book } from 'jiffy-icons'
import { Button, HorizontalFlex, TextStyle, VerticalFlex } from 'jiffy-ui'
import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <section className='hero-section'>
            <div className='container'>
                <div className='hero-container'>
                    <VerticalFlex gap={36}>
                        {/* Badge */}
                        <div className='hero-badge'>
                            <span className='badge-text'>✨ 35+ Production Ready Components</span>
                        </div>

                        {/* Main Heading */}
                        <VerticalFlex gap={24}>
                            <TextStyle as='h1' type='2XlHeading' alignment='Center'>
                                Build Beautiful React Apps with 
                                <span className='gradient-text'> Jiffy UI</span>
                            </TextStyle>
                            <TextStyle as='p' type='MdBody' alignment='Center' textColor='Secondary'>
                                A modern, minimal, and accessible React UI library built with TailwindCSS. 
                                Get started in minutes with TypeScript support and beautiful components.
                            </TextStyle>
                        </VerticalFlex>

                        {/* Action Buttons */}
                        <HorizontalFlex align={{ "lg": "center" }} gap={16}>
                            <Link to="/pannel" className='hero-btn-link'>
                                <Button 
                                    color='Primary' 
                                    size='Large' 
                                    icon={<ArrowRight color='#fff' size={16} />} 
                                    alignIcon='Right'
                                >
                                    Explore Components
                                </Button>
                            </Link>
                            <Button 
                                size='Large' 
                                variant='Secondry' 
                                icon={<Hithub size={16} />} 
                                alignIcon='Left'
                            >
                                View on GitHub
                            </Button>
                        </HorizontalFlex>

                        {/* Quick Stats */}
                        <div className='hero-stats'>
                            <HorizontalFlex align={{ "lg": "center" }} gap={36}>
                                <div className='stat-item'>
                                    <TextStyle as='label' type='LgHeading' alignment='Center'>35+</TextStyle>
                                    <TextStyle as='p' type='SmBody' alignment='Center' textColor='Secondary'>Components</TextStyle>
                                </div>
                                <div className='stat-item'>
                                    <TextStyle as='label' type='LgHeading' alignment='Center'>100%</TextStyle>
                                    <TextStyle as='p' type='SmBody' alignment='Center' textColor='Secondary'>TypeScript</TextStyle>
                                </div>
                                <div className='stat-item'>
                                    <TextStyle as='label' type='LgHeading' alignment='Center'>A11y</TextStyle>
                                    <TextStyle as='p' type='SmBody' alignment='Center' textColor='Secondary'>Accessible</TextStyle>
                                </div>
                                <div className='stat-item'>
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
