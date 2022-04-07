import { Box, BoxProps, Flex, 
         useDisclosure, Text, CloseButton,  
         Drawer, Link, DrawerContent,
         useColorModeValue,
         Divider,
         IconButton, 
} from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import Logo from "../../../images/logo.svg";

// Declaring Sidebar Links
const LinkItems: Array<string> = [
    "about", 
    "work",
    "skills",
    "contact"   
];

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
            w                = {{base: 'full', md: 40}}
            h                = "full"
            bg               = "#111111"   
            pos              = "fixed"
            borderRadius     = "1px"
            borderRightColor = "white" 
            {...rest}
        >
            <Flex>
                <Box 
                    as     = {Link}
                    href   = "/"
                    margin = "2em auto 80% auto"

                    _focus = {{
                        boxShadow: "none"
                    }}
                >
                    <Logo />
                </Box>
                <CloseButton 
                    display = {{ base: "flex", md: "none" }}
                    onClick = {onClose}
                />
            </Flex>
            <Divider 
                borderColor= "#A63446"
            />
            {LinkItems.map((link) => (
                <NavItem
                    link = {link}
                >
                    {link}
                </NavItem>
            ))}
        </Box>
    )
}

// Link btn declaration
interface NavItemProps {
    children: ReactNode | ReactNode[],
    link: string
}

const NavItem = ({children, link, ...rest}: NavItemProps) => {
    return(
        <>
            {/* <Divider /> */}
            <Link
                href           = {`${link}`}
                transition     = "0.35s ease-in-out"
                textAlign      = "center"
                textTransform  = "capitalize"
                textDecoration = "none"
                _focus         = {{
                    boxShadow: "none"
                }}
                _hover         = {{
                    textDecoration: "none",
                    color: '#DB6C79',

                }}
            >
                <Box
                    p            = "2em 0"
                    mx           = "4"
                    role         = "group"
                    cursor       = "pointer"
                    textAlign    = "center"
                    fontWeight   = "700"
                    borderRadius = "lg"
                    {...rest}
                >
                    {children}
                </Box>
            </Link>
            <Divider 
                borderColor= "#A63446"
            />
        </>
    )
}

export default SideNavbar;