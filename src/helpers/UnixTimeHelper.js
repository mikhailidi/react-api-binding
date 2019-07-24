/**
 * Convert unix timestamp to h:i format.
 * Ideally I would create one method/function that takes the desired format (h:i:s) as a second parameter and transforms timestamp to it.
 *
 * @param unixTimeStamp
 * @returns {string}
 * @example convertToHourAndMinutes(1563911919) will return 21:58
 */
export function convertToHourAndMinutes(unixTimeStamp) {
    let date = new Date(unixTimeStamp * 1000);

    // Make sure the date is a valid Date object
    validateDate(date);

    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();

    return hours + ':' + minutes.substr(-2);
}

/**
 * Validate JS Date object.
 *
 * @param d
 * @throws Error
 */
function validateDate(d) {
    if (!isValidDate(d)) {
        // Don't really know what are the best practices for error handling in JS
        throw new Error();
    }
}

/**
 * Assert that Object is a valid JS Date.
 *
 * @param d
 * @returns {boolean}
 */
function isValidDate(d) {
    return d instanceof Date && !isNaN(d);
}
