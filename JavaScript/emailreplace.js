var numUniqueEmails = function(emails) {
    var result = [];

    emails.forEach(function(e) {
        var email = e.split("@");

        var lname = email[0].split("+")[0].replace(/\./g, '');
        var addr = lname + "@" + email[1];

        if (!result.includes(addr)) {
            result.push(addr);
        }
    })

    return result.length;
};

console.log(numUniqueEmails(["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"]))