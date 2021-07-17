import Animated from './Animated';
import './App.css';

function App() {
  return (
    
        <div className="balloon-animation">
          <Animated
            src='cloud-2421760_960_720.webp'
            className='flaying-clouds'
            ratioX="0.36" 
            ratioY="0.34"
          />
            <Animated
            src='cloud-2421760_960_720.webp'
            className='flaying-clouds'
            ratioX="0.2" 
            ratioY="0.23"
          />
            <Animated
            src='cloud-2421760_960_720.webp'
            className='flaying-clouds'
            ratioX="0.26" 
            ratioY="0.34"
          />
            <Animated
            src='cloud-2421760_960_720.webp'
            className='flaying-clouds'
            ratioX="0.1" 
            ratioY="0.11"
          />
            <Animated
            src='cloud-2421760_960_720.webp'
            className='flaying-clouds'
            ratioX="0.13" 
            ratioY="0.53"
          />
            <Animated
            src='cloud-2421760_960_720.webp'
            className='flaying-clouds'
            ratioX="0.23" 
            ratioY="0.41"
          />
          <Animated
            src='hot-air-balloon-1111354_960_720.png'
            className='flaying-balloon'
            ratioX="0.07" 
            ratioY="0.3"
          />
        </div>
     
  );
}

export default App;
