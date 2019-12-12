export interface SimpleDate {
  month: number;
  year: number;
}

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

const ONE_DAY = 1000 * 60 * 60 * 24; // one day in milliseconds

export function getMonthName(month: number) {
  if (month < 1 || month > 12) {
    return "Frittembruary";
  }

  return months[month - 1];
}

export const getFirstDayOfMonth = ({ month, year }: SimpleDate) =>
  new Date(year, month - 1);

// returns the number of days between two dates
export const compareDates = (date1: Date, date2: Date) =>
  Math.floor((date2.getTime() - date1.getTime()) / ONE_DAY);

export const compareToToday = (date: Date) => compareDates(new Date(), date);

export function getNextMonth({ month, year }: SimpleDate) {
  if (month === 12) {
    return { month: 1, year: year + 1 };
  }

  return { month: month + 1, year };
}

export function hasMonthStarted(date: SimpleDate) {
  const monthBeginning = getFirstDayOfMonth(date);

  return compareToToday(monthBeginning) <= 0;
}

export function hasMonthEnded(date: SimpleDate) {
  const nextMonth = getNextMonth(date);

  const nextMonthBeginning = getFirstDayOfMonth(nextMonth);

  return compareToToday(nextMonthBeginning) < 0;
}

export function getDaysLeft(date: SimpleDate) {
  const nextMonth = getNextMonth(date);

  const nextMonthBeginning = getFirstDayOfMonth(nextMonth);

  return compareToToday(nextMonthBeginning);
}
