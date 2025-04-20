class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    remove(node) {
        node.next.prev = node.prev;
        node.prev.next = node.next;
    }
    add(node) {
        node.prev = this.tail.prev;
        node.next = this.tail;
        this.tail.prev.next = node;
        this.tail.prev = node;
    }

    get(key) {
        if (!this.cache.has(key)) {
            return -1;
        }
        const node = this.cache.get(key);
        this.remove(node);
        this.add(node);
        return node.value;
    }
    post(key, value) {
        if (this.cache.has(key)) {
            this.remove(this.cache.get(key));
        }
        const newNode = new Node(key, value);
        this.add(newNode);
        this.cache.set(key, newNode);
        if (this.cache.size > this.capacity) {
            const firstKey = this.head.next.key;
            this.remove(this.head.next);
            this.cache.delete(firstKey);
        }
    }
}

// Example usage:
const lruCache = new LRUCache(2);
lruCache.post(1, 1); // Add key 1 with value 1
lruCache.post(2, 2); // Add key 2 with value 2
console.log(lruCache.get(1)); // Access key 1, should return 1
lruCache.post(3, 3); // Add key 3 with value 3, evicts key 2
console.log(lruCache.get(2)); // Access key 2, should return -1 (not found)
lruCache.post(4, 4); // Add key 4 with value 4, evicts key 1
console.log(lruCache.get(1)); // Access key 1, should return -1 (not found)
console.log(lruCache.get(3)); // Access key 3, should return 3
console.log(lruCache.get(4)); // Access key 4, should return 4