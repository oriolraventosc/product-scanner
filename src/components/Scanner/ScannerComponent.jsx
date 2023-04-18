/* eslint-disable react/style-prop-object */
import ScannerFunctionality from "../Scanner/ScannerFunctionality";
import ScannerComponentStyled from "./ScannerComponentStyled";
import { useNavigate } from "react-router-dom";

const ScannerComponent = () => {
  const navigate = useNavigate();
  function onScanSuccess(decodedText, decodedResult) {
    // Handle on success condition with the decoded text or result.
    console.log(decodedText);
    navigate(`/product/${decodedText}`);
  }

  return (
    <ScannerComponentStyled>
      {" "}
      <div id="reader">
        {" "}
        <ScannerFunctionality
          fps={10}
          qrbox={250}
          disableFlip={false}
          qrCodeSuccessCallback={onScanSuccess}
        />
      </div>
    </ScannerComponentStyled>
  );
};

export default ScannerComponent;
