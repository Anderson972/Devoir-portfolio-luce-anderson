const Contact = () => {
    return(
        <div className = "contact">
            <main>
                <h1>Contact</h1>
                <p>Pour me contacter en vu d'un entretien ou d'une futur collaboration, merci de remplir le formulaire de contact.</p>
                <hr className="border border-primary border-3 opacity-100 mb-5" style={{width: 30 + '%'}} />
                <article className="main-article row">
                    <section className="formulaire col-md-6">
                        <h2>Formulaire de contact</h2>
                        <form>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="name" placeholder="Votre Nom" required/>
                                <label htmlFor="name">Votre nom</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="mail" placeholder="votre@mail.com" required/>
                                <label htmlFor="mail">Votre adresse mail</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="tel" className="form-control" id="telephone" placeholder="01 23 45 67 89" required/>
                                <label htmlFor="telephone">Votre numéro de téléphone</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="subject" placeholder="Sujet" required/>
                                <label htmlFor="subject">Sujet</label>
                            </div>
                            <div className="form-floating">
                                <textarea className="textarea form-control mb-3" placeholder="Votre message" id="message" required/>
                                <label htmlFor="message">Votre message</label>
                            </div>
                            <button type="submit" className="btn btn-primary mx-auto">Envoyer</button>
                        </form>
                    </section>
                    <section className="coordonées col-md-6">
                        <h2>Mes coordonnées</h2>
                        <h3>John Doe</h3>
                        <address>
                            <i className="bi bi-map"> 40 rue Laure Diebold</i><br/>
                            <i className="bi bi-geo-alt"> 69009 Lyon, France</i> <br />
                            <i className="bi bi-phone"> 10 20 30 40 50</i> <br />
                            <i className="bi bi-envelope-at"> john.doe@gmail.com</i> <br />
                        </address>
                        <iframe 
                            title="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3855.098032140888!2d4.7989789!3d45.778662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e1!3m2!1sfr!2sfr!4v1772630457448!5m2!1sfr!2sfr" 
                            height="450" 
                            style={{border: 0}} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </section>
                </article>
            </main>
        </div>
    )
}

export default Contact;