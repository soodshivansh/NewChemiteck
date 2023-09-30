import '../styles/navbar.css';

export default function(){

    return(
      <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: "#415cab" }}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src="/photos/companyphoto.png" alt="Bootstrap" width="250" height="50" />
    </a>
    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active mx-3" style={{ color: "white", fontFamily: "'PT Sans', sans-serif", fontSize: "1.2rem" }} aria-current="page" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-3" style={{ color: "white", fontFamily: "'PT Sans', sans-serif", fontSize: "1.2rem" }} aria-current="page" href="#catalogue">Catalogue</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-3" style={{ color: "white", fontFamily: "'PT Sans', sans-serif", fontSize: "1.2rem" }} aria-current="page" href="#articles">Articles</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-3" style={{ color: "white", fontFamily: "'PT Sans', sans-serif", fontSize: "1.2rem" }} aria-current="page" href="#product-range">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-3" style={{ color: "white", fontFamily: "'PT Sans', sans-serif", fontSize: "1.2rem" }} aria-current="page" href="#contact-us">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
 

    )
}