import { ArrowRight, Hithub, Copy } from 'jiffy-icons'
import { Button, HorizontalFlex, TextStyle, VerticalFlex } from 'jiffy-ui'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const CallToAction = () => {
    const [copied, setCopied] = useState(false)
    const [currentStep, setCurrentStep] = useState(0)
    const [activeTab, setActiveTab] = useState('live')

    const installationSteps = [
        { command: "npm install jiffy-ui jiffy-icons", description: "Install the packages" },
        { command: "import { Button } from 'jiffy-ui'", description: "Import components" },
        { command: "<Button color='Primary'>Hello World</Button>", description: "Start building" }
    ]

    const copyToClipboard = () => {
        navigator.clipboard.writeText("npm install jiffy-ui jiffy-icons")
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStep((prev) => (prev + 1) % installationSteps.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [installationSteps.length])

    return (
        <>
            {/* Interactive Demo Section */}
            <section className='demo-preview-section'>
                <div className='container'>
                    <VerticalFlex gap={36}>
                        <div className='section_heading'>
                            <VerticalFlex gap={16}>
                                <TextStyle as='h2' type='2XlHeading' alignment='Center'>
                                    See Jiffy UI in Action
                                </TextStyle>
                                <TextStyle as='p' type='LgBody' alignment='Center' textColor='Secondary'>
                                    Experience the power and simplicity of our components
                                </TextStyle>
                            </VerticalFlex>
                        </div>
                        
                        <div className='interactive-demo-container'>
                            <div className='demo-tabs'>
                                <button 
                                    className={`demo-tab ${activeTab === 'live' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('live')}
                                >
                                    Live Preview
                                </button>
                                <button 
                                    className={`demo-tab ${activeTab === 'code' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('code')}
                                >
                                    Code Example
                                </button>
                                <button 
                                    className={`demo-tab ${activeTab === 'props' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('props')}
                                >
                                    Props API
                                </button>
                            </div>
                            
                            <div className='demo-content'>
                                {activeTab === 'live' && (
                                    <div className='demo-preview'>
                                        <VerticalFlex gap={20}>
                                            <HorizontalFlex gap={12}>
                                                <Button 
                                                    color='Primary' 
                                                    size='Medium'
                                                    onClick={() => alert('Primary button clicked!')}
                                                >
                                                    Primary
                                                </Button>
                                                <Button 
                                                    variant='Secondry' 
                                                    size='Medium'
                                                    onClick={() => alert('Secondary button clicked!')}
                                                >
                                                    Secondary
                                                </Button>
                                                <Button 
                                                    variant='Tertiary' 
                                                    size='Medium'
                                                    onClick={() => alert('Tertiary button clicked!')}
                                                >
                                                    Tertiary
                                                </Button>
                                            </HorizontalFlex>
                                            <TextStyle as='p' type='MdBody' alignment='Center' textColor='Secondary'>
                                                ✨ Click the buttons above to see them in action!
                                            </TextStyle>
                                        </VerticalFlex>
                                    </div>
                                )}
                                
                                {activeTab === 'code' && (
                                    <div className='demo-code'>
                                        <div className='code-example'>
                                            <pre className='demo-code-block'>
                                                <code>{`import { Button } from 'jiffy-ui';

function MyComponent() {
  return (
    <div>
      <Button color="Primary" size="Medium">
        Primary
      </Button>
      <Button variant="Secondry" size="Medium">
        Secondary  
      </Button>
      <Button variant="Tertiary" size="Medium">
        Tertiary
      </Button>
    </div>
  );
}`}</code>
                                            </pre>
                                        </div>
                                        <TextStyle as='p' type='MdBody' alignment='Center' textColor='Secondary'>
                                            💻 Copy this code to use in your project
                                        </TextStyle>
                                    </div>
                                )}
                                
                                {activeTab === 'props' && (
                                    <div className='demo-props'>
                                        <div className='props-table'>
                                            <VerticalFlex gap={16}>
                                                <TextStyle as='h4' type='MdHeading' alignment='Center'>
                                                    Button Props
                                                </TextStyle>
                                                <div className='props-grid'>
                                                    <div className='prop-item'>
                                                        <TextStyle as='span' type='SmHeading'>color</TextStyle>
                                                        <TextStyle as='span' type='SmBody' textColor='Secondary'>
                                                            'Primary' | 'Secondary' | 'Tertiary'
                                                        </TextStyle>
                                                    </div>
                                                    <div className='prop-item'>
                                                        <TextStyle as='span' type='SmHeading'>size</TextStyle>
                                                        <TextStyle as='span' type='SmBody' textColor='Secondary'>
                                                            'Small' | 'Medium' | 'Large'
                                                        </TextStyle>
                                                    </div>
                                                    <div className='prop-item'>
                                                        <TextStyle as='span' type='SmHeading'>variant</TextStyle>
                                                        <TextStyle as='span' type='SmBody' textColor='Secondary'>
                                                            'Primary' | 'Secondry' | 'Tertiary'
                                                        </TextStyle>
                                                    </div>
                                                    <div className='prop-item'>
                                                        <TextStyle as='span' type='SmHeading'>onClick</TextStyle>
                                                        <TextStyle as='span' type='SmBody' textColor='Secondary'>
                                                            () =&gt; void
                                                        </TextStyle>
                                                    </div>
                                                </div>
                                            </VerticalFlex>
                                        </div>
                                        <TextStyle as='p' type='MdBody' alignment='Center' textColor='Secondary'>
                                            📚 Complete API documentation for Button component
                                        </TextStyle>
                                    </div>
                                )}
                            </div>
                        </div>
                    </VerticalFlex>
                </div>
            </section>

            {/* Enhanced CTA Section */}
            <section className='cta-section'>
                <div className='cta-particles'></div>
                <div className='container'>
                    <div className='cta-container'>
                        <VerticalFlex gap={32}>
                            <VerticalFlex gap={16}>
                                <div className='cta-icon'>
                                    ✨
                                </div>
                                <TextStyle as='h2' type='2XlHeading' alignment='Center'>
                                    Ready to Build Something Amazing?
                                </TextStyle>
                                <TextStyle as='p' type='LgBody' alignment='Center' textColor='Secondary'>
                                    Join thousands of developers building beautiful React applications with Jiffy UI. 
                                    Start your journey in just 3 simple steps.
                                </TextStyle>
                            </VerticalFlex>
                            
                            {/* Interactive Installation Steps */}
                            <div className='installation-steps'>
                                <VerticalFlex gap={20}>
                                    <TextStyle as='h3' type='LgHeading' alignment='Center'>
                                        Get Started in 3 Steps
                                    </TextStyle>
                                    <div className='steps-container'>
                                        {installationSteps.map((step, index) => (
                                            <div 
                                                key={index} 
                                                className={`installation-step ${index === currentStep ? 'active' : ''}`}
                                            >
                                                <div className='step-number'>{index + 1}</div>
                                                <div className='step-content'>
                                                    <div className='step-code'>
                                                        <code>{step.command}</code>
                                                        {index === 0 && (
                                                            <button 
                                                                className='copy-btn'
                                                                onClick={copyToClipboard}
                                                            >
                                                                {copied ? '✓' : <Copy size={14} />}
                                                            </button>
                                                        )}
                                                    </div>
                                                    <TextStyle as='p' type='SmBody' textColor='Secondary'>
                                                        {step.description}
                                                    </TextStyle>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </VerticalFlex>
                            </div>
                            
                            <HorizontalFlex align={{ "lg": "center" }} gap={16}>
                                <Link to="/pannel">
                                    <Button 
                                        color='Primary' 
                                        size='Large' 
                                        icon={<ArrowRight color='#fff' size={16} />} 
                                        alignIcon='Right'
                                    >
                                        Start Building Now
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
                        </VerticalFlex>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CallToAction