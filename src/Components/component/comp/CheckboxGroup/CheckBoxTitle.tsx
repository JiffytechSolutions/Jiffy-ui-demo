import { Setting } from 'jiffy-icons';
import { CheckboxGroup } from 'jiffy-ui';
import React, { useCallback, useState } from 'react'
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
export const CheckBoxTitle = () => {
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
}

export const CheckboxGroupHorizontal = () => {
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

export const CheckboxGroupVerical = () => {
    const [grpVal, setGrpVal] = useState<any[]>([]);
    const handleCheckboxGroupChange = useCallback((val: any[]) => {
        setGrpVal([...val]);
    }, []);
    return (
        <CheckboxGroup
            direction='vertical'
            title="Checkbox group"
            value={[...grpVal]}
            name="name"
            options={options}
            onChange={handleCheckboxGroupChange}
            helpText="This is help text."
        />
    )
}

export const CheckboxGroupHelpText = () => {
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
