import React, { useState } from 'react'

export default function Parrafo() {
    const [basicState, setBasicState] = useState()

    function ASD(){
        setBasicState(!basicState)
    }
    console.log("Parrafo Running")
    return (
        <button>this is a paragraph</button>
  )
}
