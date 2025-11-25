import { Actionlist, Button, ButtonGroup, Card, Checkbox, FileUpload, FlexLayout, PageTitle, TextArea, TextField, TextLink, TextStyle } from "jiffy-ui";
import React, { useContext } from "react";
import { ActionList_children, ActionList_disabled, ActionList_items, ActionList_placement, ActionList_size, ActionList_trigger, ActionList_variant,  Card_header,  Card_interactive, Card_loading,  Card_size,  Card_variant,       Checkbox_checked, Checkbox_hasError, Checkbox_isDisabled, Checkbox_label, Checkbox_name, Checkbox_onChange, Checkbox_required, Checkbox_value, FileUpload_accept, FileUpload_helpIcon, FileUpload_helpText, FileUpload_isDisabled, FileUpload_isDragable, FileUpload_isFileUploaded, FileUpload_isMultiple, FileUpload_maxCount, FileUpload_maxSize, FileUpload_onChange, FileUpload_onError, FileUpload_onRemove, PageTitle_backButtonLabel, PageTitle_badge, PageTitle_className, PageTitle_primaryAction, PageTitle_secondaryActions, PageTitle_showBackButton, PageTitle_subtitle, PageTitle_testId, PageTitle_title, TextArea_error, TextArea_helpText, TextArea_label, TextArea_onChange, TextArea_placeholder, TextArea_readOnly, TextArea_required, TextArea_resize, TextArea_rows, TextArea_value, TextField_autoFocus, TextField_helpIcon, TextField_helpText, TextField_isClearable, TextField_isDisabled, TextField_isRequired, TextField_label, TextField_max, TextField_maxlength, TextField_min, TextField_onBlur, TextField_onChange, TextField_onClear, TextField_onFocus, TextField_onKeyUp, TextField_placeholder, TextField_prefix, TextField_size, TextField_step, TextField_suffix, TextField_type, TextField_value, TextField_variant, TextLink_customClass_prop, TextLink_iconAlign_prop, TextLink_icon_prop, TextLink_isDisabled_prop, TextLink_label_prop, TextLink_linkType_prop, TextLink_onClick_prop, TextLink_target_prop, TextLink_url_prop, TypeProp, alignmentProp, asProps,  btnColorProps, btnGrpChildrenProp, btnGrpsegmentedProp,  btnIsDisabledProp,  btnSizeProps,  btnVariantProps, btnalignIconProp, btniconProp, btnisFullWidthProp, btnisLoadingProp, btnonClickProp, btnchildrenProp, childrenProp, fontweightProp, textColorProp, textDecorationProp, textStyleProp } from "./AllProps";
import { AlertCircle, ArrowLeft, Download, Edit, ExternalLink, Heart, Save, Setting, Share, Star, Trash, Upload, User } from "jiffy-icons";
import { MyContext } from "../../context/Context";

export function CheckboxComp(props?: any) {
    const { id } = props;
    const { flag, setFlag } = useContext<any>(MyContext);
    const handleCheck = () => {
        const new1 = new Set(flag);
        if (new1.has(id)) {
            new1.delete(id)
        }
        else {
            new1.add(id)
        }
        setFlag(new1)
    }
    return (
        <Checkbox
            key={props.index}
            label={props.label}
            onChange={handleCheck}
            checked={flag.has(id)}
            required={props.required}
        />
    )
}

