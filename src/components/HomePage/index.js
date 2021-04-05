import Flip from "./Flip"

function HomePage(props){
    return (
        <div>

        <nav className="homepage container-fluid d-flex flex-row justify-content-around align-items-center">
            <Flip img={{src:'https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/mi-8-pro_660_091918062132_102918015715.jpg',name:'Phones'}} />
            <Flip img={{src:'https://blog.architizer.com/wp-content/uploads/Top-Laptops-2020-hero-image-1.jpg',name:'Laptops'}}/>
            <Flip img={{src:'https://images-na.ssl-images-amazon.com/images/I/81boK-BpHAL._SL1500_.jpg',name:'Desktops'}}/>
            <Flip img={{src:'https://5.imimg.com/data5/BC/MD/HE/SELLER-86986427/mi-led-tv-4-pro-138-88-cm-55-ultra-hd-android-tv-500x500.jpg',name:'Screens'}}/>
            <Flip img={{src:'https://www.tekpoint.com/wp-content/uploads/handy-zubehoer-grosshandel.jpg',name:'Accessories'}}/>
            <Flip img={{src:'https://hsto.org/storage2/c9d/6b0/c32/c9d6b0c32cce18deabc926a18587c1a5.jpg',name:'Tablets'}}/>
        </nav>

        </div>
    )
}

export default HomePage