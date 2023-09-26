import { connect } from "react-redux";
import { increment,decrement,reset } from "./stores/action";
function App(props) {
  
  
  return (
    <div className="App">
      <h1>{props.count}</h1>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.decrement}>decrement</button>
      <button onClick={props.reset}>Reset</button>
    </div>
  );
}

function getState(state){
  return {
    count : state.value
  }
}

const mapDispatchToProps = {
  increment,decrement,reset
};


export default connect(getState,mapDispatchToProps)(App);
