import prisma from "../../../prisma/prisma";
import s3 from "../../../awsConfig";
import { v4 as uuidv4 } from 'uuid';

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const file = formData.get('file');
        const body = JSON.parse(formData.get('data') as string);

        if (!body) {
            return new Response("Missing required fields", { status: 400 });
        }

        if (!(file instanceof File)) {
            return new Response("Invalid file", { status: 400 });
        }

        if(file) {
            const fileName = `${uuidv4()}-${file.name}`;
            const arrayBuffer = await file.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);

            const params = {
                Bucket: process.env.S3_BUCKET_NAME as string,
                Key: fileName,
                Body: buffer,
                ContentType: file.type,
                ACL: 'public-read'
            };

            const uploadResult = await s3.upload(params).promise();
            const imageUrl = uploadResult.Location;

            const post = await prisma.post.create({
                data: {
                    title: body.postTitle,
                    content: body.content,
                    authorId: body.authorId,
                    communityId: body.communityId,
                    text: body.text,
                    images: {
                        create: [
                            {
                                imgUrl: imageUrl
                            }
                        ]
                    }
                }
            });
            return new Response(JSON.stringify(post), { status: 200 });
        }
        else {
            const post = await prisma.post.create({
                data: {
                    title: body.postTitle,
                    content: body.content,
                    authorId: body.authorId,
                    communityId: body.communityId,
                    text: body.text
                }
            });
            return new Response(JSON.stringify(post), { status: 200 });
        }
    } catch (error) {
        console.error(error);
        return new Response("Internal Server Error", { status: 500 });
    }
}

export async function GET(req: Request) {
    try {
        const communities = await prisma.community.findMany();
        return new Response(JSON.stringify(communities), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response("Internal Server Error", { status: 500 });
    }
}
