import React from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { LOGIN_USER } from '../redux/constants';

const Home = () => {
  const userDetails = useSelector(state => state.user);
  const posts = useSelector(state => state.posts);
  const firstAppData = useSelector(state => state.firstAppReducer);
  const actorsData = useSelector(state => state.actorsReducer);
  const dispatch = useDispatch();

  console.log(userDetails);
  console.log(posts);
  console.log(firstAppData);
  console.log(actorsData);

  return (
    <div>
      Home Page
      <div>
        <button onClick={() => dispatch({ type: LOGIN_USER, payload: "yishayf" })}>Login User</button>
      </div>
    </div>
  );
}

export default Home;