/* eslint-disable react/prop-types */
import { pages } from "./data"



export const Colores = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center maxwidth">
            <div className="row row-cols-2 g-2 ">
                
                {pages.map(( item, index ) => (
                    <div 
                        key={ index }
                        className="text-center "
                    >
                    <a 
                        href={ item.enlace } 
                        target="blank_"
                        className="text-decoration-none fw-semibold linkColor"
                    >
                        {item.title }
                    </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

