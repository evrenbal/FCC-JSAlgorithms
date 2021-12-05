function pairElement(str) {
  const PAIRS = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };
  let result = [];
  str.split('').forEach( (base) => {
    result.push([base, PAIRS[base]]);
  });
  return result;
}

pairElement("GCG");