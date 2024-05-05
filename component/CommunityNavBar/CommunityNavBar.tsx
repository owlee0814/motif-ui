import {Group, NavLink, Title} from "@mantine/core";
import React from "react";

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
                <NavLink fw={'600'}
                         label='All'
                         href={'/community'}>
                </NavLink>
                <NavLink fw={'600'}
                         label='Announcements'>
                </NavLink>
                <NavLink fw={'600'}
                         label='Lounge'
                />
                <NavLink fw={'600'}
                         label='Sales & Deals'
                />
                <NavLink fw={'600'}
                         label='Brand Share'
                />
                <NavLink fw={'600'}
                         label='OOTDs'
                         href={'/community/outfits'}
                />
                <NavLink fw={'600'}
                         label='What I bought'
                />
                <NavLink fw={'600'}
                         label='Q&A'
                />
            </Group>
        </>
    );
}