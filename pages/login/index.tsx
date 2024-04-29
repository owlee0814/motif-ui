import React from "react";
import {Grid, GridCol, Image, Title, Text, Center, Container, Space} from "@mantine/core";
import {JournalItem} from "../../component/JournalItem/JournalItem";
import {AuthenticationForm} from "../../component/AuthenticationForm/AuthenticationForm";

export default function Login() {
    return (
        <>
            <Space h="xl" />
            <Container size='xs' >
                <AuthenticationForm/>
            </Container>
        </>
    )
}