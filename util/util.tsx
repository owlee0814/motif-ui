import {CommentWithRelations} from "../entities/Types";

export function formatDate(dateString: string) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
}

export function getBadgeColor(tag: number | undefined) {
    let tagColor = ''
    switch (tag) {
        case 1:
            tagColor = 'blue';
            break;
        case 2:
            tagColor = 'red';
            break;
        case 3:
            tagColor = 'green';
            break;
        case 4:
            tagColor = 'purple';
            break;
        case 5:
            tagColor = 'pink';
            break;
        case 6:
            tagColor = 'black';
            break;
        default:
            tagColor = 'gray';
    }
    return tagColor;
}

export function timeAgo(timestamp: Date | string | undefined) {
    const now = new Date();
    // @ts-ignore
    const secondsPast = Math.floor((now - new Date(timestamp)) / 1000);

    if (secondsPast < 300) {
        return `Just Now`;
    } else if (secondsPast < 3600) {
        const minutes = Math.floor(secondsPast / 60);
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (secondsPast < 86400) {
        const hours = Math.floor(secondsPast / 3600);
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (secondsPast < 172800) { // less than 2 days
        return 'Yesterday';
    } else if (secondsPast < 2592000) {
        const days = Math.floor(secondsPast / 86400);
        return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (secondsPast < 31104000) {
        const months = Math.floor(secondsPast / 2592000);
        return `${months} month${months > 1 ? 's' : ''} ago`;
    } else {
        const years = Math.floor(secondsPast / 31104000);
        return `${years} year${years > 1 ? 's' : ''} ago`;
    }
}

export function convertDateToYearMonth(isoString: string | Date) {
    const date = new Date(isoString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed, so we add 1
    return `${year}.${month}`;
}

export const countComments = (comments: CommentWithRelations[]): number => {
    let count = comments.length;
    for (const comment of comments) {
        if (comment.replies) {
            // @ts-ignore
            count += countComments(comment.replies);
        }
    }
    return count;
};

export function convertDateToTimeMonthYear(isoString: string | Date) {
    const date = new Date(isoString);

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm  ' : 'am  ';

    const formattedHours = hours % 12 || 12; // Convert 0 to 12 for midnight
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${formattedHours}:${formattedMinutes} ${ampm} · ${month} ${day} ${year}`;
}