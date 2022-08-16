import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import LanguagesSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";
import Popup from "./Popup";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";
import "../static/style.css";
import { styled } from "@mui/material/styles";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

interface DataLink {
  title: string;
  linkTo: string;
}

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "flex-start",
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  "@media all": {
    minHeight: 128,
  },
}));

export default function AppBarLendingWithMob() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [t] = useTranslation("translation");
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const [countClick, setNewClick] = React.useState<number>(0);

  const dataLink: DataLink[] = [
    {
      title: t("about us"),
      linkTo: "#aboutUs",
    },
    {
      title: t("projects"),
      linkTo: "#projects",
    },
    {
      title: t("team"),
      linkTo: "#team",
    },
    {
      title: t("feedback"),
      linkTo: "#feedback",
    },
  ];
  const handleScroll = () => {
    setAnchorElNav(null);
  };
  window.addEventListener("scroll", handleScroll);

  return (
    <header>
      {/*<CssBaseline/>*/}
      {/*<HideOnScroll {...props}>*/}
      <AppBar
        position="absolute"
        className="header-appbar"
        // position="fixed"
        // sx={{
        //   width: "100%",
        //   mx: "auto",
        // }}
      >
        <Container className="header-appbar-box">
          <Toolbar className="header-appbar-box-toolbar">
            <img
              id="logo-pos"
              src={"/icons/logo_main.svg"}
              alt="logo"
              onClick={() => setNewClick(countClick + 1)}
              className="header-appbar-logo"
            />

            {/*<Box sx={{flexGrow:10}}/>*/}
            <Box
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
              sx={{ flexGrow: 2, display: { xs: "flex", md: "none" } }} 
            >
              <LanguagesSelector />
              <div id="block-lang-menu-pos">
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  disableScrollLock={true}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {dataLink.map((page, index) => (
                    <MenuItem
                      key={`${index}_page_${page.title}`}
                      onClick={handleCloseNavMenu}
                    >
                      <Link
                        href={page.linkTo}
                        underline="none"
                        sx={{ color: "#000000"}}
                      >
                        {page.title}
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
                
              </div>
            </Box>
            <Box
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            >
              {/*<img id="logo-pos" src={"/icons/logo_main.svg"} alt="logo" onClick={() => setNewClick(countClick + 1)}/>*/}

              {dataLink.map((page, index) => (
                <Link
                  key={`${page.title}_${index}`}
                  href={page.linkTo}
                  underline="none"
                  sx={{ color: "#ffffff" }}
                >
                  <Button sx={{ color: "white" }}>{t(page.title)}</Button>
                </Link>
              ))}
              <div id="lang-pos">
                <LanguagesSelector />
              </div>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {countClick === 5 ? <Popup /> : <></>}
      {/*</HideOnScroll>*/}
    </header>
  );
}

// export default AppBarLendingWithMob
