import { showSuccess } from "../api/responses";

export const formatDate = (date: string | Date) => {
  const dateObj = new Date(date);

  const formatedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(dateObj);

  return formatedDate;
};

export const getErrorMessage = (error: unknown) => {
  if (error instanceof Error) {
    return error.message;
  }
  return "Something went wrong, please try again.";
};

export const copyToClipboard = (text: string, message: string) => {
  navigator.clipboard
    .writeText(text)
    .then(() => showSuccess(message))
    .catch((err) => console.error("Failed to copy:", err));
};
