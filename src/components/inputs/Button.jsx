import styled from 'styled-components'

const Button = styled.button`
  
    background-color: ${props => props.theme.primary};
    padding: 15px 20px;
    border-radius: 10px;
    border: 0;
    font-weight: bold;
    font-size: 16px;
    color: ${props => props.theme.white};
    transition: all 0.3s;

    ${props => !props.disabled && 'cursor: pointer;'}

    :hover {
      background-color: ${props => props.theme.primaryHover};
    }

    :disabled { 
      background-color: ${props => props.theme.disabled};
    }
`

export default Button