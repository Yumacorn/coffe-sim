let heartMug = document.getElementById('cup');
let personStatus = document.getElementById('human');

function buttonClick(event) {
    switch(event.target.id){
        case 'pour':
            alert('Pour the coffee');
            heartMug.textContent = 'Cup: FULL';
            break;
        case 'drink':
            alert('Drink the coffee');
            if(heartMug.textContent == 'Cup: FULL'){
                heartMug.textContent = 'Cup: Empty';
                personStatus.textContent = 'Person: Satisfied!';
            } else {
                personStatus.textContent = 'Person: Confused?';
            }
            break;
    }
    
}

const buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', buttonClick);
}