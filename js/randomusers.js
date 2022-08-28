const randomLover = () => {
  fetch("https://randomuser.me/api/?results=20")
    .then((res) => res.json())
    .then((data) => displayLovers(data.results));
};

const displayLovers = (users) => {
 const usersContainer = document.getElementById('users-container');
  for ( love of users){
    console.log(love)
    const userDiv = document.createElement('div');
    userDiv.classList.add('user');
    userDiv.innerHTML = `
         <h3>Gender: ${love.gender}</h3>
         <h4> Email: ${love.email}</h4>
         <h5> First Name: ${love.name.first}</h5>
         <h5> Last Name: ${love.name.last}</h5>
         <h5> Location: ${love.location.city} ${love.location.country}</h5>
    `;
    usersContainer.appendChild(userDiv);
  }


}
randomLover();