export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
] as const;

export function getMonthName(month: number) {
  if (month < 1 || month > 12) {
    return "Frittembruary";
  }

  return months[month - 1];
}
