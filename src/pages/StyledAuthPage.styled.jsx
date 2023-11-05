import styled from '@emotion/styled';

export const StyledAuthPage = styled.div`
  .auth-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    label {
      font-size: 16px;
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      gap: 4px;

      input {
        font-size: 12px;
        line-height: 1.5;
        border-radius: 5px;
        border: none;
        background-color: #a6c9ec;
        padding-left: 16px;
        width: 200px;
      }
    }
    button {
      width: fit-content;
      padding: 8px 16px;
      background-color: #589ee4;
      border-radius: 10px;
      border: none;
      margin-bottom: 32px;
      font-size: 20px;
      text-decoration: none;
      font-weight: 500;
      color: #fff;
    }
  }
`;
