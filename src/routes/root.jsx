import { FrameworksLibrerias } from "../toolsDev/frameworksLibrerias/FrameworksLibrerias";
import { Bolsadetrabajo } from "../toolsDev/BolsaDeTrabajo/Bolsadetrabajo";
import { ImagenesVideos } from "../toolsDev/imagenesVideos/ImagenesVideos";
import { Animaciones } from "../toolsDev/animaciones/Animaciones";
import { JavaScript } from "../toolsDev/javaScpt/JavaScript";
import { Hosting } from "../toolsDev/hosting/Hosting";
import { Fuentes } from "../toolsDev/fuentes/Fuentes";
import { Colores } from "../toolsDev/colores/Colores";
import { Html } from "../toolsDev/hyperttextml/HTML";
import { Iconos } from "../toolsDev/iconos/Iconos";
import { React } from "../toolsDev/reactt/React";
import { Route, Routes } from "react-router-dom";
import { Otras } from "../toolsDev/Otras/Otras";
import { Retos } from "../toolsDev/retos/Retos";
import { Css } from "../toolsDev/estilos/CSS";
import { Ia } from "../toolsDev/IA/Ia";

export const Root = () => {
    return (
        <Routes>
            <Route path="/Ia" element={ <Ia/> } />
            <Route path="/Css" element={ <Css/> } />
            <Route path="/Html" element={ <Html/> } />
            <Route path="/Retos" element={ <Retos/> } />
            <Route path="/React" element={ <React/> } />
            <Route path="/Otras" element={ <Otras/> } />
            <Route path="/Iconos" element={ <Iconos/> } />
            <Route path="/Colores" element={ <Colores/> } />
            <Route path="/Fuentes" element={ <Fuentes/> } />
            <Route path="/Hosting" element={ <Hosting/> } />
            <Route path="/JavaScript" element={ <JavaScript/> } />
            <Route path="/Animaciones" element={ <Animaciones/> } />
            <Route path="/Bolsa-de-trabajo" element={ <Bolsadetrabajo/> } />
            <Route path="/Imagenes-Videos" element={ <ImagenesVideos/> } />
            <Route path="/Frameworks-Librerias" element={ <FrameworksLibrerias/> } />
        </Routes>
    );
}
