import React, { useState } from "react";
import ParticlesBg from "particles-bg";
import "./App.css";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import TextLoop from "react-text-loop";
import Typist from "react-typist";

function App() {
  const config_cursor = {
    show: true,
    blink: true,
    element: "🔍",
    hideWhenDone: true,
  };

  const [darkmode, setdarkmode] = useState(false);

  return (
    <div>
      <div className={`card ${darkmode ? "dark" : ""}`}>
        <div
          className="toggle-btn"
          onClick={() => setdarkmode(!darkmode)}
        ></div>
        <div className="dark-mode"></div>
        <div className="card_body">
          <div className="profile text-center ">
            <img src="/wahyu.jpg" className="avatar" alt="avatar" />
            <div className="bg_content rd_12 p_8">
              <Typist cursor={config_cursor}>
                <span className="text-name">Sapurata Creative</span>
                <br />
                <br />
                Terima Jasa Pembuatan <br/> Website,<br/> Desain (logo, spanduk/banner,
                dll) <br/>& Instal Laptop, office.
              </Typist>
            </div>

            <div className="bg_content rd_12 p_8 mt-16">
              Familiar with{" "}
              <TextLoop interval={800}>
                <span className="higthlight">Laravel</span>
                <span className="higthlight">Codeigniter</span>
                <span className="higthlight">Html</span>
                <span className="higthlight">Css</span>
                <span className="higthlight">Mysql</span>
                <span className="higthlight">Pixel Lab</span>
                <span className="higthlight">PhotoShop</span>
                <span className="higthlight">Corel Draw</span>
                <span className="higthlight">Kinemaster</span>
              </TextLoop>
            </div>
            <div className="bg_content rd_12 p_8 mt-16">Follow Saya Pada <br/>Sosial Media di Bawah</div>
          </div>
          <div className="mt-16">
            <a className="btn_action bg_content" target="_blank" href="https://www.instagram.com/wahyu_m018/">
              <BsInstagram />
              <span>Instagram</span>
            </a>
          </div>
          <div className="mt-16">
            <a className="btn_action bg_content" target="_blank" href="https://web.facebook.com/profile.php?id=100014085392164">
              <BsFacebook />
              <span>Facebook</span>
            </a>
          </div>
          <div className="mt-16">
            <a className="btn_action bg_content" target="_blank" href="https://wahyusapurata.github.io/">
              <AiFillGithub/>
              <span>Profil Github</span>
            </a>
          </div>
        </div>
      </div>
      <ParticlesBg type="thick" bg={true} />
    </div>
  );
}

export default App;
