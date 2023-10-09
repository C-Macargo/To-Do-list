import styled from "styled-components"

function ToDoListContainer(){
  return(
    <MainContainer>
      <TitleContainer>
        <h1>To-Do-List</h1>
      </TitleContainer>
    </MainContainer>
  )
}

export default ToDoListContainer



const MainContainer = styled.div`
  display:flex;
  flex-direction:column;
  width:600px;
  height:600px;
  background-color:purple;
`

const TitleContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
`
