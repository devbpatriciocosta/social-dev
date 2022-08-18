import styled from "styled-components";
import moment from "moment";

import Menu from "../navigation/Menu";

const PostContainer = styled.div`
  background-color: ${props => props.theme.white};
  padding: 20px;
  border-radius: 10px;
`

const StyledUsername = styled.p`
  font-weight: bold; 
  font-size: 18px;
`

const StyledDate = styled.p`
  font-size: 12px;
`
const ContainerText = styled.div`
  margin-top: 20px;
`

const ContatinerMenu = styled.div`
  float: right;
`

function Post ({ text, user, date }) {
  const handleEdit = () => {
    console.log("Editar Publicação")
  }

  const handleDelete = () => {
    console.log("Deletar Publicação")
  }

  return (
    <PostContainer>
      <ContatinerMenu>
        <Menu
          options={[
            {
              text: 'Editar Publicação',
              onClick: handleEdit
            },
            {
              text: 'Deletar publicação',
              onClick: handleDelete
            }
          ]}
        />
      </ContatinerMenu>
      <StyledUsername> @{user} </StyledUsername>
      <StyledDate> {moment(date).format('LLL')}</StyledDate>
      <ContainerText> {text} </ContainerText>
    </PostContainer>
  )
}

export default Post