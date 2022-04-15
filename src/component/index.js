import {useState, useEffect} from 'react';
import FormatDate from './formatClock';
import'../css/index.css';
 


function Clock() {
    const [times, setTimes] = useState('');
 
    useEffect(() => {
       const time = setInterval(() => {
        
            const timeNow = new Date();
            const newTimes = FormatDate(timeNow);
            setTimes(newTimes);
       
       }, 1000);

       return () => clearInterval(time);

    }, []);


    return (
      <div className="clock">     
        
        <div className='box-container'>
          <h1 className='heading'>Clock</h1>
          <div className='box'>
                <h1 className='box-time'>{times.hours}</h1>
          </div>
          <div className='box'>
                <h1 className='box-time'>{times.minutes}</h1>
          </div>
          <div className='box'>
                <h1 className='box-time'>{times.seconds}</h1>
          </div>
          
        </div>    
        
      </div>
    );
  }
  
  export default Clock;