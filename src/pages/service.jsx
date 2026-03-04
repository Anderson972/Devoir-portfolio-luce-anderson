const Services = () => {
    return(
        <div className = "service">
            <header className="header">
                <img src="/img/banner.jpg" alt="bannière" />
            </header>
            <main>
                <h1>Mon offre de services</h1>
                <p>Voici les prestations sur lesquelles je peux intervenir</p>
                <hr className="border border-primary border-3 opacity-100" style={{width: 30 + '%'}} />
                <div className="cards">
                    <div className="card text-center mb-3">
                        <div className="card-body">
                            <i className="bi bi-brush text-primary" style={{fontSize: 3 +'rem'}}></i>
                            <h2 className="card-title">UX Design</h2>
                            <p className="card-text">
                                L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant
                                l'utilisateur au centre des préoccupations. L'objectif est de rendre l'experience utilisateur la plus fuide et agréable possible.</p>
                        </div>
                    </div>
                    <div className="card text-center mb-3">
                        <div className="card-body">
                            <i className="bi bi-code-slash text-primary" style={{fontSize: 3 +'rem'}}></i>
                            <h2 className="card-title">Développement web</h2>
                            <p className="card-text">
                                Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.)
                                et des frameworks (Bootstrap, React, Angular, etc.).</p>
                        </div>
                    </div>
                    <div className="card text-center mb-3">
                        <div className="card-body">
                            <i className="bi bi-search text-primary" style={{fontSize: 3 +'rem'}}></i>
                            <h2 className="card-title">Référencement</h2>
                            <p className="card-text">
                                Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résulas des moteur de recherche (Google, Bing, Yahoo, etc.). 
                                L'objectif est d'attirer un maximun de visiteurs qualifiés sur le site.</p>
                        </div>
                    </div>
                    
                </div>
            </main>
        </div>
    )
}

export default Services;