import React from 'react';
import Header from './header';
import SlideShow from './slideshow';
import Menu from './menu'
import Reasons from './reasonstojoineik'
import News from './recentNews'


export default function Main() {
    return (
        <div className="bg-gray-100">
            <Header />
            <SlideShow />
            <div className="grid grid-cols-3 px-7 mt-10 space-x-4">
                <div className="col-span-2">
                    <Reasons />
                    <News />
                </div>
                <Menu />
            </div>

        </div>
    )
}
