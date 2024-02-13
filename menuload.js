document.getElementById('loadContent').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default action of the link

    // Use the fetch API to get the content
    fetch('musicianship_trainer.html')
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text(); // Convert the response to text
        })
        .then(function(data) {
            // Update the content area with the fetched content
            document.getElementById('contentArea').innerHTML = data;
            console.log('Content  ====+++=== found ok');
        })
        .catch(function(error) {
            console.error('There has been a problem with your fetch operation:', error);
        });
});
