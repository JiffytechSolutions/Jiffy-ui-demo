import { SkeletonLine, VerticalFlex } from 'jiffy-ui'
import React from 'react'

const PagelayoutSkeleton = () => {
    return (
        <div>
            <div className='component-layout'>
                <div className='component_left-layout'>
                    <div className='component_left-layout__content'>
                        <VerticalFlex gap={32}>
                            <SkeletonLine lineHeight={2} numberOfLine={1} />
                            <SkeletonLine lineHeight={1} numberOfLine={1} />
                        </VerticalFlex>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PagelayoutSkeleton
