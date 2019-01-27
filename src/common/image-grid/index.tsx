import styled, { StyledComponent } from '@emotion/styled';

export type paddingTop = {
  height: number;
  width: number;
};

export const ImageContainer = styled.div`
  margin-bottom: 1.5rem;
  padding-top: ${(props: paddingTop) =>
    (props.height / props.width) * 100 + '%'};
  position: relative;
  width: 100%;
  & > img {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const ImageGroup = styled.div`
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  padding: 0.75rem;
`;

export const ImageWrapper = styled.div`
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
