function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const ER = 6367.4447;
  const result = []

  for (let sat of arr) {
    result.push({
      name: sat.name,
      orbitalPeriod : getOrbitalPeriod(ER + sat.avgAlt, GM)
    });
  }
  return result;
}

function getOrbitalPeriod(a,u) {
  const A = a**3;
  const B = Math.sqrt(A / u)
  return Math.round(2 * Math.PI * B);
}


orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])