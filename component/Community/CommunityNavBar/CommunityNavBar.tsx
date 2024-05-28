import {Card, Group, NavLink, Text, Title} from "@mantine/core";
import React, {useEffect} from "react";
import {usePathname} from "next/navigation";
import classes from "./CommunityNavBar.module.css";
import {Community} from ".prisma/client";
import {useRouter} from "next/router";

interface CommunityNavBarProps {
    currentCommunity?: string | string[] | undefined;
}

export function CommunityNavBar(props: CommunityNavBarProps) {
    const router = useRouter();
    const [communities, setCommunities] = React.useState<Community[]>([]);
    const pathName = usePathname();
    const [navBarTitle, setNavBarTitle] = React.useState('');

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/api/post', {
                    method: 'GET'
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCommunities(data);


            } catch (error) {
                console.error('Fetch error:', error);
            }
        }
        fetchData()
    }, []);

    useEffect(() => {
        if (props.currentCommunity === 'all')
            setNavBarTitle('All')
        else {
            const result = communities.find(
                (community) => community.name === props.currentCommunity
            );
            setNavBarTitle(result?.label || '');
        }
    }, [communities, props.currentCommunity]);

    return (
        <div>
            <Title className={classes.title}>
                {navBarTitle}
            </Title>
            <Card radius="0" mt="1rem" className={classes.card}>
                <Title size="xs" p="xs" pb='lg'>COMMUNITIES</Title>
                <Group gap={0} ml="xs">
                    {
                        navBarTitle === 'All' ?
                        <NavLink
                            fw="900"
                            label={'All'}
                            td="underline"
                            href={'../../../../community/c/all'}
                        /> :
                        <NavLink
                            fw="500"
                            label={'All'}
                            href={'../../../../community/c/all'}
                        />
                    }
                    {communities.map((community, index) => {
                        return navBarTitle === community.label ?
                        <NavLink
                            fw="900"
                            label={community.label}
                            td="underline"
                            href={'../../../../community/c/' + community.name}
                            key={index}
                        /> :
                        <NavLink
                            fw="500"
                            label={community.label}
                            href={'../../../../community/c/' + community.name}
                            key={index}
                        />
                    })}
                </Group>
            </Card>

            <Card radius="0" mt="2rem" className={classes.card} p="3rem">
                <Title size="md" pb="sm">Pinned</Title>
                <Text size="sm" className={classes.preLineText}>
                    Et harum quidem rerum facilis est et doloribus asperiores repellat.
                    Owen
                </Text>
                <Title size="md" pt="xs" pb="sm">Community Rules</Title>
                <Text size="sm" className={classes.preLineText}>
                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
                    maxime
                    placeat facere possimus, Et harum quidem rerum facilis est et expedita distinctio. Nam libero
                    tempore,
                    cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere
                    possimus,

                    omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis

                    debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non

                    recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut

                    reiciendis voluptatibus maiores alias consequatur aut perferendis
                    doloribus asperiores repellat.
                </Text>
            </Card>
        </div>
    );
}