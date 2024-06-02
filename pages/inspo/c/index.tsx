import React from "react";
import {Button, Center, Container, Divider, Grid, Group, Space, Text, Title} from "@mantine/core";
import InspoCard from "../../../component/Community/InspoCard/InspoCard";
import Link from "next/link";
import {useSession} from "next-auth/react";
import {GetServerSideProps} from "next";
import {getServerSession, Session} from "next-auth";
import {authOptions} from "../../api/auth/[...nextauth]";
import {PostWithRelations} from "../../../entities/Types";

interface InsposProps {
    inspos : PostWithRelations[],
    userSession: Session
}

export default function Inspos(props: InsposProps) {
    const { status } = useSession()

    return (
        <>
            <Container size="90%" maw={{ base: '1550px', md: '1050px', lg: '1550px'}}>
                <Title size={'1.5rem'} fw={700}>
                    Inspirations from you
                </Title>
                <Group justify={'space-between'}>
                    <Text size="sm" pt={'md'} pb={'md'}>
                        Discover fit pics from the community
                    </Text>
                    <Button variant="filled" size="sm" radius="0" bg={'black'}
                            component={Link}
                            href={status === 'authenticated' ? "../inspo/create" : '../../api/auth/signin'}
                    >
                        Upload
                    </Button>
                </Group>
                <Divider size="xl" pb={'lg'} />
                <Space h={'lg'}/>
                <Center>
                    <Grid gutter={'xs'}>
                    {
                        props.inspos.map( (inspo, index) => (
                        <Grid.Col key={index} span={{base: 12, md: 6, lg: 3}}>
                            <InspoCard post={inspo} session={props.userSession}/>
                        </Grid.Col>
                    ))}
                    </Grid>
                </Center>
            </Container>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getServerSession(context.req, context.res, authOptions);
    const { community } = context.query;
    const page = 1;

    let inspos = [];

    try {
        const postsResponse = await fetch(`${process.env.API_URL}/api/inspos?page=${page}&limit=12`, { cache: 'no-store' });
        if (postsResponse.ok) {
            inspos = await postsResponse.json();
        }

    } catch (error) {
        console.error(error);
    }

    return {
        props: {
            inspos,
            userSession: session,
        }
    };
};