import React from 'react'

import ComponentList from './ComponentList'
import CallToAction from './CallToAction'
import InteractiveHero from './InteractiveHero'
import './Home.css'

const Home = () => {
    return (
        <div className='home-page'>
            <InteractiveHero />
            <ComponentList />
            <CallToAction />
        </div>
    )
}

export default Home
