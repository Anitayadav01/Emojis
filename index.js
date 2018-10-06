

const emoji = require('node-emoji');
let emojis = ["cherry_blossom","rose","hibiscus","sunflower","cherries","raised_hand","ocean","lollipop","leaves","custard"];
function loopEmoji(arr) {
arr.forEach((element)=>{
    console.log(emoji.get(element));
})
}
  loopEmoji(emojis);