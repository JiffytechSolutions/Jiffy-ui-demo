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
export const btnVariantProps = ['Primary', 'Secondary', 'Tertiary', 'Link', 'Ghost', 'Danger'];
export const btnSizeProps = ['XSmall', 'Small', 'Medium', 'Large', 'XLarge'];
export const btnColorProps = ['Primary', 'Positive', 'Negative', 'Waiting', 'Neutral'];
export const btnIsDisabledProp = ['boolean'];
export const btniconProp = ['string', 'React.ReactNode'];
export const btnSuffixIconProp = ['React.ReactNode'];
export const btnisLoadingProp = ['boolean'];
export const btnisFullWidthProp = ['boolean'];
export const btniconOnlyProp = ['boolean'];
export const btnalignIconProp = ["Left", "Right"];
export const btnonClickProp = ['() => void'];
export const btnchildrenProp = ['string', 'React.ReactNode'];
export const btnTypeProp = ['button', 'submit', 'reset'];
export const btnClassNameProp = ['string'];
export const btnRoundedProp = ['boolean'];
export const btnOutlinedProp = ['boolean'];
export const btnElevatedProp = ['boolean'];
export const btnCompactProp = ['boolean'];
export const btnHrefProp = ['string'];
export const btnTargetProp = ['string'];
export const btnRelProp = ['string'];
export const btnBadgeProp = ['string', 'number'];
export const btnBadgeVariantProp = ['default', 'primary', 'success', 'warning', 'error'];
export const btnPressedProp = ['boolean'];
export const btnActiveProp = ['boolean'];
// Button grp
export const btnGrpsegmentedProp = ['boolean'];
export const btnGrpChildrenProp = ['string', 'React.ReactNode'];

// ActionList Props
export const ActionList_trigger = ['click', 'hover', 'focus'];
export const ActionList_placement = ['top', 'bottom', 'left', 'right', 'top-start', 'top-end', 'bottom-start', 'bottom-end'];
export const ActionList_size = ['Small', 'Medium', 'Large'];
export const ActionList_variant = ['Default', 'Bordered', 'Elevated'];
export const ActionList_disabled = ['boolean'];
export const ActionList_closeOnSelect = ['boolean'];
export const ActionList_maxHeight = ['number'];
export const ActionList_className = ['string'];
export const ActionList_style = ['React.CSSProperties'];
export const ActionList_onItemSelect = ['(item: ActionItem) => void'];
export const ActionList_onOpenChange = ['(open: boolean) => void'];
export const ActionList_children = ['React.ReactElement'];
export const ActionList_items = ['(ActionItem | ActionGroup)[]'];
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

// PageTitle Props
export const PageTitle_title = ['string', 'React.ReactNode'];
export const PageTitle_subtitle = ['string', 'React.ReactNode'];
export const PageTitle_showBackButton = ['boolean'];
export const PageTitle_onBackClick = ['() => void'];
export const PageTitle_backButtonLabel = ['string'];
export const PageTitle_primaryAction = ['PageTitleAction'];
export const PageTitle_secondaryActions = ['SecondaryActionItem[]'];
export const PageTitle_badge = ['PageTitleBadge'];
export const PageTitle_className = ['string'];
export const PageTitle_style = ['React.CSSProperties'];
export const PageTitle_testId = ['string'];

// PageTitle Action Props
export const PageTitleAction_label = ['string'];
export const PageTitleAction_onClick = ['() => void'];
export const PageTitleAction_variant = ['Primary', 'Secondary', 'Tertiary', 'Link', 'Ghost', 'Danger'];
export const PageTitleAction_size = ['Small', 'Medium', 'Large'];
export const PageTitleAction_icon = ['React.ReactNode'];
export const PageTitleAction_disabled = ['boolean'];
export const PageTitleAction_loading = ['boolean'];

// PageTitle Badge Props
export const PageTitleBadge_text = ['string'];
export const PageTitleBadge_variant = ['default', 'primary', 'success', 'warning', 'error', 'info'];
export const PageTitleBadge_size = ['small', 'default'];
export const PageTitleBadge_subtle = ['boolean'];

// Secondary Action Item Props
export const SecondaryActionItem_id = ['string'];
export const SecondaryActionItem_label = ['string'];
export const SecondaryActionItem_onClick = ['() => void'];
export const SecondaryActionItem_leading = ['React.ReactNode'];
export const SecondaryActionItem_disabled = ['boolean'];
export const SecondaryActionItem_variant = ['default', 'primary', 'secondary', 'destructive'];
export const SecondaryActionItem_description = ['string'];

// Card Props
export const Card_variant = ['default', 'outlined', 'elevated', 'filled', 'ghost'];
export const Card_size = ['small', 'medium', 'large'];
export const Card_header = ['CardSection'];
export const Card_footer = ['CardSection'];
export const Card_children = ['React.ReactNode'];
export const Card_padding = ['none', 'small', 'medium', 'large'];
export const Card_radius = ['none', 'small', 'medium', 'large', 'full'];
export const Card_interactive = ['boolean'];
export const Card_selectable = ['boolean'];
export const Card_selected = ['boolean'];
export const Card_disabled = ['boolean'];
export const Card_loading = ['boolean'];
export const Card_className = ['string'];
export const Card_style = ['React.CSSProperties'];
export const Card_onClick = ['() => void'];
export const Card_onSelectionChange = ['(selected: boolean) => void'];
export const Card_backgroundColor = ['string'];
export const Card_borderColor = ['string'];
export const Card_width = ['string', 'number'];
export const Card_height = ['string', 'number'];
export const Card_divided = ['boolean'];
export const Card_orientation = ['vertical', 'horizontal'];
export const Card_ariaLabel = ['string'];
export const Card_testId = ['string'];

// Card Section Props
export const CardSection_title = ['string'];
export const CardSection_subtitle = ['string'];
export const CardSection_actions = ['CardAction[]'];
export const CardSection_content = ['React.ReactNode'];

// Card Action Props
export const CardAction_label = ['string'];
export const CardAction_onClick = ['() => void'];
export const CardAction_variant = ['Primary', 'Secondary', 'Tertiary', 'Ghost', 'Danger'];
export const CardAction_size = ['Small', 'Medium', 'Large'];
export const CardAction_disabled = ['boolean'];
export const CardAction_loading = ['boolean'];
export const CardAction_icon = ['React.ReactNode'];
export const CardAction_iconPosition = ['left', 'right'];