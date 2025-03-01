const textBlock = document.getElementById('text-block');
        const button = document.getElementById('color-toggle-btn');

        let isOriginalColor = true; 

        button.addEventListener('click', function() {
            if (isOriginalColor) {
                textBlock.style.color = 'blue'; 
                button.textContent = 'Повернути колір'; 
            } else {
                textBlock.style.color = 'black'; 
                button.textContent = 'Змінити колір';
            }
            isOriginalColor = !isOriginalColor; 
        });