'use strict';

const songArray = [
  { artist: "Queen", title: "Don't Stop Me Now", youtubeUrl: "https://www.youtube.com/watch?v=HgzGwKwLmgM" },
  { artist: "David Bowie", title: "Starman", youtubeUrl: "https://www.youtube.com/watch?v=rpO1U-nEgRU"
  },
  { artist: "Taylor Swift", title: "Cruel Summer", youtubeUrl: "https://www.youtube.com/watch?v=ic8j13piAhQ"
  },
  { artist: "The Beatles", title: "Eleanor Rigby", youtubeUrl: ""}
];

//state variable
let puppyIsGrown = false;


const h1Elem = document.querySelector('h1');
console.log(h1Elem);

h1Elem.textContent = "I am dynamically changed!";

const puppyElem = document.querySelector('#puppySection img');
// puppyElem.src = "img/husky.jpg"
// puppyElem.alt = "a bigger husky"

const headerElem = document.querySelector('header');
headerElem.classList.add('bg-dark', 'text-white');


//{} => <>
function createSongListItem(songObj) {
  const newLinkElem = document.createElement('a');
  newLinkElem.href = songObj.youtubeUrl;
  newLinkElem.textContent = songObj.artist + " - " + songObj.title

  //creating a new element
  const newLiElem = document.createElement('li')
  newLiElem.appendChild(newLinkElem);

  return newLiElem;
}

//show the whole list with the correct number
function renderSongListSection(songArray) {
  //make the section title
  const subtitleElem = document.createElement('h2')
  subtitleElem.textContent = "Top " + songArray.length + " Songs";

  //create the list
  const olElem = document.createElement('ol');
  for(const aSongObj of songArray) {
    const theLi = createSongListItem(aSongObj);
  
    //add element to the list
    olElem.appendChild( theLi ); 
  }

  //put on the page
  const dataSectionElem = document.querySelector('#dataSection');
  dataSectionElem.appendChild(subtitleElem);
  dataSectionElem.appendChild(olElem);
}

renderSongListSection(songArray);

//interactivity
const puppyButton = document.querySelector('#puppySection button');

puppyButton.addEventListener('click', function(event) {
  if(puppyIsGrown){ //is current grown
    puppyElem.src = "img/puppy.jpg";
    puppyElem.alt = "a cute puppy";
    puppyIsGrown = false;
  } else { //is currently puppy
    puppyElem.src = "img/husky.jpg";
    puppyElem.alt = "a bigger husky";
    puppyIsGrown = true;
  }
});

//form interaction!
const formElem = document.querySelector('#formSection form');
formElem.addEventListener('submit', function(event) {
  event.preventDefault();

  //user input
  const artistInput = document.querySelector('#artistInput')
  const artistValue = artistInput.value;
  const titleInput = document.querySelector('#titleInput')
  const titleValue = titleInput.value;
  const youtubeInput = document.querySelector('#urlInput')
  const youtubeValue = youtubeInput.value;

  //STEP 1 update the state
  const newSongObj = { 
    artist: artistValue, 
    title: titleValue, 
    youtubeUrl: youtubeValue
  }
  songArray.push(newSongObj);

  //STEP 2 rerender content
  //clear old stuff
  const dataSectionElem = document.querySelector('#dataSection');
  dataSectionElem.innerHTML = '';

  renderSongListSection(songArray);

  console.log("form submitted");
})
















