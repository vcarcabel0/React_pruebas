export default function Header(props) {
    return (
        <div className="container-fluid bg-info py-4">
        <header className="container d-flex justify-content-between flex-wrap">
            <h1>Practicando useEffect</h1>
            {
                props.isLogged && <button 
                className="btn btn-primary"
                onClick={props.onLogOut}
                >Cerrar Sesión</button>
            }
            
        </header>
        </div>
    )
}
