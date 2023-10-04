import TodoListContainer from "./components/TodoListContainer";

function App() {
  return (
      <div className="flex justify-center items-center min-h-screen bg-purple-500">
          <div className="bg-green-500 inline-block">
              <h1 className="text-2xl text-center font-bold mb-4">To Do List</h1>
              <TodoListContainer/>
          </div>
      </div>
  );
}


export default App;

