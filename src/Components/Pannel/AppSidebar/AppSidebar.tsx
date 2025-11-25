
import { SideBar, TextStyle } from 'jiffy-ui'
import React, { useState } from 'react'
import { Search } from 'jiffy-icons'
import { useNavigate } from 'react-router-dom'
import { AppMenu1, AppMenu2, InputMenu } from '../Menu'

const AppSidebar = () => {
    const navigate = useNavigate()
    const [searchQuery, setSearchQuery] = useState('')
    const [isSearchFocused, setIsSearchFocused] = useState(false)

    // Combine all menu items for search filtering
    
    // Filter menu items based on search query
    const filteredAppMenu1 = AppMenu1.filter(item => 
        searchQuery === '' || 
        item.label.toLowerCase().includes(searchQuery.toLowerCase())
    )
    
    const filteredInputMenu = InputMenu.filter(item => 
        searchQuery === '' || 
        item.label.toLowerCase().includes(searchQuery.toLowerCase())
    )
    
    const filteredAppMenu2 = AppMenu2.filter(item => 
        searchQuery === '' || 
        item.label.toLowerCase().includes(searchQuery.toLowerCase())
    )
    return (
        <div>
            {/* Header */}
            {/* <div style={{ padding: '20px 16px', borderBottom: '1px solid #e2e8f0' }}>
                <TextStyle as='h2' size='lg' fontWeight='bold' style={{ marginBottom: '8px' }}>
                    Components
                </TextStyle>
                <TextStyle as='p' size='sm' tone='subdued'>
                    Browse and explore UI components
                </TextStyle>
            </div> */}
            
            {/* Search Section */}
            <div className='comp-search-wrapper'>
                <div className={`docs-search ${isSearchFocused ? 'search-focused' : ''}`} style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    padding: '10px 12px',
                    transition: 'all 0.2s ease',
                    ...(isSearchFocused && {
                        borderColor: '#305EFF',
                        backgroundColor: '#ffffff',
                        boxShadow: '0 0 0 3px rgba(48, 94, 255, 0.1)'
                    })
                }}>
                    <div style={{ color: '#64748b', marginRight: '8px' }}>
                        <Search size={16} />
                    </div>
                    <input
                        type="text"
                        placeholder="Search components..."
                        value={searchQuery}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                        onFocus={() => setIsSearchFocused(true)}
                        onBlur={() => setIsSearchFocused(false)}
                        style={{
                            border: 'none',
                            outline: 'none',
                            backgroundColor: 'transparent',
                            flex: 1,
                            fontSize: '14px',
                            color: '#1e293b'
                        }}
                    />
                </div>
                {searchQuery && (
                    <div style={{ marginTop: '8px' }}>
                        <TextStyle as='span' type='SmBody' textColor='Secondary'>
                            {filteredAppMenu1.length + filteredInputMenu.length + filteredAppMenu2.length} components found
                        </TextStyle>
                    </div>
                )}
            </div>
            
            {/* Sidebar */}
            <div>
                <SideBar
                    onChange={(e) => { navigate(e) }}
                >
                <SideBar.Item
                    expandedItem={true}
                    title="Actions"
                    menu={filteredAppMenu1}
                />
                <SideBar.Item
                    expandedItem={true}
                    title="Input"
                    menu={filteredInputMenu}
                />
                <SideBar.Item
                    expandedItem={true}
                    title="group 2"
                    menu={filteredAppMenu2}
                />
                </SideBar>
            </div>
        </div>
    )
}

export default AppSidebar
