import { Setting, Pocket, File, ChevronRight } from 'jiffy-icons'
import { FlexLayout, Card, FlexLayoutItem, TextStyle, VerticalStack, InlineStack } from 'jiffy-ui'
const CallToAction = () => {
    const callToAction = [
        {
            icon: <Setting size={32} />,
            title: ' Install and Setup ',
            description: ' Learn how to install and setup Reka UI in your project, and build and style a component. ',
        },
        {
            icon: <Pocket size={32} />,
            title: ' Browse components ',
            description: ' Check out all the components and utilities offered by Reka UI. ',
        },
        {
            icon: <File size={32} />,
            title: ' Explore Examples ',
            description: ' Check out some fully styled examples showing what is possible with Reka UI. ',
        }
    ]

    const downloadInfo = [
        {
            value: "1.2mil",
            label: "Monthly downloads"
        },
        {
            value: "4.5k",
            label: "GitHub stars"
        },
        {
            value: "50+",
            label: "Components"
        },
        {
            value: "180+",
            label: "Contributors"
        }
    ]

    return (
        <>
            <section className='download_info-section'>
                <div className='container'>
                    <FlexLayout>
                        {downloadInfo.map((item, index) => (
                            <FlexLayoutItem key={index} cols={{ xxl: '3', xl: "3", lg: "3", md: "6" }}>
                               <VerticalStack gap={1} alignItems='center'>
                                    <TextStyle as='h3' size='2xl' fontWeight='bold' className='download-value'>
                                        {item.value}
                                    </TextStyle>
                                    <TextStyle as='p' size='md' color='subdued' className='download-label'>
                                        {item.label}
                                    </TextStyle>    
                                </VerticalStack>
                            </FlexLayoutItem>
                        ))}
                    </FlexLayout>
                </div>
            </section>
            <section className='cta-section'>
                <div className='container'>
                    <VerticalStack gap={2}>
                    <div className='section_heading'>
                        <FlexLayout direction='column' gap={3}>
                            <TextStyle as='h2' size='2xl' fontWeight='bold' alignment='center'>
                                Ready to get started?
                            </TextStyle>
                        </FlexLayout>
                    </div>
                    <FlexLayout>
                        {callToAction.map((item, index) => (
                            <FlexLayoutItem key={index} cols={{ xxl: '4', xl: "4", lg: "4", md: "6" }}>
                                <Card onClick={() => { }} variant='filled' interactive  className='cta-card'>
                                    <div className='cta-card-icon'>
                                        {item.icon}
                                    </div>
                                    <div className='cta-card-content'>
                                        <InlineStack gap={2} alignItems='center' align={'center'}>
                                        <h3>{item.title}</h3> <ChevronRight size={20} />
                                        </InlineStack>
                                        <p>{item.description}</p>
                                    </div>
                                </Card> 
                            </FlexLayoutItem>
                        ))}
                    </FlexLayout>
                    </VerticalStack>
                </div>
            </section>
        </>
    )
}

export default CallToAction