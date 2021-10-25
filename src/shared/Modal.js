import './Modal.css';
import ReactDOM from 'react-dom';

const  Modal = ({ open,onClose }) => {
    const content = (
        <>
        <div className="backdrop" onClick={onClose}></div>
        <div className="modal">
            <p>modal</p>
        </div>
       </>
    );
    return open ? ReactDOM.createPortal(
        content,
        document.getElementById('portal')
    ): null;
}
export default Modal;