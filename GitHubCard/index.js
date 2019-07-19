/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

// axios.get('https://api.github.com/users/vinnihoke').then((axiosData) => {
//   console.log('axiosData.data: ', axiosData.data);
//   new GitHubUser(axiosData.data)
// }).catch((err) => {
//   console.log('error: ', err);
// })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 
   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:
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

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/


axios.get('https://api.github.com/users?since=135').then((axiosData) => {
  console.log('axiosData.data: ', axiosData.data);
  new GitHubUser(axiosData.data)
}).catch((err) => {
  console.log('error: ', err);
})

const followersArray = [];

class GitHubUser {
  constructor(ghUsersArray){
    const entry = document.querySelector('.cards');

    ghUsersArray.forEach((userData) => {
      this.createUserCard(userData);
      entry.appendChild(this.createUserCard(userData));
    });
  }

  createUserCard(userData) {
    // Create the card that will be the parent element.
    const card = document.createElement('div').classList.add('card');

    // Create the image with the image url of user
    const image = document.createElement('img');
    image.src = userData.avatar_url;
    card.appendChild(image);

    // Create the card info container
    const cardInfoContainer = document.createElement('div').classList.add('card-info');

    // Create an H3.name that outputs in the users name
    const name = document.createElement('h3').classList.add('name');
    name.textContent = userData.data.name;
    cardInfoContainer.appendChild(name);

    // Create a p.username that outputs the username
    const username = document.createElement('p').classList.add('username');
    username.textContent = userData.data.login;
    cardInfoContainer.appendChild(username);

    // Create a p that outputs users location
    const location = document.createElement('p');
    location.textContent = userData.data.location;
    cardInfoContainer.appendChild(location);

    // Create a p>a with href to users profile
    const profileLink = document.createElement('a');
    profileLink.setAttribute('href', userData.data.html_url);
    profileLink.textContent(userData.data.html_url);
    cardInfoContainer.appendChild(profileLink);

    // Create a p that outputs the follower count
    const followers = document.createElement('p');
    followers.textContent(userData.data.followers);
    cardInfoContainer.appendChild(followers);

    // Create a p that outputs the following count
    const following = document.createElement('p');
    following.textContent(userData.data.following);
    cardInfoContainer.appendChild(following);

    // Create a p that outputs the users bio
    const bio = document.createElement('p');
    bio.textContent(userData.data.bio);
    cardInfoContainer.appendChild(bio);

    // Add cardInfoContainer to the card.
    card.appendChild(cardInfoContainer);

    return card;
  }
}