import {
  AppBar,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import AppRoutes from "../../routes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;
const menu = [
  {
    menu: "Category",
    path: "/",
  },
  {
    menu: "Search",
    path: "/search",
  },
];
const Container = () => {
  let history = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index, path) => {
    setSelectedIndex(index);
    history(path);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            New York Times
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {menu.map((item, index) => (
              <ListItem key={item.menu} disablePadding>
                <ListItemButton
                  selected={selectedIndex === index}
                  onClick={(event) =>
                    handleListItemClick(event, index, item.path)
                  }
                >
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={item.menu} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        {" "}
        <Toolbar />
        <AppRoutes />
      </Box>
    </Box>
  );
};

export default Container;
