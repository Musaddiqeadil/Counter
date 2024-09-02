// Initial value
let value = 0;

const valueSpan = document.getElementById('value');

//  update 
function updateDisplay() {
    valueSpan.textContent = value;

    if (value > 0){
        valueSpan.style.color ='green';
    }
    else if (value < 0){
        valueSpan.style.color ='red';
    }
    if (value == 0){
        valueSpan.style.color ='black';
    }

    
}

// Increase 
document.querySelector('.increase').addEventListener('click', function() {
    value++;
    updateDisplay();
});

// Decrease 
document.querySelector('.decrease').addEventListener('click', function() {
    value--;
    updateDisplay();
});

// Reset 
document.querySelector('.reset').addEventListener('click', function() {
    value = 0;
    updateDisplay();
})

