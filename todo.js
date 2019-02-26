const btn = document.getElementById('button');
const textbox = document.getElementById('textbox');
const list = document.getElementById('list')
btn.addEventListener('click',addNewListItem);


function addNewListItem()
{
    let li = document.createElement("LI");
    let newN = document.createTextNode(textbox.value);
    li.appendChild(newN);

    list.appendChild(li);
    //console.log("Child appended successfully?")
}

function printTesting()
{
    console.log("Test");
}

// let todoList = [];

// const todoListAdd = (toAdd) => {
//     todoList.push(toAdd);
// }

// addEventListener(onmousedown,MouseEvent){
//     print("this is a test")
// }






















































































// listen only on mousedown 
// btn.addEventListener('mousedown', () => {
//     const listItem = document.createElement('li');
//     listItem.innerText = textbox.value;
//     list.appendChild(listItem);

//     // clean out old text value
//     textbox.value = '';
// });