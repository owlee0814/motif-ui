import React from "react";
import {Container, Space} from "@mantine/core";
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