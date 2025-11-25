import React from 'react'
import AppSidebar from './AppSidebar/AppSidebar'
import Routes1 from './Routes'


const Pannel = () => {
    return (
        <div className='docs-layout component-listing_page'>
            {/* Sidebar */}
            <aside className='components-listing docs-sidebar'>
                <AppSidebar />
            </aside>
            
            {/* Main Content Area */}
            {/* <main className='component-list-main '> */}
                {Routes1()}
            {/* </main> */}
        </div>
    )
}

export default Pannel