export const TextStyleData = [
    {
        componentName: "TextStyle",
        componentDescription: "Lorem ipsum",
        compImport: "import {TextStyle } from 'jiffy-ui'",
        PropsDetail: [
            {
                propName: 'as',
                propValues: asProps,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "h4",
                propDemo:
                    <FlexLayout direction="column" gap={4}>
                        <TextStyle as={'span'}>Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'}>Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'legend'}>Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'label'}>Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'dd'}>Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'dt'}>Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'h1'}>Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'}>....</TextStyle>
                        <TextStyle as={'h6'}>Lorem ipsum dolor sit amet</TextStyle>
                    </FlexLayout>
                ,
                propCode: `
                import {TextStyle } from 'jiffy-ui';
                export default function App() {
                    return (
                      <TextStyle as={'span'}>Lorem ipsum dolor sit amet</TextStyle>
                      <TextStyle as={'p'}>Lorem ipsum dolor sit amet</TextStyle>
                      <TextStyle as={'legend'}>Lorem ipsum dolor sit amet</TextStyle>
                      <TextStyle as={'label'}>Lorem ipsum dolor sit amet</TextStyle>
                      <TextStyle as={'dd'}>Lorem ipsum dolor sit amet</TextStyle>
                      <TextStyle as={'dt'}>Lorem ipsum dolor sit amet</TextStyle>
                      <TextStyle as={'h1'}>Lorem ipsum dolor sit amet</TextStyle>
                      <TextStyle as={'p'}>....</TextStyle>
                      <TextStyle as={'h6'}>Lorem ipsum dolor sit amet</TextStyle>
                    );
                  }`

            },
            {
                propName: 'Type',
                propValues: TypeProp,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "LgHeading",
                propDemo:
                    <FlexLayout direction="column" gap={4}>
                        <TextStyle as={'h2'} type='2XlHeading'>Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'h2'} type='XlHeading'>Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'h2'} type='LgHeading'>Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'h2'} type='MdHeading'>Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'h2'} type='SmHeading'>Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'h2'} type='XsHeading'>Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'span'} type='LgBody'>Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='MdBody'>Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'legend'} type='SmBody'>Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'label'} type='XsBody'>Lorem ipsum dolor sit amet</TextStyle>
                    </FlexLayout>
                ,
                propCode: `
                import {TextStyle } from 'jiffy-ui';
                export default function App() {
                    return (
                        <TextStyle as={'h2'} type='2XlHeading'>Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'h2'} type='XlHeading'>Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'h2'} type='LgHeading'>Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'h2'} type='MdHeading'>Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'h2'} type='SmHeading'>Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'h2'} type='XsHeading'>Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'span'} type='LgBody'>Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='MdBody'>Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'legend'} type='SmBody'>Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'label'} type='XsBody'>Lorem ipsum dolor sit amet</TextStyle>
                    );
                }`
            },
            {
                propName: 'alignment',
                propValues: alignmentProp,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "Start",
                propDemo:
                    <FlexLayout direction="column" gap={4}>

                        <TextStyle as={'p'} type='LgBody' alignment="start">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' alignment="center">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' alignment="end">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' alignment="justify">Lorem ipsum dolor sit amet</TextStyle>
                    </FlexLayout>
                ,
                propCode: `
                import {TextStyle } from 'jiffy-ui';
                export default function App() {
                    return (
                        <TextStyle as={'p'} type='LgBody' alignment="start">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' alignment="center">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' alignment="end">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' alignment="justify">Lorem ipsum dolor sit amet</TextStyle>
                    );
                }`
            },
            {
                propName: 'tone',
                propValues: textColorProp,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "Dark",
                propDemo:
                    <FlexLayout direction="column" gap={4}>
                        <TextStyle as={'p'} type='LgBody' tone="critical">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' tone="default">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' tone="emphasis">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' tone="subdued">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' tone="success">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' tone="warning">Lorem ipsum dolor sit amet</TextStyle>
                    </FlexLayout>
                ,
                propCode: `
                import {TextStyle } from 'jiffy-ui';
                export default function App() {
                    return (
                        <TextStyle as={'p'} type='LgBody' tone="critical">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' tone="default">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' tone="emphasis">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' tone="subdued">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' tone="success">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' tone="warning">Lorem ipsum dolor sit amet</TextStyle>
                    );
                }`
            },
            {
                propName: 'fontWeight',
                propValues: fontweightProp,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "Regular",
                propDemo:
                    <FlexLayout direction="column" gap={4}>
                        <TextStyle as={'p'} type='LgBody' fontWeight="light">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' fontWeight="regular">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' fontWeight="medium">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' fontWeight="bold">Lorem ipsum dolor sit amet</TextStyle>
                    </FlexLayout>
                ,
                propCode: `
                import {TextStyle } from 'jiffy-ui';
                export default function App() {
                    return (
                         <TextStyle as={'p'} type='LgBody' fontWeight="light">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' fontWeight="regular">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' fontWeight="medium">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' fontWeight="bold">Lorem ipsum dolor sit amet</TextStyle>
                    );
                }`
            },
            {
                propName: 'textStyle',
                propValues: textStyleProp,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "None",
                propDemo:
                    <FlexLayout direction="column" gap={4}>
                        <TextStyle as={'p'} type='LgBody' textStyle="Italic">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' textStyle="None">Lorem ipsum dolor sit amet</TextStyle>
                    </FlexLayout>
                ,
                propCode: `
                import {TextStyle } from 'jiffy-ui';
                export default function App() {
                    return (
                        <TextStyle as={'p'} type='LgBody' textStyle="Italic">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' textStyle="None">Lorem ipsum dolor sit amet</TextStyle>
                    );
                }`
            },
            {
                propName: 'textDecoration',
                propValues: textDecorationProp,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "None",
                propDemo:
                    <FlexLayout direction="column" gap={4}>
                        <TextStyle as={'p'} type='LgBody' textDecoration="underline">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' textDecoration="line-through">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' textDecoration="none">Lorem ipsum dolor sit amet</TextStyle>
                    </FlexLayout>
                ,
                propCode: `
                import {TextStyle } from 'jiffy-ui';
                export default function App() {
                    return (
                        <TextStyle as={'p'} type='LgBody' textDecoration="underline">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' textDecoration="line-through">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' textDecoration="none">Lorem ipsum dolor sit amet</TextStyle>
                    );
                }`
            },
            {
                propName: 'children',
                propValues: childrenProp,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "Demo",
                propDemo:
                    <FlexLayout direction="column" gap={4}>
                        <TextStyle as={'p'} type='LgBody'>Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' ><span>Lorem ipsum dolor sit amet</span></TextStyle>
                    </FlexLayout>
                ,
                propCode: `
                import {TextStyle } from 'jiffy-ui';
                export default function App() {
                    return (
                        <TextStyle as={'p'} type='LgBody'>Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' ><span>Lorem ipsum dolor sit amet</span></TextStyle>
                    );
                }`
            },
        ]
    },
    {
        componentName: "Button",
        componentDescription: "Lorem ipsum",
        compImport: "import {Button } from 'jiffy-ui'",
        PropsDetail: [
            {
                propName: 'variant',
                propValues: btnVariantProps,
                propDescription: 'The default style of ActionIcon component',
                defaultPropValue: "Primary",
                propDemo:
                    <FlexLayout gap={4}>
                        {btnVariantProps.map((item: any) => {
                            return <Button variant={item}>{item}</Button>
                        })}

                    </FlexLayout>
                ,
                propCode: `
                import {Button} from 'jiffy-ui';
                export default function App() {
                    return (
                        <Button variant="Primary">Primary</Button>
                        <Button variant="Secondary">Secondary</Button>
                        <Button variant="Tertiary">Tertiary</Button>
                        <Button variant="Link">Link</Button>
                        <Button variant="Ghost">Ghost</Button>
                        <Button variant="Danger">Danger</Button>
                    );
                  }`

            },
            {
                propName: 'size',
                propValues: btnSizeProps,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "LgHeading",
                propDemo:
                    <FlexLayout gap={4}>
                        {btnSizeProps.map((item: any, index: any) => {
                            return <Button size={item} key={index}>{item}</Button>
                        })}
                    </FlexLayout>
                ,
                propCode: `
                import {Button} from 'jiffy-ui';
                export default function App() {
                    return (
                        <Button size="XSmall">XSmall</Button>
                        <Button size="Small">Small</Button>
                        <Button size="Medium">Medium</Button>
                        <Button size="Large">Large</Button>
                        <Button size="XLarge">XLarge</Button>
                    );
                }`
            },
            {
                propName: 'color',
                propValues: btnColorProps,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "Start",
                propDemo:
                    <FlexLayout gap={4}>
                        {btnColorProps.map((item: any, index: any) => {
                            return <Button color={item} key={item}>{item}</Button>
                        })}
                    </FlexLayout>
                ,
                propCode: `
                import { Button } from 'jiffy-ui';
                export default function App() {
                    return (
                        <Button color="Primary">Primary</Button>
                        <Button color="Positive">Positive</Button>
                        <Button color="Negative">Negative</Button>
                        <Button color="Waiting">Waiting</Button>
                        <Button color="Neutral">Neutral</Button>
                    );
                }`
            },
            {
                propName: 'isDisabled',
                propValues: btnIsDisabledProp,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "false",
                propDemo: <Button isDisabled={true}>Disbaled</Button>,
                propCode: `
                import { Button } from 'jiffy-ui';
                export default function App() {
                    return (
                        <Button isDisabled={true}>Disbaled</Button>
                    );
                }`
            },
            {
                propName: 'icon',
                propValues: btniconProp,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "--",
                propDemo: <FlexLayout gap={4}><Button icon={<Setting size={16} color="#fff" />}>Icon Button</Button>
                    <Button icon={<Setting size={16} color="#fff" />} children="" />
                </FlexLayout>,
                propCode: `
                import { Button } from 'jiffy-ui';
                export default function App() {
                    return (
                        <Button icon={<Setting size={16} color="#fff" />}>Icon Button</Button>
                        <Button icon={<Setting size={16} color="#fff" />} children="" />
                    );
                }`
            },
            {
                propName: 'isLoading',
                propValues: btnisLoadingProp,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "false",
                propDemo: <Button isLoading={true}>Loading button</Button>,
                propCode: `
                import {Button } from 'jiffy-ui';
                export default function App() {
                    return (
                        <Button isLoading={true}>Loading button</Button>
                    );
                }`
            },
            {
                propName: 'isFullWidth',
                propValues: btnisFullWidthProp,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "false",
                propDemo: <FlexLayout direction="column" gap={4}>
                    <Button isFullWidth={true}>Full width button</Button>
                    <Button isFullWidth={false}>Normal button</Button>
                </FlexLayout>,
                propCode: `
                import { Button } from 'jiffy-ui';
                export default function App() {
                    return (
                        <Button isFullWidth={true}>Full width button</Button>
                        <Button isFullWidth={false}>Full width button</Button>
                    );
                }`
            },

            {
                propName: 'alignIcon',
                propValues: btnalignIconProp,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "Left",
                propDemo:
                    <FlexLayout gap={4}>
                        <Button icon={<Setting size={16} color="#fff" />} alignIcon="Left">Icon Button</Button>
                        <Button icon={<Setting size={16} color="#fff" />} alignIcon="Right">Icon Button</Button>
                    </FlexLayout>
                ,
                propCode: `
                import { Button } from 'jiffy-ui';
                export default function App() {
                    return (
                        <Button icon={<Setting size={16} color="#fff" />} alignIcon="Left">Icon Button</Button>
                        <Button icon={<Setting size={16} color="#fff" />} alignIcon="Right">Icon Button</Button>
                    );
                }`
            },
            {
                propName: 'onClick',
                propValues: btnonClickProp,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "--",
                propDemo: <Button onClick={() => { alert('Onclick event') }}>Button</Button>,
                propCode: `
                import { Button } from 'jiffy-ui';
                export default function App() {
                    return (
                        <Button onClick={() => { alert('Onclick event') }}>Button</Button>
                    );
                }`
            },
            {
                propName: 'children',
                propValues: btnchildrenProp,
                propDescription: 'The content to display inside the button.',
                defaultPropValue: "Button",
                propDemo: <Button children="Children text" />,
                propCode: `
                import { Button } from 'jiffy-ui';
                export default function App() {
                    return (
                        <Button children="Children text" />
                    );
                }`
            },
        ]
    },
    {
        componentName: "ButtonGroup",
        componentDescription: "ButtonGroup description",
        compImport: "import { ButtonGroup } from 'jiffy-ui'",
        PropsDetail: [
            {
                propName: 'segmented',
                propValues: btnGrpsegmentedProp,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "true",
                propDemo:
                    <ButtonGroup>
                        <Button variant="Primary" color="Primary">Primary</Button>
                        <Button variant="Primary" color="Primary" isDisabled>Secondry</Button>
                        <Button variant="Primary" color="Primary">Tertiary</Button>
                        <Button variant="Primary" color="Primary">Link</Button>
                    </ButtonGroup>
                ,
                propCode: `
                import { ButtonGroup,Button } from 'jiffy-ui';
                export default function App() {
                    return (
                        <ButtonGroup>
                            <Button variant="Primary" color="Primary">Primary</Button>
                            <Button variant="Primary" color="Primary" isDisabled>Secondry</Button>
                            <Button variant="Primary" color="Primary">Tertiary</Button>
                            <Button variant="Primary" color="Primary">Link</Button>
                        </ButtonGroup>
                    );
                  }`
            },
            {
                propName: 'children',
                propValues: btnGrpChildrenProp,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "--",
                propDemo: '',
                propCode: ""
            },
        ]
    },
    {
        componentName: "TextLink",
        componentDescription: "Use text links inside a paragraph or as standalone text. ",
        compImport: "import { TextLink } from 'jiffy-ui'",
        PropsDetail: [
            {
                propName: 'label',
                propValues: TextLink_label_prop,
                propDescription: 'The default style of ActionIcon component',
                defaultPropValue: "Text link",
                propDemo:
                    <FlexLayout gap={4}>
                        <TextLink label="Text Link label" onClick={() => { alert('Text Link alert') }} />
                        <TextLink label={<div>Text Link</div>} onClick={() => { alert('Text Link alert') }} />
                    </FlexLayout>
                ,
                propCode: `
                import { TextLink } from 'jiffy-ui';
                export default function App() {
                    return (
                        <TextLink label="Text Link label" onClick={() => { alert('Text Link alert') }} />
                        <TextLink label={<div>Text Link</div>} onClick={() => { alert('Text Link alert') }} />
                    );
                }`
            },
            {
                propName: 'icon',
                propValues: TextLink_icon_prop,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "--",
                propDemo:
                    <FlexLayout gap={4} >
                        <TextLink icon={<ExternalLink size={16} />} label={<div>Text Link</div>} onClick={() => { alert('Text Link alert') }} />
                    </FlexLayout>
                ,
                propCode: `
                import {Button} from 'jiffy-ui';
                export default function App() {
                    return (
                        <TextLink icon={<ExternalLink size={16} />} label={<div>Text Link</div>} onClick={() => { alert('Text Link alert') }} />
                    );
                }`
            },
            {
                propName: 'onClick',
                propValues: TextLink_onClick_prop,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "--",
                propDemo:
                    <FlexLayout gap={4}>
                        <TextLink icon={<ExternalLink size={16} />} label={<div>Text Link</div>} onClick={() => { alert('Text Link alert') }} />
                    </FlexLayout>
                ,
                propCode: `
                import { Button } from 'jiffy-ui';
                export default function App() {
                    return (
                        <TextLink icon={<ExternalLink size={16} />} label={<div>Text Link</div>} onClick={() => { alert('Text Link alert') }} />
                    );
                }`
            },
            {
                propName: 'url',
                propValues: TextLink_url_prop,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "--",
                propDemo: <TextLink icon={<ExternalLink size={16} />} label={<div>Text Link</div>} url="www.google.com" target="_blank" />,
                propCode: `
                import { TextLink } from 'jiffy-ui';
                export default function App() {
                    return (
                        <TextLink icon={<ExternalLink size={16} />} label={<div>Text Link</div>} url="www.google.com" target="_blank" />
                    );
                }`
            },
            {
                propName: 'customClass',
                propValues: TextLink_customClass_prop,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "--",
                propDemo: <FlexLayout gap={4}>
                    <TextLink icon={<ExternalLink size={16} />} label={<div>Text Link</div>} customClass="dummy_class" />
                </FlexLayout>,
                propCode: `
                import { Button } from 'jiffy-ui';
                export default function App() {
                    return (
                        <TextLink icon={<ExternalLink size={16} />} label={<div>Text Link</div>} customClass="dummy_class" />
                    );
                }`
            },
            {
                propName: 'isDisabled',
                propValues: TextLink_isDisabled_prop,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "false",
                propDemo: <FlexLayout gap={4}>
                    <TextLink icon={<ExternalLink size={16} />} label={<div>Text Link</div>} isDisabled={false} />
                    <TextLink icon={<ExternalLink size={16} />} label={<div>Text Link</div>} isDisabled={true} />
                </FlexLayout>,
                propCode: `
                import { TextLink } from 'jiffy-ui';
                export default function App() {
                    return (
                        <TextLink icon={<ExternalLink size={16} />} label={<div>Text Link</div>} isDisabled={false} />
                        <TextLink icon={<ExternalLink size={16} />} label={<div>Text Link</div>} isDisabled={true} />
                    );
                }`
            },
            {
                propName: 'target',
                propValues: TextLink_target_prop,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "_blank",
                propDemo: <FlexLayout gap={4}>
                    {TextLink_target_prop.map((item: any, index: any) => (
                        <TextLink icon={<ExternalLink size={16} />} label={item} url="www.google.com" target={item} />
                    ))}

                </FlexLayout>,
                propCode: `
                import { TextLink } from 'jiffy-ui';
                export default function App() {
                    return (
                        <TextLink icon={<ExternalLink size={16} />} label={"_blank"} url="www.google.com" target={"_blank"} />
                        <TextLink icon={<ExternalLink size={16} />} label={"_parent"} url="www.google.com" target={"_parent"} />
                        <TextLink icon={<ExternalLink size={16} />} label={"_self"} url="www.google.com" target={"_self"} />
                        <TextLink icon={<ExternalLink size={16} />} label={"_top"} url="www.google.com" target={"_top"} />
                    );
                }`
            },

            {
                propName: 'alignIcon',
                propValues: TextLink_iconAlign_prop,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "Right",
                propDemo:
                    <FlexLayout gap={4}>
                        <TextLink icon={<ExternalLink size={16} />} iconAlign="Left" label={"Text Link"} url="www.google.com" target={"_blank"} />
                        <TextLink icon={<ExternalLink size={16} />} iconAlign="Right" label={"Text Link"} url="www.google.com" target={"_blank"} />
                    </FlexLayout>
                ,
                propCode: `
                import { Button } from 'jiffy-ui';
                export default function App() {
                    return (
                        <TextLink icon={<ExternalLink size={16} />} iconAlign="Left" label={"Text Link"} url="www.google.com" target={"_blank"} />
                        <TextLink icon={<ExternalLink size={16} />} iconAlign="Right" label={"Text Link"} url="www.google.com" target={"_blank"} />
                    );
                }`
            },
            {
                propName: 'linkType',
                propValues: TextLink_linkType_prop,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "--",
                propDemo: <FlexLayout gap={4}>
                    {TextLink_linkType_prop.map((item: any, index: any) => (
                        <TextLink icon={<ExternalLink size={16} />} linkType={item} label={item} onClick={() => { alert('alert') }} />
                    ))}

                </FlexLayout>,
                propCode: `
                import { TextLink } from 'jiffy-ui';
                export default function App() {
                    return (
                        <TextLink icon={<ExternalLink size={16} />} linkType="Danger" label={""} onClick={() => { alert('alert') }} />
                        <TextLink icon={<ExternalLink size={16} />} linkType="Default" label={""} onClick={() => { alert('alert') }} />
                        <TextLink icon={<ExternalLink size={16} />} linkType="Success" label={""} onClick={() => { alert('alert') }} />
                        <TextLink icon={<ExternalLink size={16} />} linkType="Warning" label={""} onClick={() => { alert('alert') }} />
                    );
                }`
            },

        ]
    },
    {
        componentName: "TextField",
        componentDescription: "Lorem ipsum",
        compImport: "import { TextField } from 'jiffy-ui'",
        PropsDetail: [
            {
                propName: 'size',
                propValues: TextField_size,
                propDescription: 'The default style of ActionIcon component',
                defaultPropValue: "--",
                propDemo:
                    <FlexLayout direction="column" gap={4}>
                        {TextField_size.map((item: any) => {
                            return <TextField size={item} placeholder="Enter your text" />
                        })}

                    </FlexLayout>
                ,
                propCode: `
                import {TextField} from 'jiffy-ui';
                export default function App() {
                    return (
                        <TextField size="XSmall" placeholder="Enter your text" />
                        <TextField size="Small" placeholder="Enter your text" />
                        <TextField size="Medium" placeholder="Enter your text" />
                        <TextField size="Large" placeholder="Enter your text" />
                    );
                }`
            },
            {
                propName: 'type',
                propValues: TextField_type,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "--",
                propDemo:
                    <FlexLayout direction="column" gap={4}>
                        {TextField_type.map((item: any, index: any) => {
                            return <TextField size={"Medium"} placeholder={`Enter your ${item}`} type={item} />
                        })}
                    </FlexLayout>
                ,
                propCode: `
                import {TextField} from 'jiffy-ui';
                export default function App() {
                    return (
                        <TextField size={"Medium"} placeholder={'Enter your text'} type={"text"} />
                        <TextField size={"Medium"} placeholder={'Enter your number'} type={"number"} />
                        <TextField size={"Medium"} placeholder={'Enter your password'} type={"password"} />
                        <TextField size={"Medium"} placeholder={'Enter your tel'} type={"tel"} />
                        <TextField size={"Medium"} placeholder={'Enter your url'} type={"url"} />
                        <TextField size={"Medium"} placeholder={'Enter your email'} type={"email"} />
                    );
                }`
            },
            {
                propName: 'variant',
                propValues: TextField_variant,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "--",
                propDemo:
                    <FlexLayout direction="column" gap={4}>
                        {TextField_variant.map((item: any, index: any) => {
                            return <TextField size={"Medium"} placeholder={`Enter your ${item}`} variant={item} />
                        })}

                    </FlexLayout>
                ,
                propCode: `
                import { TextField } from 'jiffy-ui';
                export default function App() {
                    return (
                        <TextField size={"Medium"} placeholder={'Enter your text'} variant={"success"} />
                        <TextField size={"Medium"} placeholder={'Enter your text'} variant={"warning"} />
                        <TextField size={"Medium"} placeholder={'Enter your text'} variant={"error"} />
                        <TextField size={"Medium"} placeholder={'Enter your text'} variant={"default"} />
                    );
                }`
            },
            {
                propName: 'value',
                propValues: TextField_value,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "--",
                propDemo: <TextField size={"Medium"} placeholder={'Enter your text'} variant={"default"} value={"@techsolution"} />,
                propCode: `
                import { TextField } from 'jiffy-ui';
                export default function App() {
                    return (
                        <TextField size={"Medium"} placeholder={'Enter your text'} variant={"default"} value={"@techsolution"} />,
                    );
                }`
            },
            {
                propName: 'lable',
                propValues: TextField_label,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "--",
                propDemo: <TextField size={"Medium"} placeholder={'Enter your text'} variant={"default"} value={"@techsolution"} label="User name" />,
                propCode: `
                import { TextField } from 'jiffy-ui';
                export default function App() {
                    return (
                        <TextField size={"Medium"} placeholder={'Enter your text'} variant={"default"} value={"@techsolution"} label="User name" />
                    );
                }`
            },
            {
                propName: 'placeholder',
                propValues: TextField_placeholder,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "--",
                propDemo: '',
                propCode: ``
            },
            {
                propName: 'prefix',
                propValues: TextField_prefix,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "false",
                propDemo: <TextField size={"Medium"} placeholder={'Enter your text'} variant={"default"} value={"@techsolution"} label="User name" prefix={<User size={16} />} />,
                propCode: `
                import { TextField } from 'jiffy-ui';
                export default function App() {
                    return (
                        <TextField size={"Medium"} placeholder={'Enter your text'} variant={"default"} value={"@techsolution"} label="User name" prefix={<User size={16} />} />
                    );
                }`
            },

            {
                propName: 'suffix',
                propValues: TextField_suffix,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "Left",
                propDemo: <TextField size={"Medium"} placeholder={'Enter your text'} variant={"default"} value={"@techsolution"} label="User name" suffix={<User size={16} />} />,
                propCode: `
                import { TextField } from 'jiffy-ui';
                export default function App() {
                    return (
                        <TextField size={"Medium"} placeholder={'Enter your text'} variant={"default"} value={"@techsolution"} label="User name" suffix={<User size={16} />} />
                    );
                }`
            },
            {
                propName: 'helpText',
                propValues: TextField_helpText,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "--",
                propDemo: <TextField size={"Medium"} placeholder={'Enter your text'} variant={"default"} value={"@techsolution"} label="User name" suffix={<User size={16} />}
                    helpText="Help text"
                    helpIcon={<AlertCircle size={"15"} />}
                />,
                propCode: `
                import { TextField } from 'jiffy-ui';
                export default function App() {
                    return (
                        <TextField size={"Medium"} placeholder={'Enter your text'} variant={"default"} value={"@techsolution"} label="User name" suffix={<User size={16} />} helpText="Help text" helpIcon={<AlertCircle size={"15"} />} />
                    );
                }`
            },
            {
                propName: 'helpIcon',
                propValues: TextField_helpIcon,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "--",
                propDemo: '',
                propCode: ``
            },
            {
                propName: 'isClearable',
                propValues: TextField_isClearable,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "--",
                propDemo: '',
                propCode: ``
            },
            {
                propName: 'isRequired',
                propValues: TextField_isRequired,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "--",
                propDemo: <TextField size={"Medium"} placeholder={'Enter your text'} variant={"default"} value={"@techsolution"} label="User name" suffix={<User size={16} />} helpText="Help text" helpIcon={<AlertCircle size={"15"} />} isRequired />,
                propCode: `
                import { TextField } from 'jiffy-ui';
                export default function App() {
                    return (
                        <TextField size={"Medium"} placeholder={'Enter your text'} variant={"default"} value={"@techsolution"} label="User name" suffix={<User size={16} />} helpText="Help text" helpIcon={<AlertCircle size={"15"} />} isRequired />
                    );
                }`
            },
            {
                propName: 'min',
                propValues: TextField_min,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "--",
                propDemo: '',
                propCode: ``
            },
            {
                propName: 'max',
                propValues: TextField_max,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "--",
                propDemo: '',
                propCode: ``
            },
            {
                propName: 'step',
                propValues: TextField_step,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "--",
                propDemo: '',
                propCode: ``
            },
            {
                propName: 'maxlength',
                propValues: TextField_maxlength,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "--",
                propDemo: '',
                propCode: ``
            },
            {
                propName: 'isDisabled',
                propValues: TextField_isDisabled,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "false",
                propDemo: '',
                propCode: ``
            },
            {
                propName: 'autoFocus',
                propValues: TextField_autoFocus,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "false",
                propDemo: '',
                propCode: ``
            },
            {
                propName: 'onBlur',
                propValues: TextField_onBlur,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "--",
                propDemo: '',
                propCode: ``
            },
            {
                propName: 'onKeyUp',
                propValues: TextField_onKeyUp,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "--",
                propDemo: '',
                propCode: ``
            },
            {
                propName: 'onFocus',
                propValues: TextField_onFocus,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "--",
                propDemo: '',
                propCode: ``
            },
            {
                propName: 'onChange',
                propValues: TextField_onChange,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "--",
                propDemo: '',
                propCode: ``
            },
            {
                propName: 'onClear',
                propValues: TextField_onClear,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "--",
                propDemo: '',
                propCode: ``
            },
        ]
    },
    {
        componentName: "TextArea",
        componentDescription: "Lorem ipsum",
        compImport: "import { TextArea } from 'jiffy-ui'",
        PropsDetail: [
            {
                propName: 'value',
                propValues: TextArea_value,
                propDescription: 'The default style of ActionIcon component',
                defaultPropValue: "--",
                propDemo: <TextArea value={"Textarea content"} />,
                propCode: `
                import {TextArea} from 'jiffy-ui';
                export default function App() {
                    return (
                        <TextArea value={"Textarea content"} />
                    );
                  }`

            },
            {
                propName: 'label',
                propValues: TextArea_label,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "--",
                propDemo: <TextArea value={"Textarea content"} label="TextArea label" />,
                propCode: `
                import {TextArea} from 'jiffy-ui';
                export default function App() {
                    return (
                        <TextArea value={"Textarea content"} label="TextArea label" />
                    );
                }`
            },
            {
                propName: 'resize',
                propValues: TextArea_resize,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "--",
                propDemo:
                    <FlexLayout direction="column" gap={4} >
                        {TextArea_resize.map((item: any, index: any) => {
                            return <TextArea value={"Textarea content"} label="TextArea label" resize={item} />
                        })}

                    </FlexLayout>
                ,
                propCode: `
                import { Button } from 'jiffy-ui';
                export default function App() {
                    return (
                        <TextArea value={"Textarea content"} label="TextArea label" resize={"horizontal"} />
                        <TextArea value={"Textarea content"} label="TextArea label" resize={"vertical"} />
                        <TextArea value={"Textarea content"} label="TextArea label" resize={"both"} />
                        <TextArea value={"Textarea content"} label="TextArea label" resize={"none"} />
                    );
                }`
            },
            {
                propName: 'placeholder',
                propValues: TextArea_placeholder,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "false",
                propDemo: <TextArea placeholder="Textarea placeholder here..." label="TextArea label" helpText="Help text" />,
                propCode: `
                import { TextArea } from 'jiffy-ui';
                export default function App() {
                    return (
                        <TextArea placeholder="Textarea placeholder here..." label="TextArea label" helpText="Help text" />
                    );
                }`
            },
            {
                propName: 'helpText',
                propValues: TextArea_helpText,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "--",
                propDemo: '',
                propCode: ``
            },
            {
                propName: 'rows',
                propValues: TextArea_rows,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "--",
                propDemo: <TextArea rows={5} placeholder="Textarea placeholder here..." label="TextArea label" helpText="Help text" />,
                propCode: `
                import {Button } from 'jiffy-ui';
                export default function App() {
                    return (
                        <TextArea rows={5} placeholder="Textarea placeholder here..." label="TextArea label" helpText="Help text" />
                    );
                }`
            },
            {
                propName: 'readOnly',
                propValues: TextArea_readOnly,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "false",
                propDemo: '',
                propCode: ``
            },

            {
                propName: 'error',
                propValues: TextArea_error,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "--",
                propDemo: '',
                propCode: ``
            },
            {
                propName: 'required',
                propValues: TextArea_required,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "--",
                propDemo: <TextArea rows={5} placeholder="Textarea placeholder here..." label="TextArea label" helpText="Help text" required />,
                propCode: `
                import { TextArea } from 'jiffy-ui';
                export default function App() {
                    return (
                        <TextArea rows={5} placeholder="Textarea placeholder here..." label="TextArea label" helpText="Help text" required />
                    );
                }`
            },
            {
                propName: 'onChange',
                propValues: TextArea_onChange,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "Demo",
                propDemo: '',
                propCode: ``
            },
        ]
    },

    {
        componentName: "Checkbox",
        componentDescription: "Lorem ipsum",
        compImport: "import { Checkbox } from 'jiffy-ui'",
        PropsDetail: [
            {
                propName: 'label',
                propValues: Checkbox_label,
                propDescription: 'The default style of ActionIcon component',
                defaultPropValue: "--",
                propDemo: <CheckboxComp label="Checkbox label" id="1" />,
                propCode: `
                function CheckboxComp() {
                    const [checked, setChecked] = useState<boolean | "indeterminate">(
                        "indeterminate"
                      );
                    return (
                        <Checkbox label="Checkbox label"
                            onChange={(newState) => {
                                setFlag(newState)
                            }}
                            checked={checked}
                        />
                    )
                }`

            },
            {
                propName: 'required',
                propValues: Checkbox_required,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "--",
                propDemo: <CheckboxComp required={true} id="2" label="Checkbox label" />,
                propCode: `
                function CheckboxComp() {
                    const [checked, setChecked] = useState<boolean | "indeterminate">(
                        "indeterminate"
                      );
                    return (
                        <Checkbox label="Checkbox label"
                            required={true}
                            onChange={(newState) => {
                                setFlag(newState)
                            }}
                            checked={checked}
                        />
                    )
                }`
            },
            {
                propName: 'name',
                propValues: Checkbox_name,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "--",
                propDemo: '',
                propCode: ``
            },
            {
                propName: 'isDisabled',
                propValues: Checkbox_isDisabled,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "false",
                propDemo: <Checkbox label="Checkbox label" isDisabled />,
                propCode: `
                import { Checkbox } from 'jiffy-ui';
                export default function App() {
                    return (
                        <Checkbox label="Checkbox label" isDisabled />,
                    );
                }`
            },
            {
                propName: 'checked',
                propValues: Checkbox_checked,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "--",
                propDemo: <FlexLayout gap={4}>

                    <Checkbox label="Checkbox label" checked={true} />
                    <Checkbox label="Checkbox label" checked={"indeterminate"} />

                </FlexLayout>,
                propCode: `
                import { Checkbox } from 'jiffy-ui';
                export default function App() {
                    return (
                        <Checkbox label="Checkbox label" checked={true} />
                        <Checkbox label="Checkbox label" checked={"indeterminate"} />
                    );
                }`
            },
            {
                propName: 'onChange',
                propValues: Checkbox_onChange,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "--",
                propDemo: '',
                propCode: ``
            },
            {
                propName: 'value',
                propValues: Checkbox_value,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "--",
                propDemo: '',
                propCode: ``
            },

            {
                propName: 'hasError',
                propValues: Checkbox_hasError,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "--",
                propDemo: '',
                propCode: ``
            },

        ]
    },

    // {
    //     componentName: "CheckboxGroup",
    //     componentDescription: "Lorem ipsum",
    //     compImport: "import { CheckboxGroup } from 'jiffy-ui'",
    //     PropsDetail: [
    //         {
    //             propName: 'title',
    //             propValues: CheckboxGroup_title,
    //             propDescription: 'The default style of ActionIcon component',
    //             defaultPropValue: "--",
    //             propDemo: <CheckBoxTitle />,
    //             propCode: `
    //             import { CheckboxGroup } from 'jiffy-ui'
    //             function App() {
    //                 const options = [
    //                     {
    //                         label: "Checkbox1",
    //                         value: "Checkbox1",
    //                     },
    //                     {
    //                         label: "Checkbox2",
    //                         value: "Checkbox2",
    //                     },
    //                     {
    //                         label: "Checkbox3",
    //                         value: "Checkbox3",
    //                     },
    //                 ];
    //                 const [grpVal, setGrpVal] = useState<any[]>([]);
    //                 const handleCheckboxGroupChange = useCallback((val: any[]) => {
    //                     setGrpVal([...val]);
    //                 }, []);
    //                 return (
    //                     <CheckboxGroup
    //                         title="Checkbox group"
    //                         value={[...grpVal]}
    //                         name="name"
    //                         options={options}
    //                         onChange={handleCheckboxGroupChange}
    //                         helpText="This is help text."
    //                     />
    //                 )
    //             }`
    //         },
    //         {
    //             propName: 'name',
    //             propValues: CheckboxGroup_name,
    //             propDescription: 'The default style of ActionIcon component.',
    //             defaultPropValue: "--",
    //             propDemo: '',
    //             propCode: ``
    //         },
    //         {
    //             propName: 'value',
    //             propValues: CheckboxGroup_value,
    //             propDescription: 'The default style of ActionIcon component.',
    //             defaultPropValue: "--",
    //             propDemo: '',
    //             propCode: ``
    //         },
    //         {
    //             propName: 'onChange',
    //             propValues: CheckboxGroup_onChange,
    //             propDescription: 'The default style of ActionIcon component.',
    //             defaultPropValue: "false",
    //             propDemo: '',
    //             propCode: ``
    //         },
    //         {
    //             propName: 'options',
    //             propValues: CheckboxGroup_options,
    //             propDescription: 'The default style of ActionIcon component.',
    //             defaultPropValue: "--",
    //             propDemo: <CheckBoxTitle />,
    //             propCode: `
    //             import { CheckboxGroup } from 'jiffy-ui'
    //             function App() {
    //                 const options = [
    //                     {
    //                         label: "Checkbox1",
    //                         value: "Checkbox1",
    //                     },
    //                     {
    //                         label: "Checkbox2",
    //                         value: "Checkbox2",
    //                     },
    //                     {
    //                         label: "Checkbox3",
    //                         value: "Checkbox3",
    //                     },
    //                 ];
    //                 const [grpVal, setGrpVal] = useState<any[]>([]);
    //                 const handleCheckboxGroupChange = useCallback((val: any[]) => {
    //                     setGrpVal([...val]);
    //                 }, []);
    //                 return (
    //                     <CheckboxGroup
    //                         title="Checkbox group"
    //                         value={[...grpVal]}
    //                         name="name"
    //                         options={options}
    //                         onChange={handleCheckboxGroupChange}
    //                         helpText="This is help text."
    //                     />
    //                 )
    //             }`
    //         },
    //         {
    //             propName: 'direction',
    //             propValues: CheckboxGroup_direction,
    //             propDescription: 'The default style of ActionIcon component.',
    //             defaultPropValue: "--",
    //             propDemo: <FlexLayout direction="column" gap={4}>
    //                 <CheckboxGroupHorizontal />
    //                 <CheckboxGroupVerical />
    //             </FlexLayout>,
    //             propCode: `
    //             import { CheckboxGroup } from 'jiffy-ui'
    //             function App() {
    //                 const options = [
    //                     {
    //                         label: "Checkbox1",
    //                         value: "Checkbox1",
    //                     },
    //                     {
    //                         label: "Checkbox2",
    //                         value: "Checkbox2",
    //                     },
    //                     {
    //                         label: "Checkbox3",
    //                         value: "Checkbox3",
    //                     },
    //                 ];
    //                 const [grpVal, setGrpVal] = useState<any[]>([]);
    //                 const handleCheckboxGroupChange = useCallback((val: any[]) => {
    //                     setGrpVal([...val]);
    //                 }, []);
    //                 return (
    //                     <CheckboxGroup
    //                         direction='horizontal'
    //                         title="Checkbox group"
    //                         value={[...grpVal]}
    //                         name="name"
    //                         options={options}
    //                         onChange={handleCheckboxGroupChange}
    //                         helpText="This is help text."
    //                     />
    //                 )
    //             }
    //             `
    //         },
    //         {
    //             propName: 'helpText',
    //             propValues: CheckboxGroup_helpText,
    //             propDescription: 'The default style of ActionIcon component.',
    //             defaultPropValue: "--",
    //             propDemo: '',
    //             propCode: `
    //             import { CheckboxGroup } from 'jiffy-ui'
    //             function App() {
    //                 const options = [
    //                     {
    //                         label: "Checkbox1",
    //                         value: "Checkbox1",
    //                     },
    //                     {
    //                         label: "Checkbox2",
    //                         value: "Checkbox2",
    //                     },
    //                     {
    //                         label: "Checkbox3",
    //                         value: "Checkbox3",
    //                     },
    //                 ];
    //                 const [grpVal, setGrpVal] = useState<any[]>([]);
    //                 const handleCheckboxGroupChange = useCallback((val: any[]) => {
    //                     setGrpVal([...val]);
    //                 }, []);
    //                 return (
    //                     <CheckboxGroup
    //                         direction='horizontal'
    //                         title="Checkbox group"
    //                         value={[...grpVal]}
    //                         name="name"
    //                         options={options}
    //                         onChange={handleCheckboxGroupChange}
    //                         helpText="This is help text."
    //                         helpIcon={<Setting size={14} />}
    //                     />
    //                 )
    //             }
    //             `
    //         },

    //         {
    //             propName: 'helpIcon',
    //             propValues: CheckboxGroup_helpIcon,
    //             propDescription: 'The default style of ActionIcon component.',
    //             defaultPropValue: "--",
    //             propDemo: <CheckboxGroupHelpText />,
    //             propCode: ``
    //         },

    //     ]
    // },
    {
        componentName: "FileUpload",
        componentDescription: "Lorem ipsum",
        compImport: "import { FileUpload } from 'jiffy-ui'",
        PropsDetail: [
            {
                propName: 'accept',
                propValues: FileUpload_accept,
                propDescription: 'The default style of ActionIcon component',
                defaultPropValue: "--",
                propDemo: <FileUpload
                    helpText=".jpg,.png,.pdf"
                    onChange={() => { }}
                    isMultiple
                    accept={["png"]}
                    isFileUploaded={[false, true]}
                />,
                propCode: `
                import { FileUpload } from 'jiffy-ui'
                function App() {
                    <FileUpload
                        helpText=".jpg,.png,.pdf"
                        onChange={() => { }}
                        accept={["png"]}
                        isFileUploaded={[false, true]}
                    />
                }`
            },
            {
                propName: 'isMultiple',
                propValues: FileUpload_isMultiple,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "--",
                propDemo: <FileUpload
                    helpText=".jpg,.png,.pdf"
                    onChange={() => { }}
                    isMultiple
                    accept={["png"]}
                    isFileUploaded={[false, true]}
                />,
                propCode: `
                import { FileUpload } from 'jiffy-ui'
                function App() {
                    <FileUpload
                        helpText=".jpg,.png,.pdf"
                        onChange={() => { }}
                        isMultiple
                        accept={["png"]}
                        isFileUploaded={[false, true]}
                    />
                }`
            },
            {
                propName: 'isDragable',
                propValues: FileUpload_isDragable,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "--",
                propDemo: <FileUpload
                    helpText=".jpg,.png,.pdf"
                    onChange={() => { }}
                    isMultiple
                    isDragable
                    accept={["png"]}
                    isFileUploaded={[false, true]}
                />,
                propCode: `
                import { FileUpload } from 'jiffy-ui'
                function App() {
                    <FileUpload
                        helpText=".jpg,.png,.pdf"
                        onChange={(e, single) => { }}
                        isMultiple
                        isDragable
                        accept={["png"]}
                        isFileUploaded={[false, true]}
                    />
                }`
            },
            {
                propName: 'isDisabled',
                propValues: FileUpload_isDisabled,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "false",
                propDemo: <FileUpload
                    helpText=".jpg,.png,.pdf"
                    onChange={() => { }}
                    isDisabled={true}
                    accept={["png"]}
                    isFileUploaded={[false, true]}
                />,
                propCode: `
                import { FileUpload } from 'jiffy-ui'
                function App() {
                    <FileUpload
                        helpText=".jpg,.png,.pdf"
                        onChange={(e, single) => { }}
                        isDisabled={true}
                        accept={["png"]}
                        isFileUploaded={[false, true]}
                    />
                }`
            },
            {
                propName: 'maxCount',
                propValues: FileUpload_maxCount,
                propDescription: `Allow only ${<b>maxCount</b>} to upload`,
                defaultPropValue: "--",
                propDemo: '',
                propCode: ``
            },
            {
                propName: 'direction',
                propValues: FileUpload_maxSize,
                propDescription: 'Allow only maxSize file to upload. Like: file should be less than 2mb',
                defaultPropValue: "--",
                propDemo: '',
                propCode: ``
            },
            {
                propName: 'helpText',
                propValues: FileUpload_helpText,
                propDescription: 'Allow ',
                defaultPropValue: "--",
                propDemo: <FileUpload
                    helpText=".jpg,.png,.pdf"
                    onChange={() => { }}
                    isFileUploaded={[false, true]}
                />,
                propCode: `
                import { FileUpload } from 'jiffy-ui'
                function App() {
                    <FileUpload
                    helpText="Place your help text here"
                    onChange={(e, single) => { }}
                    isFileUploaded={[false, true]}
                />
                }
                `
            },
            {
                propName: 'helpIcon',
                propValues: FileUpload_helpIcon,
                propDescription: 'Allow ',
                defaultPropValue: "--",
                propDemo: <FileUpload
                    helpText=".jpg,.png,.pdf"
                    onChange={() => { }}
                    isFileUploaded={[false, true]}
                    helpIcon={<Upload size={16} />}
                />,
                propCode: `
                import { FileUpload } from 'jiffy-ui'
                function App() {
                    <FileUpload
                        helpText=".jpg,.png,.pdf"
                        onChange={() => { }}
                        isFileUploaded={[false, true]}
                        helpIcon={<Upload size={16} />}
                    />
                }
                `
            },

            {
                propName: 'onChange',
                propValues: FileUpload_onChange,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "--",
                propDemo: '',
                propCode: ``
            },
            {
                propName: 'onError',
                propValues: FileUpload_onError,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "--",
                propDemo: '',
                propCode: ``
            },
            {
                propName: 'onRemove',
                propValues: FileUpload_onRemove,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "--",
                propDemo: '',
                propCode: ``
            },
            {
                propName: 'isFileUploaded',
                propValues: FileUpload_isFileUploaded,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "--",
                propDemo: '',
                propCode: ``
            },

        ]
    },
    {
        componentName: "PageTitle",
        componentDescription: "A modern and flexible page title component with support for primary actions, secondary actions, badges, and back navigation.",
        compImport: "import { PageTitle } from 'jiffy-ui'",
        PropsDetail: [
            {
                propName: 'title',
                propValues: PageTitle_title,
                propDescription: 'The main page title text or React element',
                defaultPropValue: "--",
                propDemo: <PageTitle title="Dashboard" />,
                propCode: `
                import { PageTitle } from 'jiffy-ui';
                export default function App() {
                    return (
                        <PageTitle title="Dashboard" />
                    );
                }`
            },
            {
                propName: 'subtitle',
                propValues: PageTitle_subtitle,
                propDescription: 'Optional subtitle or description text below the title',
                defaultPropValue: "--",
                propDemo: <PageTitle 
                    title="User Dashboard" 
                    subtitle="Manage your account settings and preferences" 
                />,
                propCode: `
                import { PageTitle } from 'jiffy-ui';
                export default function App() {
                    return (
                        <PageTitle 
                            title="User Dashboard" 
                            subtitle="Manage your account settings and preferences" 
                        />
                    );
                }`
            },
            {
                propName: 'showBackButton',
                propValues: PageTitle_showBackButton,
                propDescription: 'Whether to display the back navigation button with chevron icon',
                defaultPropValue: "false",
                propDemo: <PageTitle 
                    title="User Details" 
                    subtitle="View and edit user information"
                    showBackButton={true}
                    onBackClick={() => alert('Back button clicked!')}
                />,
                propCode: `
                import { PageTitle } from 'jiffy-ui';
                export default function App() {
                    return (
                        <PageTitle 
                            title="User Details" 
                            subtitle="View and edit user information"
                            showBackButton={true}
                            onBackClick={() => alert('Back button clicked!')}
                        />
                    );
                }`
            },
            {
                propName: 'backButtonLabel',
                propValues: PageTitle_backButtonLabel,
                propDescription: 'Custom label text for the back button',
                defaultPropValue: "Back",
                propDemo: <PageTitle 
                    title="User Details" 
                    showBackButton={true}
                    backButtonLabel="Back to Users"
                    onBackClick={() => alert('Back to users!')}
                />,
                propCode: `
                import { PageTitle } from 'jiffy-ui';
                export default function App() {
                    return (
                        <PageTitle 
                            title="User Details" 
                            showBackButton={true}
                            backButtonLabel="Back to Users"
                            onBackClick={() => alert('Back to users!')}
                        />
                    );
                }`
            },
            {
                propName: 'badge',
                propValues: PageTitle_badge,
                propDescription: 'Badge configuration to display next to the title',
                defaultPropValue: "--",
                propDemo: <FlexLayout direction="column" gap={4}>
                    <PageTitle 
                        title="Project Alpha" 
                        subtitle="E-commerce platform development"
                        badge={{
                            text: "In Progress",
                            color: "Notice"
                        }}
                    />
                    <PageTitle 
                        title="User Account" 
                        badge={{
                            text: "Active",
                            color: "Positive"
                        }}
                    />
                </FlexLayout>,
                propCode: `
                import { PageTitle } from 'jiffy-ui';
                export default function App() {
                    return (
                        <PageTitle 
                            title="Project Alpha" 
                            subtitle="E-commerce platform development"
                            badge={{
                                text: "In Progress",
                                variant: "warning"
                            }}
                        />
                    );
                }`
            },
            {
                propName: 'primaryAction',
                propValues: PageTitle_primaryAction,
                propDescription: 'Primary action button configuration object',
                defaultPropValue: "--",
                propDemo: <PageTitle 
                    title="Settings" 
                    subtitle="Configure your application"
                    primaryAction={{
                        label: "Save Changes",
                        variant: "Primary",
                        onClick: () => alert('Save changes!'),
                        icon: <Setting size={16} />
                    }}
                />,
                propCode: `
                import { PageTitle } from 'jiffy-ui';
                import { Setting } from 'jiffy-icons';
                export default function App() {
                    return (
                        <PageTitle 
                            title="Settings" 
                            subtitle="Configure your application"
                            primaryAction={{
                                label: "Save Changes",
                                variant: "Primary",
                                onClick: () => alert('Save changes!'),
                                icon: <Setting size={16} />
                            }}
                        />
                    );
                }`
            },
            {
                propName: 'secondaryActions',
                propValues: PageTitle_secondaryActions,
                propDescription: 'Array of secondary actions displayed in ActionList dropdown',
                defaultPropValue: "[]",
                propDemo: <PageTitle 
                    title="Document Editor" 
                    subtitle="Edit and collaborate on documents"
                    primaryAction={{
                        label: "Save",
                        variant: "Primary",
                        onClick: () => alert('Document saved!')
                    }}
                    secondaryActions={[
                        {
                            id: "share",
                            label: "Share Document",
                            onClick: () => alert('Share dialog opened'),
                            leading: <Share size={16} />,
                            description: "Share with team members"
                        },
                        {
                            id: "edit",
                            label: "Edit Settings",
                            onClick: () => alert('Settings opened'),
                            leading: <Edit size={16} />
                        },
                        {
                            id: "delete",
                            label: "Delete Document",
                            onClick: () => alert('Delete confirmed'),
                            leading: <Trash size={16} />,
                            variant: "destructive"
                        }
                    ]}
                />,
                propCode: `
                import { PageTitle } from 'jiffy-ui';
                import { Share, Edit, Trash } from 'jiffy-icons';
                export default function App() {
                    return (
                        <PageTitle 
                            title="Document Editor" 
                            subtitle="Edit and collaborate on documents"
                            primaryAction={{
                                label: "Save",
                                variant: "Primary",
                                onClick: () => alert('Document saved!')
                            }}
                            secondaryActions={[
                                {
                                    id: "share",
                                    label: "Share Document",
                                    onClick: () => alert('Share dialog opened'),
                                    leading: <Share size={16} />,
                                    description: "Share with team members"
                                },
                                {
                                    id: "edit",
                                    label: "Edit Settings",
                                    onClick: () => alert('Settings opened'),
                                    leading: <Edit size={16} />
                                },
                                {
                                    id: "delete",
                                    label: "Delete Document",
                                    onClick: () => alert('Delete confirmed'),
                                    leading: <Trash size={16} />,
                                    variant: "destructive"
                                }
                            ]}
                        />
                    );
                }`
            },
            {
                propName: 'className',
                propValues: PageTitle_className,
                propDescription: 'Additional CSS classes to apply to the container',
                defaultPropValue: '""',
                propDemo: <PageTitle 
                    title="Custom Styled Page" 
                    className="custom-page-title"
                    subtitle="With custom CSS classes"
                />,
                propCode: `
                import { PageTitle } from 'jiffy-ui';
                export default function App() {
                    return (
                        <PageTitle 
                            title="Custom Styled Page" 
                            className="custom-page-title"
                            subtitle="With custom CSS classes"
                        />
                    );
                }`
            },
            {
                propName: 'testId',
                propValues: PageTitle_testId,
                propDescription: 'Test identifier for testing frameworks',
                defaultPropValue: "--",
                propDemo: <PageTitle 
                    title="Dashboard" 
                    subtitle="Main application dashboard"
                    testId="main-dashboard-title"
                />,
                propCode: `
                import { PageTitle } from 'jiffy-ui';
                export default function App() {
                    return (
                        <PageTitle 
                            title="Dashboard" 
                            subtitle="Main application dashboard"
                            testId="main-dashboard-title"
                        />
                    );
                }`
            }
        ]
    },
    {
        componentName: "Card",
        componentDescription: "A flexible card component for displaying content with optional headers, footers, and actions.",
        compImport: "import { Card } from 'jiffy-ui'",
        PropsDetail: [
            {
                propName: 'variant',
                propValues: Card_variant,
                propDescription: 'Visual variant of the card',
                defaultPropValue: "default",
                propDemo: <FlexLayout direction="column" gap={4}>
                    <FlexLayout gap={4}>
                        <Card variant="default">Default card</Card>
                        <Card variant="outlined">Outlined card</Card>
                        <Card variant="elevated">Elevated card</Card>
                    </FlexLayout>
                    <FlexLayout gap={4}>
                        <Card variant="filled">Filled card</Card>
                        <Card variant="ghost">Ghost card</Card>
                    </FlexLayout>
                </FlexLayout>,
                propCode: `
                import { Card } from 'jiffy-ui';
                export default function App() {
                    return (
                        <Card variant="default">Default card</Card>
                    );
                }`
            },
            {
                propName: 'size',
                propValues: Card_size,
                propDescription: 'Size affects padding and text sizes',
                defaultPropValue: "medium",
                propDemo: <FlexLayout direction="column" gap={4}>
                    <Card size="small" variant="outlined" header={{ title: "Small Card" }}>Small card content</Card>
                    <Card size="medium" variant="outlined" header={{ title: "Medium Card" }}>Medium card content</Card>
                    <Card size="large" variant="outlined" header={{ title: "Large Card" }}>Large card content</Card>
                </FlexLayout>,
                propCode: `
                import { Card } from 'jiffy-ui';
                export default function App() {
                    return (
                        <Card size="medium" variant="outlined" header={{ title: "Medium Card" }}>
                            Medium card content
                        </Card>
                    );
                }`
            },
            {
                propName: 'header',
                propValues: Card_header,
                propDescription: 'Card header configuration with title, subtitle, and actions',
                defaultPropValue: "--",
                propDemo: <Card 
                    variant="outlined" 
                    header={{ 
                        title: "Settings", 
                        subtitle: "Configure your preferences",
                        actions: [
                            { label: "Edit", icon: <Edit size={16} />, onClick: () => alert("Edit clicked") },
                            { label: "Save", icon: <Save size={16} />, variant: "Primary", onClick: () => alert("Save clicked") }
                        ]
                    }}
                >
                    Card with header actions.
                </Card>,
                propCode: `
                import { Card } from 'jiffy-ui';
                import { Edit, Save } from 'jiffy-icons';
                export default function App() {
                    return (
                        <Card 
                            variant="outlined" 
                            header={{ 
                                title: "Settings", 
                                subtitle: "Configure your preferences",
                                actions: [
                                    { label: "Edit", icon: <Edit size={16} />, onClick: () => alert("Edit clicked") }
                                ]
                            }}
                        >
                            Card content here
                        </Card>
                    );
                }`
            },
            {
                propName: 'interactive',
                propValues: Card_interactive,
                propDescription: 'Adds hover effects and makes card interactive',
                defaultPropValue: "false",
                propDemo: <Card 
                    interactive 
                    variant="outlined" 
                    header={{ title: "Hover Me" }}
                    onClick={() => alert("Card clicked!")}
                >
                    This card has hover effects and click handling.
                </Card>,
                propCode: `
                import { Card } from 'jiffy-ui';
                export default function App() {
                    return (
                        <Card 
                            interactive 
                            variant="outlined" 
                            header={{ title: "Hover Me" }}
                            onClick={() => alert("Card clicked!")}
                        >
                            This card has hover effects.
                        </Card>
                    );
                }`
            },
            {
                propName: 'loading',
                propValues: Card_loading,
                propDescription: 'Shows loading state with overlay and spinner',
                defaultPropValue: "false",
                propDemo: <FlexLayout gap={4}>
                    <Card variant="outlined" header={{ title: "Normal State" }}>Normal card.</Card>
                    <Card variant="outlined" loading header={{ title: "Loading State" }}>Loading card.</Card>
                </FlexLayout>,
                propCode: `
                import { Card } from 'jiffy-ui';
                export default function App() {
                    return (
                        <Card variant="outlined" loading header={{ title: "Loading State" }}>
                            This card is loading.
                        </Card>
                    );
                }`
            }
        ]
    },
    {
        componentName: "ActionList",
        componentDescription: "A flexible dropdown component for displaying actionable items with support for icons, badges, shortcuts, and grouping.",
        compImport: "import { Actionlist } from 'jiffy-ui'",
        PropsDetail: [
            {
                propName: 'children',
                propValues: ActionList_children,
                propDescription: 'The trigger element for the ActionList',
                defaultPropValue: "--",
                propDemo:
                    <FlexLayout direction="column" gap={4}>
                        <Actionlist
                            items={[
                                { id: "edit", label: "Edit", leading: <Edit size={16} /> },
                                { id: "share", label: "Share", leading: <Share size={16} /> },
                                { id: "delete", label: "Delete", leading: <Trash size={16} />, variant: "destructive" }
                            ]}
                        >
                            <Button variant="Secondary">Actions</Button>
                        </Actionlist>
                    </FlexLayout>,
                propCode: `
                import { Actionlist, Button } from 'jiffy-ui';
                import { Edit, Share, Trash } from 'jiffy-icons';
                
                export default function App() {
                    return (
                        <Actionlist
                            items={[
                                { id: "edit", label: "Edit", leading: <Edit size={16} /> },
                                { id: "share", label: "Share", leading: <Share size={16} /> },
                                { id: "delete", label: "Delete", leading: <Trash size={16} />, variant: "destructive" }
                            ]}
                        >
                            <Button variant="Secondary">Actions</Button>
                        </Actionlist>
                    );
                }`
            },
            {
                propName: 'items',
                propValues: ActionList_items,
                propDescription: 'Array of action items or groups to display',
                defaultPropValue: "[]",
                propDemo:
                    <FlexLayout direction="column" gap={4}>
                        <Actionlist
                            items={[
                                { id: "copy", label: "Copy", leading: <Setting size={16} /> },
                                { id: "download", label: "Download", leading: <Download size={16} /> },
                                { id: "upload", label: "Upload", leading: <Upload size={16} /> }
                            ]}
                        >
                            <Button variant="Secondary">File Actions</Button>
                        </Actionlist>
                    </FlexLayout>,
                propCode: `
                import { Actionlist, Button } from 'jiffy-ui';
                import { Setting, Download, Upload } from 'jiffy-icons';
                
                export default function App() {
                    return (
                        <Actionlist
                            items={[
                                { id: "copy", label: "Copy", leading: <Setting size={16} /> },
                                { id: "download", label: "Download", leading: <Download size={16} /> },
                                { id: "upload", label: "Upload", leading: <Upload size={16} /> }
                            ]}
                        >
                            <Button variant="Secondary">File Actions</Button>
                        </Actionlist>
                    );
                }`
            },
            {
                propName: 'size',
                propValues: ActionList_size,
                propDescription: 'Size variant of the ActionList',
                defaultPropValue: "Medium",
                propDemo:
                    <FlexLayout direction="column" gap={4}>
                        <Actionlist
                            size="Small"
                            items={[{ id: "small", label: "Small ActionList", leading: <User size={16} /> }]}
                        >
                            <Button size="Small" variant="Secondary">Small</Button>
                        </Actionlist>
                        <Actionlist
                            size="Medium"
                            items={[{ id: "medium", label: "Medium ActionList", leading: <User size={16} /> }]}
                        >
                            <Button size="Medium" variant="Secondary">Medium</Button>
                        </Actionlist>
                        <Actionlist
                            size="Large"
                            items={[{ id: "large", label: "Large ActionList", leading: <User size={16} /> }]}
                        >
                            <Button size="Large" variant="Secondary">Large</Button>
                        </Actionlist>
                    </FlexLayout>,
                propCode: `
                import { Actionlist, Button } from 'jiffy-ui';
                import { User } from 'jiffy-icons';
                
                export default function App() {
                    return (
                        <Actionlist
                            size="Large"
                            items={[{ id: "large", label: "Large ActionList", leading: <User size={16} /> }]}
                        >
                            <Button size="Large" variant="Secondary">Large</Button>
                        </Actionlist>
                    );
                }`
            },
            {
                propName: 'variant',
                propValues: ActionList_variant,
                propDescription: 'Visual variant of the ActionList',
                defaultPropValue: "Default",
                propDemo:
                    <FlexLayout direction="column" gap={4}>
                        <Actionlist
                            variant="Default"
                            items={[{ id: "default", label: "Default Variant", leading: <Heart size={16} /> }]}
                        >
                            <Button variant="Secondary">Default</Button>
                        </Actionlist>
                        <Actionlist
                            variant="Bordered"
                            items={[{ id: "bordered", label: "Bordered Variant", leading: <Heart size={16} /> }]}
                        >
                            <Button variant="Secondary">Bordered</Button>
                        </Actionlist>
                        <Actionlist
                            variant="Elevated"
                            items={[{ id: "elevated", label: "Elevated Variant", leading: <Heart size={16} /> }]}
                        >
                            <Button variant="Secondary">Elevated</Button>
                        </Actionlist>
                    </FlexLayout>,
                propCode: `
                import { Actionlist, Button } from 'jiffy-ui';
                import { Heart } from 'jiffy-icons';
                
                export default function App() {
                    return (
                        <Actionlist
                            variant="Elevated"
                            items={[{ id: "elevated", label: "Elevated Variant", leading: <Heart size={16} /> }]}
                        >
                            <Button variant="Secondary">Elevated</Button>
                        </Actionlist>
                    );
                }`
            },
            {
                propName: 'trigger',
                propValues: ActionList_trigger,
                propDescription: 'How the ActionList is triggered',
                defaultPropValue: "click",
                propDemo:
                    <FlexLayout direction="column" gap={4}>
                        <Actionlist
                            trigger="click"
                            items={[{ id: "click", label: "Click to activate", leading: <Star size={16} /> }]}
                        >
                            <Button variant="Secondary">Click Trigger</Button>
                        </Actionlist>
                        <Actionlist
                            trigger="hover"
                            items={[{ id: "hover", label: "Hover to activate", leading: <Star size={16} /> }]}
                        >
                            <Button variant="Secondary">Hover Trigger</Button>
                        </Actionlist>
                    </FlexLayout>,
                propCode: `
                import { Actionlist, Button } from 'jiffy-ui';
                import { Star } from 'jiffy-icons';
                
                export default function App() {
                    return (
                        <Actionlist
                            trigger="hover"
                            items={[{ id: "hover", label: "Hover to activate", leading: <Star size={16} /> }]}
                        >
                            <Button variant="Secondary">Hover Trigger</Button>
                        </Actionlist>
                    );
                }`
            },
            {
                propName: 'placement',
                propValues: ActionList_placement,
                propDescription: 'Position of the dropdown relative to trigger',
                defaultPropValue: "bottom-start",
                propDemo:
                    <FlexLayout direction="column" gap={4}>
                        <Actionlist
                            placement="bottom-start"
                            items={[{ id: "bottom", label: "Bottom placement", leading: <ArrowLeft size={16} /> }]}
                        >
                            <Button variant="Secondary">Bottom Start</Button>
                        </Actionlist>
                        <Actionlist
                            placement="top-start"
                            items={[{ id: "top", label: "Top placement", leading: <ArrowLeft size={16} /> }]}
                        >
                            <Button variant="Secondary">Top Start</Button>
                        </Actionlist>
                    </FlexLayout>,
                propCode: `
                import { Actionlist, Button } from 'jiffy-ui';
                import { ArrowLeft } from 'jiffy-icons';
                
                export default function App() {
                    return (
                        <Actionlist
                            placement="top-start"
                            items={[{ id: "top", label: "Top placement", leading: <ArrowLeft size={16} /> }]}
                        >
                            <Button variant="Secondary">Top Start</Button>
                        </Actionlist>
                    );
                }`
            },
            {
                propName: 'disabled',
                propValues: ActionList_disabled,
                propDescription: 'Whether the ActionList is disabled',
                defaultPropValue: "false",
                propDemo:
                    <FlexLayout direction="column" gap={4}>
                        <Actionlist
                            disabled={false}
                            items={[{ id: "enabled", label: "Enabled ActionList", leading: <Save size={16} /> }]}
                        >
                            <Button variant="Secondary">Enabled</Button>
                        </Actionlist>
                        <Actionlist
                            disabled={true}
                            items={[{ id: "disabled", label: "Disabled ActionList", leading: <Save size={16} /> }]}
                        >
                            <Button variant="Secondary" isDisabled>Disabled</Button>
                        </Actionlist>
                    </FlexLayout>,
                propCode: `
                import { Actionlist, Button } from 'jiffy-ui';
                import { Save } from 'jiffy-icons';
                
                export default function App() {
                    return (
                        <Actionlist
                            disabled={true}
                            items={[{ id: "disabled", label: "Disabled ActionList", leading: <Save size={16} /> }]}
                        >
                            <Button variant="Secondary" isDisabled>Disabled</Button>
                        </Actionlist>
                    );
                }`
            }
        ]
    },
]
