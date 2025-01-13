import { AppWrapper } from 'jiffy-ui'
import React from 'react'
import AppSidebar from './AppSidebar/AppSidebar'
import Routes1 from './Routes'
import Header from '../Header/Header'

const Pannel = () => {
    return (
        <AppWrapper
            sideBar={<AppSidebar />}
         
            content={Routes1()} />
    )
}

export default Pannel
