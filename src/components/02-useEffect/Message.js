import React, { useEffect, useState } from 'react'

export const Message = () => {

  const [coords, setCoords] = useState({
    x: 0,
    y: 0
  })

  const { x, y } = coords;

  useEffect(() => {
    const mouseMove = (e) => {
      setCoords({
        x: e.x,
        y: e.y
      })
    }
    window.addEventListener('mousemove', mouseMove)
    return () => {
      window.removeEventListener('mousemove', mouseMove)
      console.log('Componente desmontado');
    }
  }, [])

  return (
    <>
      <h3>Coordenadas</h3>
      <h5> X: {x}, Y: {y}</h5>
    </>
  )
}
