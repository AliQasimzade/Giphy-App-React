import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./css/Gif.css";

const Gif = ({ gif }) => {
  const handleDownload = (url) => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "blob";
    xhr.onload = function () {
      let urlCreator = window.URL || window.webkitURL;
      let imageUrl = urlCreator.createObjectURL(this.response);
      let tag = document.createElement("a");
      tag.href = imageUrl;
      tag.download = gif.title.charAt(0).toUpperCase() + gif.title.slice(1);
      document.body.appendChild(tag);
      tag.click();
      document.body.removeChild(tag);
    };
    xhr.send();
  };
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          alt={gif.title}
          src={gif.images.downsized.url}
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {gif.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          variant="text"
          onClick={() => handleDownload(gif.images.downsized.url)}
          className="download-btn"
        >
          <i className="fa-solid fa-download download-icon"></i>
          <span>Download</span>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Gif;
