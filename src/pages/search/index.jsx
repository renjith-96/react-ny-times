import React, { useEffect, useState } from "react";
import {
  Chip,
  Grid,
  IconButton,
  Pagination,
  Stack,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { getArticles } from "../../services/newsservice";
import Newslist from "../../components/newslist";

const Search = () => {
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [news, setNews] = useState([]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleSearch = () => {
    if (searchText) {
      const last4 = searchList.slice(-4);
      setSearchList(() => [...last4, searchText]);
      setSearchText("");
    }
  };

  useEffect(() => {
    let mounted = true;
    const fetchNews = async (searchText, page) => {
      let data = await getArticles(searchText, page);
      if (data) setNews(data?.data?.response?.docs);
    };
    mounted && searchList.length && fetchNews(searchList.slice(-1), page);
    return () => (mounted = false);
  }, [page, searchList]);

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Grid
        item
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <TextField
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </Grid>
        <Grid item>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
            onClick={handleSearch}
          >
            <SearchIcon fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
      <Grid item md={12}>
        <Stack direction="row" spacing={1}>
          {searchList.map((item) => (
            <Chip key={item} label={item} />
          ))}
        </Stack>
      </Grid>
      <Grid item md={12}>
        <Newslist searchPage news={news} />
      </Grid>
      <Grid container item md={12} justifyContent="center" alignItems="center">
        <Pagination count={10} page={page} onChange={handleChange} />
      </Grid>
    </Grid>
  );
};

export default Search;
