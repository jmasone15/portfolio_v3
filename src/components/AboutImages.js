import React from 'react'

export default function AboutImages({ theme }) {
    return (
        <div style={{ textAlign: "center" }}>
            <div className="images-selector">
                <span className={theme ? "img-card img1" : "img-card-dark img1"} ></span>
                <span className={theme ? "img-card img2" : "img-card-dark img2"}></span>
                <span className={theme ? "img-card img3" : "img-card-dark img3"} ></span>
            </div>
        </div>
    )
}
