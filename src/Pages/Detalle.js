import { useParams } from 'react-router-dom'

import React from 'react'

export default function Detalle() {

    const params = useParams()

    return (
        <div>
            User <h1>{params.Id}</h1>
        </div>
    )
}
