document.getElementById("color-cng").addEventListener('click',function(event){
    event.preventDefault();
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    const body=document.body;
    body.style.backgroundColor=randomColor;

})