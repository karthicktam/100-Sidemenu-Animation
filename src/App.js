import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

export default function App() {
  const [toggleContent, setToggleContent] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const showHandler = () => {
    setToggleContent(!toggleContent);
    setToggleSidebar(!toggleSidebar);
  };

  const sidebarArr = ["Home", "About", "Blog", "Shop", "Contact Us"];

  const imageUrlArr = [
    "https://images.unsplash.com/photo-1504215680853-026ed2a45def?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
    "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
    "https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
  ];

  return (
    <div className="App">
      <div className={toggleSidebar ? "sidebar active" : "sidebar"}>
        <ul>
          {sidebarArr.map((el) => (
            <li key={el}>
              <span>{el}</span>
            </li>
          ))}
        </ul>
        <button className="menu" onClick={showHandler}>
          <FontAwesomeIcon className="times" icon={faTimes} />
          <FontAwesomeIcon className="bars" icon={faBars} />
        </button>
      </div>

      <div className={toggleContent ? "content active" : "content"}>
        <div className="container">
          <h1>Blog Post About Cars</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio iusto
            hic, odit ea culpa quae repudiandae? Sed odio reprehenderit animi
            corrupti! Cumque temporibus inventore similique quibusdam labore vel
            dolor quisquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur tenetur impedit sunt eaque? Ex, fugit exercitationem! Ad
            saepe tempora corporis hic nam rem sunt amet soluta veritatis, nobis
            quisquam expedita mollitia ipsa odio deserunt ex? Ipsam voluptatem
            doloribus placeat est veniam vitae, veritatis distinctio, eligendi
            nobis quia, esse numquam. Maiores.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            impedit omnis incidunt rem voluptatem repudiandae hic! Corrupti est
            blanditiis recusandae! Provident conseTempora!
          </p>

          <h3>
            Now these are some nice cars!{" "}
            <span role="img" aria-label="">
              🤩
            </span>
          </h3>

          {imageUrlArr.map((el) => (
            <img src={el} alt="" key={el} />
          ))}
        </div>
      </div>
    </div>
  );
}
