import React, { useState, useEffect } from "react";
import axios from "axios";

function SocialContact() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/api/social").then((response) => {
      setData(response.data);
    });
  }, []);
  return (
    <div className="social-contact">
      {data &&
        data.map((item) => {
          return (
            <a href={item.link} target="blank" key={item.platform}>
              <div className="social-icon-div">
                <img
                  src={item.icon}
                  alt={item.platform}
                  className="social-icon"
                />
              </div>
            </a>
          );
        })}
    </div>
  );
}

export default SocialContact;
