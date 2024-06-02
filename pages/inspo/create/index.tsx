import { Avatar, Button, Card, Container, Grid, Group, Text, Stack, Textarea, TextInput, Title } from '@mantine/core';
import React, { useState } from "react";
import PostInspoDropzone from "../../../component/Community/PostInspoDropzone/PostInspoDropzone";
import { useSession } from "next-auth/react";
import { FileWithPreview } from "../../../entities/Types";
import {useRouter} from "next/router";

export default function InspoUpload() {
    const [selectedFile, setSelectedFile] = useState<FileWithPreview | null>(null);
    const [caption, setCaption] = useState('');
    const [top, setTop] = useState('');
    const [bottom, setBottom] = useState('');
    const [shoes, setShoes] = useState('');
    const [accessories, setAccessories] = useState('');
    const { data } = useSession();
    const router = useRouter();

    const handleUpload = async () => {
        if (!selectedFile) {
            alert("Please select a file");
            return;
        }

        const formData = new FormData();
        const content = JSON.stringify({
            caption,
            outfit: {
                top,
                bottom,
                shoes,
                accessories
            }
        });

        const postData = {
            postTitle: "",
            content,
            authorId: data?.user.id,
            communityId: 7, //inspo community
            text: ""
        };

        formData.append('data', JSON.stringify(postData));
        formData.append('files[0]', selectedFile.file);

        try {
            const response = await fetch('/api/post', {
                method: 'POST',
                body: formData
            });

            if(response.ok) {
                router.push(`../inspo/c`);
            }

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
        } catch (error) {
            console.error('Error uploading post:', error);
        }
    };

    return (
        <Container size={'65%'}>
            <Title order={2} mb={'xl'} mt={'xl'}>Upload an Inspo</Title>
            <Stack>
                <Grid>
                    <Grid.Col span={8.5}>
                        <PostInspoDropzone onFileSelected={(file) => setSelectedFile(file)} />
                    </Grid.Col>
                    <Grid.Col span={3.5}>
                        <Card p={'lg'} pb={'xl'}>
                            <Group>
                                <Avatar
                                    src={data?.user.image}
                                    alt={data?.user.username}
                                    radius="xl"
                                    color="indigo"
                                />
                                <Title size={'xs'}>
                                    {data?.user.username}
                                </Title>
                            </Group>
                            <Textarea
                                mt={'lg'}
                                size='md'
                                placeholder={'Write a caption...'}
                                variant={'filled'}
                                autosize
                                minRows={12}
                                value={caption}
                                onChange={(event) => setCaption(event.currentTarget.value)}
                            />
                            <Group mt='xs' justify={'flex-end'}>
                                <Text size={'xs'}>{caption.length}/1000</Text>
                            </Group>
                            <Title size={'.9rem'} mt={'lg'}>Share your outfit (Optional)</Title>
                            <TextInput mt={'lg'} label={'Top'} value={top} onChange={(event) => setTop(event.currentTarget.value)} />
                            <TextInput mt={'sm'} label={'Bottom'} value={bottom} onChange={(event) => setBottom(event.currentTarget.value)} />
                            <TextInput mt={'sm'} label={'Shoes'} value={shoes} onChange={(event) => setShoes(event.currentTarget.value)} />
                            <TextInput mt={'sm'} label={'Accessories'} value={accessories} onChange={(event) => setAccessories(event.currentTarget.value)} />
                        </Card>
                    </Grid.Col>
                </Grid>
                <Button radius={0} bg={'black'} onClick={handleUpload}>Upload</Button>
            </Stack>
        </Container>
    );
}