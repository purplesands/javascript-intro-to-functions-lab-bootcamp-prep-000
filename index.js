var uppercase = "HELLO!"
 

var lowercase = 'hello!'
 

var mixedCase = 'Hi there!'


function shout(string) {
  return (string.toUpperCase())
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}
function logWhisper(string) {
  console.log(string.toLowerCase())
}


function sayHiToGrandma(string)  {
  
  if (string = lowercase) {
    return "I can't hear you!";
  } else if (string = uppercase) {
    return "YES INDEED!";
  } else if (string = mixedCase) {
    return "I love you, too";
  }
}
