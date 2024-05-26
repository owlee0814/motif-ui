import prisma from "../../../prisma/prisma";

export async function GET(req: Request) {
    try {
        const posts = await prisma.post.findMany({
            include: {
                author: {
                    include: {
                        user: true
                    }
                },
                community: true,
            },
        });

        const headers = new Headers({
            "Content-Type": "application/json",
            "Cache-Control": "no-cache, no-store, max-age=0, must-revalidate"
        });

        if (!posts) {
            return new Response("Post not found", { status: 404 });
        }
        return new Response(JSON.stringify(posts), {
            status: 200,
            headers: headers
        });
    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}