// Define a function to fetch and load content
function fetchAndLoadContent(url, targetElementId) {
    fetch(url)
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text(); // Convert the response to text
        })
        .then(function(data) {
            // Update the target element with the fetched content
            document.getElementById(targetElementId).innerHTML = data;
            console.log('NEW Content loaded successfully');
        })
        .catch(function(error) {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

// Attach the event listener to the menu link
document.getElementById('mt_introduction').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default action of the link
    
    // Call the function with the URL and target element ID
    fetchAndLoadContent('mt_introduction.html', 'contentArea');
});