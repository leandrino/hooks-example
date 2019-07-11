import styled from "@emotion/styled";

export const AppBarWrapper = styled.header`
  align-items: center;
  background-color: #222831;
  color: #f1c40f;
  display: flex;
  justify-content: space-between;
  min-height: 60px;
  padding: 0 22px 0 0;
  width: 100%;
  & a {
    color: #0e956f;
    &:hover {
      color: #efbb35;
    }
  }
`;

export const AppBarButton = styled.button`
  background-color: #f1c40f;
  border: 0;
  color: #34495e;
  height: 60px;
  min-width: 75px;
`;
