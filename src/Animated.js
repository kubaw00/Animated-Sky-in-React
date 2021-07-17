import React, { useState, useEffect } from 'react';

function Animated(props){

const [posX, setPosX] = useState(0);
const [posY, setPosY] = useState(0);

useEffect(() => {
    document.addEventListener('mousemove', setNewPosition)
    
    return () => {
        document.removeEventListener('mousemove', setNewPosition )
        
    }

})


const setNewPosition = (e) => {
    
    const { clientX, clientY } = e;
    const posX = clientX - window.innerWidth/2;
    const posY = clientY - window.innerHeight/2;
    setPosX(posX * (-ratioX))
    setPosY(posY * (-ratioY))
}

   const {src, className, ratioX, ratioY} = props;

    return(
        
        <img 
        className={className}
        src={src}
        style={{
            transform: `translate(${posX}px, ${posY}px)`,
        }}
        alt=''
          />
    )

}


export default Animated;