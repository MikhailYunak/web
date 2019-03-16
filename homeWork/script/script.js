// Creating class with method;
class Animal{
    constructor(...arg){
        this.arg = arg;
    }
    getNotification(i){
        let div = document.createElement('div');
        let text = this.arg[i];
        div.id = 'snackBar' + i;
        document.body.append(div);
        div.appendChild(document.createTextNode(text));
        setTimeout(() => {
            div.remove();
                }, 3000);
        div.onclick = () => {
            div.remove(this);
                };      
    }
};
// Creating object with expressions;
let animal = {
    'fox' : new Animal (
        'Лиса хитрый зверь',
        'Он ничем не отличался от ста тысяч других лисиц',
        'Рыжий лис'),
    'wolf': new Animal(
        'Волк вожак стаи',
        'Волк собирает грибы в лесу',
        'Волк меняет шкуру, но не нрав'),
    'boar': new Animal(
        'Кабан дикий свин',
        'Кабан свинья, которая не поддалась на уговоры',
        'Кабан санитар леса'),
};
// Creating default variable; 

var wildAnimal = new Animal();

// Creating default select; 
let select = document.getElementById("mySelect").value;
wildAnimal = animal[select];
// Working with selects;
let sel = document.getElementById("mySelect");
sel.addEventListener('change', function() {
    wildAnimal = animal[this.value];
});
// Bottom 
document.getElementById('bottomLeft').addEventListener('click',() => {
    wildAnimal.getNotification(0);
});
document.getElementById('topRight').addEventListener('click',() => {
    wildAnimal.getNotification(1);
});
document.getElementById('topLeft').addEventListener('click',() => {
    wildAnimal.getNotification(2);
});
