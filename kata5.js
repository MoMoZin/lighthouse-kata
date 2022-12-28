const urlEncode = function (text) {
  // Put your solution here
  // return text.trim().split(" ").join("%20");

  let result = "";

  for (let i = 0; i < text.length; i++) {
    let char = text.charAt(i);
    if (i === 0 || i === text.length - 1) {
      if (char !== " ")
        result += char;
    }
    else {
      if (char === " ")
        result += "%20";
      else
        result += char;
    }
  }
  return result;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
