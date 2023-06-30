import { SideBar } from './sideBar/SideBar.jsx'
import { Root } from './routes/root'
import './App.css'


export const App = () => {

    return (
        <div className='styleApp'>
            <SideBar />  {/* BARRA LATERAL QUE QUEDA FIJA */}
            <Root /> {/* COMPONENTES QUE SE VAN A RENDERIZAR A LA DERECHA */}
        </div>
    )
}

