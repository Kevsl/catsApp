export function addHours(minutes) {
  const newDate = new Date();
  newDate.setMinutes(newDate.getMinutes() + minutes);
  return newDate;
}
export function secondsToHms(d) {
  d = Number(d);
  let h = Math.floor(d / 3600);
  let m = Math.floor((d % 3600) / 60);
  let s = Math.floor((d % 3600) % 60);
  let hDisplay = h >= 0 ? h + (h == 1 ? ' H ' : ' H ') : '';
  let mDisplay = m >= 0 ? m + (m == 1 ? ' M ' : ' M ') : '';
  let sDisplay = s >= 0 ? s + (s == 1 ? ' S' : ' S') : '';
  return hDisplay + mDisplay + sDisplay;
}
export function secondsToHm(d) {
  d = Number(d);
  let h = Math.floor(d / 3600);
  let m = Math.floor((d % 3600) / 60);
  let hDisplay = h >= 0 ? h + (h == 1 ? ' H ' : ' H ') : '';
  let mDisplay = m >= 0 ? m + (m == 1 ? ' M ' : ' M ') : '';
  return hDisplay + mDisplay;
}
export function hoursPercentage(hours, hoursMax) {
  return Math.floor((100 * hours) / hoursMax);
}
export function secondsToH(d) {
  d = Number(d);
  let h = Math.floor(d / 3600);
  return h;
}
