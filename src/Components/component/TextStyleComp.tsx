import {TextStyle, Card, Divider, Table, FlexLayout, FlexLayoutItem, VerticalStack, Checkbox, InlineStack } from 'jiffy-ui'
import React, { useEffect, useMemo, useState } from 'react'
import { CopyBlock, dracula } from 'react-code-blocks';
import {  Copy, Bookmark } from 'jiffy-icons';
import { TextStyleData } from '../Data/ComponenetData';

import PagelayoutSkeleton from './PagelayoutSkeleton';

const TextStyleComp = ({ component }: any) => {
  const language = "tsx";
  const [isShowCode, ShowCode] = useState<any>("");

  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('introduction');
  const [copiedCode, setCopiedCode] = useState('');

  const filterByComponentName = (name: any) => {
    return TextStyleData.filter(item => item.componentName === name);
  }

  const result = filterByComponentName(component);
  
  // Create section list for table of contents
 const sections = useMemo(() => {
  return [
    'introduction',
    ...(
      result[0]?.PropsDetail
        ?.filter((item: any) => item.propDemo)
        .map((item: any, index: number) => `prop-${index}`) || []
    ),
    'api-reference'
  ];
}, [result]);
  const copyToClipboard = (code: string, codeId: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(codeId);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [component]);

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 200;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const tableRow = result[0]?.PropsDetail.map((item: any, index: any) => (
    <Table.Row key={index} id={index}>
      <Table.Cell>
        <TextStyle as='span' size='md' fontWeight='medium'>
          {item.propName}
        </TextStyle>
      </Table.Cell>
      <Table.Cell>
        <div className='description_width props_value'>
          {item?.propValues?.map((item1: any, index1: any) => (
            <code key={index1}>
              {item1}
            </code>
          ))}
        </div>
      </Table.Cell>
      <Table.Cell>
        <div className='description_width'>
          <TextStyle as='p' size='md' tone='subdued'>
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
  ));

  const CodeBlock = ({ code, language = 'tsx', id }: { code: string; language?: string; id: string }) => (
    <div className='code-block-container' style={{ position: 'relative', marginTop: '16px' }}>
      <div className='code-block-header' style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '8px 16px', 
        backgroundColor: '#1e293b', 
        borderRadius: '8px 8px 0 0' 
      }}>
        <span className='code-language' style={{ color: '#94a3b8', fontSize: '12px' }}>{language}</span>
        <button 
          className='copy-code-btn'
          onClick={() => copyToClipboard(code, id)}
          style={{
            background: 'transparent',
            border: 'none',
            color: copiedCode === id ? '#10b981' : '#94a3b8',
            cursor: 'pointer',
            padding: '4px',
            borderRadius: '4px'
          }}
        >
          {copiedCode === id ? '✓' : <Copy size={14} />}
        </button>
      </div>
      <div style={{ borderRadius: '0 0 8px 8px', overflow: 'hidden' }}>
        <CopyBlock
          text={code}
          language={language}
          showLineNumbers={false}
          copied={false}
          theme={dracula}
          codeBlock
        />
      </div>
    </div>
  );

  return (
    !loading ? (
      <>
        {/* Main Content */}
        <main className='docs-main' style={{ flex: 1, padding: '24px', maxWidth: 'calc(100% - 300px)' }}>
          <div className='docs-content'>
            <VerticalStack  gap={3} align={"stretch"}>
              {/* Introduction Section */}
              <section id="introduction" className='docs-section'>
                <VerticalStack gap={4} align={"stretch"}>
                  {result.map((item, index) => (
                    <div key={index} className='docs-header'>
                      <TextStyle as='h1' size='2xl' fontWeight='bold'>
                        {item.componentName}
                      </TextStyle>
                      <TextStyle as='p' size='md' tone='subdued'>
                        {item.componentDescription}
                      </TextStyle>
                      
                      <Card variant='outlined' style={{ marginTop: '16px' }}>
                        <FlexLayout direction='column' gap={3}>
                          <TextStyle as='h3' size='lg' fontWeight='semibold'>
                            Installation
                          </TextStyle>
                          <CodeBlock 
                            code={item.compImport}
                            language={language}
                            id="component-import"
                          />
                        </FlexLayout>
                      </Card>
                    </div>
                  ))}
                </VerticalStack>
              </section>
              <div style={{marginTop: "20px", marginBottom: "20px"}}>
                <Divider thickness={'Thinner'} />
              </div>
              {/* Property Sections */}
              <VerticalStack gap={4} align={'stretch'}>
                {result[0]?.PropsDetail.map((item: any, index: any) => {
                  if (!item.propDemo) return null;
                  
                  return (
                    <VerticalStack gap={4} align={'stretch'}>
                    <section key={index} id={`prop-${index}`} className='docs-section'>
                      <VerticalStack gap={4} align={"stretch"}>
                        <VerticalStack gap={1} align={"stretch"}>
                          <VerticalStack gap={1}>
                            <TextStyle as='h2' size='lg' fontWeight='bold'>
                              {item.propName}
                            </TextStyle>
                            <TextStyle as='p' size='md' tone='subdued'>
                              {item.propDescription}
                            </TextStyle>
                          </VerticalStack>

                          <div className='props_value' style={{ marginBottom: '16px' }}>
                            {(item?.propValues || []).map((item1: any, propIndex: any) => (
                              <code key={propIndex}>
                                {item1}
                              </code>
                            ))}
                          </div>
                        </VerticalStack>

                        
                            
                              
                        <InlineStack gap={3} align={'center'} fullWidth justifyContent={'end'}>
                          <TextStyle as='span' size='sm' variant='heading' fontWeight='medium' style={{ marginRight: '12px' }}>
                            Toggle between live preview and code view
                          </TextStyle>
                          <Checkbox variant="Switch" checked={isShowCode === index} 
                            onChange={(checked:any) => ShowCode(checked ? index : "")}
                          />
                        </InlineStack>
                          
                        
                        
                        {isShowCode === index ? (
                          <CodeBlock
                            code={item.propCode}
                            language={language}
                            id={`prop-code-${index}`}
                          />
                        ): (
                          <div className='component-preview' style={{ padding: '24px', borderBottom: '1px solid #e2e8f0' }}>
                            {item.propDemo}
                          </div>
                        )}
                      </VerticalStack>
                    </section>
                    <Divider thickness='Thinner' />
                    </VerticalStack>
                  );
                })}
              </VerticalStack>
              {/* API Reference Section */}
              <div style={{marginTop: "20px", marginBottom: "20px"}}>
                <Divider thickness={'Thinner'} />
              </div>
              <section id="api-reference" className='docs-section'>
                <VerticalStack  gap={4}>
                  <VerticalStack gap={2}>
                    <TextStyle as='h2' size='lg' fontWeight='bold'>
                      API Reference
                    </TextStyle>
                    <TextStyle as='p' size='md' tone='subdued'>
                      Complete list of props and their configurations for the {result[0]?.componentName} component.
                    </TextStyle>
                  </VerticalStack>
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
                </VerticalStack>
              </section>
            </VerticalStack>
          </div>
        </main>

        {/* Table of Contents */}
        <aside className='docs-toc'>
          <div className='toc-content'>
            <TextStyle as='h4' size='md' fontWeight='semibold' style={{ marginBottom: '12px' }}>
              On this page
            </TextStyle>
            <FlexLayout direction='column' gap={2}>
              {sections.map((section) => {
                const sectionTitle = section === 'introduction' ? 'Introduction' :
                                   section === 'api-reference' ? 'API Reference' :
                                   section.startsWith('prop-') ? result[0]?.PropsDetail[parseInt(section.split('-')[1])]?.propName : section;
                
                return (
                  <FlexLayoutItem>
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`toc-link ${activeSection === section ? 'active' : ''}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 12px',
                      border: 'none',
                      borderRadius: '6px',
                      backgroundColor: activeSection === section ? '#f0f7ff' : 'transparent',
                      color: activeSection === section ? '#305EFF' : '#64748b',
                      cursor: 'pointer',
                      textAlign: 'left',
                      width: '100%',
                      fontSize: '14px'
                    }}
                  >
                    
                    <div className='toc-link-content' style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span className='toc-bullet' style={{
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        backgroundColor: activeSection === section ? '#305EFF' : '#cbd5e1'
                      }}></span>
                      <TextStyle as='span' size='sm'>
                        {sectionTitle}
                      </TextStyle>
                    </div>
                    {activeSection === section && (
                      <Bookmark size={12} />
                    )}
                  </button>
                  </FlexLayoutItem>
                );
              })}
            </FlexLayout>
          </div>
        </aside>
      </>
    ) : (
      <PagelayoutSkeleton />
    )
  )
}

export default TextStyleComp
