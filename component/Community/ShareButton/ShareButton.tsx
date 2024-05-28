import {Button, Group, Popover, Text} from "@mantine/core";
import {IconLink, IconShare} from "@tabler/icons-react";
import React, {useEffect, useState} from "react";

interface ShareButtonInterface {
    href: string
    size?: string
}

export function ShareButton(props: ShareButtonInterface) {
    const [opened, setOpened] = useState(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        if (opened) {
            timeout = setTimeout(() => {
                setOpened(false);
            }, 2000);
        }
        return () => {
            clearTimeout(timeout);
        };
    }, [opened]);

    return (
        <Popover opened={opened} onChange={setOpened}>
            <Popover.Target>
                <Button variant="subtle" c='gray' size={props.size ? props.size : 'sm'} leftSection={<IconShare size={16} />} onClick={(e) => {
                    navigator.clipboard.writeText(props.href)
                    setOpened((o) => !o)
                    e.preventDefault()
                }}>
                    Share
                </Button>
            </Popover.Target>
            <Popover.Dropdown>
                <Group gap={'xs'}>
                    <IconLink color={'gray'} size={'16'}/>
                    <Text size={'sm'} fw={'bold'} c={'gray'}>
                        Link Copied
                    </Text>
                </Group>
            </Popover.Dropdown>
        </Popover>
    );
}