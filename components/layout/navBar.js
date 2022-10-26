import GreenButton from "../buttons/greenButton";

function NavBar(){
    return (
        <div className="h-full w-[1280px] max-w-5xl mx-auto pt-14">
            <div className="flex justify-between items-center">
              <a href="#" className="flex items-center gap-2">
              <div className="bg-customGreen h-9 w-9 rounded-full"></div>
              <h1 className="font-bold text-darkGreen">Buildit</h1>
              </a>
                <ul className="flex gap-7">
                    <li><a href="#" className="text-green-700 ">About</a></li>
                    <li><a href="#" className="text-green-700">Services</a></li>
                    <li><a href="#" className="text-green-700">Projects</a></li>
                    <li><a href="#" className="text-green-700">Contact</a></li>
                </ul> 
                <GreenButton name="Need a project?"/>
            </div>
        </div>
    )
} 

export default NavBar;