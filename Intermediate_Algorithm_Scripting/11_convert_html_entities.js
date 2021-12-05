function convertHTML(str) {
  /* Without using String.replace */

  const HTMLENTITIES = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&apos;"
  }

  return str
    .split("")
    .map( entity => HTMLENTITIES[ entity ] || entity)
    .join("");

}

convertHTML("Dolce & Gabbana");