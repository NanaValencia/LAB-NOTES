import React, { useState } from 'react';

const Note = ({titulo, miContenido}) => {
    return(
        <div>
            <h3 className='miTitulo'>{titulo}</h3>
            <h3 className='miNota'>{miContenido}</h3>
        </div>
    )
}