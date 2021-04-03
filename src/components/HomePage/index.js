import "./HomePage.css"

function HomePage(){
    return (
        <div>

        <nav className="big container-fluid d-flex flex-row justify-content-around align-items-center bg-secondary bg-gradient border border-warning">
            <a className='item' href="">Phones</a>
            <a className='item' href="">Laptops</a>
            <a className='item' href="">Desktops</a>
        </nav>

        <nav className="big container-fluid d-flex flex-row justify-content-around align-items-center bg-secondary bg-gradient border border-warning">
            <a className='item' href="">Accessories</a>
            <a className='item' href="">Routers</a>
            <a className='item' href="">Screens</a>
        </nav>

        </div>
    )
}

export default HomePage