import { Overlay, ModalDiv } from './Modal.styled'

const Modal = ({ modalImg, closeModal }) => {
  return (
    <Overlay onClick={closeModal}>
      <ModalDiv>
        <img src={modalImg} alt="" />
      </ModalDiv>
    </Overlay>
  )
}
export default Modal
