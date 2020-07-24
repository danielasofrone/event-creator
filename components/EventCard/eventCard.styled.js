import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: ${({ isGrid }) => (isGrid ? "296px" : "auto")};
  border-radius: 2px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.11);
  background-color: #ffffff;
  float: left;
  padding: ${({ isGrid }) => (isGrid ? "32px" : "20px")};
  display: ${({ isGrid }) => (isGrid ? "flex" : "grid")};
  justify-content: space-between;
  flex-direction: ${({ isGrid }) => (isGrid ? "column" : "row")};
  grid-template-columns: 1fr 200px;
`;

export const TopContainer = styled.div`
  width: 100%;
  display: ${({ isGrid }) => (isGrid ? "block" : "grid")};
  grid-template-columns: 1fr 1fr 120px 200px;
  column-gap: 10px;
`;

export const BottomContainer = styled.div`
  width: 100%;
  display: ${({ isGrid }) => (isGrid ? "flex" : "grid")};
  justify-content: space-between;
  grid-template-columns: repeat(2, 1fr);
`;

export const AttendeesCount = styled.div`
  font-size: ${({ theme: { px2rem } }) => px2rem(14)};
  color: #cacdd0;
  line-height: 1.71;

  img {
    margin-right: 8px;
  }

  ${({ isGrid }) =>
    !isGrid &&
    `
    display: flex;
    align-items: center;
  `};
`;

export const EventTitle = styled.h1`
  width: 100%;
  float: left;
  margin: ${({ isGrid }) => (isGrid ? "0 0 10px 0" : 0)};
  font-size: ${({ isGrid, theme: { px2rem } }) => px2rem(isGrid ? 22 : 18)};
  color: #323c46;
  line-height: ${({ isGrid }) => (isGrid ? "2.18" : "1.5")};
  font-weight: normal;
  order: 1;

  ${({ isGrid }) =>
    !isGrid &&
    `
    display: flex;
    align-items: center;
  `};
`;

export const EventDescription = styled.div`
  width: 100%;
  float: left;
  margin: ${({ isGrid }) => (isGrid ? "32px 0" : 0)};
  font-size: ${({ theme: { px2rem } }) => px2rem(16)};
  color: #949ea8;
  line-height: 1.5;
  order: 2;

  ${({ isGrid }) =>
    !isGrid &&
    `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 2;
  `};
`;

export const EventDate = styled.div`
  width: 100%;
  float: left;
  margin-bottom: ${({ isGrid }) => (isGrid ? "10px" : 0)};
  font-size: ${({ theme: { px2rem } }) => px2rem(14)};
  color: #cacdd0;
  line-height: 1.71;
  order: 4;

  ${({ isGrid }) =>
    !isGrid &&
    `
    display: flex;
    align-items: center;
  `};
`;

export const EventAuthor = styled(EventDate)`
  color: #7d7878;
  margin-top: ${({ isGrid }) => (isGrid ? "-15px" : 0)};
  margin-bottom: 0;
  order: 3;
  font-size: ${({ theme: { px2rem } }) => px2rem(14)};

  ${({ isGrid }) =>
    !isGrid &&
    `
    display: flex;
    align-items: center;
  `};
`;
