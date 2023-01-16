import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './Weather';
import './App.css'
export default function App() {
  return <div className='App'>
    <Weather city="Spain"/>
    <span>
      <p>
      <a href='https://github.com/Heangt/weather-react' target="_blank" rel="noreferrer">Open-source code</a>
       {""} by Heang Araya</p>
    </span>
 </div>
}


