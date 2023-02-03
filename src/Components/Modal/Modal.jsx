import React, { useState } from "react";
import styled from "styled-components";

/**
 * Styled component for the modal backdrop
 */
const Backdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
`;

/**
 * Styled component for the modal container
 */
const ModalContainer = styled.div`
	background-color: white;
	width: 500px;
	height: 300px;
	border-radius: 10px;
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 20px;
`;

/**
 * Styled component for the modal header
 */
const ModalHeader = styled.h2`
	font-size: 20px;
	font-weight: bold;
`;

/**
 * Styled component for the modal body
 */
const ModalBody = styled.p`
	font-size: 16px;
	margin-top: 20px;
`;

/**
 * Styled component for the modal footer
 */
const ModalFooter = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: 20px;
`;

/**
 * Styled component for the close button
 */
const CloseButton = styled.button`
	background-color: lightgray;
	border: none;
	border-radius: 5px;
	padding: 10px 20px;
	font-size: 16px;
	font-weight: bold;
	color: white;
	cursor: pointer;
	&:hover {
		background-color: gray;
	}
`;

/**
 * Component that displays a modal with header, body, and footer
 * @function
 * @param {string} header - Header of the modal
 * @param {string} body - Body of the modal
 * @param {boolean} trigger - a boolean that is passed down as a prop that determines whether the modal is rendered or not
 * @returns {JSX.Element}
 */

// TODO trigger argument needs to be handled by parant componet environment

const Modal = ({ header, body, trigger }) => {
	const [showModal, setShowModal] = useState(false);
	if (trigger) {
		setShowModal(true);
	}
	/**
	 * Handle function that closes the modal
	 * @function
	 */
	const handleClose = () => {
		setShowModal(false);
	};

	return (
		showModal && (
			<Backdrop>
				<ModalContainer>
					<ModalHeader>{header}</ModalHeader>
					<ModalBody>{body}</ModalBody>
					<ModalFooter>
						<CloseButton onClick={handleClose}>Close</CloseButton>
					</ModalFooter>
				</ModalContainer>
			</Backdrop>
		)
	);
};

export default Modal;
