//  Создаем класс
class Animals {
    constructor(...arg) {
        this.arg = arg;
    }
};

// Создаем прототипы класса

var animals = {
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
var wildAnimal = new Animals();

let select = document.getElementById("mySelect");
select.addEventListener('change', function() {
    wildAnimal = animals[this.value];
});

// Присваеваем переменную к кнопкам по класу

let button = document.querySelectorAll(".myBtn");

// Используем цикл forEach к каждой кнопке и присваиваем индекс
// Затем создаем "див" и тудаже текстовый.
// Далее функция сетТаймаута и удаление по клику на "див"

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
        var text = wildAnimal.arg[id-1];
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
