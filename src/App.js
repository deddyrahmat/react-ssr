import React from 'react';
import {FacebookIcon, FacebookShareButton, WhatsappShareButton, WhatsappIcon} from 'react-share';
import {Helmet} from "react-helmet";
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <Helmet>
          <title>Testing Development SSR</title>
          <meta
              name="description"
              content="Pencarian Campaign di Gerakan Amal yang ingin dibantu"
              />
          <meta name="keywords" content="Search Campaign, Amanah Zakat, Tabungan Qurban, Wakaf ECO Produktif, Clean Water For Life, Siaga Kemanusiaan, Wakaf Pendidikan, Wakaf Al-Qur'an, Peduli Kesehatan " />
      </Helmet>
      <div className="App">
        <header className="App-header">
          <img src="./assets/img/avatar.jpg" className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          <FacebookShareButton 
              // url={`${basicURL}/main/campaign/detail/${slug}`}
              url="http://172.0.0.1:8080/"
              quote="Home WEB"
              hashtag="#GerakanAmal"
              // imageUrl="./assets/img/avatar.jpg"
              image="./assets/img/avatar.jpg"
          >
              <FacebookIcon iconFillColor="white" size={"2rem"} round={true}></FacebookIcon>
          </FacebookShareButton>

          <WhatsappShareButton 
              title="Testing Share Wa"
              separator=":: "
              url="http://172.0.0.1:8080/"
          >
              <WhatsappIcon iconFillColor="white" size={"2rem"} round={true} className="ml-1"></WhatsappIcon>
          </WhatsappShareButton>
        </header>
      </div>
    </>
  );
}

export default App;
