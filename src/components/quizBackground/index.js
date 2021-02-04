import styled from 'styled-components'

const Background = styled.div`
    width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url('https://i.pinimg.com/originals/d8/50/a9/d850a9b8e89bff51e264ab379f2ae3ee.png');
  background-color: rgba(0, 0, 0, .3);
  flex: 1;
  @media screen and (max-width: 500px) {
    background-image: none;
    &:after {
      content: "";
      background-size: cover;
    background-position: center;
      background-image:
        linear-gradient(transparent),
        url('https://i.pinimg.com/originals/d8/50/a9/d850a9b8e89bff51e264ab379f2ae3ee.png');
      display: block;
      width: 100%;
      height: 210px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
    *:first-child {
      position: relative;
      z-index: 10;
    }
  }
`;

export default Background