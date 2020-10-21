export const trimText = (text, limit) => {
    return text.length <= limit ? text : text.slice(0, limit) + "...";
}

export const formatDate = (date) => {
    const returnData = new Date(date);
    const options = {year: 'numeric', month: 'narrow', day: 'numeric'};

    return returnData.toLocaleDateString('ja-JP', options)
}