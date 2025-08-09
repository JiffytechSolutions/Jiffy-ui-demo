import React from 'react'
import Banner from '../Banner/Banner'
import ComponentList from '../ComponentList/ComponentList'
import CallToAction from '../CallToAction/CallToAction'

const Home = () => {
    return (
        <div className='home-page'>
            <Banner />
            <ComponentList />
            <CallToAction />
        </div>
    )
}

export default Home
