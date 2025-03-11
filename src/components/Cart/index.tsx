import { ShoppingCart } from "phosphor-react";
import { ContainerCart, ContainerNumber } from "./styles";

interface CartProps {
  full?: number | null;
}

export function Cart(props: CartProps){
  return(
    <ContainerCart>
      <ShoppingCart size={32} weight="fill" />
      {props.full && props.full > 0 && (
        <ContainerNumber>{props.full}</ContainerNumber>
      )}
    </ContainerCart>
  )
}