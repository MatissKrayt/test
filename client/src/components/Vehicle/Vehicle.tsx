import 'animate.css';
import { useState } from 'react';
import { 
  Modal, 
  ModalBody, 
  ModalCloseButton, 
  ModalContent, 
  ModalHeader, 
  ModalOverlay } from '@chakra-ui/react';
import { Props } from '../../types';

export const Vehicle = ({ 
  title, 
  img, 
  nationIconSm, 
  description, 
  level}:Props): JSX.Element => {

    const converter = {
      1 : 'I',
      2 : 'II',
      3 : 'III',
      4 : 'IV',
      5 : 'V',
      6 : 'VI',
      7 : 'VII',
      8 : 'VIII',
      9 : 'IX',
      10 : 'X',
      11 : 'XI',
    }
    
  const [isModalOpen, setModalOpen] = useState(false);

  const switchStateModal = () => {
    if(isModalOpen){
      setModalOpen(false);
    } else setModalOpen(true)    
  };

  return (
    <>
      <div className="divVehicle animate__flipInX" onClick={switchStateModal}>
          <h2> 
              {converter[level]} <br />   
                {title}<br />
              <img src={nationIconSm} alt="" className="imgFlag"/>
          </h2>
          <img className="imgVehicle" src={img} alt="" />
      </div>

      <Modal isOpen={isModalOpen} onClose={switchStateModal} size={'2xl'}>
        <ModalOverlay backdropFilter="auto" backdropInvert="20%" />
        <ModalContent background="#edebf7">
          <ModalHeader fontSize="5xl">Description</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={7}>
            <div className="ModalDivVehicle">
              <h2> 
                  {converter[level]} <br />  
                  {title}<br />
                  <img src={nationIconSm} alt="" className="imgFlag"/>
              </h2>
              <img className="imgVehicle" src={img} alt="" />
              <p className='description'>{description}</p>
            </div>              
          </ModalBody>
        </ModalContent>
      </Modal>      
    </>
  )
}
