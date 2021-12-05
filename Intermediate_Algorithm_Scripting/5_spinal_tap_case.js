function spinalCase(str) {
  return str.toSpinalCase();
}

String.prototype.toSpinalCase = function() {
  let regExp = /([A-Z]*?[a-z]+)/g;
  let matches = this.match(regExp);
  return matches.join('-').toLowerCase();
}

spinalCase('This Is Spinal Tap')
