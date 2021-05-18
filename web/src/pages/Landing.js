import React, { useState, useEffect } from 'react';

import dashboard from '../images/dashboard.jpg';

import { Container, Dashboard, Info, TotalImages } from '../styles/components/Landing';
import Header from '../components/Header';
import Publish from '@material-ui/icons/Publish';
import api from '../services/api';

function Landing() {
  const [image, setImage] = useState(0);

  useEffect(() => {
    api.get(`category`).then(response => {
      setImage(response.data.image_show.length);
    });
  });

  return (
    <Container>
      <Header/>

      <Dashboard>
        <img src={dashboard} alt="Início" className="dashboard-image"/>

        <Info>
          <h1 className="title">Encontre as melhores fotos</h1>
          <h2 className="subtitle">Um banco de imagens para você expandir e consumir.</h2>
          <TotalImages>
            <Publish id="publish-icon"></Publish>
            <span className="text-complement">{image} imagens já publicadas</span>
          </TotalImages>
        </Info>
      </Dashboard>
    </Container>
  )
}

export default Landing;