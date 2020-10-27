import React from "react";
import IconWrapper from './styles';

function Phone() {
  return (
      <IconWrapper>
        <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        enableBackground="new 0 0 512 512"
        version="1.1"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
        >
        <path d="M352 0H160c-35.296 0-64 28.704-64 64v384c0 35.296 28.704 64 64 64h192c35.296 0 64-28.704 64-64V64c0-35.296-28.704-64-64-64zM208 32h96c8.832 0 16 7.168 16 16s-7.168 16-16 16h-96c-8.832 0-16-7.168-16-16s7.168-16 16-16zm-16 416h-32v-32h32v32zm0-64h-32v-32h32v32zm80 64h-32v-32h32v32zm0-64h-32v-32h32v32zm80 64h-32v-32h32v32zm0-64h-32v-32h32v32zm32-96H128V96h256v192z"></path>
        </svg>
      </IconWrapper>
  );
}

export default Phone;
