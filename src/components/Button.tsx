// import styles from "./Button.module.css";
import { ButtonContainer, ButtonVariant } from "./Button.styles";

interface ButtonProps {
  variant?: ButtonVariant;
}

export function Button({ variant = "success" }: ButtonProps) {
  return (
    //<button className={`${styles.button} ${styles[color]}`}>Enviar</button>
    <ButtonContainer variant={variant}>Enviar</ButtonContainer>
  );
}
