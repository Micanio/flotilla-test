//App.js Code
import './App.scss';
import Header from "./components/Header/Header"
import BarChart1 from "./components/BarChart/BarChart1";
import PieChart from "./components/PieChart/PieChart";
import PieChart2 from "./components/PieChart/PieChart2";
import PieChart3 from "./components/PieChart/PieChart3";
import PieChart4 from "./components/PieChart/PieChart4";


function App() {
  return (
    <div className="App">
    <div className='Header'>
      <Header/>  
    </div>  
  
      <div className='charts'>
          <div className ="barCharts">
            <BarChart1/>
          </div>

          <div className ="pieCharts">
            <h2>Flotilla Carbon Footprint Score by Category</h2>
              <PieChart id="pieChart"/>
              <PieChart2 id="pieChart"/>
              <PieChart3 id="pieChart"/>
              <PieChart4 id="pieChart"/>
          </div>

      </div>
    </div>
  );
}

export default App;
