/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

import axios from "axios";

axios
  .get("https://api.github.com/users/jstrohschein")
  .then((response) => {
    //success
    console.log("Success: ", response.data);
    const entryPoint = document.querySelector(".cards");
    const myProfile = cardMaker(response.data);

    entryPoint.appendChild(myProfile);
  })
  .catch((error) => {
    //handle error
    console.log("Error: ", error);
  });

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the followersArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

/*const followersArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell',
];*/

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

const cardMaker = (data) => {
  //create elements
  const card = document.createElement("div");
  const profilePic = document.createElement("img");
  const cardInfo = document.createElement("div");
  const realName = document.createElement("h3");
  const userName = document.createElement("p");
  const location = document.createElement("p");
  const profile = document.createElement("p");
  const profileLink = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");

  //build HTML structure
  card.appendChild(profilePic);
  card.appendChild(cardInfo);
  cardInfo.appendChild(realName);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(profileLink);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  //give classes
  card.classList.add("card");
  cardInfo.classList.add("card-info");
  realName.classList.add("name");
  userName.classList.add("username");

  //fill content
  profilePic.src = data.avatar_url;
  realName.textContent = data.name;
  userName.textContent = data.login;
  location.textContent = data.location;
  profileLink.textContent = data.html_url;
  followers.textContent = data.followers;
  following.textContent = data.following;
  bio.textContent = data.bio;

  return card;
};

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
