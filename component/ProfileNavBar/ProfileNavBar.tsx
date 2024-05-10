import {ActionIcon, Avatar, Card, Center, Divider, Group, NavLink, Stack, Text, Title} from "@mantine/core";
import {IconAward, IconBuildingCommunity, IconSunglasses} from "@tabler/icons-react";
import React from "react";
import classes from "./ProfileNavBar.module.css"
import {Sen} from "next/font/google";

const sen = Sen({weight: "700", subsets: ['latin']})

export function ProfileNavBar() {

    return (
        <Group mr={'xl'}>
            <Title
                size={'1.5rem'}
                fw={800}
                style={{
                    'padding-bottom': '1rem',
                    'padding-top': '1rem'
                }}
            >
                Overview
            </Title>
            <Card w='100%' padding="md" radius={'xl'} className={classes.card} >
                <div style={{textAlign: 'center'}}>
                    <Center>
                        <Avatar
                            src={'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png'}
                            alt={'username'}
                            radius={200}
                            size={'7rem'}
                            style={{border: '5px solid'}}
                        />
                    </Center>

                    <Title size={'1.25rem'} mt={'md'} mb={0}>
                        username123
                    </Title>
                    <Title size={'0.7rem'} fw={'100'} c={'gray'} mt={0}>
                        EST. 2024.05
                    </Title>
                    <Divider m={'lg'}/>
                </div>
                <Stack justify={'center'} align={'center'} gap={5}>
                    <Group justify={'space-between'} w={'50%'}>
                        <Text mb={'.1rem'} size={'sm'} fw={'bold'}>21 </Text>
                        <Text mb={'.1rem'} size={'sm'}>Followers</Text>
                    </Group>
                    <Group justify={'space-between'} w={'50%'}>
                        <Text mb={'.1rem'} size={'sm'} fw={'bold'}>28 </Text>
                        <Text mb={'.1rem'} size={'sm'}>Following</Text>
                    </Group>
                    <Group justify={'space-between'} w={'50%'}>
                        <Text mb={'.1rem'} size={'sm'} fw={'bold'}>101</Text>
                        <Text mb={'.1rem'} size={'sm'}>Likes</Text>
                    </Group>
                    <Group justify={'space-between'} w={'50%'}>
                        <Text mb={'.1rem'} size={'sm'} fw={'bold'}>1,100</Text>
                        <Text mb={'.1rem'} size={'sm'}>Points</Text>
                    </Group>
                </Stack>
                <div>
                    <Divider m={'lg'}/>
                    <Stack justify={'center'} align={'center'}>
                        <div>
                            <Group mb={'sm'}>
                                <ActionIcon variant='transparent' radius="0">
                                    <IconAward style={{width: '100%', height: '100%'}} stroke={1.5}/>
                                </ActionIcon>
                                <Title size={'0.9rem'}>Beta Tester</Title>
                            </Group>
                            <Group mb={'sm'}>
                                <ActionIcon variant='transparent' color='red' radius="0">
                                    <IconSunglasses style={{width: '100%', height: '100%'}} stroke={1.5}/>
                                </ActionIcon>
                                <Title size={'0.9rem'}>Stylish</Title>
                            </Group>
                            <Group mb={'sm'}>
                                <ActionIcon variant='transparent' color='orange' radius="0">
                                    <IconBuildingCommunity style={{width: '100%', height: '100%'}}
                                                           stroke={1.5}/>
                                </ActionIcon>
                                <Title size={'0.9rem'}>Moderator</Title>
                            </Group>
                        </div>
                    </Stack>
                </div>
            </Card>

            <Card padding="lg" radius={'xl'} mt={'md'} className={classes.card} >
                <Group gap={5} ml={'md'}>
                    <NavLink
                        fw={'600'}
                        label={'Overview'}
                        style={{
                            'font-family' : sen.style.fontFamily
                        }}
                    />
                    <NavLink
                        fw={'600'}
                        label={'Posts'}
                        style={{
                            'font-family' : sen.style.fontFamily
                        }}
                    />
                    <NavLink
                        fw={'600'}
                        label={'Orders'}
                        style={{
                            'font-family' : sen.style.fontFamily
                        }}
                    />
                    <NavLink
                        fw={'600'}
                        label={'Favorites'}
                        style={{
                            'font-family' : sen.style.fontFamily,
                        }}
                    />
                    <NavLink
                        fw={'600'}
                        label={'OOTDs'}

                        style={{
                            'font-family' : sen.style.fontFamily
                        }}
                    />
                    <NavLink
                        fw={'600'}
                        label={'Setting'}
                        style={{
                            'font-family' : sen.style.fontFamily
                        }}
                    />
                </Group>
            </Card>
        </Group>
    )
}