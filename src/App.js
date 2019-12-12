import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { increment, decrement, reset } from './actionCreators'

const App = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `${count}`
  });

  return (
    <div>
      <p>Hooks counter = {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Add 1
      </button>
      <button onClick={() => setCount(count + 2)}>
        Add 2
      </button>
    </div>
  );
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = { increment, decrement, reset }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

