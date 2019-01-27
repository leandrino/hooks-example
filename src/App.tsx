import React from 'react';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';
import useMedia from './hooks/use-media';
import data from './data/images';
import { IDataImages } from './interfaces/images';

const ImageContainer = styled.div`
  margin-bottom: 1.5rem;
  padding-top: ${(props: any) => (props.height / props.width) * 100 + '%'};
  position: relative;
  width: 100%;
  & > img {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const ImageGroup = styled.div`
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  padding: 0.75rem;
`;

const ImageWrapper = styled.div`
  display: flex;
  margin-left: -0.75rem;
  margin-right: -0.75rem;
  margin-top: -0.75rem;
  &:last-child {
    margin-bottom: -0.75rem;
  }
  &:not(:last-child) {
    margin-bottom: calc(1.5rem - #{0.75rem});
  }
`;

const App = () => {
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
    <>
      <Global
        styles={css`
          * {
            padding: 0;
            margin: 0;
          }
        `}
      />
      <ImageWrapper>
        {columns.map(column => (
          <ImageGroup>
            {column.map((item: any) => (
              <ImageContainer
                height={item.height}
                width={item.width}
                style={{
                  // Size image container to aspect ratio of image
                  paddingTop: (item.height / item.width) * 100 + '%'
                }}>
                <img src={item.image} alt="" />
              </ImageContainer>
            ))}
          </ImageGroup>
        ))}
      </ImageWrapper>
    </>
  );
};

export default App;
