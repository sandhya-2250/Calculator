 let display = document.getElementById('display');
        let currentExpression = '';

        function appendToDisplay(value) {
            if (display.innerText === '0' && value !== '.') {
                display.innerText = value;
                currentExpression = value;
            } else {
                display.innerText += value;
                currentExpression += value;
            }
        }

        function clearDisplay() {
            display.innerText = '0';
            currentExpression = '';
        }

        function deleteLast() {
            if (display.innerText !== '0' && display.innerText !== 'Error') {
                currentExpression = currentExpression.slice(0, -1);
                display.innerText = currentExpression || '0';
            }
        }

        function calculate() {
            try {
                const result = eval(currentExpression);
                if (isFinite(result)) {
                    display.innerText = result;
                    currentExpression = result.toString();
                } else {
                    display.innerText = 'Error';
                    currentExpression = '';
                }
            } catch (error) {
                display.innerText = 'Error';
                currentExpression = '';
            }
        }
        
