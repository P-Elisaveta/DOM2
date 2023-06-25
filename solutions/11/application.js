import 'whatwg-fetch';

export default () => {
  // BEGIN
  const inputs = document.querySelectorAll('input[data-autocomplete]');

inputs.forEach((input) => {
  input.addEventListener('input', async (event) => {
    const inputValue = event.target.value.trim();
    const autocompleteList = document.querySelector(`ul[data-autocomplete-name="${input.dataset.autocompleteName}"]`);

    const url = new URL(input.dataset.autocomplete);
    url.searchParams.set('search', inputValue);

    const response = await fetch(url);
    const data = await response.json();

    autocompleteList.innerHTML = '';

    if (data.length > 0) {
      data.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        autocompleteList.appendChild(listItem);
      });
    } else {
      const li = document.createElement('li');
      li.textContent = 'Nothing';
      autocompleteList.appendChild(li);
    }
  });
});

  // END
};
