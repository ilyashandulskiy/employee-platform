export const formatDate = (date) => {
  try {
    const body = date.split('T')[0].split('-');
    const year = body[0];
    const day = body[2];
    const month = body[1];

    if (!year || !day || !month) return '';
    return `${day}.${month}.${year}`;
  } catch (err) {
    return date;
  }
};
