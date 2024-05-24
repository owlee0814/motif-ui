// AuthWrapper.tsx
import React, {PropsWithChildren, useEffect, useState} from "react";
import {signOut, useSession} from "next-auth/react";
import {
    ActionIcon,
    AppShell,
    Avatar,
    Button,
    Center,
    Container,
    FileButton,
    Group,
    Image,
    Space,
    TextInput,
    Title
} from "@mantine/core";
import {TitleHeader} from "../TitleHeader/TitleHeader";
import {useForm} from "@mantine/form";
import {Dropzone,  IMAGE_MIME_TYPE} from "@mantine/dropzone";
import {IconUpload} from "@tabler/icons-react";

export default function AuthWrapper({ children }: PropsWithChildren<{}>) {
    const { data, status, update } = useSession();
    const allowedCharsRegex = /^[a-zA-Z0-9.]+$/;
    const [image, setImage] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>();

    useEffect(() => {
        setPreview(data?.user.image || null)
    }, [data]);

    const form = useForm({
        initialValues: {
            username: ''
        },
        validate: {
            username: (val) => {
                if (val.length < 4) return 'Username should include at least 4 characters';
                if (val.length > 30) return 'Username cannot exceed 30 characters';
                if (!allowedCharsRegex.test(val)) return "Username can only contain letters, numbers, and periods";
                return null;
            },
        },
    });

    const handleImageChange = (file: File | null) => {
        if (file) {
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        } else {
            setImage(null);
            setPreview(null);
        }
    };


    const handleSubmit = async () => {
        try {
            const res = await fetch("/api/username", {
                method: 'POST',
                body: JSON.stringify({
                    username: form.values.username,
                    id: data?.user.id
                })
            }).then(() => {
                update({
                    username: form.values.username
                })
            })
        } catch (error) {
            console.error('Error setting username:', error);
        }
    };

    if (status === "authenticated" && data?.user.id === data?.user.username) {
        return (
            <>
                <AppShell.Header
                    withBorder={false}
                    style={{
                        backgroundImage: 'linear-gradient(to bottom, rgb(0,0,0) 45%, rgb(0,0,0,0) 45%)',
                        backgroundSize: 'cover',
                    }}
                >
                    <div style={{ padding: 30, paddingTop: 10 }}>
                        <TitleHeader titleFontSize={scrollY > 0 ? '1.15rem' : '1.4rem'} />
                    </div>
                </AppShell.Header>
                <AppShell.Main>
                    <Container size={'50%'}
                        style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{width: '100%'}}>
                            <Group justify={'space-between'}>
                                <Title>Lets get started</Title>
                                <Button onClick={() => signOut()} variant="outline" style={{marginTop: 20}}>
                                    Sign out
                                </Button>
                            </Group>
                            <Space h={'xl'}/>
                            <form onSubmit={form.onSubmit(async () => handleSubmit())}>
                                <Title size={'lg'} pb={'md'}>Set Your Username</Title>
                                <TextInput
                                    required
                                    placeholder="Enter your username"
                                    value={form.values.username}
                                    onChange={(event) => form.setFieldValue('username', event.currentTarget.value)}
                                    error={form.errors.username}
                                />
                                <Title size={'lg'} pt={'md'} pb={'md'}>First Name</Title>
                                <TextInput/>
                                <Title size={'lg'} pt={'md'} pb={'md'}>Last Name</Title>
                                <TextInput/>
                                <Title size={'lg'} pt={'md'} pb={'md'}>Update Profile Image</Title>
                                <Center style={{ marginBottom: 20 }}>
                                    <div style={{ position: 'relative' }}>
                                        <Avatar
                                            src={preview || undefined}
                                            alt="Profile Preview"
                                            size={'8rem'}
                                            radius={'8rem'}
                                            style={{border: '5px solid'}}
                                        />
                                        <FileButton onChange={handleImageChange} accept="image/*">
                                            {(props) => (
                                                <ActionIcon
                                                    color="blue"
                                                    radius="xl"
                                                    variant="filled"
                                                    size={'lg'}
                                                    style={{
                                                        position: 'absolute',
                                                        bottom: -5,
                                                        right: -5,
                                                    }}
                                                    {...props}
                                                >
                                                    <IconUpload size={16} />
                                                </ActionIcon>
                                            )}
                                        </FileButton>
                                    </div>
                                </Center>
                                <Space h={'xl'}/>
                                <Button type="submit" fullWidth={true} bg={'black'}>
                                    Update
                                </Button>
                            </form>
                        </div>
                    </Container>
                </AppShell.Main>
            </>
        )
    }

    return <>{children}</>;
};