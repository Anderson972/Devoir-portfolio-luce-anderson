import Modale from '../modale.jsx';


/* const progress = {
    p60: "width: 60%;",
    p70: "width: 70%;",
    p80: "width: 80%;",
    p90: "width: 90%;",
    p50: "width: 50%;"
}
 */

const Home = () => {
    return(
        <div>
            <header className="header">
                <div className = "img_header">
                    <div className="content_header">
                        <h1>Bonjour, je suis John Doe</h1>
                        <h2>Développeur web full stack</h2>
                        <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#Modale">En savoir plus</button>
                        <Modale />
                    </div>
                </div>
            </header>
            <main>
                <article className="main-article">
                    <section className="about">
                        <h2>A propos</h2>
                        <img alt="john doe" src='/img/john-doe-about.jpg'></img>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicina elit. Optio, necessitatibus
                            consecretur remoore venerenes nostrum. ex celectus reciencs moedt aut lure
                            enim placeat? Natus, neque at?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicina elit. Optio, necessitatibus
                            consecretur remoore venerenes nostrum. ex celectus reciencs moedt aut lure
                            enim placeat? Natus, neque at?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicina elit. Optio, necessitatibus
                            consecretur remoore venerenes nostrum. ex celectus reciencs moedt aut lure
                            enim placeat? Natus, neque at?
                        </p>
                    </section>
                    <section className="competences">
                        <h2>Mes compétences</h2>
                        <h3>HTML 5 90%</h3>
                        <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-danger" style={{width: 90 + '%'}} ></div>
                        </div>
                        <h3>CSS 80%</h3>
                        <div className="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-info" style={{width: 80 + '%'}}></div>
                        </div>
                        <h3>JAVASCRIPT 70%</h3>
                        <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-warning" style={{width: 70 + '%'}} ></div>
                        </div>
                        <h3>PHP 60%</h3>
                        <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-success" style={{width: 60 + '%'}} ></div>
                        </div>
                        <h3>REACT 50%</h3>
                        <div className="progress" role="progressbar" aria-label="example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar" style={{width: 50 + '%'}} ></div>
                        </div>
                    </section>
                </article>
            </main>
        </div>
    )
}

export default Home;