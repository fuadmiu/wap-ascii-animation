window.onload = function(){
    "use strict";

    let speed = 250;
    var myInterval;
    
    document.getElementById('turbo').addEventListener('change', function () {
        speed = this.checked ? 50 : 250;
    });

    document.getElementById("animation").addEventListener('change', (e) => {
        let textArea = document.getElementById('text-area');
        textArea.value = ANIMATIONS[e.target.value];
    });

    document.getElementById("fontsize").addEventListener('change', (e) => {
        fontSizeOnChange(e.target.value);
    });

    function fontSizeOnChange(fontSize) {
        console.log(fontSize);
        document.getElementById("text-area").style.fontSize = fontSize;
    }

    document.getElementById("start").addEventListener('click', (e) => {
        startAnimation();
    });
    
    function startAnimation() {
        document.getElementById("stop").disabled = false;
        document.getElementById("start").disabled = true;
        let animation = document.getElementById("animation");
        animation.disabled = true;
        let animationFrames = ANIMATIONS[animation.value].split('=====\n');
        let counter = 0;
        myInterval = setInterval(function () {
            document.getElementById("text-area").value = animationFrames[counter++];
            if (counter == animationFrames.length) {
                counter = 0;
            }
        }, speed);
    }

    document.getElementById("stop").addEventListener('click', (e) => {
        stopAnimation();
    });

    function stopAnimation() {
        clearInterval(myInterval);
        let animation = document.getElementById("animation");
        animation.disabled = false;
        document.getElementById("text-area").value = ANIMATIONS[animation.value];
        document.getElementById("start").disabled = false;
        document.getElementById("stop").disabled = true;
    }
}