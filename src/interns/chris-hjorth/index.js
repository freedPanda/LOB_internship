const learnButton = document.getElementById('learn-button');
const whyButton = document.getElementById('why-button');
const learnText = document.getElementById('learn-text');
const whyText = document.getElementById('why-text');

learnButton.addEventListener('click',function(){
    learnText.setAttribute("style", "visibility: visible");
});

whyButton.addEventListener('click',function(){
    whyText.setAttribute("style", "visibility: visible");
});

