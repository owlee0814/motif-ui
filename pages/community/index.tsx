import React, {useEffect} from "react";
import {Container, Grid, Group, Select, Space, Title} from "@mantine/core";
import {PostCard} from "../../component/PostCard/PostCard";
import {CommunityNavBar} from "../../component/CommunityNavBar/CommunityNavBar";
import {samplePosts} from "../../entities/Post";
import {usePathname} from "next/navigation";

export default function Home() {
    const pathName = usePathname()
    const [communityTitle, setCommunityTitle] = React.useState('');

    useEffect(()=>{
        setCommunityTitle(pathName);
    }, [pathName]);

    return (
        <>
            <Container size={'98%'}>
                <Grid>
                    <Grid.Col span={2}>
                        <CommunityNavBar/>
                    </Grid.Col>
                    <Grid.Col span={9.5}>
                        <Space h={'xs'}/>
                        <Group justify={'space-between'}>
                            <Title>
                                {communityTitle}
                            </Title>
                            <Select
                                style={{'padding-top' : '10px'}}
                                placeholder="Hot"
                                data={['Hot', 'New', 'Likes']}
                                variant='unstyled'
                                w={'10%'}
                                comboboxProps={{transitionProps: {transition: 'pop', duration: 200}}}
                            />
                        </Group>
                        <Space h={'lg'}/>
                        <Grid>
                            {samplePosts.map((post, i) => (
                                <PostCard post={post} key={post.id}/>
                            ))}
                        </Grid>
                    </Grid.Col>
                </Grid>
            </Container>
        </>
    )
}