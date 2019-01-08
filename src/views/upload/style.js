import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;

  > div {
    display: flex;
    width: 50%;
    height: 100%;
  }
`;

export const CodeBlock = styled.div`
  position: relative;
  background-color: #fff;
  margin: 40px;
  box-shadow: 0 30px 30px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transform: rotate3d(0.5, 0.866, 0, 15deg) rotate(-1deg);

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100px;
    left: 0;
    bottom: 0;
    background-image: linear-gradient(to bottom, rgba(255, 0, 0, 0), #fff);
  }

  .CodeBlock-header {
    display: flex;
    padding: 10px 30px;
    background-color: #fafafa;
  }

  .CodeBlock-content {
    display: flex;
  }

  .CodeBlock-header-title {
    background-color: #2d4ef5;
    border-radius: 3px;
    padding: 14px 28px;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
    box-shadow: 0 10px 30px 0 rgba(45, 78, 245, 0.5);
  }

  pre {
    background-color: #fff !important;
    margin: 0;
    white-space: pre-wrap;
  }

  code {
    font-size: 10px;
  }
`;
