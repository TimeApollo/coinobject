var coin = {
    state: 0,
    flip: function() {
        // randomly set this.state to be either 0 or 1
        return coin.state = Math.round(Math.random());
    },
    toString: function() {
        // return “H” or “T” depending on whether this.state is 0 or 1
        if(this.state === 0){
            return "H";
        }else{
            return "T";
        }
    },
    toHTML: function() {
        var img = document.createElement("img");
        img.style.height = "50px";
        img.style.width = "50px";
        // set the properties of the image element to show either heads or tails
        if(this.toString() === "H"){
            img.setAttribute("src" , "heads.png");
        }else{
            img.setAttribute("src" , "tails.png");
        }
        return img;
    }
};
for(let i = 0; i < 20; i++){
    coin.flip();
    let result = coin.toString();
    console.log(result);
    let resultDisplay = document.createElement("div");
    resultDisplay.textContent = result;
    document.body.appendChild(resultDisplay);
    let img = coin.toHTML();
    console.log(coin.toHTML())
    document.body.appendChild(img);
}