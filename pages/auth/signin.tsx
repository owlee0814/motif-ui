import {getCsrfToken, getProviders, signIn, useSession} from 'next-auth/react'
import classes from './signin.module.css'
import {Anchor, Button, Card, Center, Paper, PasswordInput, Space, Text, TextInput, Title} from "@mantine/core";
import {useRouter} from "next/router";
import React, {useEffect} from "react";
import {useForm} from "@mantine/form";
import Link from 'next/link';
import {CtxOrReq} from 'next-auth/client/_utils';

// @ts-ignore
const Signin = ({providers}) => {
    const {data: session, status} = useSession()
    const router = useRouter()

    useEffect(() => {
        if (status === 'authenticated') {
            router.push('../home')
        }
    }, [status]);

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            username: '',
            password: '',
        }
    });


    return (
        <div className={classes.wrapper}>
            <Paper bg='rgb(24,24,27)' className={classes.form} radius={0} p={30}>
                <Space h={'2rem'}/>
                <Link style={{textDecoration: 'none'}} href={'/home'}>
                    <Title size={'3rem'} c='white' order={2} ta="center" mt={125} mb={175}>
                        MOTIF
                    </Title>
                </Link>
                <Center>
                    <Card radius={'md'} bg={'white'} w={'60%'}>
                        <form onSubmit={form.onSubmit((values) => {
                            signIn('credentials', {username: values['username'], password: values['password']})
                        })}>
                            <TextInput
                                key={form.key('username')}
                                label="Username"
                                placeholder="Your username"
                                size="md"
                                {...form.getInputProps('username')}
                            />
                            <PasswordInput
                                key={form.key('password')}
                                label="Password"
                                placeholder="Your password"
                                mt="md"
                                size="md"
                                {...form.getInputProps('password')}
                            />
                            {providers &&
                                Object.values(providers).map(provider => {
                                    return (
                                        // @ts-ignore
                                        <div key={provider.name}>
                                            <Button
                                                fullWidth mt="xl"
                                                size="md"
                                                variant="filled"
                                                radius="xs"
                                                bg='rgb(24,24,27)'
                                                type="submit"
                                            >
                                                Login
                                            </Button>
                                        </div>
                                    )
                            })}

                        </form>
                        <Text ta="center" mt="md">
                            Don&apos;t have an account?{' '}
                            <Anchor<'a'> href="#" fw={700} onClick={(event) => event.preventDefault()}>
                                Register
                            </Anchor>
                        </Text>
                    </Card>
                </Center>
            </Paper>
        </div>
    )
}

export default Signin

export async function getServerSideProps(context: CtxOrReq | undefined) {
    const providers = await getProviders()
    const csrfToken = await getCsrfToken(context)
    return {
        props: {
            providers,
            csrfToken
        },
    }
}