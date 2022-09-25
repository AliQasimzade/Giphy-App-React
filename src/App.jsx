import React, { useState, lazy, Suspense } from "react";
import SearchBox from "./components/SearchBox";
import { Grid, Skeleton, Stack } from "@mui/material";
const Gif = lazy(() => import("./components/Gif"));

const App = () => {
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <div className="container">
        <h2>Search and Download Gifs</h2>
        <SearchBox setData={setData} />
        {data.length > 0 ? (
          <p className="result-in-search">
            <span>
              Result in Search: <span>{data.length - 1}</span>
            </span>
          </p>
        ) : null}
        {data.length > 0 && (
          <Grid container spacing={2} className="grid-container">
            {data.map((gif) => (
              <Grid item key={gif.id} className="grid-item">
                <Suspense
                  fallback={
                    <Stack spacing={1}>
                      <Skeleton
                        variant="rectangular"
                        sx={{ fontSize: "1rem" }}
                      />
                      <Skeleton variant="rectangular" width={40} height={40} />
                      <Skeleton variant="rectangular" width={210} height={60} />
                      <Skeleton variant="rectangular" width={210} height={60} />
                    </Stack>
                  }
                >
                  <Gif gif={gif} />
                </Suspense>
              </Grid>
            ))}
          </Grid>
        )}
      </div>
    </div>
  );
};

export default App;
