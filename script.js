let btn = document.getElementById('Add');
let container = document.querySelector('.list'); // Class name should match the HTML

function start() {
    let todo = document.getElementById('TODO').value;
    if (todo === "") {
        alert("You must add a text");
    } else {
        // Create the checkbox
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        // Create the paragraph element
        let paragraph = document.createElement('p'); // Use 'p' instead of 'paragraph'
        paragraph.textContent = todo; // Correct 'textcontent' to 'textContent'

        // Create the delete button
        let deletebtn = document.createElement('button');
        deletebtn.textContent = 'Delete'; // Added text to the button

        // Create a wrapper to contain all elements
        let wrapper = document.createElement('div');
        wrapper.style.display = 'flex'; // Use flexbox to align items
        wrapper.style.alignItems = 'center'; // Align items vertically
        wrapper.style.justifyContent = 'space-between'; // Distribute space between items

        // Append elements to the wrapper
        wrapper.appendChild(checkbox);
        wrapper.appendChild(paragraph);
        wrapper.appendChild(deletebtn);

        // Add the delete functionality
        deletebtn.addEventListener('click', function() {
            container.removeChild(wrapper);
        });

        // Append the wrapper to the container
        container.appendChild(wrapper);

        // Clear the input field
        document.getElementById('TODO').value = '';
    }
}