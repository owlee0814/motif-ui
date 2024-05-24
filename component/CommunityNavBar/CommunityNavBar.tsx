import {Card, Group, NavLink, Text, Title} from "@mantine/core";
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
                    paddingBottom: '1rem',
                    paddingTop: '1rem'
                }}
            >
                {communityTitle}
            </Title>
            <Card radius={'0'} mt={'1rem'} className={classes.card}>
                <Title size={'xs'} p={'xs'}>COMMUNITY</Title>
                <Group gap={0} ml={'xs'}>
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

            <Card radius={'0'} mt={'1rem'} className={classes.card} p={'xl'}>
                <Title size={'md'} pb={'sm'}>Pinned</Title>
                <Text size={'sm'} style={{whiteSpace: 'pre-line'}}>{
                    `Et harum quidem rerum facilis est et doloribus asperiores repellat.
                    Owen`
                }</Text>
                <Title size={'md'} pt={'xs'} pb={'sm'}>Community Rules</Title>
                <Text size={'sm'} style={{whiteSpace: 'pre-line'}}>{
                    `Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
                    placeat facere possimus, Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, 
                    cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, 
                    
                    omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis 
                    
                    debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non 
                    
                    recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut 
                    
                    reiciendis voluptatibus maiores alias consequatur aut perferendis 
                    doloribus asperiores repellat.`
                }</Text>
            </Card>
        </>
    );
}