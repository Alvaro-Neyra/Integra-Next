import { Service } from "../lib/types";
import ConstructionIcon from "../ui/components/ConstructionIcon";
import ExpedienteIcon from "../ui/components/ExpedienteIcon";
import InmobiliariaIcon from "../ui/components/InmobiliariaIcon";
import ProjectsIcon from "../ui/components/ProjectsIcon";

    const servicios : Service[] = [
        {
            "id": 1,
            "nombre": "CONSTRUCCIÓN",
            "descripcion": "Uno de nuestros servicios principales es la construcción de obras de infraestructura en general. Empleamos procesos eficientes, contamos con profesionales altamente calificados.",
            "icon": ConstructionIcon,
            "image": {
                jpg: {
                    small: "/images/servicios-images/jpg/construccion-servicios-320px.jpg",
                    medium: "/images/servicios-images/jpg/construccion-servicios-480px.jpg",
                    large: "/images/servicios-images/jpg/construccion-servicios-600px.jpg",
                    original: "/images/servicios-images/jpg/construccion-servicios-original.jpg"
                },
                webp: {
                    small: "/images/servicios-images/webp/construccion-servicios-320px.webp",
                    medium: "/images/servicios-images/webp/construccion-servicios-480px.webp",
                    large: "/images/servicios-images/webp/construccion-servicios-600px.webp",
                    original: "/images/servicios-images/webp/construccion-servicios-original.webp"
                }
            },
            "route": "/servicios/construccion"
        },
        {
            "id": 2,
            "nombre": "GERENCIA DE PROYECTOS",
            "descripcion": "La infraestructura representa gran porcentaje de la inversión para iniciar un negocio. INTEGRA diseña la mejor estrategia para que sus proyectos puedan alcanzar el máximo rendimiento.",
            "icon": ProjectsIcon,
            "image": {
                jpg: {
                    small: "/images/servicios-images/jpg/gerencia-de-proyectos-servicios-320px.jpg",
                    medium: "/images/servicios-images/jpg/gerencia-de-proyectos-servicios-480px.jpg",
                    large: "/images/servicios-images/jpg/gerencia-de-proyectos-servicios-600px.jpg",
                    xlarge: "/images/servicios-images/jpg/gerencia-de-proyectos-servicios-1024px.jpg",
                    original: "/images/servicios-images/jpg/gerencia-de-proyectos-servicios-original.jpg"
                },
                webp: {
                    small: "/images/servicios-images/webp/gerencia-de-proyectos-servicios-320px.webp",
                    medium: "/images/servicios-images/webp/gerencia-de-proyectos-servicios-480px.webp",
                    large: "/images/servicios-images/webp/gerencia-de-proyectos-servicios-600px.webp",
                    xlarge: "/images/servicios-images/webp/gerencia-de-proyectos-servicios-1024px.webp",
                    original: "/images/servicios-images/webp/gerencia-de-proyectos-servicios-original.webp"
                }
            },
            "route": "/servicios/gerencia-de-proyectos"
        },
        {
            "id": 3,
            "nombre": "INMOBILIARIA",
            "descripcion": "INTEGRA desarrolla todo el ciclo de vida del proyecto, desde la evaluación de la compra del terreno hasta la entrega del producto al usuario final logrando la rentabilidad esperada.",
            "icon": InmobiliariaIcon,
            "image": {
                jpg: {
                    small: "/images/servicios-images/jpg/inmobiliaria-servicios-320px.jpg",
                    medium: "/images/servicios-images/jpg/inmobiliaria-servicios-480px.jpg",
                    large: "/images/servicios-images/jpg/inmobiliaria-servicios-600px.jpg",
                    xlarge: "/images/servicios-images/jpg/inmobiliaria-servicios-1024px.jpg",
                    original: "/images/servicios-images/jpg/inmobiliaria-servicios-original.jpg"
                },
                webp: {
                    small: "/images/servicios-images/webp/inmobiliaria-servicios-320px.webp",
                    medium: "/images/servicios-images/webp/inmobiliaria-servicios-480px.webp",
                    large: "/images/servicios-images/webp/inmobiliaria-servicios-600px.webp",
                    original: "/images/servicios-images/webp/inmobiliaria-servicios-original.webp"
                }
            },
            "route": "/servicios/inmobiliaria"
        },
        {
            "id": 4,
            "nombre": "EXPEDIENTE TÉCNICO",
            "descripcion": "INTEGRA ofrece el servicio de desarrollo de expediente técnico en el cual implementa la metodología BIM logrando mejores resultados en todas las etapas del proyecto.",
            "icon": ExpedienteIcon,
            "image": {
                jpg: {
                    small: "/images/servicios-images/jpg/expediente-tecnico-servicios-320px.jpg",
                    medium: "/images/servicios-images/jpg/expediente-tecnico-servicios-480px.jpg",
                    large: "/images/servicios-images/jpg/expediente-tecnico-servicios-600px.jpg",
                    original: "/images/servicios-images/jpg/expediente-tecnico-servicios-original.jpg"
                }, 
                webp: {
                    small: "/images/servicios-images/webp/expediente-tecnico-servicios-320px.webp",
                    medium: "/images/servicios-images/webp/expediente-tecnico-servicios-480px.webp",
                    large: "/images/servicios-images/webp/expediente-tecnico-servicios-600px.webp",
                    original: "/images/servicios-images/webp/expediente-tecnico-servicios-original.webp"
                }
            },
            "route": "/servicios/expediente-tecnico"
        }
    ]

    export default servicios;