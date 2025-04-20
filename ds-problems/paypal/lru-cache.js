

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key) {
        if(!this.cache.has(key)){
            return -1;
        }
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }

    put(key, value){
        if(this.cache.has(key)){
            this.cache.delete(key);
        }
        this.cache.set(key, value);
        if(this.cache.size > this.capacity){
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }
    }
}
// Create an instance of LRUCache with a capacity of 2
const lruCache = new LRUCache(2);

// Use the put method to add key-value pairs
lruCache.put(1, 1); // Cache is {1=1}
lruCache.put(2, 2); // Cache is {1=1, 2=2}

// Use the get method to retrieve values
console.log(lruCache.get(1)); // Returns 1, Cache is {2=2, 1=1}

// Add another key-value pair, causing the least recently used (key 2) to be evicted
lruCache.put(3, 3); // Cache is {1=1, 3=3}

// Try to get a value for a key that was evicted
console.log(lruCache.get(2)); // Returns -1 (not found)

// Add another key-value pair, causing the least recently used (key 1) to be evicted
lruCache.put(4, 4); // Cache is {3=3, 4=4}

// Retrieve values for existing keys
console.log(lruCache.get(1)); // Returns -1 (not found)
console.log(lruCache.get(3)); // Returns 3, Cache is {4=4, 3=3}
console.log(lruCache.get(4)); // Returns 4, Cache is {3=3, 4=4}