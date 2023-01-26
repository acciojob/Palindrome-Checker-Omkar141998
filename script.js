// // complete the given function

// function palindrome(str){
// 	const alphanumericOnly = str.toLowerCase().match(/[a-z0-9]/g);
// // non alpha numric character
// 	return aplphanumricOnly.join(") === alphanumricOnly.reverse().join(");

// }
// coonsole.log(palindrome("racecar"));
// module.exports = palindrome
// complete the given function

function palindrome(str){
    const alphanumericOnly = str.toLowerCase().match(/[a-z0-9]/g);
    // 2) Strip out non-alphanumeric characters
    
// 3) return string === reversedString
return alphanumericOnly.join('') === alphanumericOnly.reverse().join('');
    
}
console.log(palindrome("racecar"));

module.exports = palindrome
