'use strict';

/********************************************************************************************
 *                                                                                          *
 * Plese read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String  *
 *                                                                                          *
 ********************************************************************************************/



/**
 * Returns the result of concatenation of two strings.
 *
 * @param {string} value1
 * @param {string} value2
 * @return {string}
 *
 * @example
 *   'aa', 'bb' => 'aabb'
 *   'aa',''    => 'aa'
 *   '',  'bb'  => 'bb'
 */
function concatenateStrings(value1, value2) {
    return value1 + value2;
}


/**
 * Returns the length of given string.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'aaaaa' => 5
 *   'b'     => 1
 *   ''      => 0
 */
function getStringLength(value) {
    return value.length;
}

/**
 * Returns the result of string template and given parameters firstName and lastName.
 * Please do not use concatenation, use template string :
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
 *
 * @param {string} firstName
 * @param {string} lastName
 * @return {string}
 *
 * @example
 *   'John','Doe'      => 'Hello, John Doe!'
 *   'Chuck','Norris'  => 'Hello, Chuck Norris!'
 */
function getStringFromTemplate(firstName, lastName) {
    let newString = "Hello, " + firstName + ' ' + lastName + '!';
    return newString;
}

/**
 * Extracts a name from template string 'Hello, First_Name Last_Name!'.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'Hello, John Doe!' => 'John Doe'
 *   'Hello, Chuck Norris!' => 'Chuck Norris'
 */
function extractNameFromTemplate(value) {
    let arr = value.split('');
    arr = arr.slice(7, arr.length - 1);
    let newString = arr.join('');
    
    return newString;
}


/**
 * Returns a first char of the given string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'John Doe'  => 'J'
 *   'cat'       => 'c'
 */
function getFirstChar(value) {
    return value[0];
}

/**
 * Removes a leading and trailing whitespace characters from string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   '  Abracadabra'    => 'Abracadabra'
 *   'cat'              => 'cat'
 *   '\tHello, World! ' => 'Hello, World!'
 */
function removeLeadingAndTrailingWhitespaces(value) {
    let arr = value.split('');
    while (arr[0] == ' ' || arr[0] == '\t') arr.shift();
    while (arr[arr.length - 1] == ' ' || arr[arr.length - 1] == '\t') arr.pop();

    let newString = arr.join('');

    return newString;
}

/**
 * Returns a string that repeated the specified number of times.
 *
 * @param {string} value
 * @param {string} count
 * @return {string}
 *
 * @example
 *   'A', 5  => 'AAAAA'
 *   'cat', 3 => 'catcatcat'
 */
function repeatString(value, count) {
    let newString = '';
    for (let i = 0; i < count; i++) newString += value;

    return newString;
}

/**
 * Remove the first occurrence of string inside another string
 * 
 * @param {string} str
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'To be or not to be', 'not'  => 'To be or to be'
 *   'I like legends', 'end' => 'I like legs',
 *   'ABABAB','BA' => 'ABAB'
 */
function removeFirstOccurrences(str, value) {
    let pos = str.indexOf(value);

    return str.slice(0, pos) + str.slice(pos + value.length);
}

/**
 * Remove the first and last angle brackets from tag string
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   '<div>' => 'div'
 *   '<span>' => 'span'
 *   '<a>' => 'a'
 */
function unbracketTag(str) {
    return str.slice(1, str.length - 1);
}


/**
 * Converts all characters of the specified string into the upper case
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   'Thunderstruck' => 'THUNDERSTRUCK'
 *  'abcdefghijklmnopqrstuvwxyz' => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
 */
function convertToUpperCase(str) {
    return str.toUpperCase();
}

/**
 * Extracts e-mails from single string with e-mails list delimeted by semicolons
 *
 * @param {string} str
 * @return {array}
 *
 * @example
 *   'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com' => ['angus.young@gmail.com', 'brian.johnson@hotmail.com', 'bon.scott@yahoo.com']
 *   'info@gmail.com' => ['info@gmail.com']
 */
