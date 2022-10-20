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
    display: flex;

    section {
      display: flex;
      width: 100%;
      flex-direction: column;

      button {
        background: #212529;
        border-radius: 4px;
        color: #ffffff;

        padding: 10px 10px 6px 10px;
      }
    }

    div {
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: center;
    }

    h3 {
      font-weight: 600;
      font-size: 20px;
      line-height: 18px;
      color: #f8f9fa;
    }

    ul {
      display: flex;
      flex-direction: column;
      background: #212529;
      border-radius: 4px;
      padding: 22px 8px;
      margin-top: 21px;
      gap: 10px;
    }

    li {
      background: #121214;
      border-radius: 4px;
      padding: 12px;

      display: flex;
      justify-content: space-between;
      width: 100%;

      div {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
      }

      span {
        font-weight: 400;
        font-size: 12px;
        line-height: 22px;
        color: #868e96;
      }

      button {
        background-color: transparent;
        padding: 0;
      }
    }

    h4 {
      font-weight: 700;
      font-size: 14px;
      line-height: 24px;
      color: #f8f9fa;
      white-space: nowrap;
    }
  }

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
`;
