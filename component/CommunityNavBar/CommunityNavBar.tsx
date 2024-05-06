import {Group, NavLink, Title} from "@mantine/core";
import React from "react";
import {sampleCommunities} from "../../entities/Community";

export function CommunityNavBar() {
    return (
        <>
            <Title
                size={'1.5rem'}
                fw={800}
                style={{
                    'padding-bottom': '1rem',
                    'padding-top': '1rem'
                }}
            >
                Motifs
            </Title>

            <Group gap={0}>
                {sampleCommunities.map((community, index) => (
                    <NavLink
                        fw={'600'}
                        label={community.title}
                        href={community.path}
                        key={index}
                    >
                    </NavLink>
                ))}
            </Group>
        </>
    );
}