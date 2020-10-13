/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function(transactions) {
    const invalid = new Set();
    const info = [];

    for (let trans of transactions) {
        let [name, time, price, city] = trans.split(",");
        info.push({ name, time, price, city, raw: trans });
    }

    info.sort((a, b) => Number(a.time) - Number(b.time));

    for (let infoEl of info) {
        if (infoEl.price > 1000) {
            invalid.add(infoEl.raw);
        }
    }

    for (let i = 0; i < info.length - 1; i++) {
        let curr = info[i];
        let nextIdx = i + 1;

        while (nextIdx < info.length && (info[nextIdx].time - curr.time <= 60)) {
            if (curr.name === info[nextIdx].name && curr.city !== info[nextIdx].city) {
                invalid.add(curr.raw);
                invalid.add(info[nextIdx].raw)
            }
            nextIdx++;
        }
    }
    return Array.from(invalid);
};