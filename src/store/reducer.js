import * as actionTypes from "./actionsTypes";

const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

const initialState = {
  randomNumber: 0,
  moneyEntered: 0,
  machine5bam: 50,
  machine2bam: 50,
  machine1bam: 50,
  machine50pf: 50,
  machine20pf: 50,
  machine10pf: 50,
     
};

const setRandomNumber = (state, action) => {
  return updateObject(state, { randomNumber: action.randomNumber });
};

const setInputNumber = (state, action) => {
  return updateObject(state, { moneyEntered: action.moneyEntered });
};

const setCoinsMachine5bam = (state, action) => {
  return updateObject(state, {machine5bam: action.machine5bam});
};

const setCoinsMachine2bam = (state, action) => {
  return updateObject(state, {machine2bam: action.machine2bam});
};

const setCoinsMachine1bam = (state, action) => {
  return updateObject(state, {machine1bam: action.machine1bam});
};
const setCoinsMachine50pf = (state, action) => {
  return updateObject(state, {machine50pf: action.machine50pf});
};

const setCoinsMachine20pf = (state, action) => {
  return updateObject(state, {machine20pf: action.machine20pf});
};


const setCoinsMachine10pf = (state, action) => {
  return updateObject(state, {machine10pf: action.machine10pf});
    };
  




const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_RANDOM_NUMBER:
      return setRandomNumber(state, action);
    case actionTypes.SET_INPUT_NUMBER:
      return setInputNumber(state, action);
    case actionTypes.SET_COINS_MACHINE_5BAM:
      return setCoinsMachine5bam(state, action);
    case actionTypes.SET_COINS_MACHINE_2BAM:
      return setCoinsMachine2bam(state, action);
    case actionTypes.SET_COINS_MACHINE_1BAM:
      return setCoinsMachine1bam(state, action);
    case actionTypes.SET_COINS_MACHINE_50PF:
      return setCoinsMachine50pf(state, action);
    case actionTypes.SET_COINS_MACHINE_20PF:
      return setCoinsMachine20pf(state, action);
    case actionTypes.SET_COINS_MACHINE_10PF:
      return setCoinsMachine10pf(state, action);
    default:
      return state;
  }
};

export default reducer;
