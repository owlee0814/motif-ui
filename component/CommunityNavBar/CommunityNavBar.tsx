import {Card, Group, NavLink, Stack, Title} from "@mantine/core";
import React, {useEffect} from "react";
import {sampleCommunities} from "../../entities/Community";
import {usePathname} from "next/navigation";
import classes from "../ProfileNavBar/ProfileNavBar.module.css";

export function CommunityNavBar() {
    const [communityTitle, setCommunityTitle] = React.useState('');
    const pathName = usePathname()

    useEffect(()=> {
        const result = sampleCommunities.find(
            (community) =>
                community.path === pathName
        )
        setCommunityTitle(result !== undefined ? result.title : '');
    }, [pathName]);

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
                {communityTitle}
            </Title>

            <Card radius={'xl'} mt={'1rem'} mr={'2rem'} className={classes.card}>
                <Group gap={0} ml={'sm'}>
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
            </Card>
        </>
    );
}