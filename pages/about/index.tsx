import {Center, Container, Title, Text} from "@mantine/core";

export default function index() {
    return (
        <Container>
            <Center mt={'6rem'} mb={'1rem'}>
                <Title size={'3rem'}> About MOTIF </Title>
            </Center>
            <Center>
                <Title size={'1.25rem'}> mo·​tif (moh-teef) </Title>
            </Center>
            <Center mb={'5rem'}>
                <Title size={'1rem'} fw={'200'}>a recurring theme, idea, or form in a design or artistic work</Title>
            </Center>
            <Title mt={'xl'}> Discovery </Title>
            <Text mt={'lg'}>
                Discovery is part of the human endeavor. Motif was born to help our community fall in love with something new. Diverge from something off the shelf and have the courage to find your next favorite brand
            </Text>
            <Title mt={'xl'}> Theme </Title>
            <Text mt={'lg'}>
                Every brand carries a unique character and aura. Motif helps to bring a single recurring theme (or motif) through a brand’s pieces in hopes to give a different perspective on what could truly be.
            </Text>
            <Title mt={'xl'}> Community </Title>
            <Text mt={'lg'} mb={'6rem'}>
                Share what you find and hear what others are saying. Conversation sparks inspiration and our community is a think tank to showcase what you believe works or doesn’t
            </Text>
        </Container>
    );
}