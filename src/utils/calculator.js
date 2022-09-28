export function haversineDistance(
  [oldLatitude, oldLongitude],
  [latitude, longitude]
) {
  const toRadian = (angle) => (Math.PI / 180) * angle
  const distance = (a, b) => (Math.PI / 180) * (a - b)
  const RADIUS_OF_EARTH_IN_KM = 6371

  const dLat = distance(latitude, oldLatitude)
  const dLon = distance(longitude, oldLongitude)

  lat1 = toRadian(oldLatitude)
  lat2 = toRadian(latitude)

  // Haversine Formula
  const a =
    Math.pow(Math.sin(dLat / 2), 2) +
    Math.pow(Math.sin(dLon / 2), 2) * Math.cos(lat1) * Math.cos(lat2)
  const c = 2 * Math.asin(Math.sqrt(a))

  let finalDistance = RADIUS_OF_EARTH_IN_KM * c

  console.log(finalDistance + 'haversine2')
  return finalDistance
}
