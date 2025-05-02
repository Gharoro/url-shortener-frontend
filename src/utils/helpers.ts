export const formatDate = (date: string | Date) => {
  const dateObj = new Date(date);

  const formatedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(dateObj);

  return formatedDate;
};
