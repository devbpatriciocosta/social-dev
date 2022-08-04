import styled from 'styled-components';


const StyleNavbar = styled.div`
  background-color: ${props => props.theme.white};
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 100px;

  @media (max-width: 500px) {
    padding: 0 20px;
  }
`

const StyleLogo = styled.span`
  flex: 1;
  font-weight: bold;
  font-size: 20px;
`

function Navbar () {
  return (
    <StyleNavbar>
      <StyleLogo> # Social Dev </StyleLogo>
      <div>
        <a href="#"> Desconectar </a>
      </div>
    </StyleNavbar>
  )
}

export default Navbar