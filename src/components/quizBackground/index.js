import styled from 'styled-components'

const Background = styled.div`
  width: 100%;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  background-image: url('http://wallup.net/wp-content/uploads/2017/05/29/433387-ultra-wide-painting-fantasy_art.jpg'),
        radial-gradient(100% 60% ellipse at right top, #31319e 0%, rgba(243, 236, 236, 0) 100%),
        radial-gradient(60% 50% ellipse at center bottom, #29276e 0%, #12122e 100%);
  flex: 1;
  @media screen and (max-width: 500px) {
    background-image: url('http://wallup.net/wp-content/uploads/2017/05/29/433387-ultra-wide-painting-fantasy_art.jpg'),
      radial-gradient(100% 60% ellipse at right top, #31319e 0%, rgba(243, 236, 236, 0) 100%),
      radial-gradient(60% 50% ellipse at center bottom, #29276e 0%, #12122e 100%);;
    background-size: cover;
    &:after {
      content: "";
      background-size: cover;
      background-position: center;
      background-image:
        linear-gradient(transparent),
        url('http://wallup.net/wp-content/uploads/2017/05/29/433387-ultra-wide-painting-fantasy_art.jpg'),
        
      display: block;
      width: 100%;
      height: 150px;
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