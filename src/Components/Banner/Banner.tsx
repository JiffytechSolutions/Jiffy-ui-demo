import { ArrowDownRight, ArrowRight } from 'jiffy-icons'
import { Button, HorizontalFlex, TextStyle, VerticalFlex } from 'jiffy-ui'
import React from 'react'

const Banner = () => {
    return (
        <section className='section-padding banner'>
            <div className='container'>
                <div className='banner_container'>
                    <VerticalFlex gap={36}>
                        <TextStyle as='h1' type='2XlHeading' alignment='Center'>
                            A Modern & Minimal React UI Library
                            built with TailwindCSS
                        </TextStyle>
                        <TextStyle as='p' type='LgBody' alignment='Center' textColor='Secondary'>
                            Designed to provide you with a simple and intuitive set of UI components that are easy to use, customize and integrate into your React application. We have carefully crafted each component to ensure that they are responsive, accessible and consistent across different devices and browsers.
                        </TextStyle>
                        <HorizontalFlex align={{ "lg": "center" }} gap={20}>
                            <Button color='Primary' size='Large' icon={<ArrowRight color='#fff' size={16} />} alignIcon='Right'>Get Started</Button>
                            <Button size='Large' variant='Tertiary' alignIcon='Right'>Get Started</Button>
                        </HorizontalFlex>
                    </VerticalFlex>
                </div>
            </div>
        </section>
    )
}

export default Banner
