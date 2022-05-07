import react, {useEffect, useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notifications = ({setTime, defaultTime, time, notiTime, setNotiTime}) => {
    const [names, setNames] = useState(null);

    const handleTimeNotifications = () => {
        const color = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
        //asignamos un color dependiendo de los segundos
        const colorNoti = () => {
            if (time.seconds <= 11 && time.seconds >= 0) {
                return color[0];
            } else if (time.seconds <= 21 && time.seconds >= 12) {
                return color[1];
            } else if (time.seconds <= 31 && time.seconds >= 22) {
                return color[2];
            } else if (time.seconds <= 41 && time.seconds >= 32) {
                return color[3];
            } else if (time.seconds <= 51 && time.seconds >= 42) {
                return color[4];
            } else if (time.seconds <= 60) {
                return color[5];
            }
        }
        //hacemos una copia de notitime y agregamos el nuevo time
        const newNotiTime = [...notiTime, time.seconds, colorNoti()];
        setNotiTime(newNotiTime);
    }



    //hacemos un fetch para obtener los datos de la api de https://jsonplaceholder.typicode.com/users
    useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                //guadamos los nombres data dentro de una variable
                const names = data.map(user => user.name);
                setNames(names);
                }
            ).catch(error => {
                console.log(error);
            }
            );
        }, []);

    

    //se activan notificaciones de un usuario random de la variable randomNames con ganancias random en un intervalo random entre 0ms a 60000ms pero varias veces
    useEffect(() => {
        const interval = setInterval(() => {
            const randomNames = names[Math.floor(Math.random() * names.length)];
            //hacemos un switch random para elegir una de las 4 notificaciones
            const random = Math.floor(Math.random() * 4);
            //ganacias random entre 0 y 5 con 2 decimales
            const randomGanancia = (Math.random()* 5).toFixed(2);
            switch (random) {
                case 0:
                    toast.success(`${randomNames} ha ganado ${randomGanancia}USDT`, {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                        handleTimeNotifications();
                        //reseteamos el intervalo para que no se repita
                        clearInterval(interval);
                        setTime(defaultTime);
                    break;
                case 1:
                    toast.success(`${randomNames} ha ganado ${randomGanancia}USDT`, {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                        handleTimeNotifications();
                        //reseteamos el intervalo para que no se repita
                        clearInterval(interval);
                        setTime(defaultTime);
                    break;
                case 2:
                    toast.success(`${randomNames} ha ganado ${randomGanancia}USDT`, {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                        handleTimeNotifications();
                        //reseteamos el intervalo para que no se repita
                        clearInterval(interval);
                        setTime(defaultTime);
                    break;
                case 3:
                    toast.success(`${randomNames} ha ganado ${randomGanancia}USDT`, {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                        handleTimeNotifications();
                        //reseteamos el intervalo para que no se repita
                        clearInterval(interval);
                        setTime(defaultTime);
                    break;
                default:
                    toast.success(`${randomNames} ganó $${randomGanancia} USDT`, {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                        handleTimeNotifications();
                        //reseteamos el intervalo para que no se repita
                        clearInterval(interval);
                        setTime(defaultTime);
                    break;
            }
        }, Math.floor(Math.random() * 60000));
        return () => clearInterval(interval);
    }, [names, setTime, defaultTime, handleTimeNotifications]);
    
    
    


    return ( 
            <ToastContainer />
     );
}
 
export default Notifications;