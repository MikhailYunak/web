class Animals {
    constructor(...arg) {
        this.arg = arg;
    }
};

let fox = new Animals (
        'Лиса хитрый зверь',
        'Он ничем не отличался от ста тысяч других лисиц',
        'Рыжий лис');
let wolf = new Animals(
        'Волк вожак стаи',
        'Волк собирает грибы в лесу',
        'Волк меняет шкуру, но не нрав');
let boar = new Animals(
        'Кабан дикий свин',
        'Кабан свинья, которая не поддалась на уговоры',
        'Кабан санитар леса');

let select = document.getElementById("mySelect");
select.addEventListener('change', function() {
    if(this.value === 'fox'){
        animal = fox
    };
    if(this.value === 'wolf'){
        animal = wolf
    };
    if(this.value === 'boar'){
        animal = boar
    };
});

let button = document.querySelectorAll(".myBtn");

button.forEach(function(index){
    index.onclick = (id) => {
        if(index == button[0]){
            id = 1};
        if(index == button[1]){
            id = 2};
        if(index == button[2]){
            id = 3};
        let div = document.createElement('div');
        div.id = 'snackBar' + id;
        var text = animal.arg[id-1];
        document.body.append(div);
        div.appendChild(document.createTextNode(text))
        setTimeout(()=>{
            div.remove();
            }, 3000);
        div.onclick = ()=> {
            div.remove(this);
             };
             
    }
});