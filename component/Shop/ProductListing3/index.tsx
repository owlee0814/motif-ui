import {Group, Image, Text, Title} from "@mantine/core";
import React from "react";

export function ProductListing3() {
    return (
        <>
            <Image
                src={null}
                h={200}
                radius={'md'}
                fallbackSrc="https://placehold.co/600x400?text=Placeholder"
            />
            <Text>name of item</Text>
            <Group gap={3}>
                <Title
                    fw={200}
                    size='0.9rem'
                >
                    $0
                </Title>
                <Title
                    fw={200}
                    size='0.9rem'
                    c='gray'
                >
                    $0
                </Title>
            </Group>
        </>
    )
}