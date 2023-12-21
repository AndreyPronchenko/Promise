// Задание №1

let But = document.querySelector('.but');
function num1() {
let one = 'Добрый день!';
console.log(one);
one = 'До свидания';
console.log(one);
}
But.onclick = num1;

// Задание №2

let But1 = document.querySelector('.but1');
function num2() {
function request(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            resolve('It`s a beautiful day')
            });
    })
    }
    request()
        .catch(console.error)
        .finally(() => {
            console.error('операция завершена')
        });
      }
      But1.onclick = num2;


// Задание №3

let But2 = document.querySelector('.but2');
function num() {
let one = 'Как дела?';
setTimeout(() => {
one = 'Отлично!';
console.log(one);
}, 3000);
console.log(one);
}
But2.onclick = num;

// Задание №4

let But3 = document.querySelector('.but3');
function num3() {
function doSomething() {
    return new Promise((resolve, reject) => {
        console.log('Готово');
        if(Math.random() > 0.5) {
            resolve('Успех');
        } else {
            reject('Ошибка');
        }
});
}
doSomething().then((value) => {
    console.log(value)
});
}
But3.onclick = num3;

// Задание №5

let But4 = document.querySelector('.but4');
function num4() {
fetch ('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => console.log(data));
}
But4.onclick = num4;

// Задание №6

fetch ('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => 
    document.querySelector('.six').innerHTML = JSON.stringify(data)
    )
    .catch(console.error);