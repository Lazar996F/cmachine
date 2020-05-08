import * as actionTypes from './actionsTypes'


export const setRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1 + Math.floor(Math.random() * 10) / 10;
    return {
      randomNumber: randomNumber,
      type: actionTypes.SET_RANDOM_NUMBER,
    }
  };

export const setInputNumber = (payload) => {
    const {inputNum} =payload

    return {
      moneyEntered: inputNum,
      type: actionTypes.SET_INPUT_NUMBER,
    }
};

export const setCoinsMachine5bam = (payload) => {
  const {machine5bam}=payload
  return {
    machine5bam: machine5bam,
    type: actionTypes.SET_COINS_MACHINE_5BAM,
  }

};

export const setCoinsMachine2bam = (payload) => {
  const {machine2bam}=payload
  return {
    machine2bam: machine2bam,
    type: actionTypes.SET_COINS_MACHINE_2BAM,
  }

};

export const setCoinsMachine1bam = (payload) => {
  const {machine1bam}=payload
  return {
    machine1bam: machine1bam,
    type: actionTypes.SET_COINS_MACHINE_1BAM,
  }

};

export const setCoinsMachine50pf = (payload) => {
  const {machine50pf}=payload
  return {
    machine50pf: machine50pf,
    type: actionTypes.SET_COINS_MACHINE_50PF,
  }

};
export const setCoinsMachine20pf = (payload) => {
  const {machine20pf}=payload
  return {
    machine20pf: machine20pf,
    type: actionTypes.SET_COINS_MACHINE_20PF,
  }

};

export const setCoinsMachine10pf = (payload) => {
  const {machine10pf}=payload
  return {
    machine10pf: machine10pf,
    type: actionTypes.SET_COINS_MACHINE_10PF,
  }

};
