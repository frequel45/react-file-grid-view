
import React, { useState, useEffect } from "react";
import { fetchImages } from "../api/imageApi.js";
import ImageCanvas from "./ImageCanvas.jsx";
import { AutoSizer, Grid } from "react-virtualized";

const FileGridView = ({ filters }) => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadImages = async () => {
      const newImages = await fetchImages(page, filters);
      if (Array.isArray(newImages)) {
        setImages((prev) => [...prev, ...newImages]);
      } else {
        console.error('Expected an array of images but got:', newImages);
      }
    };
    loadImages();
  }, [page, filters]);

  const onScroll = ({ clientHeight, scrollHeight, scrollTop }) => {
  
    if (clientHeight + scrollTop >= scrollHeight - 20 && !loading) {
      setPage((prev) => prev + 1); 
    }
  };

  return (
    <div className="file-grid-view" onScroll={onScroll}>
      <AutoSizer>
        {({ width, height }) => (
          <Grid
            cellRenderer={({ columnIndex, key, rowIndex, style }) => {
              const image = images[rowIndex * 3 + columnIndex];
              return image ? (
                <div key={key} style={style}>
                  <ImageCanvas src={image.url} />
                </div>
              ) : null;
            }}
            columnCount={3}
            columnWidth={width / 3}
            height={height}
            rowCount={Math.ceil(images.length / 3)}
            rowHeight={200}
            width={width}
          />
        )}
      </AutoSizer>
    </div>
  );
};

export default FileGridView;

