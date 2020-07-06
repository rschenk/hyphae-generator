import gaussian from 'gaussian'

let normal_distribution = gaussian(0, 1) // mean 0, standard deviation 1

export const randomFloat = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }

  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError('Expected all arguments to be numbers');
  }

  return Math.random() * (max - min) + min;
};

export const randomInt = (min, max) => Math.round( randomFloat(min, max) )

export const randomGaussian = ()=> normal_distribution.ppf(Math.random())