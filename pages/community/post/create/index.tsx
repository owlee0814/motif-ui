import {Link, RichTextEditor} from '@mantine/tiptap';
import {useEditor} from '@tiptap/react';
import Highlight from '@tiptap/extension-highlight';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';
import CharacterCount from '@tiptap/extension-character-count';
import {Button, Card, Container, Grid, Group, Select, Space, Text, TextInput, Title} from "@mantine/core";
import React, {useState} from "react";
import {CommunityNavBar} from "../../../../component/Community/CommunityNavBar/CommunityNavBar";
import classes from "../../../../component/Community/CommunityNavBar/CommunityNavBar.module.css";
import {Community} from ".prisma/client";
import {useRouter} from "next/router";
import PostImageDropZone from "../../../../component/Community/PostImageDropzone/PostImageDropzone";
import {getServerSession, Session} from "next-auth";
import {authOptions} from "../../../api/auth/[...nextauth]";
import {GetServerSideProps} from "next";

interface PostCreateProps {
    communities: Community[],
    userSession: Session
}

export default function Index(props: PostCreateProps) {
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

    const router = useRouter();
    const [selectedCommunity, setSelectedCommunity] = useState('');
    const [postTitle, setPostTitle] = useState('');
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [titleError, setTitleError] = useState('');
    const [selectCommunityError, setSelectCommunityError] = useState('');
    const [editorError, setEditorError] = useState('');

    const handlePost = async () => {
        const content = editor?.getText() || '';

        console.log(selectedCommunity)

        if(selectedCommunity === '') {
            setSelectCommunityError('Please select a community.');
            return;
        }

        if (!postTitle.trim()) {
            setTitleError('Title is required.');
            return;
        }

        if (!content.trim()) {
            setEditorError('Content is required.');
            return;
        }

        const formData = new FormData();

        selectedFiles.forEach((file, index) => {
            formData.append(`files[${index}]`, file);
        });

        formData.append('data', JSON.stringify({
            communityId: Number(selectedCommunity),
            postTitle: postTitle,
            authorId: props.userSession?.user.id,
            content: JSON.stringify(editor?.getJSON()),
            text: content
        }));

        try {
            const response = await fetch('/api/post', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                throw new Error('Failed to create post');
            }

            const resJson = await response.json();
            router.push(`../post/${resJson.id}`);
        } catch (error) {
            console.error('Post creation error:', error);
            setEditorError('Failed to create post. Please try again later.');
        }
    };

    return (
        <Container size="90%" maw={{ base: '1550px', md: '1050px', lg: '1550px' }}>
            <Space h={'xl'} />
            <Grid gutter={'xl'}>
                <Grid.Col span={{ sm: 0, md: 0, lg: 3 }}>
                    <CommunityNavBar communities={props.communities} currentCommunity={'All'}/>
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
                                props.communities
                                    .filter((community) => community.name !== 'All' && community.name !== 'Announcements')
                                    .map((community) => {
                                        return { value: community.id.toString(), label: community.label }
                                    })
                            }
                            onChange={(_value) => {
                                setSelectCommunityError('')
                                if (_value) setSelectedCommunity(_value) }
                            }
                            error={selectCommunityError}
                        />
                        <Space h={'md'} />
                        <TextInput size='xl' error={titleError} onInput={() => setTitleError('')} placeholder={'Title'} onChange={(e) => setPostTitle(e.target.value)} />
                        <Space h={'xl'} />
                        <PostImageDropZone onFilesSelected={(files) => setSelectedFiles(files)} />
                        <Space h={'xl'} />
                        <RichTextEditor editor={editor} onInput={() => setEditorError('')}>
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
                        {editorError && <div style={{ color: 'red' }}>{editorError}</div>}
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

export const getServerSideProps: GetServerSideProps = async (context) => {
    try {
        const session = await getServerSession(context.req, context.res, authOptions);

        if (!session) {
            return {
                redirect: {
                    destination: '/auth/signin',
                    permanent: false,
                },
            };
        }

        const response = await fetch(`${process.env.API_URL}/api/post`, {
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const initialCommunities : Community[] = await response.json();

        return {
            props: {
                communities: initialCommunities,
                userSession: session,
            }
        };
    } catch (error) {
        console.error('Fetch error:', error);
        return {
            props: {
                communities: []
            }
        };
    }
}