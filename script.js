const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const itemFilter = document.getElementById('filter');
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

  // Add li to the DOM
  itemList.appendChild(li);

  checkUI();

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
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
  checkUI();
};

const clearItems = (e) => {
  if (confirm('Are you sure want to clear all?')) {
    while (itemList.firstChild) {
      itemList.removeChild(itemList.firstChild);
    }
  }
  checkUI();
};

const checkUI = () => {
  const items = itemList.querySelectorAll('li');
  if (items.length === 0) {
    itemFilter.style.display = 'none';
    clearBtn.style.display = 'none';
  } else {
    itemFilter.style.display = 'block';
    clearBtn.style.display = 'block';
  }
};

// Event Listeners
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItems);

checkUI();
