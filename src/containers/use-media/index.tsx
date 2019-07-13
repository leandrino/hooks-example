import React from "react";
import { IDataImages } from "../../interfaces/images";
import data from "../../data/images";
import useMedia from "../../hooks/use-media";
import {
  ImageWrapper,
  ImageGroup,
  ImageContainer
} from "../../common/image-grid";

const UseMedia = () => {
  const columnCount = useMedia(
    [
      "(min-width: 1700px)",
      "(min-width: 1500px)",
      "(min-width: 1000px)",
      "(min-width: 600px)",
      "(min-width: 300px)"
    ],
    [7, 5, 4, 3, 2],
    1
  );

  const columnHeights: any[] = new Array(columnCount).fill(0);
  const columns: any[] = new Array(columnCount).fill(0).map(() => []);

  data.forEach((item: IDataImages) => {
    const shortColumnIndex = columnHeights.indexOf(Math.min(...columnHeights));
    columns[shortColumnIndex].push(item);
    columnHeights[shortColumnIndex] += item.height;
  });

  return (
    <ImageWrapper>
      {columns.map((column: any[], columnsIndex: number) => (
        <ImageGroup key={`image-group-${columnsIndex}`}>
          {column.map((item: IDataImages, columnIndex: number) => (
            <ImageContainer
              key={`image-container-${columnIndex}`}
              height={item.height}
              width={item.width}
            >
              <img src={item.image} alt="" />
            </ImageContainer>
          ))}
        </ImageGroup>
      ))}
    </ImageWrapper>
  );
};

export default UseMedia;
