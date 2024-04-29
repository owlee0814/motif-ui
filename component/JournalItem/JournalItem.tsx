import React from "react";
import {Grid, GridCol, Image, Title, Text} from "@mantine/core";

export function JournalItem() {
    return (
        <>
            <Image
                radius="md"
                src={null}
                h={600}
                fallbackSrc="https://placehold.co/600x400?text=Placeholder"
            />
            <div>
                <Title>
                    This is title of journal
                </Title>
                <Text lineClamp={2}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
                <Text size="sm" c="blue">
                    #tag1 #tag2 #tag3
                </Text>
            </div>
        </>
    );
}