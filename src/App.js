import './app.css'
import {CalculationForm} from "./Features/CalculationForm/CalculationForm";

function App() {
  return <div className={'container'}>
    <h1 className={'title'}>Бронирование номера</h1>
    <CalculationForm/>
  </div>
}

export default App;
