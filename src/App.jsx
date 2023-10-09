import styled from "styled-components";
import ToDoListContainer from "./components/TodoListContainer";

function App() {
	return (	
            <StyledBody>
			<ToDoListContainer />
            </StyledBody>
	);
}

export default App;

const StyledBody = styled.div`
  margin: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`