const assert = require('assert')
const formatTime = require('../helpers/formatTime')

const secondsInMinute = 60
const secondsInHour = secondsInMinute * 60
const secondsInDay = secondsInHour * 24
const secondsInWeek = secondsInDay * 7
const secondsInMonth = secondsInDay * 30
const secondsInYear = secondsInMonth * 12

assert(formatTime(0) == 'now')
assert(formatTime(secondsInYear) == '1 year ago')
assert(formatTime(secondsInYear * 3) == '3 years ago')
assert(formatTime(secondsInYear - 1) == '11 months ago')
assert(formatTime(secondsInWeek * 5) == '1 month ago')
assert(formatTime(secondsInWeek * 4) == '4 weeks ago')
assert(formatTime(secondsInWeek - 1) == '6 days ago')
assert(formatTime(secondsInHour) == '1 hour ago')
assert(formatTime(secondsInHour - 1) == '59 minutes ago')
assert(formatTime(secondsInMinute - 1) == '59 seconds ago')
assert(formatTime(-1) == 'now')
assert(formatTime(Math.pow(2, 1000)) == 'too many years ago')
