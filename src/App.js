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
    <>
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
                Hi, SapurataCreative <br /> Front End Developer & Back End
                Developer (Full Stack Development)
                <br /> I'm from Gowa and I have been focus learning programming
                since 2020. If you want ask something about me, just contact me
                on my social media bellow.
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
                <span className="higthlight">React Js</span>
                <span className="higthlight">NodeJs</span>
                <span className="higthlight">Github</span>
                <span className="higthlight">Git</span>
                <span className="higthlight">Sass</span>
                <span className="higthlight">Tailwindcss</span>
                <span className="higthlight">Postgresql</span>
                <span className="higthlight">Mongodb</span>
                <span className="higthlight">JavaScript</span>
                <span className="higthlight">Php</span>
                <span className="higthlight">Bootstrap</span>
                <span className="higthlight">Npm</span>
                <span className="higthlight">Webpack</span>
                <span className="higthlight">Svelte</span>
                <span className="higthlight">Figma</span>
              </TextLoop>
            </div>
            <div className="bg_content rd_12 p_8 mt-16">
              Follow Saya Pada <br />
              Sosial Media di Bawah
            </div>
          </div>
          <div className="mt-16">
            <a
              className="btn_action bg_content"
              target="_blank"
              href="https://www.instagram.com/wahyu_m018/"
            >
              <BsInstagram />
              <span>Instagram</span>
            </a>
          </div>
          <div className="mt-16">
            <a
              className="btn_action bg_content"
              target="_blank"
              href="https://web.facebook.com/profile.php?id=100014085392164"
            >
              <BsFacebook />
              <span>Facebook</span>
            </a>
          </div>
          <div className="mt-16">
            <a
              className="btn_action bg_content"
              target="_blank"
              href="https://github.com/Wahyusapurata"
            >
              <AiFillGithub />
              <span>Github</span>
            </a>
          </div>
          <div>
            <div className="bg_content bg-style rd_12 p_8 mt-16">
              My Project
            </div>
            <div className="bg_content rd_12 p_8 mt-16">
              Portfolio with Html and Bootstrap v.5 <br />{" "}
              <img src="/wahyu1.png" className="gambar" alt="avatar" />{" "}
            </div>
            <div className="mt-5 text-center">
              <a
                className="btn_action bg_content bg-text"
                target="_blank"
                href="https://wahyusapurata.github.io/Portofolio-bootstrap-v5/"
              >
                <span>View Website</span>
              </a>
            </div>
            <div className="bg_content rd_12 p_8 mt-16">
              Portofolio with Java Script adnd Bootstrap v.5 <br />{" "}
              <img src="/wahyu2.png" className="gambar" alt="avatar" />
            </div>
            <div className="mt-5 text-center">
              <a
                className="btn_action bg_content bg-text"
                target="_blank"
                href="https://my-portfolio-ba2eb.web.app/"
              >
                <span>View Website</span>
              </a>
            </div>
            <div className="bg_content rd_12 p_8 mt-16">
              Profil Desa with Framework Codigniter <br />{" "}
              <img src="/wahyu3.png" className="gambar" alt="avatar" />{" "}
            </div>
            <div className="mt-5 text-center">
              <a
                className="btn_action bg_content bg-text"
                target="_blank"
                href="https://desalengkong.id/"
              >
                <span>View Website</span>
              </a>
            </div>
            <div className="bg_content rd_12 p_8 mt-16">
              Website Marketplace Jagung with Framework Codeignite <br />{" "}
              <img src="/wahyu4.png" className="gambar" alt="avatar" />{" "}
            </div>
            <div className="mt-5 text-center">
              <a
                className="btn_action bg_content bg-text"
                target="_blank"
                href="https://superiorcorn.id/"
              >
                <span>View Website</span>
              </a>
            </div>
            <div className="bg_content rd_12 p_8 mt-16">
              Website Pengelolaan Data Masjid with Codeigniter <br />{" "}
              <img src="/wahyu5.png" className="gambar" alt="avatar" />{" "}
            </div>
            <div className="mt-5 text-center">
              <a
                className="btn_action bg_content bg-text"
                target="_blank"
                href="https://banii.id/"
              >
                <span>View Website</span>
              </a>
            </div>
            <div className="bg_content rd_12 p_8 mt-16">
              Website Portfolio Fish with Html adn Bootstrap <br />{" "}
              <img
                src="/landing-ada-ikan.png"
                className="gambar"
                alt="avatar"
              />{" "}
            </div>
            <div className="mt-5 text-center">
              <a
                className="btn_action bg_content bg-text"
                target="_blank"
                href="https://landing-ada-ikan.web.app/"
              >
                <span>View Website</span>
              </a>
            </div>
            <div className="bg_content rd_12 p_8 mt-16">
              System Website with ArchJs <br />{" "}
              <img src="/foodhunt.png" className="gambar" alt="avatar" />{" "}
            </div>
            <div className="mt-5 text-center">
              <a
                className="btn_action bg_content bg-text"
                target="_blank"
                href="https://foodhunt1.netlify.app/home"
              >
                <span>View Website</span>
              </a>
            </div>
            <div className="bg_content rd_12 p_8 mt-16">
              System Website with Java Script and Html <br />{" "}
              <img src="/footbal-league.png" className="gambar" alt="avatar" />{" "}
            </div>
            <div className="mt-5 text-center">
              <a
                className="btn_action bg_content bg-text"
                target="_blank"
                href="https://football-league-1.web.app/"
              >
                <span>View Website</span>
              </a>
            </div>
            <div className="bg_content rd_12 p_8 mt-16">
              System Website with Java Script and Html <br />{" "}
              <img src="/clash-royale.png" className="gambar" alt="avatar" />{" "}
            </div>
            <div className="mt-5 text-center">
              <a
                className="btn_action bg_content bg-text"
                target="_blank"
                href="https://clash-royale-guides.web.app/"
              >
                <span>View Website</span>
              </a>
            </div>
            <div className="bg_content rd_12 p_8 mt-16">
              System Website with Web Component <br />{" "}
              <img src="/game-search.png" className="gambar" alt="avatar" />{" "}
            </div>
            <div className="mt-5 text-center">
              <a
                className="btn_action bg_content bg-text"
                target="_blank"
                href="https://game-searching.web.app/"
              >
                <span>View Website</span>
              </a>
            </div>
          </div>
          <div className="bg_content bg-style rd_12 p_8 mt-16">Tools</div>
          <div className="svg-image">
            <img src="/icon/html.svg" alt="html"></img>
            <img src="/icon/css.svg" alt="html"></img>
            <img src="/icon/bootstrap.svg" alt="html"></img>
            <img src="/icon/github.svg" alt="html"></img>
            <img src="/icon/git.svg" alt="html"></img>
            <img src="/icon/php.svg" alt="html"></img>
            <img src="/icon/javascript.svg" alt="html"></img>
            <img src="/icon/codeigniter.svg" alt="html"></img>
            <img src="/icon/laravel.svg" alt="html"></img>
            <img src="/icon/react.svg" alt="html"></img>
            <img src="/icon/node-dot-js.svg" alt="html"></img>
            <img src="/icon/svelte.svg" alt="html"></img>
            <img src="/icon/typescript.svg" alt="html"></img>
            <img src="/icon/tailwindcss.svg" alt="html"></img>
            <img src="/icon/figma.svg" alt="html"></img>
            <img src="/icon/sass.svg" alt="html"></img>
            <img src="/icon/webpack.svg" alt="html"></img>
            <img src="/icon/mongodb.svg" alt="html"></img>
            <img src="/icon/django.svg" alt="html"></img>
            <img src="/icon/mysql.svg" alt="html"></img>
            <img src="/icon/npm.svg" alt="html"></img>
          </div>
        </div>
        <h3 className="foother">SapurataCreative © 2022</h3>
      </div>
      <ParticlesBg type="thick" bg={true} />
    </>
  );
}

export default App;
