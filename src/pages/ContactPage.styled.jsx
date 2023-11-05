import styled from '@emotion/styled';

export const StyledContactPage = styled.div`
      display: flex;
  flex-direction: column;
  text-align: center;

  width: 500px;
  h1{
      margin-bottom: 16px;
  }
  .sections {
    display: flex;
    justify-content: space-between;
    .add-contact {
      form {
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
          font-size: 16px;
          font-weight: 500;
          padding: 8px 16px;
          background-color: #589ee4;
          border-radius: 10px;
          border: none;
          margin-bottom: 32px;
          color: #ffffff;
            font-weight: 500;   
        }
      }
    }
    .contacts {
      width: 250px;

      ul {
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 8px;
        li {
          background-color: #589ee4;
          border: 2px solid #a6c9ec;
          border-radius: 5px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 16px;
          .contact-data {
            text-align: center;
            text-decoration: none;
            color: #ffffff;
            font-weight: 500;
          }
          button{
            border: none;
            background-color: transparent;
            color: #db4949;
            font-size: 16px
        }

        }
      }
    }
  }
`;
