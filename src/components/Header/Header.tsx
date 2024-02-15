import { Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { NavMenu } from "../index";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const title = "TheFutureUni";
  const navItems = [
    { name: "Login", path: "/login" },
    { name: "Signup", path: "/signup" },
  ];

  const navMenuProps = {
    navItems,
    open,
    onClose: handleClose,
    anchorEl,
    onClick: handleClick,
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ width: "100%", padding: "1rem 2rem" }}
    >
      <Typography
        variant="h3"
        component="div"
        sx={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        {title}
      </Typography>

      <Stack
        direction="row"
        gap={2}
        sx={{ display: { xs: "none", sm: "flex" } }}
      >
        {navItems.map((item) => (
          <Typography
            key={item.name}
            variant="button"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate(item.path)}
          >
            {item.name}
          </Typography>
        ))}
      </Stack>

      {/* mobile */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        sx={{ display: { xs: "flex", sm: "none" } }}
      >
        <NavMenu {...navMenuProps} />
      </Stack>
    </Stack>
  );
};

export default Header;
