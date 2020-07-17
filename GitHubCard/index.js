import axios from "axios";


const followersArray = [
  'jstrohschein',
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell',
];

followersArray.forEach(profile => {
  axios
    .get("https://api.github.com/users/" + profile)
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

})

/*
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