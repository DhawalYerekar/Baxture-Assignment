import React from "react";
import "../Styles/Components/UserCard.css";
// import AvatarImg from '../Assets/avatar.svg';
import AvatarImg from '../Assets/avatar.png'
import {IconAt } from '@tabler/icons-react';
import {IconPhoneCall } from '@tabler/icons-react';
import {IconWorld } from '@tabler/icons-react';
import {IconUserPlus} from '@tabler/icons-react';
import {IconTrash } from '@tabler/icons-react';





const UserCard = (props) => {
  return (
    <div className="card">
      <div className="img-container">
        <img src={AvatarImg} alt="" />
      </div>
      {/* <h3>Leanne Graham</h3> */}
      <h3>{props.userData.name}</h3>
      <div className="user-info-container">
        <span>
          <p><IconAt stroke={1} size={15}/></p> <a href="_blank">{props.userData.email}</a>
        </span>
        <span>
          <p><IconPhoneCall stroke={1} size={15}/></p> <a href="_blank">{props.userData.phone}</a>
        </span>
        <span>
          <p><IconWorld stroke={1} size={15}/></p> <a href="_blank">{props.userData.website}</a>
        </span>
      </div>
      <div className="btn-container">
        <button className="btn-type-1"><IconUserPlus stroke={2} size={15}/>&nbsp;Follow</button>
        <button className="btn-type-2"><IconTrash stroke={2} size={15}/>&nbsp;Delete</button>
      </div>
    </div>
  );
};

export default UserCard;


