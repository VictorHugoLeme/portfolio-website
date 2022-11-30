import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import Translator from '../i18n/Translator'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gvb49gi', 'template_6hi9m8c', form.current, 'ugjI2MKquiym6qdfY').then((result) => document.getElementById('submit_button').innerHTML = 'Sent!', (error) => document.getElementById('submit_button').innerHTML = 'Erro!')
        e.target.reset();
    };

    return (
        <section id="contact">
            <h5><Translator path='contact.title' /></h5>
            <h2><Translator path='contact.subtitle' /></h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>victorhleme.dev
                            @gmail.com</h5>
                        <a href="mailto:victorhleme.dev@gmail.com" target="_blank" rel="noreferrer"><Translator path='contact.sendAMessage' /></a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon" />
                        <h4>WhatsApp</h4>
                        <h5>(19)99578-4260</h5>
                        <a href="https://api.whatsapp.com/send?phone=5519995784260" target="_blank" rel="noreferrer"><Translator path='contact.sendAMessage' /></a>
                    </article>
                    <article className="contact__option">
                        <BsLinkedin className="contact__option-icon" />
                        <h4>LinkedIn</h4>
                        <h5>Victor Hugo Leme</h5>
                        <a href="http://linkedin.com/in/victor-hugoleme/" target="_blank" rel="noreferrer"><Translator path='contact.sendAMessage' /></a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <label htmlFor="name"><Translator path='contact.fullName' /></label>
                    <input type="text" name="name" required />
                    <label htmlFor="email"><Translator path='contact.email' /></label>
                    <input type="email" name="email" required />
                    <label htmlFor="message"><Translator path='contact.message' /></label>
                    <textarea name="message" rows="7" required></textarea>
                    <button type="submit" id="submit_button" className="btn btn-primary"><Translator path='contact.send' /></button>
                </form>
            </div>

        </section>
    )
}

export default Contact;