/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var map = {}
var key = Math.random(Number.MAX_VALUE);

var encode = function(longUrl) {
    while (map[key]) {
        key = Math.random(Number.MAX_VALUE);
    }
    map[key] = longUrl;
    return "http://tinyurl.com" + key;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    return map[shortUrl.replace("http://tinyurl.com", "")];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */