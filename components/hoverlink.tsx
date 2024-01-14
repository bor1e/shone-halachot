// components/HoverLink.js
import React from 'react';

const HoverLink = ({ id, footnote }) => {
    return (
        <a 
        id={`ref-${id}`}
        href={`#references-${id}`}
        className="hoverLink"
        aria-describedby="footnotes-label"
        role="doc-noteref">
            <sup>{id}</sup>
            <span className="hoverText">{footnote}</span>
        </a>
    );
};

export default HoverLink;


/*

        <>
        <div className="group">
    <a
            
            data-tooltip-target={`tooltip-animation-${id}`}
            className="text-amber-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            aria-describedby="footnotes-label"
            role="doc-noteref"
        >
            {id}
        </a>
        <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">{footnote}</span>
            <div
                id={`tooltip-animation-${id}`}
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
            >
                
                <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
            </div>

            </>
*/