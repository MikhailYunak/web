// Creating class with method;
class Animals{
    constructor(...arg){
        this.arg = arg;
    }
    getNotification(i){
        let div = document.createElement('div');
        let text = this.arg[i];
        div.id = 'snackBar' + i;
        document.body.append(div);
        div.appendChild(document.createTextNode(text))
        setTimeout(()=>{
            div.remove();
                }, 3000);
                div.onclick = ()=> {
                    div.remove(this);
                };      
    }
};
// Creating object with expressions;
let animals = {
    'fox' : new Animals (
        'Лиса хитрый зверь',
        'Он ничем не отличался от ста тысяч других лисиц',
        'Рыжий лис'),
    'wolf': new Animals(
        'Волк вожак стаи',
        'Волк собирает грибы в лесу',
        'Волк меняет шкуру, но не нрав'),
    'boar': new Animals(
        'Кабан дикий свин',
        'Кабан свинья, которая не поддалась на уговоры',
        'Кабан санитар леса'),
};
// Creating default variable; 

var wildAnimal = new Animals();

// Creating default select; 
let select = document.getElementById("mySelect").value;
wildAnimal = animals[select];
// Working with selects;
let sel = document.getElementById("mySelect");
sel.addEventListener('change', function() {
    wildAnimal = animals[this.value];
});
// Bottom 
document.getElementById('leftBottom').addEventListener('click',()=>{
    wildAnimal.getNotification(0);
});
document.getElementById('rightTop').addEventListener('click',()=>{
    wildAnimal.getNotification(1);
});
document.getElementById('leftTop').addEventListener('click',()=>{
    wildAnimal.getNotification(2);
});
