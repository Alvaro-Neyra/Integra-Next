import { contactoImages } from "../assets/ContactoData";
import ContactInfo from "../ui/components/ContactInfo";
import Form from "../ui/components/Form";
import HeroImage from "../ui/components/HeroImage";
import styles from "../ui/styles/Contacts.module.css";

export default async function Page() {
    return (
        <div>
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
