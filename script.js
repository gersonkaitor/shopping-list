const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');

const addItem = (e) => {
  e.preventDefault();

  const newItem = itemInput.value;

  // Validate Input
  if (newItem === '') {
    alert('Please add an item');
    return;
  }

  // Create list item
  const li = document.createElement('li');
  const textValue = document.createTextNode(newItem);
  li.appendChild(textValue);

  const button = createButton('remove-item btn-link text-red');
  const icon = createIcon('fa-solid fa-xmark');

  button.appendChild(icon);

  li.appendChild(button);

  itemList.appendChild(li);

  itemInput.value = '';
};

const createButton = (classes) => {
  const button = document.createElement('button');
  button.className = classes;
  return button;
};

const createIcon = (classes) => {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
};

const removeItem = (e) => {
  if (e.target.parentElement.classList.contains('remove-item')) {
    e.target.parentElement.parentElement.remove();
  }
};

const clearItems = (e) => {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
};

// Event Listeners
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItems);
