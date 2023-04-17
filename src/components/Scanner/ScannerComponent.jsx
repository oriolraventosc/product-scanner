import React from "react";
import ScannerFunctionality from "../Scanner/ScannerFunctionality";
import ScannerComponentStyled from "./ScannerComponentStyled";

class ScannerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      decodedResults: [],
    };

    // This binding is necessary to make `this` work in the callback.
    this.onNewScanResult = this.onNewScanResult.bind(this);
  }

  render() {
    return (
      <ScannerComponentStyled>
        <ScannerFunctionality
          fps={10}
          qrbox={250}
          disableFlip={false}
          qrCodeSuccessCallback={this.onNewScanResult}
        />
        <p>{this.state.decodedResults}</p>
      </ScannerComponentStyled>
    );
  }

  onNewScanResult(decodedText, decodedResult) {
    console.log("App [result]", decodedResult);

    // let decodedResults = this.state.decodedResults;
    // decodedResults.push(decodedResult);
    this.setState((state, props) => {
      state.decodedResults.push(decodedResult);
      return state;
    });
  }
}

export default ScannerComponent;
