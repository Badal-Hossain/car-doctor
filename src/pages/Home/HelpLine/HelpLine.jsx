import { TbCalendarTime } from "react-icons/tb";
import { MdAddIcCall, MdAddLocationAlt } from "react-icons/md";
const HelpLine = () => {
    return (
        <div>
            <div className= "bg-black h-48 my-16 grid grid-cols-3 ">
                <div className="col-span-1 flex mx-auto items-center">
                    <TbCalendarTime className="text-4xl items-center"></TbCalendarTime>
                    <div className="ml-3">
                        <h5>we are open Monday-Friday</h5>
                        <p className="text-xl font-bold">7:00am - 9:00pm</p>
                    </div>
                </div>
                <div className="col-span-1 flex mx-auto items-center">
                    <MdAddIcCall className="text-4xl items-center"></MdAddIcCall>
                    <div className="ml-3">
                        <h5>Have a question?</h5>
                        <p className="text-xl font-bold">+2546 251 2658</p>
                    </div>
                </div>
                <div className="col-span-1 flex mx-auto items-center">
                    <MdAddLocationAlt className="text-4xl items-center"></MdAddLocationAlt>
                    <div className="ml-3">
                        <h5>Need a repair? our address</h5>
                        <p className="text-xl font-bold">Liza Street, New York</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpLine;