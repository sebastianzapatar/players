import React, { useEffect, useState } from 'react'

export const Main = () => {
    const [jugadores, setjugadores] = useState([]);
    const [respuesta, setrespuesta] = useState([]);
    const obtenerJugadores=async ()=>{
        const respuesta=await fetch('https://mach-eight.uc.r.appspot.com/');
        const api=await respuesta.json();
        const {values}=api;
        setjugadores(values); 
        
    }
    const heighSum=(heigh)=>{
        let datos=[];
        let clonejugadores=jugadores.sort((a,b)=>a.first_name.localeCompare(b.first_name));;
        for(let i=0;i<jugadores.length;i++){
            const altura=parseInt(jugadores[i].h_in);
            const busqueda=heigh-altura;
            const suma=clonejugadores.filter(elemento=>parseInt(elemento.h_in)===busqueda);
            for(let j=0;j<suma.length;j++){
                if(jugadores[i].first_name+" "+jugadores[i].last_name
                !==suma[j].first_name+" "+suma[j].last_name){
                    datos.push(jugadores[i].first_name+" "+jugadores[i].last_name +" "
                    +suma[j].first_name+" "+suma[j].last_name);
                }
                
            }
            clonejugadores= clonejugadores.filter(elemento=>elemento!==jugadores[i]);
        }
        return datos;
    }
    let renderizar="";
    if(respuesta.length===0)renderizar=<h1>{"No matches found"}</h1>;
    else{
        renderizar=respuesta.map((names) =>
        <li>{names}</li>)
    }
    const obtenerJugadoresAltura=(e)=>{
        const value=e.target.value;
        setrespuesta(heighSum(value));
    }
    
    useEffect(() => {
        obtenerJugadores();
    }, [])
    return (
        <div>
            <input type="number" 
            placeholder="Ingrese la suma de las alturas"
            onChange={obtenerJugadoresAltura}/><br/>
           
            {renderizar}
        </div>
    )
}
