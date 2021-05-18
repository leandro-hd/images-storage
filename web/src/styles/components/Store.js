import styled from 'styled-components';

export const Container = styled.div`
`;

export const Store = styled.div`
  display: flex;

  .store-image {
    margin: 68px 128px 0 auto;
    border: 1px solid #000000;
    border-radius: 16px;
    box-sizing: border-box;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    mix-blend-mode: lighten;
  }
  
`;

export const StoreText = styled.div`
  margin: 68px 0 0 128px;
  display: block;

  .title {
    font-size: 32px;
    font-weight: 700;
    color: #E1E1E6;
  }

  .subtitle {
    font-size: 20px;
    font-weight: 700;
    margin-top: 6px;
    color: #A8A8B3;
  }

  .form {
    margin-top: 67px;
  }

  .input-category label {
    font-size: 24px;
    font-weight: 400;
    margin-right: 16px;
    color: #E1E1E6;
  }

  #category {
    background: #202024;
    font-size: 18px;
    font-weight: 400;
    width: 454px;
    height: 48px;
    border: 1px solid #202024;
    border-radius: 8px;
    padding-left: 15px;
    color: #A8A8B3;
  }

  .input-images {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 16px;
    margin-top: 49px;
  }

  .input-images label {
    font-size: 24px;
    font-weight: 400;
    margin-right: -4px;
    color: #E1E1E6;
  }

  .images-container img {
    width: 128px;
    height: 128px;
    object-fit: cover;
    margin-bottom: 16px;
    border-radius: 16px;
  }

  .images-container label {
    background: #202024;
    width: 128px;
    height: 128px;
    border: 2px dashed #A8A8B3;
    border-radius: 16px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .plus-icon {
    width: 64px;
    height: 64px;
    color: #A8A8B3; 
  }

  .input-images input {
    display: none;
  }

  .button {
    background: #8257E6;
    font-size: 20px;
    font-weight: 400;
    width: 196px;
    height: 48px;
    margin: 80px 0 27px;
    border: 1px solid #8257E6;
    border-radius: 8px;
    text-align: center;
    color: #E1E1E6;
    cursor: pointer;
  } 
`;