import React from 'react'
import { Figure } from 'react-bootstrap'
import foto_perfil from'../assets/img/foto_perfil.jpg'

export default function ImgPerfil() {
    return (
        <>
            <Figure>
                <Figure.Image
                    className="rounded-circle"
                    width={200}
                    height={200}
                    alt="171x180"
                    src={foto_perfil}
                />
            </Figure>
        </>
    )
}
