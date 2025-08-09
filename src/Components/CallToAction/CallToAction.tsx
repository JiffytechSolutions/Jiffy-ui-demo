import { ArrowRight, Hithub } from 'jiffy-icons'
import { Button, HorizontalFlex, TextStyle, VerticalFlex } from 'jiffy-ui'
import React from 'react'
import { Link } from 'react-router-dom'

const CallToAction = () => {
    return (
        <section className='cta-section'>
            <div className='container'>
                <div className='cta-container'>
                    <VerticalFlex gap={32}>
                        <VerticalFlex gap={16}>
                            <TextStyle as='h2' type='2XlHeading' alignment='Center'>
                                Ready to Build Something Amazing?
                            </TextStyle>
                            <TextStyle as='p' type='LgBody' alignment='Center' textColor='Secondary'>
                                Start building beautiful React applications with Jiffy UI today. 
                                No complex setup required - just install and start creating.
                            </TextStyle>
                        </VerticalFlex>
                        
                        <HorizontalFlex align={{ "lg": "center" }} gap={16}>
                            <Link to="/pannel">
                                <Button 
                                    color='Primary' 
                                    size='Large' 
                                    icon={<ArrowRight color='#fff' size={16} />} 
                                    alignIcon='Right'
                                >
                                    Get Started Now
                                </Button>
                            </Link>
                            <Button 
                                size='Large' 
                                variant='Secondry' 
                                icon={<Hithub size={16} />} 
                                alignIcon='Left'
                            >
                                Star on GitHub
                            </Button>
                        </HorizontalFlex>
                        
                        <div className='installation-snippet'>
                            <VerticalFlex gap={12}>
                                <TextStyle as='p' type='SmBody' alignment='Center' textColor='Secondary'>
                                    Quick Installation
                                </TextStyle>
                                <div className='code-snippet'>
                                    <code>npm install jiffy-ui jiffy-icons</code>
                                </div>
                            </VerticalFlex>
                        </div>
                    </VerticalFlex>
                </div>
            </div>
        </section>
    )
}

export default CallToAction