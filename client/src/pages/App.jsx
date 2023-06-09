import React,{useState} from "react";
import Navbar from "../components/Navbar";
// import { GetinTouch } from "../components/GetinTouch";
// import LocationCard from "../components/LocationCard";
import MainPageCard from "../components/MainPageCard";
import LocationCard from "../components/LocationCard";
import Carousel from "../components/Carousel";
import { styles } from "../styles";
import msgicon from "../assets/MessageHeart.png";
import CallChatCard from "../components/CallChatCard";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleComponent = () => {
    setIsOpen(!isOpen);
  }
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  
  return (
    // main wrapper
    <div className={isButtonClicked ? "blur-sm" : ""}>
      {/* navbar */}
      <Navbar/>
      <Carousel/>
      <MainPageCard/>
      <MainPageCard/>
      <MainPageCard/>
      <MainPageCard/>
      <div className="fixed bottom-10 right-10 opacity-90">

        <img onClick={()=>{toggleComponent(); setIsButtonClicked(!isButtonClicked);}} src={msgicon} alt="msgicon" className='fixed bottom-10 right-10 ' />
        {isOpen && <CallChatCard />}
      </div>
      {/* <LocationCard/> */}
      {/* <h1 className="">Main App</h1> */}
    </div>
  );
}

export default App;
