export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const counterIncrement = () => {
  return { type: 'INCREMENT'};
};

export const counterDecrement = () => {
  return { type: 'DECREMENT'};
};