const textContent = {
    'programming-languages': 'Programming Language - Java, C++, C',
    'web-development': 'Web Development - HTML, CSS, JavaScript, react, nodejs',
    'database': 'Database - SQL, MongoDB',
    'softwares': 'Softwares - Photoshop, Visual Studio Code'
};

function showText(button, category) {
    // Update the inner text of the button
    button.innerText = textContent[category] || '';
}
