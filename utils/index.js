export const sortByDate = (a, b) => {
  // sorting by date in descending order, if you want the oldest first, then do a.frontmatter.date first
  return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
};
