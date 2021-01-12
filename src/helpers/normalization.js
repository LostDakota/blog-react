export default function NormalizePostSummary(post) {
    let sub = post.content.replace(/<(?:.|\n)*?>/gm, '').substring(0, 256);
    post.content = `${sub.substr(0, Math.min(sub.length, sub.lastIndexOf(" ")))}`;

    let newDate = new Date(post.createdAt);
    post.createdAt = `${newDate.getMonth() + 1}/${newDate.getDate()}/${newDate.getFullYear()}`;

    return post;
}