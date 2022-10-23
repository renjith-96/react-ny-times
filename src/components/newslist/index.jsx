import React from "react";
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

const NewsList = ({ news }) => {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {news.map((newsItem) => {
        return (
          <React.Fragment>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src={newsItem?.multimedia[2]?.url ?? ""}
                />
              </ListItemAvatar>
              <ListItemText
                primary={newsItem.title}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {newsItem?.byline}
                    </Typography>{" "}
                    &nbsp;&nbsp;
                    {newsItem?.abstract}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        );
      })}
    </List>
  );
};
export default NewsList;
