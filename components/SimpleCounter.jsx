//component de contador simple
import React, {useState, useEffect} from 'react';
import Notifications from './Notifications';
import styles from '../styles/Simplecounter.module.css'
import Statistics from './Statistics';

const SimpleCounter = () => {
    const defaultTime = {
        seconds: 60
    }
    const [time, setTime] = useState(defaultTime);
    const [isRunning, setIsRunning] = useState(true);
    const [botonSeconds, setBotonSeconds] = useState(null);
    const [botonSecondsExternos, setBotonSecondsExternos] = useState([]);
    const [usedButton , setUsedButton] = useState(null);
    const [notiTime, setNotiTime] = useState([]);

    //si existe "seconds" en el localStorage, lo carga en el estado
    useEffect(() => {
        if(localStorage.getItem('seconds')){
            setBotonSeconds(localStorage.getItem('seconds'));
            setUsedButton(true);
        }
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            updatetime();
        }, 1000);
        return () => clearInterval(interval);
    }, [time, isRunning ]);

    const updatetime = () => {
        if (isRunning) {
            //los segundos paran en 0
            if (time.seconds === 0) {
                setTime({
                    seconds: 0
                });
            } else {
                setTime({
                    seconds: time.seconds - 1
                });
            }
        } else {
            //los segundos se resetean cuando se toca un boton
            setTime({
                seconds: defaultTime.seconds
            });
            setIsRunning(true);
        }

    }

    //si toco un boton los segundos se paran y se para el contador y se cambia el estado de isRunning
    const handleClick = () => {
        setUsedButton(true);
        //desabilitar boton si esta usado
        if (usedButton) {
            return;
        }
        //si no existe segundos en localstorage guardamos los segundos en localstorage
        if(botonSeconds === null){
            saveSeconds();
            if (time.seconds === 0) {
                setBotonSeconds(time.seconds);
                setIsRunning(false);
            } else {
            setBotonSeconds(time.seconds);
            setIsRunning(false);
            }
        //si el estado del boton tiene segundos se paran y se cambia el estado de isRunning
        } else {
            setBotonSeconds(time.seconds);
            setIsRunning(false);
        }
    }
    


    //guarda los segundos en localstorage
    const saveSeconds = () => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('seconds', time.seconds);
        }
    }
    
    const handleColorBoton = () => {
        if(usedButton){
            return styles.buttonUsed;
        } else {
            return styles.button;
        }
    }


    return (
        <>
        <Notifications notiTime={notiTime} setNotiTime={setNotiTime} setTime={setTime} defaultTime={defaultTime} time={time} botonSecondsExternos={botonSecondsExternos}/>
        <div className={styles.countdownContainer}>
            <span>{time.seconds}</span>
        </div>
        <div className={styles.buttonContainer}>
                <button className={handleColorBoton()} onClick={handleClick}>
                    SELECCIONAR
                </button>
        </div>
        {usedButton && <Statistics botonSeconds={botonSeconds}  notiTime={notiTime}/>}
        
        </>
     );
}
 
export default SimpleCounter;