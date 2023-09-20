export function formatDate(inputDate) {
    const date = new Date(inputDate);

    const options = {
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'UTC',
    };

    return date.toLocaleString('ru-RU', options);
}
