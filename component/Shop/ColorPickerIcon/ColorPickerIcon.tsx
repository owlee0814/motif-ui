import {ActionIcon} from "@mantine/core";
import React, {useState} from "react";

interface ColorPickerIconProps {
    bg : string,
    size: string,
    radius: string
}

export function ColorPickerIcon(props: ColorPickerIconProps) {
    const [variant, setVariant] = useState('filled');

    return (
        <>
            <ActionIcon
                bg={props.bg}
                variant={props.bg !== 'white' ? variant : 'default'}
                size={props.size}
                radius={props.radius}
                color={'black'}
                styles={{

                }}
                onClick={ () => {
                    variant == 'filled' ? setVariant('outline') : setVariant('filled');
                }}
            />
        </>
    );
}