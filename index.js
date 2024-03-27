// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuContainer = document.getElementById("menu");

    // Loop through each category and its items in the menu object
    for (const category in menu) {
        // Create an element to represent the category
        const categoryElement = document.createElement("div");
    

        // Set the text content of the category element to the category name

        
        //Create an h3 element to represent the category
        const categoryHeading = document.createElement("h3");
        categoryHeading.textContent = category;

        // Append the category element to the menu container
        menuContainer.appendChild(categoryElement);
        menuContainer.appendChild(categoryHeading);

        // Create an element to represent a list of items
        const listItems = document.createElement("ul");
        listItems.style.listStyleType = "none";

        // Append a list of items element to the menu container
        menuContainer.appendChild(listItems);

        // Loop through the items in the category and create list items
        menu[category].forEach(item => {
            // Create a list item element
            const listOfItems = document.createElement("li");

            // Set the text content of the list item element to the item name
            listOfItems.textContent = item;

            // Attach a click event listener to the list item to add it to the order
            listOfItems.addEventListener("click", function(){
                addToOrder(item);
            });

            // Append the list item to the list of items
            listItems.appendChild(listOfItems);
        });
    }
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
    const orderItemsList = document.getElementById("order-items");
    const totalElement = document.getElementById("order-total");

    // Create a list item for the order
    const orderListItem = document.createElement("li");

    // Set the text content of the list item to the item name
    orderListItem.textContent = itemName;

    // Append the list item to the order items list
    orderItemsList.appendChild(orderListItem);

    // Calculate and update the total price
    let total = parseFloat(totalElement.textContent);
    // Assuming each item has a fixed price of R60 for simplicity
    total += 60;

    // Update the text content of the order total element with the new total
    totalElement.textContent = total.toFixed(2);
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
