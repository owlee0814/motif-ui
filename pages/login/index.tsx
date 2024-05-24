import React from "react";
import {getProviders, signIn} from "next-auth/react"
import {GetServerSidePropsContext, InferGetServerSidePropsType} from "next";
import {getServerSession} from "next-auth";
import {authOptions} from "../api/auth/[...nextauth]"


export default function Login({
                                  providers,
                              }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <>
            {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                    <button onClick={() => signIn(provider.id, { redirectTo: "/" })}>
                        Sign in with {provider.name}
                    </button>
                </div>
            ))}
            {/*<Space h="xl" />*/}
            {/*<Container size='xs' >*/}
            {/*    <AuthenticationForm/>*/}
            {/*</Container>*/}
        </>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await getServerSession(context.req, context.res, authOptions)

    // If the user is already logged in, redirect.
    // Note: Make sure not to redirect to the same page
    // To avoid an infinite loop!
    if (session) {
        return { redirect: { destination: "/home" } }
    }

    const providers = await getProviders()

    return {
        props: { providers: providers ?? [] },
    }
}