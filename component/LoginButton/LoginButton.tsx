import {signIn, signOut, useSession} from "next-auth/react"
import {Button, Group, Popover, Stack} from "@mantine/core";
import Link from "next/link";

export default function LoginButton() {
    const { data: session, status } = useSession()
    if (session) {
        return (
            <Group gap={0}>
                <Popover width={200} position="bottom" withArrow shadow="md">
                    <Popover.Target>
                        <Button fw={'400'} variant={'transparent'} style={{color: 'inherit'}} size={'sm'}>{(session.user?.name)?.toUpperCase()}</Button>
                    </Popover.Target>
                    <Popover.Dropdown>
                        <Stack>
                            <Link href={''}>a</Link>
                            <Link href={''}>a</Link>
                            <Link href={''}>a</Link>
                        </Stack>
                    </Popover.Dropdown>
                </Popover>
                <Button
                    fw={'400'}
                    variant={'transparent'}
                    style={{color: 'inherit'}}
                    onClick={() => signOut({ callbackUrl: '/home', redirect:true })}>
                    LOGOUT
                </Button>
            </Group>
        )
    }
    return (
        <Group>
            <Button
                fw={'400'}
                variant={'transparent'}
                style={{color: 'inherit'}}
                onClick={() => signIn()}>
                LOGIN
            </Button>
        </Group>
    )
}