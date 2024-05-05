import {upperFirst, useToggle} from '@mantine/hooks';
import {useForm} from '@mantine/form';
import {
    Anchor,
    Button,
    Checkbox,
    Divider,
    Group,
    Paper,
    PaperProps,
    PasswordInput,
    Space,
    Stack,
    Text,
    TextInput,
} from '@mantine/core';
import {GoogleButton} from './GoogleButton';
import {TwitterButton} from './TwitterButton';
import React from "react";

export function AuthenticationForm(props: PaperProps) {
    const [type, toggle] = useToggle(['login', 'register']);
    const form = useForm({
        initialValues: {
            email: '',
            name: '',
            password: '',
            terms: true,
        },

        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
            password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
        },
    });

    return (
        <Paper  p="xl" withBorder {...props}>
            <Text size="lg" fw={500}>
                Welcome to Motif, {type} with
            </Text>
            <Space h="xl" />


                <GoogleButton radius="xl">Google</GoogleButton>
                <br/>
                <TwitterButton radius="xl">Twitter</TwitterButton>

            <Divider label="Or continue with email" labelPosition="center" my="xl" />

            <form onSubmit={form.onSubmit(() => {})}>
                <Stack>
                    {type === 'register' && (
                        <>
                            <Text>Name</Text>
                            <TextInput
                                placeholder="Your name"
                                value={form.values.name}
                                onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                                
                            />
                        </>
                    )}

                    <Text>Email</Text>
                    <TextInput
                        required
                        placeholder="Your Email"
                        value={form.values.email}
                        onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                        error={form.errors.email && 'Invalid email'}
                        
                    />

                    <Text>Password</Text>
                    <PasswordInput
                        required
                        placeholder="Your password"
                        value={form.values.password}
                        onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                        error={form.errors.password && 'Password should include at least 6 characters'}
                        
                    />

                    {type === 'register' && (
                        <Checkbox
                            label="I accept terms and conditions"
                            checked={form.values.terms}
                            onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
                        />
                    )}
                </Stack>

                <Group justify="space-between" mt="xl">
                    <Anchor component="button" type="button" c="dimmed" onClick={() => toggle()} size="xs">
                        {type === 'register'
                            ? 'Already have an account? Login'
                            : "Don't have an account? Register"}
                    </Anchor>
                    <Button type="submit" radius="xl">
                        {upperFirst(type)}
                    </Button>
                </Group>
            </form>
        </Paper>
    );
}