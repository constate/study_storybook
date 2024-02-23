import PropTypes from 'prop-types';
import styled from 'styled-components';
export const Modal = ({ hasBackground, modalColor, content }) => {
    if (hasBackground) {
        return (
            <ModalBackground>
                <ModalBox modalColor>{content}</ModalBox>
            </ModalBackground>
        );
    } else {
        return <ModalBox>{content}</ModalBox>;
    }
};

const ModalBackground = styled.div`
    z-index: 2;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
`;

const ModalBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 90%;
    max-width: 500px;
    height: max-content;
    min-height: 30%;
    max-height: 50%;
    background-color: #fa6400;
    border-radius: 16px;
    padding: 12px;
    overflow: auto;
`;

Modal.propTypes = {
    /**
     * Is this the principal call to action on the page?
     */
    primary: PropTypes.bool,
    /**
     * What background color to use
     */
    backgroundColor: PropTypes.string,
    /**
     * How large should the button be?
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * Button contents
     */
    content: PropTypes.string.isRequired,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
};

Modal.defaultProps = {
    backgroundColor: '#FA6400',
    primary: false,
    size: 'medium',
    onClick: undefined,
};
