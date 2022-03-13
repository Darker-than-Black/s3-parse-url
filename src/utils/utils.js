export const copyToClipboard = async (str) => {
    if (navigator.clipboard) {
        await navigator.clipboard.writeText(str);
    }

    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};