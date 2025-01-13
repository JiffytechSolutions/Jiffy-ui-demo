// TextStyle props
export const asProps = ['dt', 'dd', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'strong', 'legend']
export const TypeProp = ['XsHeading', 'SmHeading', 'MdHeading', 'LgHeading', 'XlHeading', '2XlHeading', 'LgBody', 'SmBody', 'MdBody']
export const alignmentProp = ['Start', 'Center', 'End', 'Justify'];
export const textColorProp = ['Dark', 'Secondary', 'Disabled', 'Primary', 'Possitve', 'Negative', 'Waiting', 'Invert'];
export const fontweightProp = ['Light', 'Regular', 'Regular', 'Regular'];
export const textStyleProp = ['None', 'Italic'];
export const textDecorationProp = ['None', 'UnderLine', 'lineThrough'];
export const childrenProp = ['string', 'React.ReactNode'];

// Button Props
export const btnVariantProps = ['Primary', 'Secondry', 'Tertiary', 'Link'];
export const btnSizeProps = ['XSmall', 'Small', 'Medium', 'Large'];
export const btnColorProps = ['Primary', 'Positive', 'Negative', 'Waiting', 'Neutral'];
export const btnIsDisabledProp = ['boolean']
export const btniconProp = ['string', 'React.ReactNode']
export const btnisLoadingProp = ['boolean'];
export const btnisFullWidthProp = ['boolean'];
export const btniconOnlyProp = ['boolean'];
export const btnalignIconProp = ["Left", "Right"];
export const btnonClickProp = ['() => void'];
export const btnchildrenProp = ['string'];
// Button grp
export const btnGrpsegmentedProp = ['boolean'];
export const btnGrpChildrenProp = ['string', 'React.ReactNode'];
// TextLink Props 
export const TextLink_label_prop = ['string', 'React.ReactNode'];
export const TextLink_icon_prop = ['React.ReactNode'];
export const TextLink_onClick_prop = ['() => void', 'string'];
export const TextLink_url_prop = ['string'];
export const TextLink_customClass_prop = ['string'];
export const TextLink_isDisabled_prop = ['boolean'];
export const TextLink_target_prop = ["_self", "_blank", "_parent", "_top"];
export const TextLink_iconAlign_prop = ["Left", "Right"];
export const TextLink_linkType_prop = ["Success", "Danger", "Warning", "Default"];
// TextField props
export const TextField_size = ["XSmall", "Small", "Medium", "Large"];
export const TextField_type = ["text", "number", "password", "tel", "url", "email"];
export const TextField_variant = ["success", "warning", "error", "default"];
export const TextField_value = ['string', 'number'];
export const TextField_label = ['string', 'React.ReactNode'];
export const TextField_placeholder = ['string'];
export const TextField_prefix = ['React.ReactNode'];
export const TextField_suffix = ['React.ReactNode'];
export const TextField_helpText = ['string'];
export const TextField_helpIcon = ['React.ReactNode'];
export const TextField_isClearable = ['boolean'];
export const TextField_isRequired = ['boolean'];
export const TextField_min = ['number'];
export const TextField_max = ['number'];
export const TextField_step = ['number'];
export const TextField_maxlength = ['number', 'string', 'any'];
export const TextField_isDisabled = ['boolean'];
export const TextField_autoFocus = ['boolean'];
export const TextField_onBlur = ['() => void'];
export const TextField_onKeyUp = ['() => void'];
export const TextField_onFocus = ['() => void'];
export const TextField_onChange = ['() => void'];
export const TextField_onClear = ['() => void'];
// TextArea 

export const TextArea_value = ['string', 'number'];
export const TextArea_label = ['string'];
export const TextArea_resize = ["horizontal", "vertical", "both", "none"];
export const TextArea_placeholder = ['string'];
export const TextArea_helpText = ['string'];
export const TextArea_rows = ['number'];
export const TextArea_readOnly = ['boolean'];
export const TextArea_error = ['boolean'];
export const TextArea_required = ['boolean'];
export const TextArea_onChange = ['() => void'];
// CheckBox

export const Checkbox_label = ['string', 'React.ReactNode'];
export const Checkbox_required = ['boolean'];
export const Checkbox_name = ['string'];
export const Checkbox_isDisabled = ['boolean'];
export const Checkbox_checked = ['boolean', "indeterminate"];
export const Checkbox_onChange = ['() => void'];
export const Checkbox_value = ['any'];
export const Checkbox_hasError = ['boolean'];

// Checkbox group
export const CheckboxGroup_title = ['string', 'React.ReactNode'];
export const CheckboxGroup_name = ['string'];
export const CheckboxGroup_value = ['any[]'];
export const CheckboxGroup_onChange = ['(newVal: any[]) => void'];
export const CheckboxGroup_options = ['OptionsI[]'];
export const CheckboxGroup_direction = ["horizontal", "vertical"];
export const CheckboxGroup_helpText = ['string'];
export const CheckboxGroup_helpIcon = ['React.ReactNode'];
export const CheckboxGroup_type = ["success", "warning", "error"];
export const CheckboxGroup_isClickableFullItem = ['boolean'];

// FileUpload
export const FileUpload_accept = ['string[]'];
export const FileUpload_isMultiple = ['boolean'];
export const FileUpload_isDragable = ['boolean'];
export const FileUpload_isDisabled = ['boolean'];
export const FileUpload_maxCount = ['number'];
export const FileUpload_maxSize = ['number'];
export const FileUpload_helpText = ['string'];
export const FileUpload_helpIcon = ['React.ReactNode'];
export const FileUpload_onChange = ['(e: any, single?: any) => void'];
export const FileUpload_onError = ['() => void'];
export const FileUpload_onRemove = ['(e: any) => void'];
export const FileUpload_isFileUploaded = ['boolean[]'];