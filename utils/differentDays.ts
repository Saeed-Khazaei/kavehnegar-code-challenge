
export const diffDays = (end: Date, start: Date) => {
  const endDate = new Date(end);
  const startDate = new Date(start);
  return Math.ceil((Math.abs(+endDate - +startDate)) / (1000 * 60 * 60 * 24))
}; 