function formatTime(offset) {
  const secondsInMinute = 60
  const secondsInHour = secondsInMinute * 60
  const secondsInDay = secondsInHour * 24
  const secondsInWeek = secondsInDay * 7
  const secondsInMonth = secondsInDay * 30
  const secondsInYear = secondsInMonth * 12
  
  const units = [
    ['year', secondsInYear],
    ['month', secondsInMonth],
    ['week', secondsInWeek],
    ['day', secondsInDay],
    ['hour', secondsInHour],
    ['minute', secondsInMinute],
    ['second', 1]
  ]

  if (offset > Math.pow(2, 30))
    return 'too many years ago'
    
  for (let unit of units) {
    let [name, value] = unit
    if (offset >= value) {
      let number = Math.floor(offset / value)
      return `${number} ${name}${number > 1 ? 's' : ''} ago`
    }
  }

  return 'now'
}

module.exports = formatTime
