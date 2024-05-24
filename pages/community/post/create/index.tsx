import {Link, RichTextEditor} from '@mantine/tiptap';
import {useEditor} from '@tiptap/react'
import Highlight from '@tiptap/extension-highlight'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import Superscript from '@tiptap/extension-superscript'
import SubScript from '@tiptap/extension-subscript'
import {Button, Card, Container, Grid, Group, Select, Space, TextInput, Title} from "@mantine/core";
import React from "react";
import {CommunityNavBar} from "../../../../component/CommunityNavBar/CommunityNavBar";
import classes from "../../../../component/ProfileNavBar/ProfileNavBar.module.css";
import {sampleCommunities} from "../../../../entities/Community";
import {useSession} from "next-auth/react";

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
                                sampleCommunities
                                    .filter((community) => community.title !== 'All' && community.title !== 'Announcements')
                                    .map((community) => {
                                        return community.title;
                                    })
                            }
                            onSelect={(selection) => { setSelectedCommunity(selection.currentTarget.value) }}
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
                                // console.log(selectedCommunity)
                                // console.log(postTitle)
                                // console.log(JSON.stringify(editor?.getJSON()));
                                await fetch('/api/prisma', {
                                    method: 'POST',
                                    body: JSON.stringify({
                                        selectedCommunity: selectedCommunity,
                                        postTitle: postTitle,
                                        authorId: data?.user.id,
                                        content: JSON.stringify(editor?.getJSON())
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