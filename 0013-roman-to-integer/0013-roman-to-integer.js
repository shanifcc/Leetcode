/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
     let sum = 0;
    let splitRoma = s.split('');
    
    for (let i = 0; i < splitRoma.length; i++) {
        let current = splitRoma[i];
        let next = splitRoma[i + 1];
        
        if (current === 'I' && (next === 'V' || next === 'X')) {
            sum -= 1
        } else if (current === 'X' && (next === 'L' || next === 'C')) {
            sum -= 10; 
        } else if (current === 'C' && (next === 'D' || next === 'M')) {
            sum -= 100;
        } else {
            if (current === 'I') sum += 1;
            else if (current === 'V') sum += 5;
            else if (current === 'X') sum += 10;
            else if (current === 'L') sum += 50;
            else if (current === 'C') sum += 100;
            else if (current === 'D') sum += 500;
            else sum += 1000; 
        }
    }
    
    return sum;
};