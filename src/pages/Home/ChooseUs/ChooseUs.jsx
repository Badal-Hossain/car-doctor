import { RiTeamFill } from "react-icons/ri";
import { MdAccessTimeFilled } from "react-icons/md";
import { IoCall, IoSettings } from "react-icons/io5";
import { BsShieldFillCheck } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";

const ChooseUs = () => {
    return (
        <div className=" my-16">
            <div className="mx-auto text-center">
                <h5 className="text-red-600 font-bold">Core Features</h5>
                <h2 className="text-3xl my-4 font-bold">Why choose us?</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-6 my-6 px-20">
                <div className="col-span-1 border-2 py-5 w-2/3 text-center mx-auto">
                    <RiTeamFill className="mx-auto text-center text-3xl"></RiTeamFill>
                    <p className="text-sm">Expert Team</p>
                </div>
                <div className="col-span-1 border-2 py-5 w-2/3 text-center mx-auto text-white bg-red-600">
                    <MdAccessTimeFilled className="mx-auto text-center text-3xl"></MdAccessTimeFilled>
                    <p className="text-sm">Timely Delivery</p>
                </div>
                <div className="col-span-1 border-2 py-5 w-2/3 text-center mx-auto">
                    <IoCall className="mx-auto text-center text-3xl"></IoCall>
                    <p className="text-sm">24/7 Support</p>
                </div>
                <div className="col-span-1 border-2 py-5 w-2/3 text-center mx-auto">
                    <IoSettings className="mx-auto text-center text-3xl"></IoSettings>
                    <p className="text-sm">Best Equipment</p>
                </div>
                <div className="col-span-1 border-2 py-5 w-2/3 text-center mx-auto">
                    <BsShieldFillCheck className="mx-auto text-center text-3xl"></BsShieldFillCheck>
                    <p className="text-sm">100% Guranty</p>
                </div>
                <div className="col-span-1 border-2 py-5 w-2/3 text-center mx-auto">
                    <CiDeliveryTruck className="mx-auto text-center text-3xl"></CiDeliveryTruck>
                    <p className="text-sm">Timely Delivery</p>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;