function extractEmails(str) {
    return str.split(';');
}

/**
 * Returns the string representation of rectangle with specified width and height
 * using pseudograhic chars
 *
 * @param {number} width
 * @param {number} height
 * @return {string}
 *
 * @example
 *
 *            '┌────┐\n'+
 *  (6,4) =>  '│    │\n'+
 *            '│    │\n'+
 *            '└────┘\n'
 *
 *  (2,2) =>  '┌┐\n'+
 *            '└┘\n'
 *
 *             '┌──────────┐\n'+
 *  (12,3) =>  '│          │\n'+
 *             '└──────────┘\n'
 *
 */
function getRectangleString(width, height) {
    let top = '┌';
    let bottom = '└';
    let space = '│';

    for (let i = 0; i < width - 2; i++) {
        bottom += '─';
        top += '─';
        space += ' ';
    }
    top += '┐\n';
    bottom += '┘\n';
    space += '│\n';

    let newString = top;
    for (let i = height - 2; i > 0; i--) newString += space;
    newString += bottom;

    return newString;
}


/**
 * Encode specified string with ROT13 cipher
 * See details:  https://en.wikipedia.org/wiki/ROT13
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *
 *   'hello' => 'uryyb'
 *   'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
 *   'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
 *   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' => 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
 *
 */
function encodeToRot13(str) {
    let arr = str.split('');
    let a
    arr.forEach( (x, i) => {
        if (x > '@') {
            if (x < '[') a = 65;
            else a = 97;
            x = String.fromCharCode((x.charCodeAt(0) - a + 13) % 26 + a);
        }
        arr[i] = x;
    })
    return arr.join('');
}

/**
 * Returns true if the value is string; otherwise false.
 * @param {string} value
 * @return {boolean}
 *
 * @example
 *   isString() => false
 *   isString(null) => false
 *   isString([]) => false
 *   isString({}) => false
 *   isString('test') => true
 *   isString(new String('test')) => true
 */
function isString(value) {
    if (value == undefined) return false;
    return value.constructor == String;
}


/**
 * Returns playid card id.
 * 
 * Playing cards inittial deck inclides the cards in the following order:
 * 
 *  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
 *  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
 *  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
 *  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
 * 
 * (see https://en.wikipedia.org/wiki/Standard_52-card_deck)
 * Function returns the zero-based index of specified card in the initial deck above.
 * 
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'A♣' => 0
 *   '2♣' => 1 
 *   '3♣' => 2
 *     ...
 *   'Q♠' => 50
 *   'K♠' => 51
 */
function getCardId(value) {
    let len = value.length - 1;
    let k;
    if (len == 2) k = 10;
    else if (value[0] == 'A') k = 1;
        else if (value[0] == 'J') k = 11;
            else if (value[0] == 'Q') k = 12;
                else if (value[0] == 'K') k = 13;
                    else k = +value[0];
                
    let a;
    if (value[len] == '♣') a = 0;
    else if (value[len] == '♦') a = 13;
        else if (value[len] == '♥') a = 26;
            else a = 39;
    
    return k + a - 1;
}


module.exports = {
    concatenateStrings: concatenateStrings,
    getStringLength: getStringLength,
    getStringFromTemplate: getStringFromTemplate,
    extractNameFromTemplate: extractNameFromTemplate,
    getFirstChar: getFirstChar,
    removeLeadingAndTrailingWhitespaces: removeLeadingAndTrailingWhitespaces,
    repeatString: repeatString,
    removeFirstOccurrences: removeFirstOccurrences,
    unbracketTag: unbracketTag,
    convertToUpperCase: convertToUpperCase,
    extractEmails: extractEmails,
    getRectangleString: getRectangleString,
    encodeToRot13: encodeToRot13,
    isString: isString,
    getCardId: getCardId
};
