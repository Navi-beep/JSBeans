

function beans(thing) {
    return thing 
}




// Function to create and append a card to the card container
function createCard(title, description, imageUrl) {
    // Create card elements
    var card = document.createElement('div');
    card.className = 'card'; // You can add any custom CSS classes here

    var cardImage = document.createElement('img');
    cardImage.src = imageUrl;
    cardImage.alt = 'Card Image';

    var cardTitle = document.createElement('h2');
    cardTitle.textContent = title;

    var cardDescription = document.createElement('p');
    cardDescription.textContent = description;

    // Append elements to the card
    card.appendChild(cardImage);
    card.appendChild(cardTitle);
    card.appendChild(cardDescription);

    // Append the card to the container
    var container = document.getElementById('card-container');
    container.appendChild(card);
}

// Call the createCard function with the desired data
createCard(
    'Card Title',
    'This is a sample card description. You can replace this with your own content.',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/ToddHoward2010sm_%28cropped%29.jpg/1200px-ToddHoward2010sm_%28cropped%29.jpg'
);




document.getElementById("beany").innerHTML=beans([1,2,3,4])