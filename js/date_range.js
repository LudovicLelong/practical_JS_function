const YEAR = 0
const MONTHS = 1
const DAYS = 2
const HOURS = 3
const MINUTES = 4
const SECONDS = 5


/**
 * 
 * @param {Date} date 
 * @param {Object} interval 
 * @returns 
 */
const addInterval = function(date, interval) {
    const parts = [
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds()
    ]
    for (const [unit, value] of Object.entries(interval)) {
        parts[unit] += value
    }
    return new Date(...parts)
}

const today = new Date();
const future = addInterval(today, { 
    [MONTHS]: 3,
    [DAYS]: 1,
    [MINUTES]: 3,
})

console.log(today)
console.log(future)

/**
 * Displayed the number of seconds between the current date and the future date
 */
console.log(future.getTime() - Date.now() / 1000)