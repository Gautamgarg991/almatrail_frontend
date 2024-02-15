import React from "react";
import {
    Stack,
    Menu,
    MenuItem,
    IconButton,
    } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";


type NavMenuProps = {
  navItems: { name: string; path: string }[];
  open: boolean;
  onClose: () => void;
  anchorEl: null | HTMLElement;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
};

const NavMenu = (props: NavMenuProps) => {
    const { navItems, open, onClose, anchorEl, onClick } = props;
    const navigate = useNavigate();
    return (
        <Stack direction="row" gap={2} sx={{ display: { xs: "flex", sm: "none" } }}>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={onClick}
        >
            <MenuIcon />
        </IconButton>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={onClose}
            MenuListProps={{
            "aria-labelledby": "basic-button",
            }}
        >
            {navItems.map((item) => (
            <MenuItem
                key={item.name}
                onClick={() => {
                navigate(item.path);
                onClose();
                }}
            >
                {item.name}
            </MenuItem>
            ))}
        </Menu>
        </Stack>
    );
};

export default NavMenu;
