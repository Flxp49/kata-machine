type Node<T> = {
    value: T,
    next?: Node<T>
}
export default class Stack<T> {
    public length: number;
    private top?: Node<T>;

    constructor() {
        this.length = 0;
        this.top = undefined;
    }

    push(item: T): void {
        const node = { value: item } as Node<T>;
        if (!this.top) {
            this.top = node;
        } else {
            node.next = this.top;
            this.top = node;
        }
        this.length++;
    }
    pop(): T | undefined {
        if (!this.top) {
            return undefined;
        }
        else {
            const val = this.top.value;
            this.top = this.top.next;
            this.length--;
            return val;
        }
    }
    peek(): T | undefined {
        return this.top?.value;
    }
}