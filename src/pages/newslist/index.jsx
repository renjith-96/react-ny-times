import React, { useEffect, useState } from "react";
import {
  Avatar,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { getTopNews } from "../../services/newsservice";
import SelectCategory from "./components/selectcategory";

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    let mounted = true;
    const fetchNews = async (category) => {
      let data = await getTopNews(category);
      if (data) setNews(data?.data?.results);
    };
    mounted && category && fetchNews(category);
    return () => (mounted = false);
  }, [category]);

  const handleCategory = (category) => setCategory(() => category);

  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={12}>
          <Typography
            sx={{ display: "inline" }}
            component="span"
            variant="h5"
            color="text.primary"
          >
            {" "}
            Select cateogory
          </Typography>
          <SelectCategory handleCategory={handleCategory} />
        </Grid>{" "}
        <Grid item xs={12}>
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
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default NewsList;
