export function formatDate(inputDate: string): string {
  const date = new Date(inputDate);

  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const year = date.getFullYear();

  let hour = date.getHours();
  const minute = ("0" + date.getMinutes()).slice(-2);
  const amPM = hour >= 12 ? "PM" : "AM";

  hour = hour % 12 || 12;

  const formattedDate = `${month}/${day}/${year} ${hour}:${minute} ${amPM}`;

  return formattedDate;
}
