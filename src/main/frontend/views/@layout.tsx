import {NavLink, Outlet} from "react-router-dom";


export default function Layout(){

    return (
        <div className="p-m">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Smart Chat Bot</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="btn btn-dark ms-3" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="btn btn-dark ms-3" href="/chat">Chat</a>
                        </li>
                        <li className="nav-item">
                            <a className="btn btn-dark ms-3" href="/history">History</a>
                        </li>
                        <li className="nav-item">
                            <a className="btn btn-dark ms-3" href="/person">Person</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <main className="main">
                <Outlet></Outlet>
            </main>
        </div>
    )
}