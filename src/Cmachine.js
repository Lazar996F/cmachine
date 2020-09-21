import React, { Component } from "react";
import {
  setRandomNumber,
  setInputNumber,
  setCoinsMachine5bam,
  setCoinsMachine2bam,
  setCoinsMachine1bam,
  setCoinsMachine50pf,
  setCoinsMachine20pf,
  setCoinsMachine10pf,
} from "./store/actions";
import { connect } from "react-redux";

class Cmachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backMoneyInfo: 0,
      randomNumber: 1,
      change5bam: 0,
      change2bam: 0,
      change1bam: 0,
      change50pf: 0,
      change20pf: 0,
      change10pf: 0,
      restMoney: 1,
      sumMachineCoins: 0,
      sumChangeCoins: 0,
      paymentSuccessfull:false,
      noXcoinsInTheMachine:false,
      notEnoughMachineCoins:false,
      tooSmallEnteredpayment:false,
      xCoin:0,
    };
  }

  randomGenerator = () => {
    const randomNum =
      Math.floor(Math.random() * 100) + 1 + Math.floor(Math.random() * 10) / 10;
    this.setState({ randomNumber: randomNum });
  };

  shreddingMoney = () => {
    const {
      randomNumber,
      moneyEntered,
      machine5bam,
      machine2bam,
      machine1bam,
      machine50pf,
      machine20pf,
      machine10pf,
      onSetCoinsMachine5bam,
      onSetCoinsMachine2bam,
      onSetCoinsMachine1bam,
      onSetCoinsMachine50pf,
      onSetCoinsMachine20pf,
      onSetCoinsMachine10pf,
    } = this.props;

    this.setState({
      change5bam: 0,
      change2bam: 0,
      change1bam: 0,
      change50pf: 0,
      change20pf: 0,
      change10pf: 0,
      paymentSuccessfull:false,
      noXcoinsInTheMachine:false,
      notEnoughMachineCoins:false,
      tooSmallEnteredpayment:false,
    });


    let coins = [5, 2, 1, 0.5, 0.2, 0.1];

    let machineCoins = [
      machine5bam,
      machine2bam,
      machine1bam,
      machine50pf,
      machine20pf,
      machine10pf,
    ];

    const machineCoinsNames = [
      "machine5bam",
      "machine2bam",
      "machine1bam",
      "machine50pf",
      "machine20pf",
      "machine10pf",
    ];

    const changeCoinsNames = [
      "change5bam",
      "change2bam",
      "change1bam",
      "change50pf",
      "change20pf",
      "change10pf",
    ];

    let backMoney = (moneyEntered - randomNumber).toFixed(1);
    this.setState({backMoneyInfo:backMoney});

    // check payment 
    if(moneyEntered<randomNumber)
    {
      this.setState({tooSmallEnteredpayment:true});
    }

    let sumCoinsInMachine = 0;

    // machine state checking
    machineCoins.forEach((element, index) => {
      sumCoinsInMachine += element * coins[index];
    });

    if (sumCoinsInMachine < backMoney) {
      backMoney = 0;
      this.setState({notEnoughMachineCoins:true});
    }
  

    // calculating
    coins.forEach((element, index) => {
      if (backMoney >= element) {
        let numberOfCoins = backMoney / element;

        if (numberOfCoins > machineCoins[index]) {
          numberOfCoins = machineCoins[index];
        }
        numberOfCoins = parseInt(numberOfCoins);
        backMoney = (backMoney - numberOfCoins * element).toFixed(1);

        // placing to local state
        let restInMachine = machineCoins[index] - numberOfCoins;
        let keyChangeCoin = changeCoinsNames[index];
        this.setState({ [keyChangeCoin]: numberOfCoins });

        // ckeck: not enough X coins - payment not successfull
        if (machineCoins[index] == 0) {
          changeCoinsNames.forEach((element,index) => {
            this.setState({ [element]: 0});
            // placing to redux-state
            switch (machineCoinsNames[index]) {
              case "machine5bam":
                onSetCoinsMachine5bam({ machine5bam: machine5bam });
                break;
              case "machine2bam":
                onSetCoinsMachine2bam({ machine2bam: machine2bam });
                break;
              case "machine1bam":
                onSetCoinsMachine1bam({ machine1bam: machine1bam });
                break;
              case "machine50pf":
                onSetCoinsMachine50pf({ machine50pf: machine50pf });
                break;
              case "machine20pf":
                onSetCoinsMachine20pf({ machine20pf: machine20pf });
                break;
              case "machine10pf":
                onSetCoinsMachine10pf({ machine10pf: machine10pf });
                break;
              default:
                break;
            }
          });
          // ckeck: machine state of X coins
          const temp=coins[index];
          this.setState({noXcoinsInTheMachine:true,xCoin:temp});
        }


        // placing to redux-state
        switch (machineCoinsNames[index]) {
          case "machine5bam":
            onSetCoinsMachine5bam({ machine5bam: restInMachine });
            break;
          case "machine2bam":
            onSetCoinsMachine2bam({ machine2bam: restInMachine });
            break;
          case "machine1bam":
            onSetCoinsMachine1bam({ machine1bam: restInMachine });
            break;
          case "machine50pf":
            onSetCoinsMachine50pf({ machine50pf: restInMachine });
            break;
          case "machine20pf":
            onSetCoinsMachine20pf({ machine20pf: restInMachine });
            break;
          case "machine10pf":
            onSetCoinsMachine10pf({ machine10pf: restInMachine });
            break;
          default:
            break;
        }
      }
    });
  };

  render() {
    const {
      randomNumber,
      onSetRandomNumber,
      onSetInputNumber,
      machine5bam,
      machine1bam,
      machine2bam,
      machine50pf,
      machine20pf,
      machine10pf,
    } = this.props;
    const {
      money,
      change5bam,
      change2bam,
      change1bam,
      change50pf,
      change20pf,
      change10pf,
      backMoneyInfo,
      noXcoinsInTheMachine,
      notEnoughMachineCoins,
      tooSmallEnteredpayment,
      xCoin,
    } = this.state;

    const isMachineEmpty =
      machine5bam === 0 &&
      machine2bam === 0 &&
      machine1bam === 0 &&
      machine50pf === 0 &&
      machine20pf === 0 &&
      machine10pf === 0;
    const paymentSuccessfull= (change5bam+change2bam+change1bam+change50pf+change20pf+change10pf)!=0;


    return (
      <div>
        <h1>Build by Lazar Furtula</h1>
        <div className="Random">
          <button
            type="button"
            class="btn btn-primary"
            onClick={onSetRandomNumber}
          >
            Generate randon payment
          </button>
          <p>{randomNumber}</p>
        </div>

        <div>
          <input
            placeholder="BAM"
            type="number"
            onChange={(event) =>
              onSetInputNumber({ inputNum: event.target.value })
            }
            value={money}
          ></input>
          <p>Enter amount and click to pay</p>
        </div>

        <div className="Shredd">
          <button
            type="button"
            class="btn btn-info"
            onClick={this.shreddingMoney}
          >
            Confrim and pay
          </button>
          
            {notEnoughMachineCoins && (<p className="text-danger"> not enough coins in the machine, try to pay less</p>)}
        
            {isMachineEmpty && (<p className="text-danger">The machine is empty</p>)}
    
            {tooSmallEnteredpayment && (<p className="text-danger"> entered amount  is too small</p>)}
          
            {paymentSuccessfull && (<p className="text-success">successfull :<br/>{backMoneyInfo}</p>)}
          
            {noXcoinsInTheMachine && (<p className="text-info">there are no more {xCoin} coins in the machine</p>)}
  
        </div>
        <div class="container">
        <div class="row">
            <div class="col">BAM</div>
      <div class="col">CHANGE</div>
      <div class="col">MACHINE STATE</div>
          </div>
          <div class="row">
            <div class="col">5 </div>
      <div class="col">x {change5bam}</div>
      <div class="col">{machine5bam}</div>
          </div>
          <div class="row">
            <div class="col">2 </div>
      <div class="col">x {change2bam}</div>
            <div class="col">{machine2bam}</div>
          </div>
          <div class="row">
            <div class="col">1 </div>
      <div class="col">x {change1bam}</div>
      <div class="col">{machine1bam}</div>
          </div>
          <div class="row">
            <div class="col">0.5</div>
      <div class="col">x {change50pf}</div>
      <div class="col">{machine50pf}</div>
          </div>
          <div class="row">
            <div class="col">0.2</div>
      <div class="col">x {change20pf}</div>
      <div class="col">{machine20pf}</div>
          </div>
          <div class="row">
            <div class="col">0.1</div>
      <div class="col">x {change10pf}</div>
      <div class="col">{machine10pf}</div>
          </div>
        </div>
      </div>
    );
  }
}



const mapStateToProps = (state) => ({
  randomNumber: state.randomNumber,
  moneyEntered: state.moneyEntered,

  machine5bam: state.machine5bam,
  machine2bam: state.machine2bam,
  machine1bam: state.machine1bam,
  machine50pf: state.machine50pf,
  machine20pf: state.machine20pf,
  machine10pf: state.machine10pf,
});

const mapDispatchToProps = (dispatch) => ({
  onSetRandomNumber: (payload) => dispatch(setRandomNumber(payload)),
  onSetInputNumber: (payload) => dispatch(setInputNumber(payload)),
  onSetCoinsMachine5bam: (payload) => dispatch(setCoinsMachine5bam(payload)),
  onSetCoinsMachine2bam: (payload) => dispatch(setCoinsMachine2bam(payload)),
  onSetCoinsMachine1bam: (payload) => dispatch(setCoinsMachine1bam(payload)),
  onSetCoinsMachine50pf: (payload) => dispatch(setCoinsMachine50pf(payload)),
  onSetCoinsMachine20pf: (payload) => dispatch(setCoinsMachine20pf(payload)),
  onSetCoinsMachine10pf: (payload) => dispatch(setCoinsMachine10pf(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cmachine);
