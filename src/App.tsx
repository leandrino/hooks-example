import React from 'react';
import styled from '@emotion/styled';
import useMedia from './hooks/use-media';
import data from './data/images';
import { any } from 'prop-types';

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 1.5rem;
  & > img {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export default function App() {
  const columnCount = useMedia(
    ['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'],
    [5, 4, 3],
    2
  );

  let columnHeights = new Array(columnCount).fill(0);
  let columns: any[] = [];
  type ItemColumn = {
    height: number;
    width: number;
    image: string;
  };
  data.forEach((item: ItemColumn) => {
    const shortColumnIndex = columnHeights.indexOf(Math.min(...columnHeights));
    columns[shortColumnIndex].push(item);
    columnHeights[shortColumnIndex] += item.height;
  });

  return (
    <div className="App">
      <div className="columns is-mobile">
        {columns.map(column => (
          <div className="column">
            {column.map((item: any) => (
              <div
                className="image-container"
                style={{
                  // Size image container to aspect ratio of image
                  paddingTop: (item.height / item.width) * 100 + '%'
                }}>
                <img src={item.image} alt="" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
