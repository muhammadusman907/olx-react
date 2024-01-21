import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import SELL_BTN from "../Images/SEll_BTN.svg"

export const MyNavbar = () => {
  return (
    <>
      <div className="bg-gray-500 w-[100%] ">
        <ul className="flex justify-between items-center h-[60px]">
          <li className="">home</li>
          <li>
            <button className="relative flex justify-center items-center
               flex-col
            ">
              <img src={SELL_BTN} />
               <div className="absolute z-10 align-center font-bold">+ sell</div> 
            </button>
          </li>
        </ul>
      </div>

    </>
  );
}

