import whatsapp from '../images/whatsapp.png';

const Navbar = () => {
    return (
        <div className= 'nav'>
            <a href = '#projects'>Projects</a>
            <a href = '#about'>About</a>
            <a href="https://wa.me/07033990661" target='_blank' rel="noreferrer"><img src={whatsapp} alt="Whatsapp"/></a>
            
        </div>
    )
}

export default Navbar
