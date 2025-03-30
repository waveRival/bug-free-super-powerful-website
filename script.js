const textElement = document.getElementById('text');
        const sentences = [
            "it's a great week!",
            "why not go outside?",
            "don't worry I got your back"
        ];
        let sentenceIndex = 0;
        let charIndex = 0;

        function type() {
            if (charIndex < sentences[sentenceIndex].length) {
                textElement.textContent += sentences[sentenceIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, 100); // Typing speed
            } else {
                textElement.style.borderRight = 'none';
                setTimeout(() => {
                    textElement.style.transition = 'opacity 2s';
                    textElement.style.opacity = '0';
                    setTimeout(() => {
                        textElement.textContent = '`';
                        textElement.style.opacity = '1';
                        textElement.style.transition = '';
                        charIndex = 0;
                        
                        sentenceIndex = (sentenceIndex + 1) % sentences.length;
                        setTimeout(type, 100);
                    }, 1000);
                }, 1000); // Wait before fading
            }
        }
        window.onload = type;