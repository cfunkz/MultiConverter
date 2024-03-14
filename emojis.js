  // Function to display emojis
function displayEmojis(emojisData) {
    const emojiContainer = document.getElementById('emojiContainer');
    emojiContainer.innerHTML = '';

    // Loop through each category
    for (const category in emojisData) {
      // Loop through each emoji in the category
      emojisData[category].forEach(emoji => {
        // Create a div for the emoji
        const emojiDiv = document.createElement('div');
        emojiDiv.classList.add('col');

        // Create a card for the emoji
        const emojiCard = document.createElement('div');
        emojiCard.classList.add('card', 'text-center');

        // Add emoji to the card
        const emojiSpan = document.createElement('span');
        emojiSpan.classList.add('emoji', 'display-3', 'mt-3');
        emojiSpan.textContent = emoji.emoji;

        // Add emoji description
        const descriptionDiv = document.createElement('div');
        descriptionDiv.textContent = emoji.description;
        descriptionDiv.classList.add('card-body');

        // Add emoji code
        const codeDiv = document.createElement('div');
        codeDiv.textContent = emoji.code;
        codeDiv.classList.add('card-footer', 'text-muted');

        // Append elements to the card
        emojiCard.appendChild(emojiSpan);
        emojiCard.appendChild(descriptionDiv);
        emojiCard.appendChild(codeDiv);

        // Append card to the emoji div
        emojiDiv.appendChild(emojiCard);

        // Append emoji div to the emoji container
        emojiContainer.appendChild(emojiDiv);
      });
    }
}

  // Function to filter emojis based on search query
function filterEmojis(query) {
    const filteredEmojis = Object.values(emojisData).flat().filter(emoji => {
      const keywords = emoji.keywords.join(' ');
      return emoji.description.toLowerCase().includes(query.toLowerCase()) ||
             keywords.toLowerCase().includes(query.toLowerCase());
    });
    displayEmojis({ "Search Results": filteredEmojis });
}

  // Load emojis data from JSON file
fetch('full-emoji-list.json')
    .then(response => response.json())
    .then(data => {
      emojisData = data; // Assign emojisData globally
      displayEmojis(data);
    })
    .catch(error => console.error('Error fetching emojis data:', error));

  // Event listener for search input
document.getElementById('searchInput').addEventListener('input', function() {
    filterEmojis(this.value);
});