import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FETCH_ACTORS, FIRST_APP_DATA_FETCH } from '../redux/constants';
import './AppStyle.css';

const App = () => {
  const firstAppData = useSelector(state => state.firstAppReducer);
  const actorsData = useSelector(state => state.actorsReducer);
  console.log("data");
  console.log(firstAppData);
  console.log(actorsData);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className="app-title">First App Title to</h2>
      <button onClick={() => dispatch({ type: FIRST_APP_DATA_FETCH })}>Click Me Nice</button>
      <button onClick={() => dispatch({ type: FETCH_ACTORS })}>Fetch Actors</button>
    </div>
  );
}

export default App;