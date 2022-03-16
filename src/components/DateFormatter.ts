const relativeDateFormat = new (Intl as any).RelativeTimeFormat(
  window.navigator.language,
  {
    numeric: "auto",
  }
);
const longDateFormat = new Intl.DateTimeFormat(window.navigator.language, {
  month: "long",
  year: "numeric",
  day: "numeric",
});
const hour = 3_600_000;
const day = 86_400_000;
const week = 604_800_000;
const month = 2_678_400_000;
const quarter = 7_862_400_000;
const year = 31_536_000_000;
const today = new Date();
const getRelativeTimeDifference = (
  date: Date
): { value: number; unit: any } => {
  const currentTime = Math.floor(new Date().getTime() / 1000);
  const diff = currentTime - date.getTime();
  console.log("time diff", diff);
  switch (true) {
    case diff < day:
      return { value: diff / hour, unit: "hour" };
    case diff < week:
      return { value: diff / day, unit: "day" };
    case diff < month:
      return { value: diff / week, unit: "week" };
    case diff < quarter:
      return { value: diff / month, unit: "month" };
    case diff < year:
      return { value: diff / quarter, unit: "quarter" };
    default:
      return { value: diff / year, unit: "year" };
  }
};
export const formatRelativeDate = (date: Date) => {
  if (!date) {
    return;
  }
  const { value, unit } = getRelativeTimeDifference(date);
  return relativeDateFormat.format(Math.round(value * -1), unit);
};
const formatFullDate = (date: Date) => longDateFormat.format(date);
