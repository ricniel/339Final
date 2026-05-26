/*
  Do NOT uncomment the example lines of code below (rows 8-10), they will cause errors.  
  But I am providing it as a template.
  */


/* 
document.querySelector("ELEMENT").addEventListener("EVENT",function(){
     //YOUR CODE
 })
 */



// Problem 1
window.addEventListener("load",function(){
  console.log("Ric")
})
//document.querySelector("h1").addEventListener("mouseover",function(){
  //this.innerHTML = "<em>" + this.innerHTML + "</em>"
//})

// Problem 2
document.querySelector("h1").addEventListener("click",function(){
    console.log("Removing h1")
     this.style.display = "none"
 })


figures = document.querySelectorAll("figure")
fifth = figures[4]
// Problem 3
fifth.addEventListener("dblclick",function(){
    console.log("Removing 5th figure")
    this.style.visibility = "hidden"
 })


// Problem 4
// Part 1
figcaptions = document.querySelectorAll("figcaption")
firstcaption = figcaptions[0]
firstcaption.addEventListener("mouseover",function(){
  console.log("Adding blue text and border")
  this.style.color = 'blue';
  this.style.borderWidth = '5px';
  this.style.borderColor = 'red';
  this.style.borderStyle = 'solid';
})
// Problem 4
// Part 2
firstcaption.addEventListener("mouseout",function(){
  console.log("Removing blue text and border")
  this.style.color = 'black';
  this.style.border = 'none';
})


// Problem 5
firstcaption.addEventListener("focus",function(){
  console.log("Adding blue text and border on focus")
  this.style.color = 'blue';z
  this.style.borderWidth = '5px';
  this.style.borderColor = 'red';
  this.style.borderStyle = 'solid';
})
firstcaption.addEventListener("focusout",function(){
  console.log("Removing blue text and border off focus")
  this.style.color = 'black';
  this.style.border = 'none';
})


// Problem 6    
secondcaption = figcaptions[1]
secondcaption.setAttribute("tabindex", 0)
secondcaption.addEventListener("focus",function(){
  console.log("Changing font on focus")
  this.style.fontFamily = 'cursive';

})
secondcaption.addEventListener("focusout",function(){
  console.log("Removing font off focus")
  this.style.fontFamily = 'Times';
})


// Problem 7
parent = document.querySelector(".container")
document.querySelector("#style").addEventListener("click",function(){
  parent.classList.add("one-third");
  parent.style.backgroundImage = "url('../images/Purple-Haze.jpg')";
 })




// Problem 8
images = document.querySelectorAll("img")
images.forEach(function(img){
  img.addEventListener("click",function(){
    console.log(this.src)
    this.classList.toggle("pizazz")
  })
})



// Problem 9