import { FaFacebook, FaGithub, FaLinkedin,FaInstagramSquare } from "react-icons/fa";
const Team = () => {
    return (
        <div>
            <div className="mx-auto text-center mt-4">
                <h5 className="text-red-500 font-bold">Team</h5>
                <h2 className="text-3xl my-3 font-bold">Meet our team</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="grid lg:grid-cols-3">
                <div className="col-span-1">
                    <div className="card w-72 bg-base-100 shadow-xl">
                        <figure><img src="../../../../public/assets/images/team/1.jpg" alt="Shoes" /></figure>
                        <div className="card-body mx-auto text-center">
                            <h2 className="card-title">Car Engine Plug</h2>
                            <p className="opacity-70">Engine Expert</p>
                            <div className="flex mx-auto gap-2 text-center text-2xl">
                                <a href=""><FaFacebook></FaFacebook></a>
                                <a href=""><FaGithub></FaGithub></a>
                                <a href=""><FaLinkedin></FaLinkedin></a>
                                <a href=""><FaInstagramSquare></FaInstagramSquare></a>                                        
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="card w-72 bg-base-100 shadow-xl">
                        <figure><img src="../../../../public/assets/images/team/1.jpg" alt="Shoes" /></figure>
                        <div className="card-body mx-auto text-center">
                            <h2 className="card-title">Car Engine Plug</h2>
                            <p className="opacity-70">Engine Expert</p>
                            <div className="flex mx-auto gap-2 text-center text-2xl">
                                <a href=""><FaFacebook></FaFacebook></a>
                                <a href=""><FaGithub></FaGithub></a>
                                <a href=""><FaLinkedin></FaLinkedin></a>
                                <a href=""><FaInstagramSquare></FaInstagramSquare></a>                                        
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 mb-6">
                    <div className="card w-72 bg-base-100 shadow-xl">
                        <figure><img src="../../../../public/assets/images/team/1.jpg" alt="Shoes" /></figure>
                        <div className="card-body mx-auto text-center">
                            <h2 className="card-title">Car Engine Plug</h2>
                            <p className="opacity-70">Engine Expert</p>
                            <div className="flex mx-auto gap-2 text-center text-2xl">
                                <a href=""><FaFacebook></FaFacebook></a>
                                <a href=""><FaGithub></FaGithub></a>
                                <a href=""><FaLinkedin></FaLinkedin></a>
                                <a href=""><FaInstagramSquare></FaInstagramSquare></a>                                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;