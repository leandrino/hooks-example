import React from 'react';
import { IDataImages } from '../../interfaces/images';
import data from '../../data/images';
import useMedia from '../../hooks/use-media';
import {
  ImageWrapper,
  ImageGroup,
  ImageContainer
} from '../../common/image-grid';

const UseMedia = () => {
  const columnCount = useMedia(
    ['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'],
    [5, 4, 3],
    2
  );

  let columnHeights: any[] = new Array(columnCount).fill(0);
  let columns: any[] = new Array(columnCount).fill(0).map(() => []);

  data.forEach((item: IDataImages) => {
    const shortColumnIndex = columnHeights.indexOf(Math.min(...columnHeights));
    columns[shortColumnIndex].push(item);
    columnHeights[shortColumnIndex] += item.height;
  });

  return (
    <ImageWrapper>
      {columns.map((column: any[], index: number) => (
        <ImageGroup key={`image-group-${index}`}>
          {column.map((item: IDataImages, index: number) => (
            <ImageContainer
              key={`image-container-${index}`}
              height={item.height}
              width={item.width}>
              <img src={item.image} alt="" />
            </ImageContainer>
          ))}
        </ImageGroup>
      ))}
    </ImageWrapper>
  );
};

export default UseMedia;
