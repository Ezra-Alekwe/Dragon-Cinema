// SlideShow functions

let time = 3000;
let movieArray = ["Ms Marvel.jpg", "Mission ImpossibleSlide.jpg", "Oppenheimer.jpg", "GodzillaSlide.jpg"];
let indexOfArray = 0;

function slideShow() {
    document.getElementById("slide").src = movieArray[indexOfArray];
    if (indexOfArray === movieArray.length - 1) {
        indexOfArray = 0;
    } else {
        indexOfArray++;
    }
    setTimeout(slideShow, time);
}

slideShow();

function next(){
    indexOfArray++;
    if(indexOfArray >= movieArray.length -1){
        indexOfArray = 0;
    }
        document.getElementById("slide").src = movieArray[indexOfArray];
  
}

function prev() {
    indexOfArray--;
    if (indexOfArray < 0) {
        indexOfArray = movieArray.length - 1;
    }
    document.getElementById("slide").src = movieArray[indexOfArray];
}

// SearchBar functions

function search(){
  
    let input = document.getElementById("searchBar").value;
    input = input.toLowerCase();
    let movie = document.getElementsByClassName("movie");

 for(let i = 0; i < movie.length; i++){
    if(movie[i].textContent.toLowerCase().includes(input)){
        movie[i].style.display = "";
    }else{
        movie[i].style.display = "none";
    }
 }   
}