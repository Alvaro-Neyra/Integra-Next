import { contactoImages } from "@/app/assets/ContactoData";
import ContactInfo from "@/app/ui/components/ContactInfo";
import Form from "@/app/ui/components/Form";
import HeroImage from "@/app/ui/components/HeroImage";
import styles from "../ui/styles/Contacts.module.css";
import Head from "next/head";

export default async function Page() {
    return (
        <div>
            <Head>
                <title>Integra Constructores | Contacto</title>
                <meta name="description" content="Descubre como contactarnos y saber mucho mas de nosotros!" />
                <meta name="keywords" content="Integra Constructores, servicios, proyectos, contacto, construcción, gerencia de proyectos, ingeniería civil" />

                <meta property="og:url" content="" />
                <meta property="og:title" content="Integra Constructores | Contacto" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="Conoce como contactarnos" />
                <meta property="og:image" content="/svg/integra-icon.svg" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="" />
                <meta property="twitter:url" content="" />
                <meta property="twitter:title" content="Integra Constructores | Contacto" />
                <meta property="twitter:description" content="Conoce como contactarnos" />
                <meta property="twitter:image" content="/svg/integra-icon.svg" />

                <link rel="alternate" href="" hrefLang="es" />
                <link rel="alternate" href="" hrefLang="en" />

                <link rel="canonical" href="" />

            </Head>
            <main>
                <HeroImage image={contactoImages} heading={"Contacto"}></HeroImage>
                <div className={styles["contacts-main"]}>
                    <ContactInfo></ContactInfo>
                    <Form></Form>
                </div>
            </main>
        </div>
    );
}
