document.querySelector('main').setAttribute('class','body');
document.querySelector('h1').setAttribute('class','heading');
document.querySelector('form').setAttribute('class','form');
const btn = document.querySelector('#button');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const li = document.createElement('li');

btn.addEventListener('click',function(){
    li.setAttribute('class','list-item');
    li.innerText = input.value;
    ul.appendChild(li);
    input.value = "";
})
li.addEventListener('click', function(){
    li.classList.toggle('done');
});

li.addEventListener('dblclick', function(){
    li.remove();
});
