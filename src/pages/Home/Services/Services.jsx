import { useEffect, useState } from "react";

/* eslint-disable react/no-unescaped-entities */
const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('Services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="mt-6">
            <div className="text-center">
                <h2 className="text-4xl font-bold mb-4">Our services area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div>
                {
                    services.map(service =>)
                }
            </div>
        </div>
    );
};

export default Services;