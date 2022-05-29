//App.js Code
import './App.scss';
import Header from "./components/Header/Header"
import BarChart1 from "./components/BarChart/BarChart1";
import PieChart from "./components/PieChart/PieChart";

function App() {
  return (
    <div className="App">
    <div className='Header'>
      <Header/>  
    </div>  
  
      <div>
          <div className =" ui container">
            <BarChart1/>
          </div>
          <br/>
          <div className =" ui container">
              <PieChart/>
          </div>

      </div>
    </div>
  );
}

export default App;
