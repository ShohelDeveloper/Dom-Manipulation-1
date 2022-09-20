// GetElementById
const title = document.getElementById('main-heading')
console.log(title)

GetElementByClassName()
const listitems = document.getElementsByClassName('list-items')
console.log(listitems)

//GetElementByTagName()
const listItems = document.getElementsByTagName('li')
console.log(listItems)

// querySelector()
const container = document.querySelector('div')
console.log(container);

//querySelectorAll()
const container = document.querySelectorAll('div')
console.log(container);
//-------------------------------------------------------------------


// DOM Manipulation


// Styling Element
const title = document.getElementById('main-heading')
title.style.color = 'red'
console.log(title)

const listItems = document.querySelectorAll('.list-items')


for (i = 0; i < listItems.length; i++) {
    listItems[i].style.fontSize = '50px'
}


// Creating Element
const ul = document.querySelector('ul')
const li = document.createElement('li')

// Adding Element
ul.append(li)

// Modifying the text
 
const firstListItem = document.querySelector('.list-items')
console.log(firstListItem)
console.log(firstListItem.innerText)
console.log(firstListItem.textContent)
console.log(firstListItem.innerHTML) 


// Modifying Attributes & Classes
li.innerText = 'X-Men'
li.setAttribute('id','main-heading')
li.removeAttribute('id')


const title = document.querySelector('#main-heading')
console.log(title.getAttribute('id'))

// Modifying Attributes & Classes
li.classList.add('list-items')
// li.classList.remove('list-items')

li.remove()


console.log(li.classList.contains('list-items'))
