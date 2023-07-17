function getImage() {
    let randomImage = new Array();

    randomImage[0] = "assets/singing.gif";
    randomImage[1] = "assets/dancing.gif";
    randomImage[2] = "assets/ramp-walk.gif";
    randomImage[3] = "assets/audience.png";
    randomImage[4] = "assets/choice.jpeg";

    let number = Math.floor(Math.random() * randomImage.length);

    return document.getElementById("resImage").innerHTML = '<img src="' + randomImage[number] + '" style="width:300px" />'
}