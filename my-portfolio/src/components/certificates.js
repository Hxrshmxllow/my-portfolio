import React from "react";
import "./certificates.css";
import { certificates } from "./data";

function Certificates() {
    return (
        <section id='certificates'>
            <div className="heading">
                <h1 className="certificates_heading">Certificates</h1>
            </div>
            <div className="certificates_container">
                {certificates.map((certificate) => (
                    <div className="certificate_content">
                         <img
                            src={certificate.image}
                            alt={certificate.name}
                            className="certificate_image"
                        />
                       <p className="certificate_title">{certificate.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Certificates;