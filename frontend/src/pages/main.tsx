import Image from "next/image"
import logo1 from "./img/logo1.jpg";
import logo2 from "./img/logo2.jpg";
import granja from "./img/granja.jpeg";
import f1 from "./img/f1.jpg";
import f2 from "./img/f2.jpg";
import f3 from "./img/f3.jpg";



export default function Main() {
    return (
        <body className="fondo1">


            <div className="diveslogan">
                <br /><br /><br /><br /><br />
                <center><p className="letra1">"OPTIMIZA TU GRANJA,</p></center><center><p className="letra1">MAXIMIZA TUS RESULTADOS"</p></center>
            </div>

            <div className="divimagen1">
                <Image
                src={logo1}
                className="logo"
                alt="logo"
                ></Image>
            </div>

            <div className="divimagen2">
            <Image
                src={logo2}
                className="logo"
                alt="logo"
                ></Image>
            </div>

            <div className="gestion">
                <center><h2 className="letgestion">Gestion para tu agronegocio</h2></center>
            </div>

            <div className="divdesc">
                <h2 className="letdes">EZ farm es tu página ideal para la administración de
                    tu agronegocio, gestión de recursos para tus proyectos
                    y agilización en informes de tus moviminetos. Una suscripción asequible te permitirá
                    manejar tu empresa de una forma increible, garantizando una experiencia sencilla
                    y eficiente, maximizando tus resultados.
                </h2>
            </div>

            <Image
                src={granja}
                className="imggran"
                alt="granja"
                ></Image>

            <Image
                src={f1}
                className="f1"
                alt="f1"
                ></Image>

            <Image
                src={f2}
                className="f2"
                alt="f2"
                ></Image>

            <Image
                src={f3}
                className="f3"
                alt="f3"
                ></Image>

            <div className="d4"><p><b><h2>Maneja tus recursos</h2></b></p></div>
            <div className="d5"><h2>Mantente actualizado de tu negocio</h2></div>
            <div className="d6"><h2>Cumple tus resultados esperados</h2></div>

            <div className="div1"><p className="textoblanco">Administra y lleva un registro sobre todos los recursos disponibles en tu empresa, sean humanos o materiales.</p></div>
            <div className="div2"><p className="textoblanco">Entérate de las actualizaciones de cada departamento de tu negocio, recibiedno anuncios constantes e importantes.</p></div>
            <div className="div3"><p className="textoblanco">Con todas las funciones o herramientas te pondremos a disposicion, direccionarás tu negocio al éxito.</p></div>

        </body>
    )
}