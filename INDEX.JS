function TemperatureFeedback(temp) {
    if(temperature<0){
        return"It's freezing!"
    }
    else if(temperature>0 && temperature<15){
        return "It's cold!"
    }
    else if (temperature>16 && temperature<25){
        return "It's comfortable!"
    }
    else{
        return  "It's hot!"
    }


}
function checkGuess(number, guess){
    if(guess>number){
        return"Too high!"
    }
    else if(guess<number){
        return "Too low!"
    }
    else{
        return "true"
    }
}
function isEligibleForDiscount(age, isStudent){
    if(age<18 && age>60){
        return"true"
    }
    else{
        return"false"
    }
}
function canLogin(username, password, isAdmin){
    if(username==="admin"&& password==="12345"&& isAdmin==='true' ){
        return"Access granted for admin"
    }
    else if(username !== "admin" && password==="12345"){
        return "Access granted for user"
    }
    else{
        return "Access denied"
    }
}
function classifyNumber(num) {
    if (num === 0) {
        return "Zero";
    } else if (num > 0 && num % 2 === 0) {
        return "Positive and even";
    } else if (num > 0 && num % 2 !== 0) {
        return "Positive and odd";
    } else if (num < 0 && num % 2 === 0) {
        return "Negative and even";
    } else {
        return "Negative and odd";
    }
}
function countVowels(str){
    if (str.includes("a") ||str.includes("e")){
        return true ;
    }else{
        return false;
    }

}
function replaceWord(sentence, wordToReplace, replacement) {
    return sentence.replaceAll(wordToReplace, replacement);
}
function emphasize(word, times){
    if(times <= 0){
        return''
    }
    else{
        return(word + ' ').repeat(times).trim();
    }
}
function emphasize(word, times) {
    if (times <= 0) return ''; 
    return (word + ' ').repeat(times).trim(); 
}