//for carousel image

let reviews=[
    {
        img:"Carousel 1.png"
    },
    {
        img:"Carousel 2.png"
    }
];

let img=document.querySelector(".img");
//buttons

let next=document.querySelector(".next");
let prev=document.querySelector(".prev");

let currentItem=0;
window.addEventListener('DOMContentLoaded',function(){
    showPerson(currentItem);
})

function showPerson(){
    let item=reviews[currentItem];
    img.src=item.img
}

next.addEventListener('click',function(){
    currentItem++
    if(currentItem>reviews.length-1){
        currentItem=0;
    }
    showPerson(currentItem);
})

prev.addEventListener('click',function(){
    currentItem--
    if(currentItem<0){
        currentItem= reviews.length-1;
    }
    showPerson(currentItem);
})


