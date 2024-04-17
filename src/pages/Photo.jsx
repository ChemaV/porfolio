import React, { useState, useEffect } from 'react';

export default function Photo() {
    const [actividades, setActividades] = useState([]);

    useEffect(() => {
        fetch('contenido.json')
            .then(response => response.json())
            .then(data => {
                setActividades(data.actividades.slice(12, 18));
            })
            .catch(error => console.error('Error al cargar el archivo JSON:', error));
    }, []);

    return (
        <main style={{ maxWidth: '1250px', margin: '0 auto' }}>
            <div id="contenido" style={{ marginTop: '1rem' }} className="flex justify-center items-center flex-wrap">
                {actividades.map((actividad, index) => (
                    <div key={index} className="flex-1 p-2">
                        <img className="fotos-w" width="365px" src={actividad.imagen} alt="" style={{ verticalAlign: 'top' }} />
                    </div>
                ))}
            </div>
        </main>
    );
}
