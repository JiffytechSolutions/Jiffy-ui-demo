import { FlexLayout, SkeletonLine } from 'jiffy-ui'
import React from 'react'

const PagelayoutSkeleton = () => {
    return (
        <div>
            <div className='component-layout'>
                <div className='component_left-layout'>
                    <div className='component_left-layout__content'>
                        <FlexLayout direction='column' gap={4}>
                            <SkeletonLine lineHeight={2} numberOfLine={1} />
                            <SkeletonLine lineHeight={1} numberOfLine={1} />
                        </FlexLayout>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PagelayoutSkeleton
