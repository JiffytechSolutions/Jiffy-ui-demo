import { Button, Card, Grid, HorizontalFlex, TextStyle, VerticalFlex } from 'jiffy-ui'
import React from 'react'
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
            url: "#",
            image: card,
            description: "Used for connecting or disconnecting a store to various accounts,"
        },
        {
            compName: "AutoComplete",
            url: "#",
            image: autocomplete,
            description: "Used for connecting or disconnecting a store to various accounts,"
        },
        {
            compName: "Checkbox",
            url: "#",
            image: checkBox,
            description: "Used for connecting or disconnecting a store to various accounts,"
        },
        {
            compName: "Checkbox group",
            url: "#",
            image: checkBoxgrp,
            description: "Used for connecting or disconnecting a store to various accounts,"
        },
        {
            compName: "Accordion",
            url: "#",
            image: accordion,
            description: "Used for connecting or disconnecting a store to various accounts,"
        },
        {
            compName: "Grid",
            url: "#",
            image: grid,
            description: "Used for connecting or disconnecting a store to various accounts,"
        },
        {
            compName: "Sidebar",
            url: "#",
            image: sidebar,
            description: "Used for connecting or disconnecting a store to various accounts,"
        },
        {
            compName: "Alert",
            url: "#",
            image: alert,
            description: "Used for connecting or disconnecting a store to various accounts,"
        }

    ]

    const features = [
        {
            title: "React server components",
            image: card,
            description: "All NextUI components already include the 'use client' directive, which means you can import and use them directly in your RSC."
        },
        {
            title: "Accessible components",
            image: card,
            description: "NextUI components follow the WAI-ARIA guidelines, provide keyboard support and sensible focus management."
        },
        {
            title: "Focus interactions",
            image: card,
            description: "Focus ring will appear only when user navigates with keyboard or screen reader."
        },

        {
            title: "TypeScript based",
            image: card,
            description: "Build type safe applications, NextUI has a fully-typed API to minimize the learning curve, and help you build applications."
        },
        {
            title: "No runtime styles",
            image: card,
            description: "NextUI is based on Tailwind CSS, it means that there are no runtime styles, and no unnecessary classes in your bundle."
        },

        {
            title: "Beautifully designed",
            image: card,
            description: "NextUI components are unique and are not tied to any visual trend or design rule, which makes us unique and of course your projects as well."
        },

    ]
    return (
        <>
            <section className='section-padding'>
                <div className='container'>
                    <VerticalFlex gap={36}>
                        <div className='section_heading'>
                            <VerticalFlex gap={20}>
                                <TextStyle as='h6' type='2XlHeading' alignment='Center'>35+ Production Ready Components</TextStyle>
                                <TextStyle as='p' type='LgBody' alignment='Center' textColor='Secondary'>35+ Production Ready Components</TextStyle>
                            </VerticalFlex>
                        </div>
                        <div className='content_container'>
                            <VerticalFlex gap={20}>
                                <Grid gap={{ "lg": "16px" }} columns={4}>
                                    {component.map((item, index) => {
                                        return <Card type={'Borderd'} headerTitle="">
                                            <img src={item.image} className='responsive-image' />
                                            <VerticalFlex gap={8}>
                                                <TextStyle as='h5' type='LgHeading'>
                                                    {item.compName}
                                                </TextStyle>
                                                <TextStyle as='p' type='LgBody' textColor='Secondary'>
                                                    {item.description}
                                                </TextStyle>
                                            </VerticalFlex>
                                        </Card>
                                    })}
                                </Grid>
                                <HorizontalFlex align={{ "lg": 'center' }}>
                                    <Button size='Large' color='Primary' variant='Primary'>Explore more components</Button>
                                </HorizontalFlex>
                            </VerticalFlex>
                        </div>
                    </VerticalFlex>
                </div>
            </section>
            <section className='section-padding bg-color'>
                <div className='container'>
                    <VerticalFlex gap={36}>
                        <div className='section_heading'>
                            <VerticalFlex gap={20}>
                                <TextStyle as='h6' type='2XlHeading' alignment='Center'>Last but not least.</TextStyle>
                                <TextStyle as='p' type='LgBody' alignment='Center' textColor='Secondary'>A fully-featured React UI library.</TextStyle>
                            </VerticalFlex>
                        </div>
                        <div className='content_container'>

                            <Grid gap={{ "lg": "16px" }} columns={3}>
                                {features.map((item, index) => {
                                    return <Card type={'Shadow'} headerTitle="">

                                        <VerticalFlex gap={8}>
                                            <TextStyle as='h5' type='LgHeading'>
                                                {item.title}
                                            </TextStyle>
                                            <TextStyle as='p' type='LgBody' textColor='Secondary'>
                                                {item.description}
                                            </TextStyle>
                                        </VerticalFlex>
                                    </Card>
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
