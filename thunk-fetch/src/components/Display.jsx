import {connect} from 'react-redux'
import {incrementAction, fetchAction} from '../redux/store/action/actions'
import Questions from './Questions'

const mapStateToProps = (state) => ({
  count: state.count,
  itemsToDisplay: [state.itemsToDisplay]
})


const mapDispatchToProps = (dispatch) => ({
  incrementCounter: () => {
    dispatch(incrementAction())
  },
  fetchAllJobs: (baseEndpoint) => dispatch(fetchAction(baseEndpoint))
})


const Display = ({count, itemsToDisplay, incrementCounter, fetchAllJobs}) => {

  const baseEndpoint = "https://polls.apiblueprint.org/questions"

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

        <h5>
          {
            itemsToDisplay[0][0]
          }
        </h5>

  
  <h3>here</h3>

{/* console.log(data[0].question) */}
      </ul>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Display)

