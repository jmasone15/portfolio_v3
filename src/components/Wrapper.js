import React from "react";
import Particles from "react-tsparticles";
import { light, dark, lightDraw, darkDraw } from "../utils/animations/backgroundConfig";

export default function Wrapper({ theme, draw }) {

    if (draw === false) {
        if (theme === true) {
            return <Particles id="tsparticles" options={light} />
        } else {
            return <Particles id="tsparticles" options={dark} />
        }
    } else if (draw === true) {
        if (theme === true) {
            return <Particles id="tsparticles" options={lightDraw} />
        } else {
            return <Particles id="tsparticles" options={darkDraw} />
        }
    }
}