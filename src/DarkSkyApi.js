class DarkSkyApi {
    /**
     * Would store it in .env instead!
     *
     * @type {string}
     */
    static key = '2531b31fcac013a100c0bbf4eb586d5f';

    /**
     *
     * @type {string}
     */
    static proxy = 'https://cors-anywhere.herokuapp.com/';

    /**
     *
     * @type {string}
     */
    static baseUri = `https://api.darksky.net/forecast/${this.key}/$$latitude,$$longitude?exclude=hourly,daily,flags&units=ca`;

    /**
     *
     * @param latitude
     * @param longitude
     * @returns {Promise<*>}
     */
    static async getWeather(latitude, longitude) {
        let result;
        await fetch(this.getUri(latitude, longitude))
            .then(results => {
                return results.json();
            }).then(data => {
                if (data.error) {
                    return;
                }

                result = data;
            });

        return result;
    }

    /**
     *
     * @param latitude
     * @param longitude
     * @returns {string}
     */
    static getUri = (latitude, longitude) => {
        return this.proxy +
            this.baseUri
                .replace('$$latitude', latitude)
                .replace('$$longitude', longitude);
    }
}

export default DarkSkyApi;
