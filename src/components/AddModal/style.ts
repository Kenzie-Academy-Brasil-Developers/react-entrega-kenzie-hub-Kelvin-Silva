import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100vh;
  z-index: 101;

  .overlay {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100vh;

    background: rgba(18, 18, 20, 0.5);
  }

  .box {
    width: 100%;
    max-width: 369px;
    position: relative;
    padding: 20px;
  }

  .title__box {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 14px 16px;

    background: #343b41;
    border-radius: 3px 3px 0px 0px;

    h2 {
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      color: #f8f9fa;
    }

    button {
      color: #868e96;
      font-weight: 600;
      font-size: 16px;
    }
  }

  form {
    display: flex;
    flex-direction: column;

    background: #212529;
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    border-radius: 3.20867px;

    padding: 19px 17px 25px 17px;

    label {
      color: #f8f9fa;

      font-weight: 400;
      font-size: 10px;

      margin-bottom: 18px;
    }

    input {
      margin-bottom: 17px;
      font-size: 16px;
      padding: 8px 13px;
      height: 38px;
    }

    select {
      font-size: 16px;
      margin-bottom: 17px;
    }
  }
`;
