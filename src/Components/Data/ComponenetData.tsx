import { Button, ButtonGroup, Checkbox, CheckboxGroup, FileUpload, HorizontalFlex, TextArea, TextField, TextLink, TextStyle, VerticalFlex } from "jiffy-ui";
import React, { useContext } from "react";
import { CheckboxGroup_direction, CheckboxGroup_helpIcon, CheckboxGroup_helpText, CheckboxGroup_name, CheckboxGroup_onChange, CheckboxGroup_options, CheckboxGroup_title, CheckboxGroup_value, Checkbox_checked, Checkbox_hasError, Checkbox_isDisabled, Checkbox_label, Checkbox_name, Checkbox_onChange, Checkbox_required, Checkbox_value, FileUpload_accept, FileUpload_helpIcon, FileUpload_helpText, FileUpload_isDisabled, FileUpload_isDragable, FileUpload_isFileUploaded, FileUpload_isMultiple, FileUpload_maxCount, FileUpload_maxSize, FileUpload_onChange, FileUpload_onError, FileUpload_onRemove, TextArea_error, TextArea_helpText, TextArea_label, TextArea_onChange, TextArea_placeholder, TextArea_readOnly, TextArea_required, TextArea_resize, TextArea_rows, TextArea_value, TextField_autoFocus, TextField_helpIcon, TextField_helpText, TextField_isClearable, TextField_isDisabled, TextField_isRequired, TextField_label, TextField_max, TextField_maxlength, TextField_min, TextField_onBlur, TextField_onChange, TextField_onClear, TextField_onFocus, TextField_onKeyUp, TextField_placeholder, TextField_prefix, TextField_size, TextField_step, TextField_suffix, TextField_type, TextField_value, TextField_variant, TextLink_customClass_prop, TextLink_iconAlign_prop, TextLink_icon_prop, TextLink_isDisabled_prop, TextLink_label_prop, TextLink_linkType_prop, TextLink_onClick_prop, TextLink_target_prop, TextLink_url_prop, TypeProp, alignmentProp, asProps, btnColorProps, btnGrpChildrenProp, btnGrpsegmentedProp, btnIsDisabledProp, btnSizeProps, btnVariantProps, btnalignIconProp, btniconProp, btnisFullWidthProp, btnisLoadingProp, btnonClickProp, childrenProp, fontweightProp, textColorProp, textDecorationProp, textStyleProp } from "./AllProps";
import { AlertCircle, ExternalLink, Setting, Upload, User, UserMinus } from "jiffy-icons";
import { MyContext } from "../../context/Context";
import { CheckBoxTitle, CheckboxGroupHelpText, CheckboxGroupHorizontal, CheckboxGroupVerical } from "../component/comp/CheckboxGroup/CheckBoxTitle";

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
// Checkboax grp
const options = [
    {
        label: "Checkbox1",
        value: "Checkbox1",
    },
    {
        label: "Checkbox2",
        value: "Checkbox2",
    },
    {
        label: "Checkbox3",
        value: "Checkbox3",
    },
];
export function CheckboxGroupComp(props?: any) {
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
        <CheckboxGroup
            key={props.index}
            title={props.title}
            onChange={handleCheck}
            options={options}
        // checked={flag.has(id)}
        // required={props.required}
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
                    <VerticalFlex gap={8}>
                        <TextStyle as={'span'}>Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'}>Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'legend'}>Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'label'}>Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'dd'}>Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'dt'}>Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'h1'}>Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'}>....</TextStyle>
                        <TextStyle as={'h6'}>Lorem ipsum dolor sit amet</TextStyle>
                    </VerticalFlex>
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
                    <VerticalFlex gap={8}>
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
                    </VerticalFlex>
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
                    <VerticalFlex gap={8}>

                        <TextStyle as={'p'} type='LgBody' alignment="Start">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' alignment="Center">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' alignment="End">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' alignment="Justify">Lorem ipsum dolor sit amet</TextStyle>
                    </VerticalFlex>
                ,
                propCode: `
                import {TextStyle } from 'jiffy-ui';
                export default function App() {
                    return (
                        <TextStyle as={'p'} type='LgBody' alignment="Start">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' alignment="Center">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' alignment="End">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' alignment="Justify">Lorem ipsum dolor sit amet</TextStyle>
                    );
                }`
            },
            {
                propName: 'textColor',
                propValues: textColorProp,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "Dark",
                propDemo:
                    <VerticalFlex gap={8}>
                        <TextStyle as={'p'} type='LgBody' textColor="Dark">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' textColor="Secondary">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' textColor="Disabled">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' textColor="Primary">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' textColor="Possitve">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' textColor="Negative">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' textColor="Waiting">Lorem ipsum dolor sit amet</TextStyle>
                        <div style={{ "padding": '10px', "backgroundColor": "#000" }}>
                            <TextStyle as={'p'} type='LgBody' textColor="Invert">Lorem ipsum dolor sit amet</TextStyle>
                        </div>
                    </VerticalFlex>
                ,
                propCode: `
                import {TextStyle } from 'jiffy-ui';
                export default function App() {
                    return (
                        <TextStyle as={'p'} type='LgBody' textColor="Dark">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' textColor="Secondary">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' textColor="Disabled">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' textColor="Primary">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' textColor="Possitve">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' textColor="Negative">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' textColor="Waiting">Lorem ipsum dolor sit amet</TextStyle>
                        <div style={{ "padding": '10px', "backgroundColor": "#000" }}>
                            <TextStyle as={'p'} type='LgBody' textColor="Invert">Lorem ipsum dolor sit amet</TextStyle>
                        </div>
                    );
                }`
            },
            {
                propName: 'fontWeight',
                propValues: fontweightProp,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "Regular",
                propDemo:
                    <VerticalFlex gap={8}>
                        <TextStyle as={'p'} type='LgBody' fontWeight="Light">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' fontWeight="Regular">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' fontWeight="Medium">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' fontWeight="Bold">Lorem ipsum dolor sit amet</TextStyle>
                    </VerticalFlex>
                ,
                propCode: `
                import {TextStyle } from 'jiffy-ui';
                export default function App() {
                    return (
                        <TextStyle as={'p'} type='LgBody' fontWeight="Light">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' fontWeight="Regular">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' fontWeight="Medium">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' fontWeight="Bold">Lorem ipsum dolor sit amet</TextStyle>
                    );
                }`
            },
            {
                propName: 'textStyle',
                propValues: textStyleProp,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "None",
                propDemo:
                    <VerticalFlex gap={8}>
                        <TextStyle as={'p'} type='LgBody' textStyle="Italic">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' textStyle="None">Lorem ipsum dolor sit amet</TextStyle>
                    </VerticalFlex>
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
                    <VerticalFlex gap={8}>
                        <TextStyle as={'p'} type='LgBody' textDecoration="UnderLine">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' textDecoration="lineThrough">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' textDecoration="None">Lorem ipsum dolor sit amet</TextStyle>
                    </VerticalFlex>
                ,
                propCode: `
                import {TextStyle } from 'jiffy-ui';
                export default function App() {
                    return (
                        <TextStyle as={'p'} type='LgBody' textDecoration="UnderLine">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' textDecoration="lineThrough">Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' textDecoration="None">Lorem ipsum dolor sit amet</TextStyle>
                    );
                }`
            },
            {
                propName: 'children',
                propValues: childrenProp,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "Demo",
                propDemo:
                    <VerticalFlex gap={8}>
                        <TextStyle as={'p'} type='LgBody'>Lorem ipsum dolor sit amet</TextStyle>
                        <TextStyle as={'p'} type='LgBody' ><span>Lorem ipsum dolor sit amet</span></TextStyle>
                    </VerticalFlex>
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
                    <HorizontalFlex gap={8} align={{ "lg": "spaceBetween" }}>
                        {btnVariantProps.map((item: any) => {
                            return <Button variant={item}>{item}</Button>
                        })}

                    </HorizontalFlex>
                ,
                propCode: `
                import {Button} from 'jiffy-ui';
                export default function App() {
                    return (
                        <Button variant="Primary">Primary</Button>
                        <Button variant="Secondry">Secondry</Button>
                        <Button variant="Tertiary">Tertiary</Button>
                        <Button variant="Link">Link</Button>
                    );
                  }`

            },
            {
                propName: 'size',
                propValues: btnSizeProps,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "LgHeading",
                propDemo:
                    <HorizontalFlex gap={8} align={{ "lg": "spaceBetween", "md": "spaceBetween", "sm": "spaceBetween" }}>
                        {btnSizeProps.map((item: any, index: any) => {
                            return <Button size={item} key={index}>{item}</Button>
                        })}
                    </HorizontalFlex>
                ,
                propCode: `
                import {Button} from 'jiffy-ui';
                export default function App() {
                    return (
                        <Button size="XSmall">XSmall</Button>
                        <Button size="Small">Small</Button>
                        <Button size="Medium">Medium</Button>
                        <Button size="Large">Large</Button>
                    );
                }`
            },
            {
                propName: 'color',
                propValues: btnColorProps,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "Start",
                propDemo:
                    <HorizontalFlex gap={8} align={{ "lg": "spaceBetween", "md": "spaceBetween", "sm": "spaceBetween" }}>
                        {btnColorProps.map((item: any, index: any) => {
                            return <Button color={item} key={item}>{item}</Button>
                        })}
                    </HorizontalFlex>
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
                propDemo: <HorizontalFlex gap={20}><Button icon={<Setting size={16} color="#fff" />}>Icon Button</Button>
                    <Button icon={<Setting size={16} color="#fff" />} children="" />
                </HorizontalFlex>,
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
                propDemo: <VerticalFlex gap={20}>
                    <Button isFullWidth={true}>Full width button</Button>
                    <Button isFullWidth={false}>Normal button</Button>
                </VerticalFlex>,
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
                    <HorizontalFlex gap={8}>
                        <Button icon={<Setting size={16} color="#fff" />} alignIcon="Left">Icon Button</Button>
                        <Button icon={<Setting size={16} color="#fff" />} alignIcon="Right">Icon Button</Button>
                    </HorizontalFlex>
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
                propValues: childrenProp,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "Demo",
                propDemo: <Button children="Children text" />,
                propCode: `
                import {TextStyle } from 'jiffy-ui';
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
                    <HorizontalFlex gap={8}>
                        <TextLink label="Text Link label" onClick={() => { alert('Text Link alert') }} />
                        <TextLink label={<div>Text Link</div>} onClick={() => { alert('Text Link alert') }} />
                    </HorizontalFlex>
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
                    <HorizontalFlex gap={8} align={{ "lg": "spaceBetween", "md": "spaceBetween", "sm": "spaceBetween" }}>
                        <TextLink icon={<ExternalLink size={16} />} label={<div>Text Link</div>} onClick={() => { alert('Text Link alert') }} />
                    </HorizontalFlex>
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
                    <HorizontalFlex gap={8} align={{ "lg": "spaceBetween", "md": "spaceBetween", "sm": "spaceBetween" }}>
                        <TextLink icon={<ExternalLink size={16} />} label={<div>Text Link</div>} onClick={() => { alert('Text Link alert') }} />
                    </HorizontalFlex>
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
                propDemo: <HorizontalFlex gap={20}>
                    <TextLink icon={<ExternalLink size={16} />} label={<div>Text Link</div>} customClass="dummy_class" />
                </HorizontalFlex>,
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
                propDemo: <HorizontalFlex gap={20}>
                    <TextLink icon={<ExternalLink size={16} />} label={<div>Text Link</div>} isDisabled={false} />
                    <TextLink icon={<ExternalLink size={16} />} label={<div>Text Link</div>} isDisabled={true} />
                </HorizontalFlex>,
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
                propDemo: <HorizontalFlex gap={20}>
                    {TextLink_target_prop.map((item: any, index: any) => (
                        <TextLink icon={<ExternalLink size={16} />} label={item} url="www.google.com" target={item} />
                    ))}

                </HorizontalFlex>,
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
                    <HorizontalFlex gap={8}>
                        <TextLink icon={<ExternalLink size={16} />} iconAlign="Left" label={"Text Link"} url="www.google.com" target={"_blank"} />
                        <TextLink icon={<ExternalLink size={16} />} iconAlign="Right" label={"Text Link"} url="www.google.com" target={"_blank"} />
                    </HorizontalFlex>
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
                propDemo: <HorizontalFlex gap={12}>
                    {TextLink_linkType_prop.map((item: any, index: any) => (
                        <TextLink icon={<ExternalLink size={16} />} linkType={item} label={item} onClick={() => { alert('alert') }} />
                    ))}

                </HorizontalFlex>,
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
                    <VerticalFlex gap={8}>
                        {TextField_size.map((item: any) => {
                            return <TextField size={item} placeholder="Enter your text" />
                        })}

                    </VerticalFlex>
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
                    <VerticalFlex gap={8}>
                        {TextField_type.map((item: any, index: any) => {
                            return <TextField size={"Medium"} placeholder={`Enter your ${item}`} type={item} />
                        })}
                    </VerticalFlex>
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
                    <VerticalFlex gap={8}>
                        {TextField_variant.map((item: any, index: any) => {
                            return <TextField size={"Medium"} placeholder={`Enter your ${item}`} variant={item} />
                        })}

                    </VerticalFlex>
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
                    <VerticalFlex gap={8} >
                        {TextArea_resize.map((item: any, index: any) => {
                            return <TextArea value={"Textarea content"} label="TextArea label" resize={item} />
                        })}

                    </VerticalFlex>
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
                propDemo: <HorizontalFlex gap={20}>

                    <Checkbox label="Checkbox label" checked={true} />
                    <Checkbox label="Checkbox label" checked={"indeterminate"} />

                </HorizontalFlex>,
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

    {
        componentName: "CheckboxGroup",
        componentDescription: "Lorem ipsum",
        compImport: "import { CheckboxGroup } from 'jiffy-ui'",
        PropsDetail: [
            {
                propName: 'title',
                propValues: CheckboxGroup_title,
                propDescription: 'The default style of ActionIcon component',
                defaultPropValue: "--",
                propDemo: <CheckBoxTitle />,
                propCode: `
                import { CheckboxGroup } from 'jiffy-ui'
                function App() {
                    const options = [
                        {
                            label: "Checkbox1",
                            value: "Checkbox1",
                        },
                        {
                            label: "Checkbox2",
                            value: "Checkbox2",
                        },
                        {
                            label: "Checkbox3",
                            value: "Checkbox3",
                        },
                    ];
                    const [grpVal, setGrpVal] = useState<any[]>([]);
                    const handleCheckboxGroupChange = useCallback((val: any[]) => {
                        setGrpVal([...val]);
                    }, []);
                    return (
                        <CheckboxGroup
                            title="Checkbox group"
                            value={[...grpVal]}
                            name="name"
                            options={options}
                            onChange={handleCheckboxGroupChange}
                            helpText="This is help text."
                        />
                    )
                }`
            },
            {
                propName: 'name',
                propValues: CheckboxGroup_name,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "--",
                propDemo: '',
                propCode: ``
            },
            {
                propName: 'value',
                propValues: CheckboxGroup_value,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "--",
                propDemo: '',
                propCode: ``
            },
            {
                propName: 'onChange',
                propValues: CheckboxGroup_onChange,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "false",
                propDemo: '',
                propCode: ``
            },
            {
                propName: 'options',
                propValues: CheckboxGroup_options,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "--",
                propDemo: <CheckBoxTitle />,
                propCode: `
                import { CheckboxGroup } from 'jiffy-ui'
                function App() {
                    const options = [
                        {
                            label: "Checkbox1",
                            value: "Checkbox1",
                        },
                        {
                            label: "Checkbox2",
                            value: "Checkbox2",
                        },
                        {
                            label: "Checkbox3",
                            value: "Checkbox3",
                        },
                    ];
                    const [grpVal, setGrpVal] = useState<any[]>([]);
                    const handleCheckboxGroupChange = useCallback((val: any[]) => {
                        setGrpVal([...val]);
                    }, []);
                    return (
                        <CheckboxGroup
                            title="Checkbox group"
                            value={[...grpVal]}
                            name="name"
                            options={options}
                            onChange={handleCheckboxGroupChange}
                            helpText="This is help text."
                        />
                    )
                }`
            },
            {
                propName: 'direction',
                propValues: CheckboxGroup_direction,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "--",
                propDemo: <VerticalFlex gap={20}>
                    <CheckboxGroupHorizontal />
                    <CheckboxGroupVerical />
                </VerticalFlex>,
                propCode: `
                import { CheckboxGroup } from 'jiffy-ui'
                function App() {
                    const options = [
                        {
                            label: "Checkbox1",
                            value: "Checkbox1",
                        },
                        {
                            label: "Checkbox2",
                            value: "Checkbox2",
                        },
                        {
                            label: "Checkbox3",
                            value: "Checkbox3",
                        },
                    ];
                    const [grpVal, setGrpVal] = useState<any[]>([]);
                    const handleCheckboxGroupChange = useCallback((val: any[]) => {
                        setGrpVal([...val]);
                    }, []);
                    return (
                        <CheckboxGroup
                            direction='horizontal'
                            title="Checkbox group"
                            value={[...grpVal]}
                            name="name"
                            options={options}
                            onChange={handleCheckboxGroupChange}
                            helpText="This is help text."
                        />
                    )
                }
                `
            },
            {
                propName: 'helpText',
                propValues: CheckboxGroup_helpText,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "--",
                propDemo: '',
                propCode: `
                import { CheckboxGroup } from 'jiffy-ui'
                function App() {
                    const options = [
                        {
                            label: "Checkbox1",
                            value: "Checkbox1",
                        },
                        {
                            label: "Checkbox2",
                            value: "Checkbox2",
                        },
                        {
                            label: "Checkbox3",
                            value: "Checkbox3",
                        },
                    ];
                    const [grpVal, setGrpVal] = useState<any[]>([]);
                    const handleCheckboxGroupChange = useCallback((val: any[]) => {
                        setGrpVal([...val]);
                    }, []);
                    return (
                        <CheckboxGroup
                            direction='horizontal'
                            title="Checkbox group"
                            value={[...grpVal]}
                            name="name"
                            options={options}
                            onChange={handleCheckboxGroupChange}
                            helpText="This is help text."
                            helpIcon={<Setting size={14} />}
                        />
                    )
                }
                `
            },

            {
                propName: 'helpIcon',
                propValues: CheckboxGroup_helpIcon,
                propDescription: 'The default style of ActionIcon component.',
                defaultPropValue: "--",
                propDemo: <CheckboxGroupHelpText />,
                propCode: ``
            },

        ]
    },
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
                    onChange={(e, single) => { }}
                    isMultiple
                    accept={["png"]}
                    isFileUploaded={[false, true]}
                />,
                propCode: `
                import { FileUpload } from 'jiffy-ui'
                function App() {
                    <FileUpload
                        helpText=".jpg,.png,.pdf"
                        onChange={(e, single) => { }}
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
                    onChange={(e, single) => { }}
                    isMultiple
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
                    onChange={(e, single) => { }}
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
                    onChange={(e, single) => { }}
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
                    onChange={(e, single) => { }}
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
                    onChange={(e, single) => { }}
                    isFileUploaded={[false, true]}
                    helpIcon={<Upload size={16} />}
                />,
                propCode: `
                import { FileUpload } from 'jiffy-ui'
                function App() {
                    <FileUpload
                        helpText=".jpg,.png,.pdf"
                        onChange={(e, single) => { }}
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
]
