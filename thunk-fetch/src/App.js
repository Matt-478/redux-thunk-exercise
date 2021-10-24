import './App.css';
import {connect} from 'react-redux'
import {incrementAction, fetchAction} from './redux/store/action/actions'

const mapStateToProps = (state) => ({
  count: state.count
})


const mapDispatchToProps = (dispatch) => ({
  incrementCounter: () => {
    dispatch(incrementAction())
  },
  fetchAllJobs: (baseEndpoint) => dispatch(fetchAction(baseEndpoint))
})


const App = ({count, incrementCounter, fetchAllJobs}) => {

  const baseEndpoint = "http://private-anon-ba45f3e29b-gowatchit.apiary-mock.com/api/v2/movies/categories"

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchAllJobs(baseEndpoint);
  };


  return (
    <div className="App">
      <h4>Here will go everything to display</h4>
      <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
        <li>item 4</li>
        <li>count: <h3>{count}</h3></li>
        <button onClick={incrementCounter}>+</button>
        <button onClick={handleSubmit}>fetch</button>
      </ul>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

