import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { getCountryByName } from '../../redux/actions';
import Loader from '../../components/loader/Loader';
import './Home.scss';

function Home() {
  const [countryName, setCountryName] = useState('');
  const [status, setStatus] = useState('');
  const [country, setCountry] = useState({});
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    document.title = 'Home';
    if (
      state.countryObj.country &&
      Object.keys(state.countryObj.country).length > 1 &&
      countryName
    ) {
      setStatus('completed');
      setCountry(state.countryObj.country);
    }
    if (!state.login) {
      history.push('/login');
    }
  }, [state, history, countryName]);

  const getCountry = () => {
    setStatus('loading');
    dispatch(getCountryByName(countryName));
  };

  return (
    <div className="home-section">
      <div className="search-section">
        <div className="input-field">
          <TextField
            id="outlined-basic"
            fullWidth
            label="Country Name"
            variant="outlined"
            value={countryName}
            onChange={(e) => setCountryName(e.target.value)}
          />
          <Button
            variant="contained"
            color="secondary"
            className="search-btn"
            onClick={getCountry}
            fullWidth
          >
            Search
          </Button>
        </div>
      </div>
      {!country && <h2>Not Found</h2>}
      {status === 'loading' && <Loader />}
      {status === 'completed' && country && (
        <div className="country-info-section">
          <div className="info">
            <h2 className="country-name">{country.name}</h2>
            <h3>Capital: {country.capital}</h3>
            <h3>Area: {country.area}</h3>
            <h3>Population: {country.population}</h3>
            <h3>Region: {country.region}</h3>
            <h3>Languages:</h3>
            <ul>
              {country.languages.map((language) => {
                return <li key={language.name}>{language.name}</li>;
              })}
            </ul>
          </div>
          <div className="flag-section">
            <img src={country.flag} alt="" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
