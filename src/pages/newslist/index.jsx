import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getTopNews } from "../../services/newsservice";

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    let mounted = true;
    const fetchNews = async () => {
      let data = await getTopNews();
      console.log(data?.data?.results);
      if (data) setNews(data?.data?.results);
    };
    mounted && fetchNews();
    return () => (mounted = false);
  }, []);

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {news.map((newsItem) => {
        return (
          <React.Fragment>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={newsItem?.multimedia[2]?.url} />
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
