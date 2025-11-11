import React from 'react';
import { connect } from 'react-redux';

const Home = ({ count, increment, decrement, reset }) => {
  return (
    <div>
      <h1>Counter App</h1>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

const mapStateToProps = state => ({
  count: state.count
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: 'INCREMENT' }),
  decrement: () => dispatch({ type: 'DECREMENT' }),
  reset: () => dispatch({ type: 'RESET' })
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
