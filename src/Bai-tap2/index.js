import React from "react";
import Header from "./header";
import Carousel from "./carousel";
import Contact from "./contact";
import Wwd from "./wwd";
import Listcard from "./listcard";
import Footer from "./footer";

export default function Baitap2() {
    return (
        <div>
            <Header />
            <Carousel />
            <div className="container">
                <div className="row">
                    <Wwd />
                    <Contact />
                </div>



                <Listcard />
            </div>
            <Footer />
        </div>
    )
}