import React from "react";

export const Footer = () => {
    return (
        <div className="flex justify-center font-mono text-sm text-[#BDBDBD] bg-[#ADD8E6] pb-2 mt-8 pt-2">
            <div
                className="flex hover:cursor-pointer text-blue-950"
                onClick={() => window.open("https://github.com/jj-sm", "_black")}
            >
                <p>
                    Forked from <span className="font-bold"> loretito</span>.
                    Adapted, updated and formatted by <span className="font-bold"> jj-sm</span> (Astro)
                </p>
                <img
                    src="/github-black.svg"
                    alt="github logo"
                    className="w-5 ml-2"
                />
            </div>
        </div>
    );
};
