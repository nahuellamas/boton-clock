import react, {useState, useEffect} from 'react';
import styles from '../styles/Statistics.module.css'
const Statistics = ({botonSeconds, notiTime}) => {
    const [numberOfColors, setNumberOfColors] = useState([]);
    const [maxNumberOfColors, setMaxNumberOfColors] = useState('');
    
    const handleColorContainer = () => {
            if (botonSeconds <= 11 && botonSeconds >= 0) {
                return styles.ContainerRed;
            } else if (botonSeconds <= 21 && botonSeconds >= 12) {
                return styles.ContainerOrange;
            } else if (botonSeconds <= 31 && botonSeconds >= 22) {
                return styles.ContainerYellow;
            } else if (botonSeconds <= 41 && botonSeconds >= 32) {
                return styles.ContainerGreen;
            } else if (botonSeconds <= 51 && botonSeconds >= 42) {
                return styles.ContainerBlue;
            } else if (botonSeconds <= 60) {
                return styles.ContainerPurple;
            }
    }

    //const para contar la cantidad de cada color en notiTime para mostrar en el grafico
    const countColor = () => {
        const countRed = notiTime.filter(time => time === 'red').length;
        const countOrange = notiTime.filter(time => time === 'orange').length;
        const countYellow = notiTime.filter(time => time === 'yellow').length;
        const countGreen = notiTime.filter(time => time === 'green').length;
        const countBlue = notiTime.filter(time => time === 'blue').length;
        const countPurple = notiTime.filter(time => time === 'purple').length;
        setNumberOfColors([countRed, countOrange, countYellow, countGreen, countBlue, countPurple]);
    }
    useEffect(() => {
        countColor();
    } ,[notiTime]);

    //dependiendo de la cantidad de colores que tengo de cada uno creo un % de cada color dividido la cantidad de indices de notiTime
    const handlePercentage = () => {
        const red = ((numberOfColors[0] / notiTime.length) * 100).toFixed(2);
        const orange = ((numberOfColors[1] / notiTime.length) * 100).toFixed(2);
        const yellow = ((numberOfColors[2] / notiTime.length) * 100).toFixed(2);
        const green = ((numberOfColors[3] / notiTime.length) * 100).toFixed(2);
        const blue = ((numberOfColors[4] / notiTime.length) * 100).toFixed(2);
        const purple = ((numberOfColors[5] / notiTime.length) * 100).toFixed(2);
        //segun el color de botonSeconds le asignamos este porcentaje
        switch (handleColorContainer()) {
            case styles.ContainerRed:
                return red;
            case styles.ContainerOrange:
                return orange;
            case styles.ContainerYellow:
                return yellow;
            case styles.ContainerGreen:
                return green;
            case styles.ContainerBlue:
                return blue;
            case styles.ContainerPurple:
                return purple;
            default:
                return 0;
        }
    }

    //retornamos el color que mas hay del array numberOfColors
    useEffect(() => {
        if (numberOfColors[0] > numberOfColors[1] && numberOfColors[0] > numberOfColors[2] && numberOfColors[0] > numberOfColors[3] && numberOfColors[0] > numberOfColors[4] && numberOfColors[0] > numberOfColors[5]) {
            setMaxNumberOfColors('Rojo');
        } else if (numberOfColors[1] > numberOfColors[0] && numberOfColors[1] > numberOfColors[2] && numberOfColors[1] > numberOfColors[3] && numberOfColors[1] > numberOfColors[4] && numberOfColors[1] > numberOfColors[5]) {
            setMaxNumberOfColors('Naranja');
        } else if (numberOfColors[2] > numberOfColors[0] && numberOfColors[2] > numberOfColors[1] && numberOfColors[2] > numberOfColors[3] && numberOfColors[2] > numberOfColors[4] && numberOfColors[2] > numberOfColors[5]) {
            setMaxNumberOfColors('Amarillo');
        } else if (numberOfColors[3] > numberOfColors[0] && numberOfColors[3] > numberOfColors[1] && numberOfColors[3] > numberOfColors[2] && numberOfColors[3] > numberOfColors[4] && numberOfColors[3] > numberOfColors[5]) {
            setMaxNumberOfColors('Verde');
        } else if (numberOfColors[4] > numberOfColors[0] && numberOfColors[4] > numberOfColors[1] && numberOfColors[4] > numberOfColors[2] && numberOfColors[4] > numberOfColors[3] && numberOfColors[4] > numberOfColors[5]) {
            setMaxNumberOfColors('Azul');
        } else if (numberOfColors[5] > numberOfColors[0] && numberOfColors[5] > numberOfColors[1] && numberOfColors[5] > numberOfColors[2] && numberOfColors[5] > numberOfColors[3] && numberOfColors[5] > numberOfColors[4]) {
            setMaxNumberOfColors('Morado');
        } else {
            return;
        }
    } ,[numberOfColors]);
        


    return (    
        <div className={styles.middle}>
            <div className={styles.containerStats}>
                <h1 className={styles.tituloStats}>¡Feliz Día de los Inocentes!</h1>
                <div className={handleColorContainer()}>
                    <h2 className={styles.segundos}>{botonSeconds} Segundos</h2>
                </div>
                {maxNumberOfColors !== '' ?
                <p className={styles.parrafoInfo}>¿Sabias que la gran parte de las personas seleccionaron en el color {maxNumberOfColors}?</p>
                : null}
                <p className={styles.parrafoInfo}>Tu estas entre el <span className={styles.porcentageStats}>
                    {handlePercentage() === 'NaN' ? 0 : handlePercentage()}%
                </span> de personas que seleccionaron estos segundos.</p>
            </div>
        </div>
      );
}
 
export default Statistics;