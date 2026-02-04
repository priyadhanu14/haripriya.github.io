const monthFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric"
});

export function formatMonthYear(value: string): string {
  if (value === "present") {
    return "Present";
  }

  const [year, month] = value.split("-").map(Number);
  if (!year || !month) {
    return value;
  }

  return monthFormatter.format(new Date(Date.UTC(year, month - 1, 1)));
}

export function formatRange(start: string, end?: string): string {
  const startLabel = formatMonthYear(start);
  const endLabel = end ? formatMonthYear(end) : "Present";
  return `${startLabel} - ${endLabel}`;
}
