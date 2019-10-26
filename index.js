// 'use strict';
// const removeItem = event => {
//   const removerItem = event.target.closest('li');
//   event.target.closest('ul').removeChild(removerItem);
// };

// const addItem = event => {
//   const spanChecked = event.target.closest('li').children[0];
//   if(spanChecked.className.includes('shopping-item__checked')){
//     spanChecked.classList.remove('shopping-item__checked');
//   } else {
//     spanChecked.classList.add('shopping-item__checked');
//   }
// };
// document.getElementById('js-shopping-list-form').children[2].addEventListener('click', (event) => {
//   const inputTextField = document.getElementById('shopping-list-entry').value;
//   if(inputTextField) {
//     const listItem = document.createElement('li');
//     listItem.innerHTML = `
//         <span class="shopping-item">${inputTextField}</span>
//         <div class="shopping-item-controls">
//           <button class="shopping-item-toggle">
//             <span class="button-label">check</span>
//           </button>
//           <button class="shopping-item-delete">
//             <span class="button-label">delete</span>
//           </button>
//         </div>`;
//     const unorderedList = document.getElementsByClassName('shopping-list')[0];
//     unorderedList.append(listItem);
//     const checkedButtons = document.getElementsByClassName('shopping-item-toggle');
//     checkedButtons[checkedButtons.length-1].addEventListener('click', addItem);
//     const deleteButtons = document.getElementsByClassName('shopping-item-delete');
//     deleteButtons[deleteButtons.length-1].addEventListener('click', removeItem);
//   }
//   event.preventDefault();
//   console.log(inputTextField);
// });
// const checkedButtons = document.getElementsByClassName('shopping-list')[0].getElementsByTagName('button');
// for(let i=0;i<checkedButtons.length;i++) {
//   checkedButtons[i].addEventListener('click', addItem);
// }

// const deleteButtons = document.getElementsByClassName('shopping-item-delete');
// for(let i=0;i<deleteButtons.length;i++) {
//   deleteButtons[i].addEventListener('click', removeItem);
// }