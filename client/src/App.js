import { useDispatch, useSelector } from "react-redux";
import { getCountryByName } from "./redux/actions";

function App() {
  const dispatch = useDispatch()
  const country = useSelector(state => state.country);
  console.log(country)

  const getCountry = () => {
    dispatch(getCountryByName("bangladesh"));
  }

  return (
    <div>
      <h2>Currently Testing</h2>
      <button onClick={getCountry}>See Country Details</button>
    </div>
  )
}

export default App;