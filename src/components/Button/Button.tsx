import Button from "@mui/material/Button";
import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text: string;
  action?: () => void;
  style: string;
}

const ButtonComponent = ({ action, style, text }: ButtonProps): JSX.Element => {
  return (
    <>
      <ButtonStyled>
        <Button variant="contained" onClick={action} className={style}>
          {text}
        </Button>
      </ButtonStyled>
    </>
  );
};

export default ButtonComponent;
