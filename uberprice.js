class UberPriceCalculator {
    constructor(basefare, costPerMile,costPerMinute) {
      this.basefare = basefare;
      this.costPerMile = costPerMile;
      this.costPerMinute = costPerMinute;
       }
  
    calculatePrice(distanceInMiles, durationInMinutes) {
      const distanceCost  = distanceInMiles * this.costPerMile;
      
      const durationCost = durationInMinutes * this.costPerMinute;
  
      const TotalCost = this.basefare + distanceCost + durationCost;

      return TotalCost;
    }
}
const calculator = new UberPriceCalculator(2.5,1.5,0.3);

const distanceInMiles = 5;
const durationInMinutes = 15;

const price = calculator.calculatePrice(distanceInMiles,durationInMinutes);
console.log('The estimated Uber Price is ',+ price);

