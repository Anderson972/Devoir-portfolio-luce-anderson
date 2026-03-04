import { Helmet } from "react-helmet-async";

const Mention = () => {
    return(
        <div className = "mention-legal">
            <Helmet>
                <meta name="robots" content="noindex"/>
            </Helmet>
            <main>
                <h1>Mentions légales</h1>
                <hr className="border border-primary border-3 opacity-100 mb-5" style={{width: 30 + '%'}} />
                <div className="accordion" id="accordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Editeur du site
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordion">
                            <div className="accordion-body">
                                <h3>John Doe</h3>
                                <address>
                                    <i className="bi bi-map"> 40 rue Laure Diebold</i><br/>
                                    <i className="bi bi-geo-alt"> 69009 Lyon, France</i> <br />
                                    <i className="bi bi-phone"> 10 20 30 40 50</i> <br />
                                    <i className="bi bi-envelope-at"> john.doe@gmail.com</i> <br />
                                </address>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Hébergeur
                        </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordion">
                            <div className="accordion-body">
                                <h3>alwaysdata</h3>
                                <address>
                                    91 Rue du faubourg Saint-Honoré, 75008<br/>
                                    <i className="bi bi-globe2"> <a className="link-underline-primary" href="www.alwaysdata.com">www.alwaysdata.com</a></i>
                                </address>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Crédits
                        </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordion">
                            <div className="accordion-body">
                                <h3>Crédits</h3>
                                <p>Ce site à été réalisé par John Doe, étudiant au <a className="link-underline-primary" href="https://www.centre-europeen-formation.fr/">Centre Européen de Formation</a></p>
                                <p><em>Les images utilisées sur ce site sont libre de droits et ont été obtenues sur le site <a className="link-underline-primary" href="https://pixabay.com/">Pixabay</a></em></p>
                                <p><em>La Favicon de ce site a été fournie par <a className="link-underline-primary" href="https://www.flaticon.com/">John Doe Icons erstellt Von Freepick - Flaticon</a></em></p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        
    )
}

export default Mention;