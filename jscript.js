// add 16 divs to the parent container div

let boxes= prompt("Enter grid size",16);
const board=document.querySelector('.gridcontainer');
for (let  i=0;i<boxes*boxes;i++){
    const div = document.createElement('div');
    board.appendChild(div);
    };
