import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  ModalProps,
} from '@chakra-ui/react';
import { ProButton } from '../button';

interface IProModalProps extends ModalProps {
  className?: string;
}

export const ProModal: React.FC<IProModalProps> = ({
  className,
  isOpen,
  onClose,
  children,
  ...rest
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} {...rest}>
      <ModalOverlay className="bg-[#000] !opacity-30" />
      <ModalContent className="bg-white">
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <ProButton variant="ghost" className="mr-3" onClick={onClose}>
            Close
          </ProButton>
          <ProButton>Submit</ProButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
