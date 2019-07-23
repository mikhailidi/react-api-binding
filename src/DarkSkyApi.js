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
     * @returns {Promise<void>}
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
        let uri = this.baseUri;
        uri = uri.replace('$$latitude', latitude);
        uri = uri.replace('$$longitude', longitude);

        return this.proxy + uri;
    }
}

export default DarkSkyApi;
