import styled from 'styled-components';

export const HomeStyled = styled.div`
  background-color: var(--grey-4);
  /* padding: 21px 13px; */

  height: auto;

  .container {
    max-width: 1000px;
    margin: 0 auto;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    position: sticky;

    border-bottom: 1px solid #212529;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 21px 13px;

      width: 100%;
    }

    button {
      background: #212529;
      border-radius: 4px;
    }
  }

  header {
    display: flex;
    gap: 10px;
    border-bottom: 1px solid #212529;

    div {
      width: 100%;
      max-width: 1200px;

      display: flex;
      flex-direction: column;
      gap: 10px;

      padding: 34px 13px;

      @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
      }
    }

    h2 {
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
      color: #f8f9fa;
    }

    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      color: #868e96;
    }
  }

  main {
    padding: 34px 13px;
    max-width: 1000px;
    margin: 0 auto;

    p {
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;

      margin-bottom: 23px;
      color: #f8f9fa;
    }

    span {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #ffffff;
    }
  }
`;
