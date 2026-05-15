// grabs 3 elements from the html page and saves them to a variable
const uList = document.querySelector('ul');
const btn = document.querySelector('button');
const input = document.querySelector('input');

btn.addEventListener('click', (event) => {
    // preventDefault stops form element from refreshing the page 
    event.preventDefault();

    // pulls the value from the input
    const inputValue = input.value;
    // sets input VALUE to an empty string
    // if you target input, you will change what input is pointing to
    // the input variable is pointing towards the HTML element
    // but input.value is pointing towards the value within it
    input.value = '';

    // creates 3 new elements
    const listItem = document.createElement('li');
    const span = document.createElement('span');
    const newBtn = document.createElement('button');

    // appends the span and new button to the list item
    listItem.appendChild(span);
    listItem.appendChild(newBtn);

    // sets the span text to the saved input value
    span.textContent = inputValue;
    // sets the new button text to delete
    newBtn.textContent = 'Delete';

    // appends the newly created list item to the list
    uList.appendChild(listItem);

    // deletes a list item if the delete button is clicked
    newBtn.addEventListener('click', () => {
        listItem.remove();
    });

    // focus the input field for the next input
    document.getElementById('item').focus();
});
