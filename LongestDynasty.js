function convertYear(romanYear) {
  const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let result = 0;
  let i = 0;

  while (i < romanYear.length) {
    const currentSymbol = romanYear[i];
    const currentNumber = romanNumerals[currentSymbol];
    const nextSymbol = romanYear[i + 1];
    const nextNumber = romanNumerals[nextSymbol];

    if (currentNumber === undefined) {
      return "Invalid";
    }

    if (nextNumber !== undefined && currentNumber < nextNumber) {
      result += nextNumber - currentNumber;
      i += 2;
    } else {
      result += currentNumber;
      i += 1;
    }
  }

  return result;
}

function longestDynasty(dynastyReign) {
  if (dynastyReign.length === 0) {
    return "No Data";
  }

  let longestReign = 0;
  let longestDynastyName = "";

  for (const entry of dynastyReign) {
    const startYear = convertYear(entry.start);
    const endYear = convertYear(entry.end);

    if (startYear === "Invalid" || endYear === "Invalid") {
      continue;
    }

    const reignDuration = endYear - startYear;

    if (reignDuration > longestReign) {
      longestReign = reignDuration;
      longestDynastyName = entry.dynasty;
    }
  }

  return longestDynastyName;
}

const dynastyReign = [
  { dynasty: "Augustus", start: "XXVII", end: "XIV" },
  { dynasty: "Tiberius ", start: "XIV", end: "XXXVII" },
  { dynasty: "Caligula", start: "XXXVII", end: "XLC" },
];

console.log(longestDynasty(dynastyReign));
