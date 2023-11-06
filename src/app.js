const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];

    // Instead of forloop use Map method
    // Code here
    players.forEach((anil, index) => {
        detailedPlayers.push({
          name: anil,
          strength: getRandomStrength(),
          image: 'images/super-' + (index + 1) + '.png',
          type: index % 2 == 0 ? 'hero' : 'villain',
          id: index + 1,
        });
      });
      return detailedPlayers;

    
}

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}
    const view = (playerObj) => {
        let player = document.createElement('div');
        player.classList.add('player');
        let image = document.createElement('img');
        image.setAttribute('src', playerObj.image);
        image.setAttribute('alt', '');
        let name = document.createElement('div');
        name.className = 'name';
        name.textContent = playerObj.name;
        let strength = document.createElement('div');
        strength.textContent = playerObj.strength;
        strength.className = 'strength';
        player.append(image, name, strength);
        return player;
    }
// Build player template
const buildPlayers = (players, type) => {
    let fragment = document.createElement('div');
  players
    .filter((player) => player.type == type)
    .forEach((player) => fragment.append(view(player)));
  return fragment.innerHTML;
    

    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here
    

}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}