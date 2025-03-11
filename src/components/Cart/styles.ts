import styled from "styled-components";

export const ContainerLocation = styled.div`
  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple']};

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  margin: 8px;
`


export const ContainerCart = styled.button`
  display: flex;
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  position: relative;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: none;
  border-radius: 8px;

  padding: 8px;
  
  :hover{
    color: ${(props) => props.theme['yellow']};
  }

  &.active {
    color: ${(props) => props.theme['yellow']};
  }
`

export const ContainerNumber = styled.span`
  display: flex;
  position: absolute;
  justify-content: left;
  top: -10px;
  right: -10px;
  font-size: 0.875rem;
  font-weight: bold;

  color: ${(props) => props.theme['base-white']};
  background-color: ${(props) => props.theme['yellow-dark']};

  padding: 4px 8px;
  border-radius: 20px;
  text-align: center;
  justify-content: center;
`