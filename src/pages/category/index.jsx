import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { getTopNews } from "../../services/newsservice";
import SelectCategory from "./components/selectcategory";
import NewsList from "../../components/newslist";
import Loader from "../../components/loader";

const Category = () => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let mounted = true;
    const fetchNews = async (category) => {
      setIsLoading(true);
      let data = await getTopNews(category);
      if (data) setNews(data?.data?.results);
      setIsLoading(false);
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
          <NewsList news={news} />
        </Grid>
      </Grid>
      <Loader open={isLoading} />
    </React.Fragment>
  );
};
export default Category;
