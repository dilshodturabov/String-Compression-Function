let string = 'aavrrrrrggggg';
let result = stringCompression(string);
console.log(result);

function stringCompression(fullString) {
    let compressedStr = '';
    let counter = 0;
    for (let letter = 0; letter < fullString.length; letter++) {
        counter++;
        let currentStr = fullString[letter];

        if (currentStr !== fullString[letter + 1]) {
            compressedStr += currentStr + counter;
            counter = 0;
        }
    }

    return fullString.length > compressedStr.length ? compressedStr : fullString;
}