import React, { ReactNode } from 'react';
import { Box, BoxProps, Flex, 
         useDisclosure, Text, CloseButton,  
         Drawer, Link, DrawerContent,
         Divider, IconButton, VStack, HStack, 
         FlexProps, 
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord } from "react-icons/fa";
import { IoMenuOutline} from 'react-icons/io5';
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../../../images/logo.svg";

// Declaring SidebarContent Links
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
                <SidebarContent 
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
                        <SidebarContent onClose={onClose} />
                    </DrawerContent>
                </Drawer>
                {/* Mobile Nav */}
                <MobileNav  
                    display={{base: "flex", md: "none"}}
                    onOpen = {onOpen}
                />
            </Box>
        </>
    )
}

interface SidebarProps extends BoxProps {
    onClose: () => void;
}

const SidebarContent = ({onClose, ...rest}: SidebarProps) => {
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
                    margin = "2em auto"
                    paddingLeft="10%"
                    _focus = {{
                        boxShadow: "none"
                    }}
                >
                    <Logo />
                </Box>
                    <CloseButton 
                        display = {{ base: "flex", md: "none" }}
                        marginRight = "2em"
                        marginTop="2em"
                        onClick = {onClose}
                        _hover = {{
                            color: "rgba(42,238,234)"
                        }}
                    />
            </Flex>
            <br />
            <br />
            <br />
            <br />
            <Divider 
                borderColor= "#A63446"
            />
            {LinkItems.map((link, index) => (
                <NavItem
                    key = {index}
                    link = {link}
                >
                    {link}
                </NavItem>
            ))}
            <VStack
                marginTop = "6em"
            >
                <HStack>
                    <IconButton 
                        as         = "a"
                        href       = "https://github.com/pranavsoni1101"
                        icon       = {<FaGithub />}
                        variant    = "ghost"
                        fontSize   = "1.5em"
                        transition = "0.3s ease-in-out"
                        aria-label = 'github-button'
                        _hover     = {{
                            color: "#DB6C79",
                            backgroundColod: "none",
                        }}
                        _focus     = {{
                            boxShadow: "none"
                        }}
                    />
                    <IconButton 
                        as         = "a"
                        href       = "https://www.linkedin.com/in/pranav-soni-29118a194/"
                        icon       = {<FaLinkedin />}
                        variant    = "ghost"
                        fontSize   = "1.5em"
                        transition = "0.3s ease-in-out"
                        aria-label = 'linkedin-button'
                        _hover     = {{
                            color: "#DB6C79",
                            backgroundColod: "none",
                        }}
                        _focus     = {{
                            boxShadow: "none"
                        }}
                    />
                </HStack>
                <HStack>
                    <IconButton 
                        as         = "a"
                        href       = "#"
                        icon       = {<FaDiscord />}
                        variant    = "ghost"
                        fontSize   = "1.5em"
                        transition = "0.3s ease-in-out"
                        aria-label = 'discord-button'
                        _hover     = {{
                            color: "#DB6C79",
                            backgroundColod: "none",
                        }}
                        _focus     = {{
                            boxShadow: "none"
                        }}
                    />
                    <IconButton 
                        as         = "a"
                        href       = "https://www.instagram.com/pranavv__11_/?utm_medium=copy_link"
                        icon       = {<FaInstagram />}
                        variant    = "ghost"
                        fontSize   = "1.5em"
                        transition = "0.3s ease-in-out"
                        aria-label = 'instagram-button'
                        _hover     = {{
                            color: "#DB6C79",
                            backgroundColod: "none",
                        }}
                        _focus     = {{
                            boxShadow: "none"
                        }}
                    />
                </HStack>
            </VStack>
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

interface MobileProps extends FlexProps {
    onOpen: () => void;
  }
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 24 }}
            height="20"
            alignItems="center"
            justifyContent="flex-end"
            {...rest}>
            <IconButton
                icon       = {<AiOutlineMenu />}
                variant    = "ghost"
                fontSize   = "1.2em"
                color      = "white"
                onClick    = {onOpen}
                aria-label = "open menu"
                _hover     ={{
                    bg: "none",
                    color: "rgba(42,238,234)"
                }}
                _focus     ={{
                    bg: "none"
                }}
            />
      </Flex>
    )
  }

export default SideNavbar;