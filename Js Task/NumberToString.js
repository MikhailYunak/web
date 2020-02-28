function numberToString(numbers){

    if(typeof numbers !== "number" ) return ("not a number");

    if(numbers < 0) return (`The number ${numbers} must be greater than zero`)

    const Digits = ["нуль", "один", "два", "три", "четыре", "пять", 
        "шесть", "семь", "восемь","девять"];

        let reversNumber = [];
        let resault = "";
        let nexNumber = 0;
        let indexDigits = 0;

        do{
            nexNumber = numbers % 10;
            reversNumber[indexDigits] = nexNumber;
            indexDigits ++;
            numbers = Math.floor(numbers / 10);
        } while(numbers > 0);

        indexDigits--;

        for( ;indexDigits >= 0; indexDigits--){
            resault += Digits[reversNumber[indexDigits]] + " ";
        }
        return resault;
}

let some = 0;


console.log(numberToString(some));
