import styled from "styled-components";
import { LuMessagesSquare } from "react-icons/lu";
import { BsBook } from "react-icons/bs";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
  return (
    <Wrapper>
        <div className='container'>
            <div className='grid grid-three-column'>
                <div className='services-1'>
                    <div>
                        <LuMessagesSquare className='icon' />
                        <h3>Interactive Doubt Clearing</h3>
                    </div>
                </div>
                <div className="services-2">
                    <div>
                        <BsBook className="icon"/>
                        <h3>Top Notch Study Material</h3>
                    </div>
                </div>
                <div className="services-3">
                    <div>
                        <RiSecurePaymentLine className="icon"/>
                        <h3>Super Secure Payment Gateway</h3>
                    </div>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 9rem 0;

  .grid {
    gap: 4.8rem;
  }

  .services-1,
  .services-2,
  .services-3 {
    width: auto;
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background-color: #F6F8FA;
    text-align: center;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }

  

  h3 {
    margin-top: 1.4rem;
    font-size: 2rem;
  }

  .icon {
    /* font-size: rem; */
    width: 7rem;
    height: 7rem;
    padding: 2rem;
    background-color: #F6F8FA;
    color: #5138ee;
  }
`;

export default Services
