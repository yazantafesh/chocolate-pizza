// 'use strict';




// console.log(document.getElementsByTagName('input')[0].addEventListener( 'change', function() {
//     if(this.checked) {
//         for(let i = 0 ; i < document.getElementsByTagName.length ; i++) {
//         document.getElementsByTagName('label')[i].style.fontStyle = 'strikethrough';
//         }
//     } else {
//         // continue;
//     }
// }));
let listForm = document.getElementsByTagName('input');
console.log(listForm);
for(let i = 0 ; i < listForm.length ; i++) {
    listForm[i].addEventListener('change' , call);
    function call(event) {
        if (event.target.checked == true){
            document.getElementsByTagName('label')[i].style.textDecoration = 'line-through';
        }
        else{
            document.getElementsByTagName('label')[i].style.textDecoration = 'none';
        }
    }
}



// function call(event) {
//     if (event.target.checked == true){
//         document.getElementsByTagName('label')[i].style.textDecoration = 'line-through';
//         break;
//     }
// }