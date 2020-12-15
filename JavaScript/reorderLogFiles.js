/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    let digitLogs = [], wordLogs = [];
    for (let log of logs) {
        let arr = log.split(" ");
        if (isNaN(arr[1])) wordLogs.push({id: arr.slice(0,1), body: arr.slice(1).join(" ")});
        else digitLogs.push(log);
    }
    wordLogs.sort((log1,log2) => {
        if (log1.body < log2.body) return -1;
        if (log1.body > log2.body) return 1;
        if (log1.id < log2.id) return -1;
        if (log1.id > log2.id) return 1;
    })
    let sortedWordLogs = wordLogs.map(log => `${log.id} ${log.body}`);
    return sortedWordLogs.concat(digitLogs);
};