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
  const pAequor = {
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
    }
  };

  return pAequor;
};

let pAequor1 = pAequorFactory(1, mockUpStrand());
console.log(pAequor1.dna);
pAequor1.mutate();
console.log(pAequor1.dna);