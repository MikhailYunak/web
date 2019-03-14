class Animals {
    constructor(...arg) {
        this.arg = arg;
    }
};

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

let sel = document.getElementById("mySelect");
let select = document.getElementById("mySelect").value;
wildAnimal = animals[select];
// for (var key in animals) {
//     var Option = new Option(key, key)
//     select.appendChild(Option);
// };

sel.addEventListener('change', function() {
    wildAnimal = animals[this.value];
});

// var selector = document.getElementById("mySelect");
// var newOption = new Option("Волк", "wolf");
//   selector.appendChild(newOption);
//   newOption.selected = true;

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