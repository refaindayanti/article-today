import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from './redux/actions/news.action'
import Routes from './routes/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return <Routes />
}

export default App;
