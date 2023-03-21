const imgsArray = ["img/img_1.jpg", "img/img_2.jpg", "img/img_3.jpg", "img/img_4.jpg", "img/img_5.jpg"]

console.log(imgsArray);

const imgContainer = document.querySelector(".card")


for (let i = 0; i < imgsArray.length; i++) {
    const currentImg = imgsArray [i];
    
    const objCard = `
        <div class = "picture">
            <img src="${currentImg}" alt="">
        </div>`;

        imgContainer.innerHTML += objCard;

        
        

}

const picturesArray = document.getElementsByClassName("picture")
console.log(picturesArray);

let activeItemIndex = 0;
picturesArray[activeItemIndex].classList.add("active");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

nextBtn.addEventListener("click", function() {
    //togliere active dalla classe corrente
    picturesArray[activeItemIndex].classList.remove("active")
    //incrementare active
    //se active è < dell ultimo indice dell'array
    //incremento
    //altrimenti parto da 0
    if (activeItemIndex < (picturesArray.length -1)){
    activeItemIndex++;
    } else {
        activeItemIndex = 0;
    }
    //aggiungere classe active al nuovo elemento
    picturesArray[activeItemIndex].classList.add("active")

})

prevBtn.addEventListener("click", function() {
    picturesArray[activeItemIndex].classList.remove("active");
    //se active è 0
    //la partenza è dall'ultimo elemento dell'array
    //altrimenti decremento
    if (activeItemIndex === 0) {
        activeItemIndex = picturesArray.length - 1;  
    } else {
        activeItemIndex--;
    }
    
    picturesArray[activeItemIndex].classList.add("active");
})

//FUNCTION

function automaticForw() {
    picturesArray[activeItemIndex].classList.remove("active");
    if (activeItemIndex < (picturesArray.length -1)){
     activeItemIndex++;
     } else {   
      activeItemIndex = 0;      
     }
     picturesArray[activeItemIndex].classList.add("active")   
   
}

setInterval(automaticForw, 3000)