import React from 'react';
import {FacebookIcon, FacebookShareButton, WhatsappShareButton, WhatsappIcon} from 'react-share';
import {Helmet} from "react-helmet";
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <Helmet>
        {/* <!-- HTML Meta Tags --> */}
        <title>Developer</title>
        <meta
          name="description"
          content="Articles, tips, and insights aimed at making you a world-class developer, designer, and beyond."
        />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemprop="name" content="Reed" />
        <meta
          itemprop="description"
          content="Articles, tips, and insights aimed at making you a world-class developer, designer, and beyond."
        />
        <meta
          itemprop="image"
          content="http://reedbarger.com/static/ca-styled-logo-5205dbb0983e1531d228c98584ab5711.png"
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://reactjsserver.herokuapp.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Reed" />
        <meta
          property="og:description"
          content="Articles, tips, and insights aimed at making you a world-class developer, designer, and beyond."
        />
        <meta
          property="og:image"
          content="./assets/img/avatar.jpg"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Reed" />
        <meta
          name="twitter:description"
          content="Articles, tips, and insights aimed at making you a world-class developer, designer, and beyond."
        />
        <meta
          name="twitter:image"
          content="./assets/img/avatar.jpg"
        />
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
              url="https://reactjsserver.herokuapp.com/"
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
              url="https://reactjsserver.herokuapp.com/"
          >
              <WhatsappIcon iconFillColor="white" size={"2rem"} round={true} className="ml-1"></WhatsappIcon>
          </WhatsappShareButton>
        </header>
      </div>
    </>
  );
}

export default App;
