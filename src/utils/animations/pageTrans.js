import { TweenMax, TimelineMax, Power3, Power4 } from "gsap";

export default function pageTransition(screen, body) {
    let tl = new TimelineMax();
    tl.to(screen, {
        duration: 1,
        height: "100%",
        ease: Power3.easeInOut,
    });
    tl.to(screen, {
        duration: 1,
        top: "100%",
        ease: Power3.easeInOut,
        delay: 0.5,
    });
    tl.set(screen, { right: "-100%" });
    TweenMax.to(body, .3, {
        css: {
            opacity: "1",
            pointerEvents: "auto",
            ease: Power4.easeInOut
        }
    }).delay(2);
    return () => {
        TweenMax.to(body, 1, {
            css: {
                opacity: "0",
                pointerEvents: 'none'
            }
        });
    }
}