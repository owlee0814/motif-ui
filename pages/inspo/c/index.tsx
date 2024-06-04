import React from "react";
import {Button, Center, Container, Divider, Grid, Group, Space, Text, Title} from "@mantine/core";
import InspoCard from "../../../component/Community/InspoCard/InspoCard";
import Link from "next/link";
import {useSession} from "next-auth/react";
import {GetServerSideProps} from "next";
import {getServerSession, Session} from "next-auth";
import {authOptions} from "../../api/auth/[...nextauth]";
import {PostWithRelations} from "../../../entities/Types";
import InspoDetail from "../../../component/InspoDetail/inspoDetail";
import {useRouter} from "next/router";
import {useDisclosure} from "@mantine/hooks";

interface InsposProps {
    inspos : PostWithRelations[],
    userSession: Session
}

export default function Inspos(props: InsposProps) {
    const [opened, { open, close }] = useDisclosure(true);
    const { status } = useSession()
    const router = useRouter()

    return (
        <>
            {
                router.query.image &&
                <InspoDetail opened={opened} inspoId={Number(router.query.image)} userSession={props.userSession} closeModal={close} loading={true}/>
            }
            <Container size="90%" maw={{ base: '1550px', md: '1050px', lg: '1550px'}}>
                <Title size={'1.5rem'} fw={700}>
                    Inspirations from you
                </Title>
                <Group justify={'space-between'}>
                    <Text size="sm" pt={'md'} pb={'md'}>
                        Discover fit pics from the community
                    </Text>
                    <Button darkHidden variant="filled" size="sm" radius="0" mb={'md'} bg={'black'}
                            component={Link}
                            href={status === 'authenticated' ? "../inspo/create" : '../../api/auth/signin'}
                    >
                        Upload
                    </Button>
                    <Button lightHidden variant="outline" size="sm" radius="0" mb={'md'} color={'var(--mantine-color-dark-1)'}
                            component={Link}
                            href={status === 'authenticated' ? "../inspo/create" : '../../api/auth/signin'}
                    >
                        Upload
                    </Button>
                </Group>
                <Divider pb={'lg'} color={'light-dark(rgb(220,220,220), rgb(59,59,59))'} />
                <Space h={'lg'}/>
                <Center>
                    <Grid gutter={'xs'}>
                    {
                        props.inspos.map( (inspo, index) => (
                        <Grid.Col key={index} span={{base: 12, md: 6, lg: 3}}>
                            <Link href={`/inspo/c?image=${inspo.id}`} onClick={open} scroll={false}>
                                <InspoCard post={inspo} session={props.userSession} />
                            </Link>
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
        const postsResponse = await fetch(`${process.env.API_URL}/api/inspos?page=${page}&limit=100`, { cache: 'no-store' });
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