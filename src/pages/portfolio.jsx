const Portfolio = () => {
    return(
        <div className = "portfolio">
            <header className="header">
                <img src="/img/banner.jpg" alt="bannière" />
            </header>
            <main>
                <h1>Portfolio</h1>
                <p>Voici quelques-unes de mes réalisations</p>
                <hr className="border border-primary border-3 opacity-100 mb-5" style={{width: 30 + '%'}} />
                <div className="cards">
                    <div className="card text-center mb-3">
                        <img src="/img/portfolio/fresh-food.jpg" className="card-img-top" alt="panier de légumes"></img>
                        <div className="card-body">
                            
                            <h2 className="card-title">Fresh Food</h2>
                            <p className="card-text">
                                Site de vente de produit frais en ligne
                            </p>
                            <button className="btn btn-primary">Voir le site</button>
                        </div>
                        <div className="card-footer text-body-secondary">
                            <span>Site réalisé avec PHP et MySQL</span>
                        </div>
                    </div>
                    <div className="card text-center mb-3">
                        <img src="/img/portfolio/restaurant-japonais.jpg" className="card-img-top" alt="un plateau avec plusieur variétées de sushi"></img>
                        <div className="card-body">
                            
                            <h2 className="card-title">Restaurant Akira</h2>
                            <p className="card-text">
                                Site pour un resataurant japonais
                            </p>
                            <button className="btn btn-primary">Voir le site</button>
                        </div>
                        <div className="card-footer text-body-secondary">
                            <span>Site réalisé avec WordPress</span>
                        </div>
                    </div>
                    <div className="card text-center mb-3">
                        <img src="/img/portfolio/espace-bien-etre.jpg" className="card-img-top" alt="fond relaxant avec un boudha et des galets en equilibre"></img>
                        <div className="card-body">
                            
                            <h2 className="card-title">Espace bien-être</h2>
                            <p className="card-text">
                                site pour un salon de bien-être
                            </p>
                            <button className="btn btn-primary">Voir le site</button>
                        </div>
                        <div className="card-footer text-body-secondary">
                            <span>Site réalisé avec Laravel</span>
                        </div>
                    </div>
                    <div className="card text-center mb-3">
                        <img src="/img/portfolio/seo.jpg" className="card-img-top" alt="fond bleu aves plusieur mot faisant référence au seo"></img>
                        <div className="card-body">
                            
                            <h2 className="card-title">SEO</h2>
                            <p className="card-text">
                                Amélioration du référencement d'un site de e-commerce
                            </p>
                            <button className="btn btn-primary">Voir le site</button>
                        </div>
                        <div className="card-footer text-body-secondary">
                            <span>Utilisation des outils SEO</span>
                        </div>
                    </div>
                    <div className="card text-center mb-3">
                        <img src="/img/portfolio/coder.jpg" className="card-img-top" alt="lignes de code"></img>
                        <div className="card-body">
                            
                            <h2 className="card-title">Création d'un API</h2>
                            <p className="card-text">
                                Création d'un API RESTFULl publique
                            </p>
                            <button className="btn btn-primary">Voir le site</button>
                        </div>
                        <div className="card-footer text-body-secondary">
                            <span>PHP - SYMFONY</span>
                        </div>
                    </div>
                    <div className="card text-center mb-3">
                        <img src="/img/portfolio/screens.jpg" className="card-img-top" alt="un bureau avec divers écrans"></img>
                        <div className="card-body">
                            
                            <h2 className="card-title">Maquette d'un site web</h2>
                            <p className="card-text">
                                Création du prototype d'un site web
                            </p>
                            <button className="btn btn-primary">Voir le site</button>
                        </div>
                        <div className="card-footer text-body-secondary">
                            <span>Réalisé avec FIGMA</span>
                        </div>
                    </div>
                    
                </div>
            </main>
        </div>
    )
}

export default Portfolio;