import { Button, Card, Checkbox, Divider, FlexLayout, Table, TextStyle } from 'jiffy-ui'
import React, { useState } from 'react'
import { CopyBlock, dracula } from 'react-code-blocks'

const CheckboxComp = () => {
    const [isShowCode, ShowCode] = useState<any>("");
    const [checked, setChecked] = useState<boolean | "indeterminate">(
        "indeterminate"
    );
    return (
        <div className='component-layout'>
            <div className='component_left-layout'>
                <div className='component_left-layout__content'>
                    <FlexLayout direction='column' gap={4}>
                        <TextStyle as='h4' type='XlHeading' fontWeight='bold'>
                            Checkbox
                        </TextStyle>
                        {/* Componenet description */}
                        <TextStyle as='p' type='MdBody' textColor='Secondary'>
                            Lorem ipsum
                        </TextStyle>
                        <div className='custom_code_block_style'>
                            <CopyBlock
                                text={"import { Checkbox } from 'jiffy-ui'"}
                                language={"tsx"}
                                showLineNumbers={false}
                                copied
                                theme={dracula}
                                codeBlock
                            />
                        </div>
                    </FlexLayout>
                    <FlexLayout direction='column'>
                        <div style={{ "height": "50px" }}></div>
                        <Divider thickness={'Thinner'} type='Dashed' />
                        <div style={{ "height": "50px" }}></div>
                    </FlexLayout>
                    <div>

                        <FlexLayout direction='column' gap={3}>
                            <TextStyle as={'h4'} type='LgHeading' fontWeight='medium'>
                                label:
                            </TextStyle>
                            <div className='props_value'>
                                <code>string</code>
                                <code>React.ReactNode</code>
                            </div>
                            <TextStyle as={'p'} textColor='Secondary'>
                                Prop description
                            </TextStyle>
                            <div className='demo_card'>
                                <Card variant='elevated'>
                                    <Checkbox label="Checkbox label"
                                        onChange={(newState:any) => {
                                            setChecked(newState);
                                        }}
                                    />
                                    <FlexLayout align={{ "lg": "end" }}>
                                        {isShowCode ?
                                            <Button
                                                onClick={() => {
                                                    ShowCode("")
                                                }}
                                                variant='Secondary'
                                                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style={{ 'width': "16px", "height": "16px" }}><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"></path></svg>}
                                            >Hide code</Button>
                                            :
                                            <Button
                                                onClick={() => {
                                                    ShowCode(true)
                                                }}
                                                variant='Secondary'
                                                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style={{ 'width': "16px", "height": "16px" }}><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"></path></svg>}
                                            >Show code</Button>
                                        }
                                    </FlexLayout>
                                </Card>
                            </div>
                            {isShowCode && (
                                <div className='custom_code_block_style'>
                                    <CopyBlock
                                        text={""}
                                        language={"tsx"}
                                        showLineNumbers={false}
                                        copied
                                        theme={dracula}
                                        codeBlock
                                    />
                                </div>
                            )}
                        </FlexLayout>

                        <FlexLayout direction='column'>
                            <div style={{ "height": "50px" }}></div>
                            <Divider thickness={'Thinner'} type='Dashed' />
                            <div style={{ "height": "50px" }}></div>
                        </FlexLayout>
                    </div>

                    <FlexLayout direction='column' gap={4}>
                        <TextStyle as='h4' type='XlHeading' fontWeight='bold'>
                            API Reference
                        </TextStyle>
                        <TextStyle as='p' type='MdBody' textColor='Secondary'>
                            API Reference
                        </TextStyle>
                        <div className='props_table'>
                            <Table
                                headings={[
                                    { title: "Props" },
                                    { title: "Type" },
                                    { title: "Description" },
                                    { title: "Default" },
                                ]}
                            >
                                ""
                            </Table>
                        </div>
                    </FlexLayout>

                </div>
            </div>
            {/* <div className='component_right-layout'>
        Right
      </div> */}
        </div >
    )
}

export default CheckboxComp
