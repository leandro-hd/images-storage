import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import store from '../images/store.jpg';

import { Container, Store, StoreText } from '../styles/components/Store';
import Header from '../components/Header';
import Add from '@material-ui/icons/Add';
import api from '../services/api';

function Landing() {
  const history = useHistory();
  const [category, setCategory] = useState('');
  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  function handleSelectImages(event) {
    if (!event.target.files) {
      return;
    }

    const selectedImages = Array.from(event.target.files);

    setImages(selectedImages);

    const selectedImagesPreview = selectedImages.map(image => {
      return URL.createObjectURL(image);
    });

    setPreviewImages(selectedImagesPreview);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData();

    data.append('category', category);

    images.forEach(image => {
      data.append('images', image);
    });

    await api.post('category', data);

    alert('Cadastro realizado com sucesso!');

    history.push('/');
  }

  return (
    <Container>
      <Header/>

      <Store>
        <StoreText>
          <h1 className="title">Ficamos felizes por você contribuir conosco!</h1>

          <h2 className="subtitle">Para publicar uma imagem, basta preencher os campos abaixo.</h2>

          <form onSubmit={handleSubmit} className="form">
            <div className="input-category">
              <label htmlFor="category">Categoria:</label>

              <input id="category" value={category} onChange={event => setCategory(event.target.value)} placeholder="Digite uma categoria..."/>
            </div>

            <div className="input-images">
              <label htmlFor="images">Imagem:</label>

              <div className="images-container">
                {previewImages.map(image => (
                  <img key={image} src={image} />
                ))}

                <label htmlFor="image[]" className="new-image">
                  <Add className="plus-icon" />
                </label>
              </div>

              <input multiple onChange={handleSelectImages} type="file" id="image[]"/>
            </div>          
            <button className="button" type="submit">Enviar</button>
          </form>
        </StoreText>

        <img src={store} className="store-image"/>
      </Store>
    </Container>
  )
}

export default Landing;