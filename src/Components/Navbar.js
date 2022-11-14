import svgLogo from '../Assets/globe-solid.svg';

export default function Navbar() {
    return (
        <div className="nav">
            <img src={svgLogo} alt="logo" className="logo"></img>
            <h2 className="header">my travel journal.</h2>
        </div>
    )
}