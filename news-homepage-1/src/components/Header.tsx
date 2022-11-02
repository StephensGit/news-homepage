import React from "react";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Image,
  Link,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";

import logo from "../images/logo.svg";
import menu from "../images/icon-menu.svg";
import closeIcon from "../images/icon-menu-close.svg";

const LinkItems = [
  { label: "Home", href: "/" },
  { label: "New", FiThref: "/" },
  { label: "Popular", href: "/" },
  { label: "Trending", href: "/" },
  { label: "Categories", href: "/" },
];

const Header = () => {
  const [isLargerThan686] = useMediaQuery("(min-width: 686px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        height="28px"
        maxWidth={{ base: "100%", sm: "100%", md: "100%", lg: "1110px" }}
        mx={{ base: "auto" }}
        my="28px"
      >
        <Image src={logo} width="45px" />
        {isLargerThan686 && (
          <Box
            minW="441px"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            {LinkItems.map((link, i) => (
              <Link
                key={i}
                fontSize="15px"
                fontWeight="400"
                lineHeight="26px"
                _hover={{ textDecoration: "none", color: "#F15D51" }}
              >
                {link?.label}
              </Link>
            ))}
          </Box>
        )}

        <Image
          src={menu}
          width="40px"
          height="17px"
          cursor="pointer"
          onClick={onOpen}
          display={{ base: "auto", sm: "auto", md: "none", lg: "none" }}
        />
      </Box>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader display="flex" justifyContent="flex-end">
            <Image src={closeIcon} cursor="pointer" onClick={onClose} />
          </DrawerHeader>
          <DrawerBody display="flex" flexDirection="column">
            {LinkItems.map((link, i) => (
              <Link
                key={i}
                fontSize="18px"
                fontWeight="400"
                lineHeight="24px"
                my={4}
              >
                {link?.label}
              </Link>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
