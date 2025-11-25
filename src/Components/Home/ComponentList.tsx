import { Button, Card, FlexLayout, FlexLayoutItem, Grid, InlineStack, TextStyle, VerticalStack } from 'jiffy-ui'
import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'jiffy-icons'
import accordion from '../../assets/Accordion.png'
import button from '../../assets/button.png'
import alert from '../../assets/Alert.png'
import lightingurl from '../../assets/lightning.svg'

import { CopyBlock, dracula } from 'react-code-blocks'

const ComponentList = () => {
    const component = [
        {
            compName: "Button",
            url: "/pannel/Button",
            image: button,
            description: "Flexible containers for displaying content with consistent styling and spacing.",
            category: "Layout",
            story: "Perfect for product listings, user profiles, and content cards",
            usage: "95%",
            downloads: "12.5k",
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
    ]



    const codeed = `
    import { PageTitle } from 'jiffy-ui';
    export default function App() {
        return (
            <PageTitle 
                title="User Dashboard" 
                subtitle="Manage your account settings and preferences" 
            />
        );
    }`
    return (
        <>
            <section className='components-section'>
                <div className='container'>
                    <FlexLayout gap={4}>
                        <div className='section_heading'>
                            <TextStyle as='h2' size='2xl' fontWeight='bold' alignment='center'>
                                Components
                            </TextStyle>
                        </div>
                    </FlexLayout>
                    <FlexLayout gap={4}>
                        <FlexLayoutItem cols={{sm: "12", md: "4", lg: "7"}}>
                            <div className='feature_item first_item'>
                                <h3> Accessibility out of the box. </h3>
                                <p>
                                    Supports assistive technology such as screen readers, keyboard navigation, and more.
                                </p>

                                <div className='feature_item_inner_item'>
                                        <div className="inner_item"><div className="f_inner_item one"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="text-primary text-xl iconify iconify--lucide" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg><span>WAI-ARIA compliant</span></div><div className="f_inner_item two"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="text-primary text-xl iconify iconify--lucide" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10 8h.01M12 12h.01M14 8h.01M16 12h.01M18 8h.01M6 8h.01M7 16h10m-9-4h.01"></path><rect width="20" height="16" x="2" y="4" rx="2"></rect></g></svg><span>Keyboard navigation</span></div><div className="f_inner_item three"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="text-primary text-xl iconify iconify--lucide"  width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 20h-1a2 2 0 0 1-2-2a2 2 0 0 1-2 2H6m7-12h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7m-8 0H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1m1-4h1a2 2 0 0 1 2 2a2 2 0 0 1 2-2h1M9 6v12"></path></svg><span>Focus management</span></div><div className="f_inner_item four"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="text-primary text-xl iconify iconify--lucide"  width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2"></path><circle cx="12" cy="12" r="1"></circle><path d="M18.944 12.33a1 1 0 0 0 0-.66a7.5 7.5 0 0 0-13.888 0a1 1 0 0 0 0 .66a7.5 7.5 0 0 0 13.888 0"></path></g></svg><span>Screen reader support</span></div></div>
                                </div>
                            </div>
                        </FlexLayoutItem>
                        <FlexLayoutItem cols={{sm: "12", md: "8", lg: "5"}}>
                            <div className='feature_item second_item'>
                                <h3> Accessibility out of the box. </h3>
                                <p>
                                    Supports assistive technology such as screen readers, keyboard navigation, and more.
                                </p>
                                <div className='feature_item_inner_item'>
                                    <img src={lightingurl} alt='' className='lighting_images'/>
                                </div>
                            </div>
                        </FlexLayoutItem>
                        <FlexLayoutItem cols={{sm: "12", md: "8", lg: "5"}}>
                        <div className='feature_item third_item'>
                                <h3> Accessibility out of the box. </h3>
                                <p>
                                    Supports assistive technology such as screen readers, keyboard navigation, and more.
                                </p>

                                <CopyBlock
                                    text={codeed}
                                    language={"jsx"}
                                    showLineNumbers={false}
                                    copied={false}
                                    theme={dracula}
                                    codeBlock
                                    />
                            </div>
                        </FlexLayoutItem>
                        <FlexLayoutItem cols={{sm: "12", md: "4", lg: "7"}}>
                        <div className='feature_item last_item'>
                                <h3> Accessibility out of the box. </h3>
                                <p>
                                    Supports assistive technology such as screen readers, keyboard navigation, and more.
                                </p>
                            </div>
                        </FlexLayoutItem>
                        
                    </FlexLayout>
                </div>
            </section>
           
            <section className='components-showcase'>
                <div className='container'>
                    <FlexLayout direction='column' gap={4}>
                        <div className='section_heading'>
                            <FlexLayout direction='column' gap={3}>
                                <TextStyle as='h2' size='2xl' fontWeight='bold' alignment='center'>
                                    Component Stories & Examples
                                </TextStyle>
                                <TextStyle as='p' size='md' alignment='center' tone='subdued'>
                                    Discover how our components work in real-world scenarios with interactive examples
                                </TextStyle>
                            </FlexLayout>
                        </div>
                        <div className='content_container'>
                            <VerticalStack  gap={5}>
                                
                                    <Grid gap={{ "lg": "16px" }} columns={3}>
                                        {component.map((item, index) => {
                                            return (
                                                <div key={index}
                                                    className='interactive-component-card'
                                                   >
                                                    <Link to={item.url} className='component-card-link'>
                                                        <Card variant='outlined'>
                                                            <VerticalStack gap={3} padding={3}>
                                                                <div className='component-image-wrapper'>
                                                                    <img src={item.image} className='responsive-image' alt={item.compName} />
                                                                </div>
                                                               
                                                                <VerticalStack  gap={3}>
                                                                    <InlineStack gap={2} alignItems='center'>
                                                                        <TextStyle as='h5' size='2xl' fontWeight='semibold'>
                                                                            {item.compName}
                                                                        </TextStyle>
                                                                        <span className='component-category'>{item.category}</span>
                                                                    </InlineStack>

                                                                    <TextStyle as='p' size='md' tone='subdued'>
                                                                        {item.description}
                                                                    </TextStyle>
                                                                </VerticalStack>
                                                                
                                                            </VerticalStack>
                                                        </Card>
                                                    </Link>
                                                </div>
                                            )
                                        })}
                                    </Grid>
                               
                                    <FlexLayout justifyContent='center'>
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
                                
                            </VerticalStack>
                        </div>
                    </FlexLayout>
                </div>
            </section>
        </>
    )
}
export default ComponentList
