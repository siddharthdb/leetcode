class Stack {
    constructor() {
        this.data = [];
        this.top = 0;
    }

    push(element) {
        this.data[this.top] = element;
        this.top = this.top + 1;
    }

    length() {
        return this.top;
    }

    peek() {
        return this.data[this.top - 1];
    }

    isEmpty() {
        return this.top === 0;
    }

    pop() {
        if (this.isEmpty() === false) {
            this.top = this.top - 1;
            return this.data.pop(); // removes the last element
        }
    }

    print() {
        var top = this.top - 1; // because top points to index where new    element to be inserted
        while (top >= 0) { // print upto 0th index
            console.log(this.data[top]);
            top--;
        }
    }

    reverse() {
        this._reverse(this.top - 1);
    }
    _reverse(index) {
        if (index != 0) {
            this._reverse(index - 1);
        }
        console.log(this.data[index]);
    }
}

var candycrush = (s) => {

    let stack = new Stack();
    let sMap = new Map();

    for (let i = 0; i < s.length; i++) {
        stack.push(s[i])

        if (stack.peek() === s[i]) {
            if (sMap.get(s[i])) {
                sMap.set(s[i], sMap.get(s[i]) + 1)
            } else {
                sMap.set(s[i], 1)
            }

            if (sMap.get(s[i]) === 3) {
                while (stack.peek() === s[i]) {
                    stack.pop();
                }
            }
        }
    }

    let result = "";
    stack.reverse();
    while (!stack.isEmpty()) {
        result += stack.pop();
    }

    return result;

}

console.log(candycrush("abccbba"));