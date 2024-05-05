import {
    ActionIcon, Anchor,
    Breadcrumbs,
    Button,
    Card,
    Container,
    Grid,
    Group, Image,
    NavLink,
    Space,
    Text,
    Textarea,
    Title
} from "@mantine/core";
import {IconBookmarkFilled, IconShare, IconThumbUpFilled} from "@tabler/icons-react";
import React from "react";
import PostComment from "./comment";
import {CommunityNavBar} from "../../../../component/CommunityNavBar/CommunityNavBar";

export default function PostDetail() {
    const items = [
        { title: 'All', href: '/community' },
        { title: 'Lounge', href: '/community' }
    ].map((item, index) => (
        <Anchor href={item.href} key={index} style={{color: 'inherit.inherit'}} fw={'800'}>
            {item.title}
        </Anchor>
    ));

    return (
        <Container size={'98%'}>
            <Grid>
                <Grid.Col span={2}>
                    <CommunityNavBar/>
                </Grid.Col>
                <Grid.Col span={10}>
                    <Container size={'90%'}>
                    <Breadcrumbs separator=">" separatorMargin="xs" mt="md">
                        {items}
                    </Breadcrumbs>
                    <Space h={'md'}/>
                    <Title>Post Title</Title>
                    <Space h={'lg'}/>
                    <Group justify={'space-between'}>
                        <Group>
                            <Text size={'sm'}>username</Text>
                            <Text size={'sm'}>posted 01/01/2024</Text>
                        </Group>
                        <Group>
                            <Text fw={'800'}>4 Likes</Text>
                            <ActionIcon variant='transparent' color="gray" size="1.5rem" radius="0">
                                <IconThumbUpFilled style={{width: '100%', height: '100%'}} stroke={1.5}/>
                            </ActionIcon>
                            <ActionIcon variant='transparent' color="gray" size="1.5rem" radius="0">
                                <IconBookmarkFilled style={{width: '100%', height: '100%'}} stroke={1.5}/>
                            </ActionIcon>
                            <ActionIcon variant='transparent' color="gray" size="1.5rem" radius="0">
                                <IconShare style={{width: '100%', height: '100%'}} stroke={1.5}/>
                            </ActionIcon>
                        </Group>
                    </Group>
                    <Space h='xl'/>
                    <Space h={'lg'}/>
                    <Image
                        src={'https://media.discordapp.net/attachments/723908387032531015/1234891624467664957/DSCF0140.jpg?ex=663261f2&is=66311072&hm=f9a404053638a8e13a7d047ea6ef0a88842871c6890e44b4c89febf401eeb004&=&format=webp&width=934&height=1402'}
                        h={500}
                        w={800}
                        radius={"lg"}
                        fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                    />
                    <Space h={'lg'}/>
                    <Text>Aliquam sem et tortor consequat id porta nibh venenatis. Quisque sagittis purus sit amet.
                        Maecenas
                        ultricies mi eget mauris pharetra et ultrices. Lectus magna fringilla urna porttitor rhoncus
                        dolor
                        purus. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Enim sit amet venenatis
                        urna cursus
                        eget nunc scelerisque viverra. Enim tortor at auctor urna nunc id cursus metus aliquam. Tellus
                        cras
                        adipiscing enim eu turpis egestas pretium aenean pharetra. At tempor commodo ullamcorper a lacus
                        vestibulum sed arcu non. Senectus et netus et malesuada fames ac turpis egestas maecenas. Non
                        blandit
                        massa enim nec dui.</Text>
                    <Space h='lg'/>
                    <hr/>
                    <Space h='sm'/>
                    <div style={{'width' : '90%'}}>
                    <Title size={'md'}>2 comments</Title>
                    <Space h='lg'/>
                    <Textarea
                        variant="filled"
                        size="md"
                        radius="xs"
                        placeholder="Add a comment"
                    />
                    <Space h='xs'/>
                    <Group justify={'flex-end'}>
                        <Button variant="filled" size="sm" radius="xs" bg={'black'}>Cancel</Button>
                        <Button variant="filled" size="sm" radius="xs" bg={'black'}>Post</Button>
                    </Group>

                    <Space h='lg'/>
                    <PostComment username={'olee0814'}
                                 avatarImgUrl={'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png'}
                                 comment={'this is an example comment, blah blah bah'}/>
                    <Card variant={'filled'} bg={'rgb(241, 243, 245)'}>
                        <Grid>
                            <Grid.Col span={0.4}/>
                            <Grid.Col span={11.6}>
                                <PostComment username={'oteh'} avatarImgUrl={''} comment={'This is a reply'}/>
                            </Grid.Col>
                            <Grid.Col span={0.4}/>
                            <Grid.Col span={11.6}>
                                <PostComment username={'oteh'} avatarImgUrl={''} comment={'This is a second reply'}/>
                            </Grid.Col>
                        </Grid>
                    </Card>
                    <PostComment username={'testuser01'}
                                 avatarImgUrl={'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png'}
                                 comment={'Enim sit amet venenatis urna cursus eget nunc scelerisque viverra. Enim tortor at auctor urna nunc id cursus metus aliquam. '}/>
                    <PostComment username={'oteh'} avatarImgUrl={''}
                                 comment={'Senectus et netus et malesuada fames ac turpis egestas maecenas. Non blandit massa enim nec dui.'}/>
                    </div>
                    </Container>
                </Grid.Col>
            </Grid>
        </Container>
    );
}