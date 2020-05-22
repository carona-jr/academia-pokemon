import React from 'react'

import './NotFound.css'

export default function NotFound() {
    return (
        <div>
            <div id="notfound">
                <div class="notfound">
                    <div class="notfound-404">
                        <h1>Oops!</h1>
                        <h2>404 - The Page can't be found</h2>
                    </div>
                    <a href="/user">Clique aqui para voltar</a>
                </div>
            </div>
        </div>
    )
}
