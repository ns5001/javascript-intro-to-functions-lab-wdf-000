function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  var returnthis = string.toUpperCase()
  console.log(returnthis)
}


function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  var new_string = string.toLowerCase()
  if (new_string === string) {
    return "I can't hear you!"
  }

  new_string = string.toUpperCase()
  if (new_string === string) {
    return "YES INDEED!"
  }

  if (string == "I love you, Grandma.") {
    return 'I love you, too.'
  }


}
