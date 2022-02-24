function areYouPlayingBanjo(name) {
    return `${name} ` +
        `${name[0].toUpperCase() === 'R' ? 'plays banjo' : 'does not play banjo'}`;
}

console.log(areYouPlayingBanjo("Adam")); // "Adam does not play banjo"
console.log(areYouPlayingBanjo("Paul")); // "Paul does not play banjo"
console.log(areYouPlayingBanjo("Ringo")); // "Ringo plays banjo"
console.log(areYouPlayingBanjo("bravo")); // "bravo does not play banjo"
console.log(areYouPlayingBanjo("rolf")); // "rolf plays banjo"