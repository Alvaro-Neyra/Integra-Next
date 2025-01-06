import { contactoImages } from "@/app/assets/ContactoData";
import ContactInfo from "@/app/ui/components/ContactInfo";
import Form from "@/app/ui/components/Form";
import HeroImage from "@/app/ui/components/HeroImage";
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
