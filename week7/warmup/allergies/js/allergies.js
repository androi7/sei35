// const allergy = {
//    scorecard: {
//     1: "eggs",
//     2: "peanuts",
//     4: "shellfish",
//     8: "strawberries",
//     16: "tomatoes",
//     32: "chocolate",
//     64: "pollen",
//     128: "cats"
//   },
//
//   test: function(points) {
//     const indeces = Object.keys(this.scorecard).sort(function(a, b){return b-a});
//     let newPoints = points
//     let allergies = [];
//     for (let i = 0; i < indeces.length; i++) {
//       if (indeces[i] <= newPoints) {
//         allergies.push(this.scorecard[parseInt(indeces[i])]);
//         console.log(this.scorecard[indeces[i]]);
//         newPoints -= indeces[i];
//       }
//     }
//      return allergies;
//  }
// };
//
// console.log(allergy.test(7));

const Allergies = {
  // list of scores
  scorecard: {
   1: "eggs",
   2: "peanuts",
   4: "shellfish",
   8: "strawberries",
   16: "tomatoes",
   32: "chocolate",
   64: "pollen",
   128: "cats"
 },

 // list of score numbers
 getKeys: function() {
   const allergyKeys = Object.keys(this.scorecard).map(Number).reverse();
   // console.log(allergyKeys);

   return allergyKeys;
 },

 // compare our score to the list of numbers
 getList: function(score) {
   const allergyKeys = this.getKeys();

   let allergies = [];


   for (let i = 0; i < allergyKeys.length; i++) {
     const key = allergyKeys[i];

     if (score >= key) {
       // console.log(allergies);
       allergies.push(this.scorecard[key]);
       score -= key;
       // console.log(score);
     }
   }
   return allergies;
 },

 // diagnose
 diagnosis: function(score) {
   const allergies = this.getList(score);

   if (allergies.length === 0) {
     console.log("No allergies");
   } else {
     console.log(`Allergies detected: ${allergies.join(', ')}`);
   }
 }
};

Allergies.diagnosis(7);
