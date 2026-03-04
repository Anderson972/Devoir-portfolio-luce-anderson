import {useState, useEffect} from "react" 

const Modale = () =>{


const [datas, setDatas] = useState([]);

 const getData = async()=>{
    const res = await fetch("https://api.github.com/users/github-john-doe");
    const json = await res.json();
    setDatas(json);
 }

 useEffect(()=>{
    getData()
  }, [])
    return(
        <div className="modal fade " id="Modale" tabIndex="-1" aria-labelledby="ModaleLabel">
            <div className="modal-dialog">
                <div className="modal-content bg-dark text-light text-opacity-75">
                    <div className="modal-header">
                        <h1 className="modal-title" id="ModaleLabel">Mon profil Github</h1>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <img className="avatar" alt="avatar github" src={datas.avatar_url}></img>
                        <i className="bi bi-person"></i><a rel="noreferrer" target="_blank" href={datas.html_url}>{datas.name}</a>
                        <hr></hr>
                        <i className="bi bi-geo-alt"></i><a href={datas.location}> </a>
                        <hr></hr>
                        <i className="bi bi-card-text"></i>{datas.bio}
                        <hr></hr>
                        <i className="bi bi-box"></i>Repositories : {datas.public_repos}
                        <hr></hr>
                        <i className="bi bi-people"></i>Followers : {datas.followers}
                        <hr></hr>
                        <i className="bi bi-people"></i>Following : {datas.following}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modale;