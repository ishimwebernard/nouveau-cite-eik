import React from 'react';
import Header from './header';
import SlideShow from './slideshow';
import Menu from './menu'
import Reasons from './reasonstojoineik'
import News from './recentNews'
import KeyLinks from './keyLinks'
import Footer from './footer'
import Slider from './slider'

export default function Main() {
    return (
        <div className="bg-gray-100">
            <Header />
            <SlideShow />
            <div className="grid grid-cols-3 px-7 mt-10 space-x-4">
                <div className="col-span-2 py-2">
                    <Reasons />
                    <News />
                    <KeyLinks />
                </div>
                <Menu />
            </div>
            <Footer />

        </div>
    )
}
