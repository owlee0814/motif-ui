import {Prisma} from "@prisma/client";

const userSocialWithRelations = Prisma.validator<Prisma.UserSocialDefaultArgs>()({
    include: {
        user: true
    },
})

const postWithRelations = Prisma.validator<Prisma.PostDefaultArgs>()({
    include: {
        community: true,
        images: true,
        author: {
            include : {
                user: true
            }
        },
        _count: {
            select: { comments: true, likes: true },
        },
    },
})

const commentWithRelations = Prisma.validator<Prisma.CommentDefaultArgs>()({
    include: {
        replies : true,
        author: {
            include : {
                user: true
            }
        },
    },
})

export type Flip = {
    horizontal: boolean;
    vertical: boolean;
};

export type PixelCrop = {
    x: number;
    y: number;
    width: number;
    height: number;
};

export type FileWithPreview = {
    file: File;
    preview: string;
};

export type PostWithRelations = Prisma.PostGetPayload<typeof postWithRelations>

export type CommentWithRelations = Prisma.CommentGetPayload<typeof commentWithRelations>

export type UserWithRelations = Prisma.UserSocialGetPayload<typeof userSocialWithRelations>