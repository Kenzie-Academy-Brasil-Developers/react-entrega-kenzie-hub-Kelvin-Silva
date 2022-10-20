import styled from 'styled-components';

export const ContainerStyled = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  width: 100%;
  max-width: 369px;
  height: 100vh;

  padding: 12px;
  margin: 0 auto;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    a {
      background: #212529;
      border-radius: 4px;
      padding: 10px 23px;
      border-radius: 4px;
      border: 1px solid transparent;

      font-size: 16px;
      color: var(--white);

      &:hover {
        background-color: var(--grey-2);
      }
    }
  }
`;
