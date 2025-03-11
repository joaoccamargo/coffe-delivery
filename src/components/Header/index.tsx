import { HeaderContainer } from "./styles";
import logo from '../../assets/logo.png'
import { NavLink } from "react-router-dom";
import { Cart } from "../Cart";
import { ContainerLocation } from "../Cart/styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <nav>
        <ContainerLocation>
          Location
        </ContainerLocation>
        <NavLink to="/checkout" title="Checkout">
          <Cart full={null}/>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}