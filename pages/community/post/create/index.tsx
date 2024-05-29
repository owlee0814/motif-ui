import {Link, RichTextEditor} from '@mantine/tiptap';
import {useEditor} from '@tiptap/react';
import Highlight from '@tiptap/extension-highlight';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';
import CharacterCount from '@tiptap/extension-character-count';
import {Button, Card, Container, Grid, Group, Select, Space, TextInput, Title} from "@mantine/core"
import React, {useEffect, useState} from "react"
import {CommunityNavBar} from "../../../../component/Community/CommunityNavBar/CommunityNavBar"
import classes from "../../../../component/Community/CommunityNavBar/CommunityNavBar.module.css"
import {useSession} from "next-auth/react"
import {Community} from ".prisma/client"
import {useRouter} from "next/router"
import PostImageDropZone from "../../../../component/Community/PostImageDropzone/PostImageDropzone"

export default function Index() {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            Link,
            Superscript,
            SubScript,
            Highlight,
            TextAlign.configure({ types: ['heading', 'paragraph'] }),
            CharacterCount.configure({
                limit: 10000
            }),
        ]
    });

    const { data } = useSession()
    const router = useRouter()
    const [selectedCommunity, setSelectedCommunity] = useState('')
    const [postTitle, setPostTitle] = useState('')
    const [communities, setCommunities] = useState<Community[]>([])
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/api/post', {
                    method: 'GET'
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json()
                setCommunities(data)
            } catch (error) {
                console.error('Fetch error:', error);
            }
        }
        fetchData()
    }, []);

    const handlePost = async () => {
        const formData = new FormData();

        if (selectedFile) {
            formData.append('file', selectedFile); // Append the file only if it is not null
        }

        formData.append('data', JSON.stringify({
            communityId: Number(selectedCommunity),
            postTitle: postTitle,
            authorId: data?.user.id,
            content: JSON.stringify(editor?.getJSON()),
            text: editor?.getText()
        }));

        try {
            const response = await fetch('/api/post', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                throw new Error('Failed to create post');
            }

            router.push('../c/all');
        } catch (error) {
            console.error('Post creation error:', error);
        }
    };

    return (
        <Container size="90%" maw={{ base: '1550px', md: '1050px', lg: '1550px' }}>
            <Space h={'xl'} />
            <Grid gutter={'xl'}>
                <Grid.Col span={{ sm: 0, md: 0, lg: 3 }}>
                    <CommunityNavBar />
                </Grid.Col>
                <Grid.Col span={{ sm: 12, md: 12, lg: 9 }}>
                    <Group justify={'space-between'}>
                        <Title>Create a Post</Title>
                    </Group>
                    <Card padding={'xl'} mt={'2rem'} mr={'2rem'} className={classes.card}>
                        <Title size={'xs'} mb={'sm'}>Select a Community</Title>
                        <Select
                            size={'md'}
                            data={
                                communities
                                    .filter((community) => community.name !== 'All' && community.name !== 'Announcements')
                                    .map((community) => {
                                        return { value: community.id.toString(), label: community.label }
                                    })
                            }
                            onChange={(_value) => { if (_value) setSelectedCommunity(_value) }}
                        />
                        <Space h={'md'} />
                        <TextInput size='xl' placeholder={'Title'} onChange={(e) => setPostTitle(e.target.value)} />
                        <Space h={'xl'} />
                        <PostImageDropZone onFileSelected={(file) => setSelectedFile(file)} />
                        <Space h={'xl'} />
                        <RichTextEditor editor={editor}>
                            <RichTextEditor.Toolbar sticky stickyOffset={60}>
                                <RichTextEditor.ControlsGroup>
                                    <RichTextEditor.Bold />
                                    <RichTextEditor.Italic />
                                    <RichTextEditor.Underline />
                                    <RichTextEditor.Strikethrough />
                                    <RichTextEditor.ClearFormatting />
                                    <RichTextEditor.Highlight />
                                    <RichTextEditor.Code />
                                </RichTextEditor.ControlsGroup>

                                <RichTextEditor.ControlsGroup>
                                    <RichTextEditor.H1 />
                                    <RichTextEditor.H2 />
                                    <RichTextEditor.H3 />
                                    <RichTextEditor.H4 />
                                </RichTextEditor.ControlsGroup>

                                <RichTextEditor.ControlsGroup>
                                    <RichTextEditor.Blockquote />
                                    <RichTextEditor.Hr />
                                    <RichTextEditor.BulletList />
                                    <RichTextEditor.OrderedList />
                                    <RichTextEditor.Subscript />
                                    <RichTextEditor.Superscript />
                                </RichTextEditor.ControlsGroup>

                                <RichTextEditor.ControlsGroup>
                                    <RichTextEditor.Link />
                                    <RichTextEditor.Unlink />
                                </RichTextEditor.ControlsGroup>

                                <RichTextEditor.ControlsGroup>
                                    <RichTextEditor.AlignLeft />
                                    <RichTextEditor.AlignCenter />
                                    <RichTextEditor.AlignJustify />
                                    <RichTextEditor.AlignRight />
                                </RichTextEditor.ControlsGroup>

                                <RichTextEditor.ControlsGroup>
                                    <RichTextEditor.Undo />
                                    <RichTextEditor.Redo />
                                </RichTextEditor.ControlsGroup>
                            </RichTextEditor.Toolbar>
                            <RichTextEditor.Content style={{ minHeight: '20vh' }} />
                        </RichTextEditor>
                        <Space h={'md'} />
                    </Card>
                    <Space h={'md'} />
                    <Group justify={'flex-end'}>
                        <Button mt={'0.2rem'} variant="filled" size="md" radius="xl" bg={'black'}
                                onClick={handlePost}
                        >Post</Button>
                    </Group>
                </Grid.Col>
            </Grid>
        </Container>
    );
}