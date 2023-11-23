import img2 from "../images/12.jpg";
import img3 from "../images/14.jpg";
import img4 from "../images/15.jpg";
import img5 from "../images/16.jpg";
import img1 from "../images/17.jpg";

import "./MyProjects.css";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const myProject = [
  {
    id: 1,
    category: "html",
    using: "html-css",
    imgSrc: img1,
    linkGithub: "https://github.com/nehru-gamal/El-zero-tutorials-1",
    linkPage: "https://nehru-gamal.github.io/El-zero-tutorials-1/",
    header: "tutorials-1",
    title:
      "A training project on the features of CSS and HTML without using frameworks (project One)",
  },
  {
    id: 2,
    category: "html",
    using: "html-css",
    imgSrc: img2,
    linkGithub: "https://github.com/nehru-gamal/El-zero-tutorials-2",
    linkPage: "https://nehru-gamal.github.io/El-zero-tutorials-2/",
    header: "tutorials-2",
    title:
      "A training project on the features of CSS and HTML without using frameworks (project two)",
  },
  {
    id: 3,
    category: "js",
    using: "html-css-js",
    imgSrc: img3,
    linkGithub: "https://github.com/nehru-gamal/Slider-html-css-js",
    linkPage: "https://nehru-gamal.github.io/Slider-html-css-js/",
    header: "Slider",
    title: "A training project on using js",
  },
  {
    id: 4,
    category: "js",
    using: "html-css-js",
    imgSrc: img5,
    linkGithub: "https://github.com/nehru-gamal/TO-DO-html-css-js-",
    linkPage: "https://nehru-gamal.github.io/TO-DO-html-css-js-/",
    header: "TO-DO-List",
    title: "A training project on using js and dealing with localStorag",
  },
  {
    id: 5,
    category: "js",
    using: "html-css-js",
    imgSrc: img4,
    linkGithub: "https://github.com/nehru-gamal/hungman",
    linkPage: "https://nehru-gamal.github.io/hungman/",
    header: "hungman game js",
    title:
      "The Hangman game was an exercise in using JS features and dealing with functions's",
  },
  {
    id: 6,
    category: "js",
    using: "html-css-js",
    imgSrc: img1,
    linkGithub: "https://github.com/nehru-gamal/memory-game",
    linkPage: "https://nehru-gamal.github.io/memory-game/",
    header: "memory game js",
    title:
      "The Hangman game was an exercise in using JS features and dealing with functions's",
  },
  {
    id: 7,
    category: "js",
    using: "html-css-js",
    imgSrc: img3,
    linkGithub: "https://github.com/nehru-gamal/Local-Storage",
    linkPage: "https://nehru-gamal.github.io/Local-Storage/",
    header: "Local Storage use js",
    title: "A training project on using js and dealing with localStorag",
  },

  {
    id: 8,
    category: "js",
    using: "html-css-js",
    imgSrc: img2,
    linkGithub: "https://github.com/nehru-gamal/To-Do-List",
    linkPage: "https://nehru-gamal.github.io/To-Do-List/",
    header: "To-Do-List ( js )",
    title:
      "The to-do-list project was an exercise in using JS features, dealing with functions's, and storing data in localStorag.",
  },
  {
    id: 9,
    category: "react",
    using: "react",
    imgSrc: img4,
    linkGithub: "https://github.com/nehru-gamal/todo-react",
    linkPage: "https://nehru-gamal.github.io/todo-react/",
    header: "To-Do-List ( react )",
    title:
      "The to-do-list project was an exercise in using the React framework and dealing with hoks such as (useState, useEffect) and storing data in localStorag.",
  },
  {
    id: 10,
    category: "react",
    using: "react",
    imgSrc: img5,
    linkGithub: "https://github.com/nehru-gamal/movie-app",
    linkPage: "https://nehru-gamal.github.io/movie-app/",
    header: "react-movie-app",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, nam.",
  },
  {
    id: 11,
    category: "react",
    using: "react",
    imgSrc: img1,
    linkGithub: "https://github.com/nehru-gamal/rest-app",
    linkPage: "https://nehru-gamal.github.io/rest-app/",
    header: "rest-react-app",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, nam.",
  },
];

export const MyProjects = () => {
  return (
    <div className="projects">
      <div className="container">
        <h2>ALL MY ProJects</h2>

        <div className="row">
          {myProject.map((item) => {
            return (
              <div key={item.id} className="col-md-6 col-lg-4">
                <div className="card">
                  <img src={item.imgSrc} className="card-img-top" alt="" />
                  <div className="card-body">
                    <h3 className="card-title">{item.header}</h3>
                    <h5 className="card-title">Using: ({item.using})</h5>
                    <p className="card-text">{item.title}</p>

                    <div className=" links d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center justify-content-between">
                        <a
                          className="d-flex gap-2 align-items-center justify-content-between"
                          href={item.linkGithub}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon icon={faGithub} />
                          <span>Github</span>
                        </a>
                      </div>

                      <div className="more">
                        <a
                          className="d-flex gap-2 align-items-center justify-content-between"
                          href={item.linkPage}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span>Vist</span>
                          <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
