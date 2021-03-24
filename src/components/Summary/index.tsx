import { Container } from "./styles";
import income from "../../assets/income.svg";
import outcome from "../../assets/outcome.svg";
import total from "../../assets/total.svg";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={income} alt="Entradas" />
        </header>
        <strong>R$5000,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcome} alt="Saídas" />
        </header>
        <strong>- R$5000,00</strong>
      </div>

      <div className="highligth-background">
        <header>
          <p>Total</p>
          <img src={total} alt="Total" />
        </header>
        <strong>R$0,00</strong>
      </div>
    </Container>
  );
}