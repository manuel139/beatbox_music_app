import { Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import React, { useRef } from "react";
import { BiPlus } from "react-icons/bi";
import LoginModal from "./LoginModal";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setModalMessage } from "../redux/slices/modalSlice";

const CreatePlaylistCard = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const modalRef = useRef();
	const navigate = useNavigate();

	const { user } = useSelector((state) => state.user);
	const dispatch = useDispatch();

	const handleCreatePlaylist = () => {
		if (user) {
			navigate("/playlists/create");
		} else {
			dispatch(setModalMessage("Please login to create a playlist."));
			onOpen();
		}
	};

	return (
		<>
			<LoginModal ref={modalRef} onClose={onClose} isOpen={isOpen} />
			<Flex
				direction="column"
				align="center"
				justify="center"
				bg="zinc.800"
				rounded="base">
				<Button
					onClick={handleCreatePlaylist}
					variant="unstyled"
					bg="zinc.700"
					display="inline-flex"
					alignItems="center"
					rounded="base"
					boxSize="4rem"
					mb={3}>
					<BiPlus size={24} />
				</Button>
				<Text fontSize="sm" color="zinc.400">
					Create a playlist
				</Text>
			</Flex>
		</>
	);
};

export default CreatePlaylistCard;