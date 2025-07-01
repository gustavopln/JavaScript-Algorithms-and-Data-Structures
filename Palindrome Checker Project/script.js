const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

const verifyString = () => {
    if (textInput.value.length === 0){
        alert("Please input a value");
    }

    const normalText = textInput.value;
    if (normalText === "A"){
        result.innerHTML = "A is a palindrome.";
    }

    const normalizedText = normalText
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '');
    
    const invertedText = normalizedText
        .split('')
        .reverse()
        .join('');
    
    normalizedText === invertedText ? result.innerHTML = `${normalText} is a palindrome` : result.innerHTML = `${normalText} is not a palindrome`;
}

checkButton.addEventListener("click", verifyString)