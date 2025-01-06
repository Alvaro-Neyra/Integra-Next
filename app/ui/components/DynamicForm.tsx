"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import styles from "../styles/Form.module.css";

export default function DynamicForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: ""
        }
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    const onSubmit = (data: { name: string; email: string; phone: string; message: string }) => {
        const whatsappMessage = `Nuevo mensaje de contacto: ` +
            `\nNombre: ${data.name}` +
            `\nCorreo: ${data.email}` +
            `\nTeléfono: ${data.phone}` +
            `\nMensaje: ${data.message}`;
    
        const encodedMessage = encodeURIComponent(whatsappMessage);

        const phoneNumber = process.env.NEXT_PUBLIC_PHONENUMBER;

        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(whatsappURL, "_blank");

        reset();
        setFormSubmitted(true);
        setTimeout(() => setFormSubmitted(false), 5000);
    };

    return (
        <section className={styles["form-container"]}>
            <h2><span>¿Tienes una pregunta?</span><span>Contáctenos</span></h2>
            {formSubmitted && (
                <div className={styles["form-submitted"]}>
                    <p>¡Gracias por contactarnos!</p>
                    <p>En breve nos comunicaremos con usted.</p>
                </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <div className={styles["input-container"]}>
                        <label htmlFor="name" aria-label="Nombre Completo">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/>
                            </svg>
                        </label>
                        <input 
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Por favor, ingrese su nombre completo"
                                },
                                minLength: {
                                    value: 3,
                                    message: "El nombre debe tener al menos 3 caracteres"
                                }
                            })}
                            type="text" 
                            id="name" 
                            name="name" 
                            placeholder="Nombre Completo*"
                        />
                    </div>
                    {errors.name && <p className={styles["error"]}>{errors.name.message}</p>}
                    <div className={styles["input-container"]}>
                        <label htmlFor="email" aria-label="Correo">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                            </svg>
                        </label>
                        <input 
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Por favor, ingrese su correo"
                                },
                                pattern: {
                                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                                    message: "Por favor, ingrese un correo válido"
                                }
                            })}
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="Correo*"
                        />
                    </div>
                    {errors.email && <p className={styles["error"]}>{errors.email.message}</p>}
                    <div className={styles["input-container"]}>
                        <label htmlFor="phone" aria-label="Celular">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path d="M80 0C44.7 0 16 28.7 16 64l0 384c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L80 0zm80 432l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
                            </svg>
                        </label>
                        <input 
                            {...register("phone", {
                                required: {
                                    value: true,
                                    message: "Por favor, ingrese su teléfono"
                                },
                                pattern: {
                                    value: /^\+?(\d{1,3})?[\s.-]?(\(?\d{2,4}\)?[\s.-]?)?\d{4,8}[\s.-]?\d{4}$/,
                                    message: "Por favor, ingrese un teléfono válido"
                                }
                            })}
                            type="tel" 
                            id="phone"
                            name="phone"
                            placeholder="Teléfono* (Con código de país)"
                        />
                    </div>
                    {errors.phone && <p className={styles["error"]}>{errors.phone.message}</p>}
                    <div className={styles["input-container"]}>
                        <label htmlFor="message" aria-label="Mensaje">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l96 0 0 80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416 448 416c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0z"/>
                            </svg>
                        </label>
                        <textarea 
                            {...register("message", {
                                required: {
                                    value: true,
                                    message: "Por favor, ingrese un mensaje"
                                },
                                minLength: {
                                    value: 10,
                                    message: "El mensaje debe tener al menos 10 caracteres"
                                }
                            })}
                            id="message"
                            name="message"
                            placeholder="Mensaje"
                        />
                    </div>
                    {errors.message && <p className={styles["error"]}>{errors.message.message}</p>}
                    <input type="submit" value="Enviar" />
                </fieldset>
            </form>
        </section>
    );
}