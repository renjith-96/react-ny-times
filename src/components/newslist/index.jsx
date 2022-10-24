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

const NewsList = ({ news, searchPage }) => {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {news.map((newsItem) => {
        return (
          <React.Fragment
            key={searchPage ? newsItem?.headline?.main : newsItem.title}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src={newsItem?.multimedia && newsItem?.multimedia[2]?.url}
                />
              </ListItemAvatar>
              <ListItemText
                primary={searchPage ? newsItem?.headline?.main : newsItem.title}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {searchPage
                        ? newsItem?.byline?.original
                        : newsItem?.byline}
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
export default React.memo(NewsList);
