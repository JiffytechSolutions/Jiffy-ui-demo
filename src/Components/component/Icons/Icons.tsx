
import ReactDOMServer from 'react-dom/server';
import { Button, Card, Divider, Grid as Grid1, HorizontalFlex, Modal, Table, TextField, TextLink, TextStyle, VerticalFlex } from 'jiffy-ui'
import React, { useEffect, useState } from 'react'
import { CopyBlock, dracula } from 'react-code-blocks';
import { Search, UserMinus } from 'jiffy-icons';
import { componentsArray } from './IconsArray';

const TextStyleData = [
    {
        componentName: "Icons",
        componentDescription: "Lorem ipsum",
        compImport: "import { TextArea } from 'jiffy-ui'",
        PropsDetail: [
            {
                propName: 'size',
                propValues: ['string'],
                propDescription: 'The default style of ActionIcon component',
                defaultPropValue: "20",
                propDemo: <UserMinus size={"16"} />,
                propCode: `
                import {UserMinus} from 'jiffy-icons';
                export default function App() {
                    return (
                        <UserMinus size={"16"} />
                    );
                  }`

            },
            {
                propName: 'color',
                propValues: ['string'],
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "#333",
                propDemo: <UserMinus size={"16"} color="red" />,
                propCode: `
                import {UserMinus} from 'jiffy-icons';
                export default function App() {
                    return (
                        <UserMinus size={"16"} color="red" />
                    );
                }`
            },
        ]
    },
]
const Icons = () => {
    const [isOpenModal, setOpenModal] = useState(false);
    const [selectedComponent, setSelectedComponent] = useState<any>(null); // State to track the selected component
    const [isLoading, setLoading] = useState(false);
    const filterByComponentName = (name: any) => {
        return TextStyleData.filter(item => item.componentName === name);
    }

    const result = filterByComponentName('Icons');
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleSearchChange = (e: any) => {
        setSearchQuery(e);
    };
    // Filter components based on search query
    const filteredComponents = componentsArray.filter((item: any) =>
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const handleClearFilter = () => {
        setSearchQuery('')
    }
    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 100);
        return () => clearTimeout(timer);
    }, [searchQuery]);
    const handleIconClick = (item: any) => {
        setSelectedComponent(item); // Set the clicked component's data
        setOpenModal(true); // Open the modal
    };
    // Props details
    const [isShowCode, ShowCode] = useState<any>("");
    const [language, changeLanguage] = useState("tsx");

    const tableRow = result[0]?.PropsDetail.map((item: any, index: any
    ) => (
        <Table.Row key={index} id={index}>
            <Table.Cell>
                <TextStyle as='span' type='MdBody'>
                    {item.propName}
                </TextStyle>
            </Table.Cell>
            <Table.Cell>
                <div className='description_width props_value'>
                    {item?.propValues?.map((item1: any, index1: any) => (
                        <code>
                            {item1}
                        </code>
                    ))}
                </div>
            </Table.Cell>
            <Table.Cell>
                <div className='description_width'>
                    <TextStyle as='p' type='MdBody' textColor='Secondary'>
                        {item.propDescription}
                    </TextStyle>
                </div>
            </Table.Cell>
            <Table.Cell>
                <div className='props_value'>
                    <code>{item.defaultPropValue}</code>
                </div>
            </Table.Cell>
        </Table.Row>
    )
    );
    return (
        <div className='component-layout'>
            <div className='component_left-layout'>
                <div className='component_left-layout__content'>
                    <VerticalFlex gap={20}>
                        <TextStyle as='h4' type='XlHeading' fontWeight='Bold'>
                            Icon
                        </TextStyle>
                        <TextStyle as='p' type='LgBody' textColor='Secondary'>
                            Semantic vector graphics.
                        </TextStyle>
                        <VerticalFlex gap={12}>
                            <TextStyle as='h4' fontWeight='Medium' type='LgHeading'>
                                How to use?
                            </TextStyle>
                            <TextStyle as='p' type='LgBody' textColor='Secondary'>
                                Before using icons, you need to install the <TextLink label="jiffy-icons" /> package:
                            </TextStyle>
                            <div className='custom_code_block_style'>
                                <CopyBlock
                                    text={"npm install jiffy-icons@latest"}
                                    language={language}
                                    showLineNumbers={false}
                                    copied
                                    theme={dracula}
                                    codeBlock
                                />
                            </div>
                            <TextStyle as='p' type='LgBody' textColor='Secondary'>
                                Then use. For Ex.
                            </TextStyle>

                            <div className='custom_code_block_style'>
                                <CopyBlock
                                    text={`import {UserMinus} from 'jiffy-icons';
export default function App() {
    return (
        <UserMinus size={"16"} color="#333 />
    );
}`
                                    }
                                    language={language}
                                    showLineNumbers={false}
                                    copied
                                    theme={dracula}
                                    codeBlock
                                />
                            </div>
                        </VerticalFlex>
                    </VerticalFlex>
                    <VerticalFlex>
                        <div style={{ "height": "50px" }}></div>
                        <Divider thickness={'Thinner'} type='Dashed' />
                        <div style={{ "height": "50px" }}></div>
                    </VerticalFlex>
                    <VerticalFlex gap={20}>
                        <TextStyle as='h6' fontWeight='Medium' type='LgHeading'>
                            Search your icons
                        </TextStyle>
                        <TextField
                            prefix={<Search size={"16"} />}
                            placeholder='Search Icons here..'
                            onChange={handleSearchChange}
                            value={searchQuery}
                            isClearable
                            onClear={handleClearFilter}
                        />
                        {filteredComponents.length > 0 ? (
                            <>
                                {isLoading ? ('Loading.....') : (
                                    <Grid1 columns={4} gap="12px">
                                        {
                                            filteredComponents.map((item: any, index: any) => {
                                                return (

                                                    <div className='icon_wrapper' key={index} onClick={() => handleIconClick(item)}>
                                                        <VerticalFlex gap={12} align='center'>
                                                            {React.createElement(item.compName, { key: index })}
                                                            <TextStyle as='p' type='MdBody'>
                                                                {item.description}
                                                            </TextStyle>
                                                        </VerticalFlex>
                                                    </div>

                                                )
                                            })
                                        }
                                    </Grid1>
                                )}
                            </>
                        ) : (
                            <>No data found</>
                        )}
                    </VerticalFlex>
                    <VerticalFlex>
                        <div style={{ "height": "50px" }}></div>
                        <Divider thickness={'Thinner'} type='Dashed' />
                        <div style={{ "height": "50px" }}></div>
                    </VerticalFlex>
                    {result[0]?.PropsDetail?.map((item: any, index: any) => {
                        return (
                            <>
                                <VerticalFlex gap={12}>
                                    <TextStyle as={'h4'} type='LgHeading' fontWeight='Medium'>{item.propName}:</TextStyle>
                                    <div className='props_value'>
                                        {(item?.propValues).map((item1: any, index: any) => {
                                            return <><code>{item1}</code>{index < (item?.propValues).length - 1 && '   '}</>
                                        })}
                                    </div>

                                    <TextStyle as={'p'} textColor='Secondary'>
                                        {item.propDescription}
                                    </TextStyle>
                                    <div className='demo_card'>
                                        <Card headerTitle="" type={'Borderd'}>
                                            {item.propDemo}
                                            <HorizontalFlex align={{ "lg": "end" }}>
                                                {isShowCode === index ?
                                                    <Button
                                                        onClick={() => {
                                                            ShowCode("")
                                                        }}
                                                        variant='Secondry'
                                                        icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style={{ 'width': "16px", "height": "16px" }}><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"></path></svg>}
                                                    >Hide code</Button>
                                                    :
                                                    <Button
                                                        onClick={() => {
                                                            ShowCode(index)
                                                        }}
                                                        variant='Secondry'
                                                        icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style={{ 'width': "16px", "height": "16px" }}><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"></path></svg>}
                                                    >Show code</Button>
                                                }
                                            </HorizontalFlex>
                                        </Card>
                                    </div>
                                    {isShowCode === index && (
                                        <div className='custom_code_block_style'>
                                            <CopyBlock
                                                text={item.propCode}
                                                language={language}
                                                showLineNumbers={false}
                                                copied
                                                theme={dracula}
                                                codeBlock
                                            />
                                        </div>
                                    )}
                                </VerticalFlex>
                                <VerticalFlex>
                                    <div style={{ "height": "50px" }}></div>
                                    <Divider thickness={'Thinner'} type='Dashed' />
                                    <div style={{ "height": "50px" }}></div>
                                </VerticalFlex>
                            </>
                        )

                    })}
                    <VerticalFlex gap={20}>
                        <TextStyle as='h4' type='XlHeading' fontWeight='Bold'>
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
                                {tableRow}
                            </Table>
                        </div>
                    </VerticalFlex>

                </div>
            </div>
            <Modal isOpen={isOpenModal} onDismiss={() => { setOpenModal(!isOpenModal) }}>
                {selectedComponent && (
                    <div className='modal-content'>
                        <CopyBlock
                            text={`
                            <VerticalFlex gap={12} align='center'>
                                <${ReactDOMServer.renderToString(selectedComponent.compName)} size="20" color="#333" />
                                
                                </VerticalFlex>
                            `}
                            language={"tsx"}
                            showLineNumbers={false}
                            copied
                            theme={dracula}
                            codeBlock
                        />
                        <VerticalFlex gap={12} align='center'>
                            <div style={{ "width": "40px" }} className='icon_size'>
                                {React.createElement(selectedComponent.compName)}
                            </div>
                            <TextStyle as='p' type='LgBody'>
                                {selectedComponent.description}
                            </TextStyle>

                        </VerticalFlex>
                    </div>
                )}

            </Modal>
        </div>
    )
}

export default Icons
