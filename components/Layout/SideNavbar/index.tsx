import { Box, BoxProps, Flex, 
         useDisclosure, Text, CloseButton,  
         Drawer,
         DrawerContent,
         useColorModeValue, 
} from '@chakra-ui/react';
import React from 'react';
import Logo from "../../../images/logo.svg";

const SideNavbar = () => {

    const {isOpen, onOpen, onClose } = useDisclosure();
    return(
        <>
            <Box>
                <Sidebar 
                    onClose = {() => onClose}
                    display = {{base: "none", md: "block"}}
                />
                <Drawer
                    size               = "full"
                    isOpen             = {isOpen}
                    onClose            = {onClose}
                    placement          = "left"
                    autoFocus          = {false}
                    onOverlayClick     = {onClose}
                    returnFocusOnClose = {false}  
                >
                    <DrawerContent>
                        <Sidebar onClose={onClose} />
                    </DrawerContent>
                </Drawer>
            </Box>
        </>
    )
}

interface SidebarProps extends BoxProps {
    onClose: () => void;
}

const Sidebar = ({onClose, ...rest}: SidebarProps) => {
    return(
        <Box
            w                = {{base: 'full', md: 60}}
            h                = "full"
            bg               = "gray.900"   
            pos              = "fixed"
            borderRadius     = "1px"
            borderRightColor = "white" 
            {...rest}
        >
            <Flex>
                <Text 
                    fontSize="2xl" 
                    fontFamily="monospace" 
                    fontWeight="bold"
                >
                    Logo
                    <Logo />
                </Text>
                <CloseButton 
                    display = {{ base: "flex", md: "none" }}
                    onClick = {onClose}
                />
            </Flex>

        </Box>
    )
}


export default SideNavbar;