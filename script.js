let inputPalindrome = document.querySelector("#checker")
let checkButton = document.querySelector("#checkButton")
let displayDiv = document.querySelector("#result")
let str;

function checkPalindrome() {
    // create two pointers (one at start, one at end)
    // bring in inputPalindrome.value as str and bring to lower case
    str = inputPalindrome.value.toLowerCase()
    let i = 0;
    let j = str.length-1
    // if (str.length < 1) {
    //     displayDiv.innerText = `Please enter a word`
    //     return false;
    // }
    while (j > i) {
        if (str.charAt(i) !== str.charAt(j)) {
            return false;
        } else {
        // move pointers closer to the center
            i++
            j--
        }
    }
    return true;
}

// event listener to checkButton
checkButton.addEventListener("click", (e) => {
    // prevent page refresh
    if (inputPalindrome.value < 1) {
        alert(`Please enter a word to test.`)
        return
}
    checkPalindrome() ? displayDiv.innerHTML = `<strong>${str}</strong> IS a Palindrome!` : displayDiv.innerHTML = `<strong>${str}</strong> is NOT a Palindrome!`
    }
)