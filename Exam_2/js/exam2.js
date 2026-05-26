
// Part 3 Question 3
window.addEventListener("load",function(){
  console.log("Ric")
})



// Part 3 Question 4
document.querySelector("h1").addEventListener("click",function(){
    console.log("Removing h1")
     this.style.display = "none"
 })




// Part 3 Question 5
a = document.querySelectorAll("a")
third = a[2]
third.addEventListener("mouseover",function(){
  console.log("Adding green border")
  this.style.color = 'green';
  this.style.borderWidth = '15px';
  this.style.borderColor = 'green';
  this.style.borderStyle = 'solid';
})

// Part 3 Question 6
document.querySelector(".style").addEventListener("focus",function(){
    console.log('change background color to white')
    this.style.backgroundColor = "white";
})
document.querySelector(".style").addEventListener("focusout",function(){
    console.log('change background color back')
    this.style.backgroundColor = "bisque";
})



// Part 3 Question 7
parent = document.querySelector(".partA")
document.querySelector(".style2").addEventListener("click",function(){
    console.log('change background color to purple haze')
    parent.style.backgroundImage = "url('../images/Purple-Haze.jpg')";
})




// Part 3 Question 8
// From https://lokeshdhakar.com/projects/lightbox2/
document.querySelectorAll('.partA a').forEach(function(img){
    img.setAttribute('data-lightbox', 'gallery');
    console.log('Add lightbox')

});