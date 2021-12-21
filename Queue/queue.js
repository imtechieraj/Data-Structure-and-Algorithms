module.exports = class Queue {
    constructor() {
        this.items = []
    }

    enQueue(item) {
        this.items.push(item)
    }

    deQueue() {
        return this.items.shift()
    }

    peek() {
        if (this.items.length > 0) {
            return this.items[0]
        } return null
    }

    getSize() {
        return this.items.length;
    }

    isEmpty() {
        return this.getSize() === 0;
    }
}
