export const normolizedDataImage = data => {
  return data.map(({ id, avg_color, alt, src }) => ({
    id,
    avg_color,
    alt,
    src,
  }));
};
