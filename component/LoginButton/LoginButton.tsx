import {signIn, signOut, useSession} from "next-auth/react"
import {ActionIcon, Button, Group, Popover, Stack} from "@mantine/core";
import Link from "next/link";
import {IconLogin, IconThumbUpFilled, IconUser, IconUserCircle} from "@tabler/icons-react";
import React from "react";

export default function LoginButton() {
    const { data: session, status } = useSession()
    if (session) {
        return (
            <Group>
                <Popover width={125} position="bottom" withArrow shadow="md">
                    <Popover.Target>
                        {/*<Button fw={'400'} variant={'transparent'} style={{color: 'inherit'}} size={'sm'}>{(session.user?.name)?.toUpperCase()}</Button>*/}
                        <ActionIcon size={'1.5rem'} variant='transparent' color="gray">
                            <IconUserCircle style={{width: '100%', height: '100%'}} stroke={1.5}/>
                        </ActionIcon>
                    </Popover.Target>
                    <Popover.Dropdown>
                        <Stack>
                            <Button
                                fw={'400'}
                                variant={'transparent'}
                                style={{
                                    color: 'inherit',
                                }}
                            >
                                orders
                            </Button>
                            <Button
                                fw={'400'}
                                variant={'transparent'}
                                style={{color: 'inherit'}}
                            >
                                favorites
                            </Button>
                            <Button
                                fw={'400'}
                                variant={'transparent'}
                                style={{color: 'inherit'}}
                                onClick={() => signOut({ callbackUrl: '/home', redirect:true })}
                            >
                                sign out
                            </Button>
                        </Stack>
                    </Popover.Dropdown>
                </Popover>
            </Group>
        )
    }
    return (
        <Group>
            <ActionIcon
                variant='transparent'
                color="gray"
                onClick={() => signIn()}
            >
                <IconLogin style={{width: '100%', height: '100%'}} stroke={1.5}/>
            </ActionIcon>
        </Group>
    )
}