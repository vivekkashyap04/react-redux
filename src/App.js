import { connect } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from './stores/action';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App(props) {
  const { todos, addTodo, deleteTodo, toggleTodo } = props;
  
  return (
    <div className="App">
       <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  addTodo,
  deleteTodo,
  toggleTodo,
};


export default connect(mapStateToProps,mapDispatchToProps)(App);
