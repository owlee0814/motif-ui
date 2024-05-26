import {Link, RichTextEditor} from '@mantine/tiptap';
import {useEditor} from '@tiptap/react'
import Highlight from '@tiptap/extension-highlight'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import Superscript from '@tiptap/extension-superscript'
import SubScript from '@tiptap/extension-subscript'
import {Button, Card, Container, Grid, Group, Select, Space, TextInput, Title} from "@mantine/core";
import React, {useEffect} from "react";
import {CommunityNavBar} from "../../../../component/Community/CommunityNavBar/CommunityNavBar";
import classes from "../../../../component/Community/ProfileNavBar/ProfileNavBar.module.css";
import {useSession} from "next-auth/react";
import {Community} from ".prisma/client";

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
        ]
    });

    const { data } = useSession()
    const [selectedCommunity, setSelectedCommunity] = React.useState('');
    const [postTitle, setPostTitle] = React.useState('');
    const [communities, setCommunities] = React.useState<Community[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/api/prisma', {
                    method: 'GET'
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json(); // Parse the response as JSON
                setCommunities(data); // Log the JSON data
            } catch (error) {
                console.error('Fetch error:', error);
            }
        }
        fetchData()
    }, []);

    return (
        <Container size={'98%'}>
            <Space h={'xl'}/>
            <Grid>
                <Grid.Col span={2}>
                    <CommunityNavBar/>
                </Grid.Col>
                <Grid.Col span={6.5}>
                    <Group justify={'space-between'}>
                        <Title>Create a Post</Title>
                    </Group>
                    <Card radius={'xl'} padding={'xl'} mt={'1rem'} mr={'2rem'} className={classes.card}>
                        <Title size={'xs'} mb={'sm'}>Select a Community</Title>
                        <Select
                            data={
                                communities
                                    .filter((community) => community.name !== 'All' && community.name !== 'Announcements')
                                    .map((community) => {
                                        return { value: community.id.toString(), label: community.name }
                                    })
                            }
                            onChange={(_value) => { if(_value) setSelectedCommunity(_value)}}
                        />
                        <Space h={'md'}/>
                        <TextInput size='xl' placeholder={'Title'} onChange={(e) => setPostTitle(e.target.value)}/>
                        <Space h={'xl'}/>
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
                            <RichTextEditor.Content style={{minHeight:'20vh'}}/>
                        </RichTextEditor>
                        <Space h={'md'}/>
                    </Card>
                    <Space h={'md'}/>
                    <Group justify={'flex-end'}>
                        <Button mt={'0.2rem'} variant="filled" size="md" radius="xl" bg={'black'}
                            onClick={async () => {
                                await fetch('/api/prisma', {
                                    method: 'POST',
                                    body: JSON.stringify({
                                        communityId: Number(selectedCommunity),
                                        postTitle: postTitle,
                                        authorId: data?.user.id,
                                        content: JSON.stringify(editor?.getJSON()),
                                        text: editor?.getText()
                                    })
                                })
                            }}
                            >Post</Button>
                    </Group>
                </Grid.Col>
            </Grid>
        </Container>
    );
}