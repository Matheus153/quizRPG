import styled from 'styled-components'

const Background = styled.div`
  width: 100%;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  background-image: url(${({backgroundImage}) => backgroundImage});
  background-color: ${({ theme }) => theme.colors.mainBg};
  flex: 1;
  @media screen and (max-width: 500px) {
    background-image: url('http://lojasaraiva.vteximg.com.br/arquivos/ids/31735574/1011019409.jpg?v=637441414163270000');
    background-color: ${({ theme }) => theme.colors.mainBg};
    &:after {
      content: "";
      background-size: cover;
      background-position: center;
      background-image:
        linear-gradient(transparent),
        url('http://lojasaraiva.vteximg.com.br/arquivos/ids/31735574/1011019409.jpg?v=637441414163270000');
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