import styled from 'styled-components';


export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #0F1C49;
  height: auto;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  
 
  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    width: 100%;
    }
    
   

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 1.3rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #fff;
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
        font-size: 1.5rem;
        text-align: left;
        }

    &:hover {
      color: red;
    }
  }
  transform: translateX(-100%);
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
`;