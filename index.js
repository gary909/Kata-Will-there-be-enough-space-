function enough(cap, on, wait) {
    if (cap - on >= wait) {
        return 0;
    } else {
        return wait - (cap - on);
    }
}

console.log(enough(10, 5, 5)); // Return 0
console.log(enough(100, 60, 50)); // Return 10
console.log(enough(20, 5, 5)); // Return 0
console.log(enough(72, 38, 39)); // Return 5