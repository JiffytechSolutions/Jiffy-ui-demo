import { VerticalFlex, TextStyle, Card, HorizontalFlex, Button, Divider, Table, Tag, Badge } from 'jiffy-ui'
import React, { useEffect, useState } from 'react'
import { CopyBlock, dracula } from 'react-code-blocks';
import { TextStyleData } from '../Data/ComponenetData';
import { TypeProp, alignmentProp, asProps, childrenProp, textColorProp, textDecorationProp, textStyleProp } from '../Data/AllProps';
import PagelayoutSkeleton from './PagelayoutSkeleton';

const TextStyleComp = ({ component }: any) => {
  const [language, changeLanguage] = useState("tsx");
  const [isShowCode, ShowCode] = useState<any>("");
  const [updatedComp, setUpdatedComp] = useState(component);
  const [loading, setLoading] = useState(true);

  const filterByComponentName = (name: any) => {
    return TextStyleData.filter(item => item.componentName === name);
  }

  const result = filterByComponentName(component);
  console.log(result, 'result')

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [component]);

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
    !loading ? (

      <div className='component-layout'>
        <div className='component_left-layout'>
          <div className='component_left-layout__content'>
            {result.map((item, index) => {
              return <VerticalFlex gap={20}>
                <TextStyle as='h4' type='XlHeading' fontWeight='Bold'>
                  {item.componentName}
                </TextStyle>
                <TextStyle as='p' type='MdBody' textColor='Secondary'>
                  {item.componentDescription}
                </TextStyle>
                <div className='custom_code_block_style'>
                  <CopyBlock
                    text={item.compImport}
                    language={language}
                    showLineNumbers={false}
                    copied
                    theme={dracula}
                    codeBlock
                  />
                </div>
              </VerticalFlex>
            })}
            <VerticalFlex>
              <div style={{ "height": "50px" }}></div>
              <Divider thickness={'Thinner'} type='Dashed' />
              <div style={{ "height": "50px" }}></div>
            </VerticalFlex>
            {result[0]?.PropsDetail.map((item: any, index: any) => {
              return <> {
                item.propDemo && (<div>

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
                </div>)
              }
              </>
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
        {/* <div className='component_right-layout'>
        Right
      </div> */}
      </div>
    ) : (
      <PagelayoutSkeleton />
    )
  )
}

export default TextStyleComp
