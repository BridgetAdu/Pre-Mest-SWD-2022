const colours=["f1f5f8","yellow","green","blue","black","aqua","red","white","navy","maroon"]
const color=document.querySelector(".color")
const btn = document.querySelector(".btn")

btn.addEventListener("click",() =>{
    const random =getRandomNumber();
    document.body.style.backgroundColor=colours[random]
    color.textContent=colours[random]
    console.log(random)

})


function getRandomNumber(){
    return Math.floor(Math.random()*colours.length);
}