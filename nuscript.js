


window.onload = init;
function init(){

    let images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++){
        images[i].onclick = showAnswer;
    }
    };
    // let image0 = document.getElementById("zero");
    // image0.onclick = showAnswer;
    // let image1 = document.getElementById("one");
    // image1.onclick = showOne;
    // let image2 = document.getElementById("two");
    // image2.onclick = showTwo;





// function showAnswer(){
//     let image = document.getElementById("zero");
//     image.src=  "zero.jpg";
// }

// function showOne(){
//     let image = document.getElementById("one");
//     image.src = "one.jpg";
// }

// function showTwo(){
//     let image = document.getElementById("two");
//     image.src= "two.jpg";
// }

function showAnswer(eventObj){
    let image = eventObj.target;

    let name = image.id;
    name = name + ".jpg";
    image.src = name;

    setTimeout(reblur, 2000, image);

}


function reblur(image){
    let name = image.id;
    name = name + "blur.jpg";
    image.src = name;
}
