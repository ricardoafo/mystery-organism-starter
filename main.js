// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(number, dnaArray) {
  let pAequor = {
    'specimenNum': number,
    'dna': dnaArray,
    mutate() {
      const indexToBeChanged = Math.floor(Math.random() * 15);
      const dnaSelection = this.dna[indexToBeChanged];
      let dnaToBeMutated = returnRandBase();

      while(dnaToBeMutated === dnaSelection) {
        dnaToBeMutated = returnRandBase();
      }
      this.dna[indexToBeChanged] = dnaToBeMutated;
    },
    compareDNA(pAequorObject) {
      dnaToCompareWith = pAequorObject.dna;
      let count = 0;

      for (let i = 0; i <= this.dna.length; i++) {
        if (this.dna[i] === dnaToCompareWith[i]) {
          count++;
        };
      };

      let percentageOfCommon = Math.floor((count / this.dna.length) * 100);
      console.log(`specimen #1 and specimen #2 have ${percentageOfCommon}% DNA in common`);
    },
    willLikelySurvive() {
      let count = 0;
      
      for (let base of this.dna) {
        if (base === 'C' || base === 'G') {
          count++;
        };
      };
      return Math.floor((count / this.dna.length) * 100) >= 60;
    }
  };

  return pAequor;
};

let samples = [];

while (samples.length < 30) {
  let sampleNumber = samples.length + 1;
  let pAequorSample = pAequorFactory(sampleNumber, mockUpStrand());

  if (pAequorSample.willLikelySurvive()) {
    samples.push(pAequorSample);
  };
};

console.log(samples);