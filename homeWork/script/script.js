// Creating class with method;
class Animal {

    constructor(configuration) {
        this.configuration = configuration;
    }

    showNotification(placement) {
        let div = document.createElement('div');
        let text = this.configuration[placement];
        div.id = 'snackbar' + '-' + placement;
        document.body.append(div);
        div.appendChild(document.createTextNode(text));
        setTimeout(() => {
            div.remove();
        }, 3000);
        div.onclick = () => {
            div.remove(this);
        }
    }
};
// Create an analog enum to js;
let placement = {
    BOTTOM_LEFT: 'bottom-left',
    TOP_RIGHT: 'top-right',
    TOP_LEFT: 'top-left'
}

// Creating maping with configuration;
// Creating object with expressions;
let animals = {
    'fox': new Animal(
        {
            [placement.BOTTOM_LEFT]: 'Лиса хитрый зверь',
            [placement.TOP_RIGHT]: 'Он ничем не отличался от ста тысяч других лисиц',
            [placement.TOP_LEFT]: 'Рыжий лис'
        }),
    'wolf': new Animal(
        {
            [placement.BOTTOM_LEFT]: 'Волк вожак стаи',
            [placement.TOP_RIGHT]: 'Волк собирает грибы в лесу',
            [placement.TOP_LEFT]: 'Волк меняет шкуру, но не нрав'
        }),
    'boar': new Animal(
        {
            [placement.BOTTOM_LEFT]: 'Кабан дикий свин',
            [placement.TOP_RIGHT]: 'Кабан свинья, которая не поддалась на уговоры',
            [placement.TOP_LEFT]: 'Кабан санитар леса'
        }),
};
// Creating default variable; 

var wildAnimal = new Animal();

// Creating default select; 
let select = document.getElementById("animalsSelect").value;
wildAnimal = animals[select];
// Working with selects;
let sel = document.getElementById("animalsSelect");
sel.addEventListener('change', function () {
    wildAnimal = animals[this.value];
});
// Bottom 
document.getElementById('bottomLeft').addEventListener('click', () => {
    wildAnimal.showNotification(placement.BOTTOM_LEFT);
});
document.getElementById('topRight').addEventListener('click', () => {
    wildAnimal.showNotification(placement.TOP_RIGHT);
});
document.getElementById('topLeft').addEventListener('click', () => {
    wildAnimal.showNotification(placement.TOP_LEFT);
});