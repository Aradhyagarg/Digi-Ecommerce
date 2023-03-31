import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdOutlineCoronavirus } from "react-icons/md";
import { FaGooglePay } from "react-icons/fa";
const Services = () => {
  return (
    <Wrapper>
    
      <div className="container">
        <div className="grid grid-three-column">
          <div className="services-2">
          <div className="services-colum-2">
            <div>
              <TbTruckDelivery className="icon" />
              <h3>Super Fast and Free Delivery</h3>
            </div>
          </div>
          <div className="services-colum-2">
              <div>
                <FaGooglePay className="icon" />
                <h3>UPI payment in few seconds</h3>
              </div>
            </div>
          </div>


          <div className="services-2">
            <div className="services-colum-2">
              <div>
                <MdSecurity className="icon" />
                <h3>Non-contact Shipping</h3>
              </div>
            </div>
            <div className="services-colum-2">
              <div>
                <GiReceiveMoney className="icon" />
                <h3>Money-back Guaranteed</h3>
              </div>
            </div>
          </div>
          <div className="services-2">
          <div className="services-colum-2">
            <div>
              <TbTruckDelivery className="icon" />
              <h3>Super Fast and Free Delivery</h3>
            </div>
          </div>
          
          <div className="services-colum-2">
              <div>
                <MdOutlineCoronavirus className="icon" />
                <h3> Covid-19 Precaution </h3>
              
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  .grid {
    gap: 4.8rem;
  }
  
  .services-1,
  .services-2,
  .services-3 {
    width: auto;
    height: 50rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background-color: #282A35;
    text-align: center;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }
  
  
  .services-2 {
    gap: 4rem;
    background-color: transparent;
    box-shadow: none;
    .services-colum-2 {
        background-color: #282A35;
      display: flex;
      flex-direction: row;
      flex: 1;
      justify-content: center;
      align-items: center;
      border-radius: 2rem;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
      div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }
    }
  }
  h3 {
    margin-top: 1.6rem;
    font-size: 2rem;
    color: white;
  }
  h3:hover{
    text-decoration: underline;
  }
  .icon {
    /* font-size: rem; */
    width: 8rem;
    height: 8rem;
    padding: 1.5rem;
    border-radius: 20%;
    background-color: #fff;
    color: #282A35;
  }
  .icon:hover{
    transform: scale(1.3);
  }
`;
export default Services;