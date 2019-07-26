import Genemo from 'genemo'
const distances = require('./data/distances48.json');

const cities = [...Array(distances.length).keys()];
const generateIndividual = Genemo.randomPermutationOf(cities);

// Fitness is measured as a path total length
const fitnessFunction = (individual) => {
  const lastToFirstDistance = distances[individual[individual.length - 1]][individual[0]];
  const totalDistance = individual.slice(0, -1).reduce((distance, city, index) => {
    const nextCity = individual[index + 1];
    const currentDistance = distances[city][nextCity];
    return distance + currentDistance;
  }, 0) + lastToFirstDistance;
  return totalDistance;
};

const evolutionOptions = {
  generateInitialPopulation: Genemo.generateInitialPopulation({
    generateIndividual,
    size: 500,
  }),
  selection: Genemo.selection.tournament({ size: 3, minimizeFitness: true }),
  reproduce: Genemo.reproduce({
    crossover: Genemo.crossover.orderOne(),
    mutate: Genemo.mutation.swapTwoGenes(),
    mutationProbability: 0.03,
  }),
  succession: Genemo.elitism({ keepFactor: 0.002, minimizeFitness: true }),
  evaluatePopulation: Genemo.evaluatePopulation({ fitnessFunction }),
  stopCondition: Genemo.stopCondition({ maxFitness: 33523, maxIterations: 1000 }),
  maxBlockingTime: 1000 / 60,
};

export default (callback) => (
  Genemo.run({
    ...evolutionOptions,
    iterationCallback: ({ evaluatedPopulation, iteration }) => {
      callback({
        generation: iteration,
        shortestPath: Math.min(...evaluatedPopulation.map(({ fitness }) => fitness)),
      });
    }
  })
);
