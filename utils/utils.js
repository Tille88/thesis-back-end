function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min+1)+min);
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}
  
module.exports = {randomInt, shuffleArray}