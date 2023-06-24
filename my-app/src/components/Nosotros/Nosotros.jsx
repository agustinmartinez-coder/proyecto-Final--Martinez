import React from 'react';
import "./Nosotros.css";
import { useEffect } from 'react';


export default function Nosotros() {

    useEffect(() => {
        const hacerClick = () => {
            console.log("Click");
        }
        window.addEventListener("click", hacerClick)
        return () => {
            window.removeEventListener("Click", hacerClick)
        }
    }, [])


    return (
            <div className="texto-centrado">
            <p>
                Bienvenidos a nuestra agencia de viajes con los destinos asiáticos mas solicitado y populares del mercado.
                <br/>
                Pronto extenderemos nuestros viajes hacia oceanía, así que si tienen en mente visitar algún país de ese continente, los podremos ayudar mas adelante con el viaje de su sueños.

            </p>
            </div>

    )
    }
