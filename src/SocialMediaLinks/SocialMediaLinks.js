import React from 'react';
import "./SocialMediaLinks.css";
import { Fa } from "mdbreact";

const SocialMediaLinks = ()=>{
    return(
        <div className="card-social-links">
          <ul className="social-links">
            <li className="list-inline-item">
              <a className="p-2 fa-lg fb-ic link">
                <Fa icon="facebook" />
              </a>
            </li>
            <li className="list-inline-item">
              <a className="p-2 fa-lg tw-ic link">
                <Fa icon="twitter" />
              </a>
            </li>
            <li className="list-inline-item">
              <a className="p-2 fa-lg gplus-ic link">
                <Fa icon="google-plus" />
              </a>
            </li>
            <li className="list-inline-item">
              <a className="p-2 fa-lg li-ic link">
                <Fa icon="linkedin" />
              </a>
            </li>
          </ul>
        </div>
    )
}

export default SocialMediaLinks;