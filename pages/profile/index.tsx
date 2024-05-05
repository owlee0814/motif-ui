import {Center, Container, Group, Title} from "@mantine/core";
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";
import {useEffect} from "react";


export default function index() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data: session, status } = useSession()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        if (status === "unauthenticated") {
            try {
                router.push('auth/signin')
            }
            catch (error) {
                console.log(error)
            }
        }
    }, []);

    return (
        (status === "unauthenticated") ? (
            <Container>
                <Center h={600}>
                    <Title> PLEASE LOGIN TO ACCESS </Title>
                </Center>
            </Container>
            ) : (
            <Container>
                <div style={{height: '50rem'}}>
                    <Group style={{paddingTop : '20rem'}} justify={'center'}>
                        <Title>ACCESS GRANTED</Title>
                    </Group>
                    <Group justify={'center'}>
                        <Title>UNDER CONSTRUCTION</Title>
                    </Group>
                </div>
            </Container>
        )
    );
}