import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";

import {
  CloseButton,
  Content,
  Overlay,
  TransactionButton,
  TransactionTypeContainer,
} from "./styles";

export function NewTransactionModal() {
  const radioGroupValue = ["income", "outcome"];

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form action="">
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <TransactionTypeContainer>
            <TransactionButton variant="income" value="income">
              <ArrowCircleUp size={24} />
              Entrada
            </TransactionButton>
            <TransactionButton variant="outcome" value="outcome">
              <ArrowCircleDown size={24} />
              Saída
            </TransactionButton>
          </TransactionTypeContainer>

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
