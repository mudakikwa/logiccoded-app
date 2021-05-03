import React from 'react';

import './index.scss';

import Activity from './src/activity.svg';
import Cloud from './src/cloud.svg';
import Grid from './src/grid.svg';
import Heart from './src/heart.svg';
import PlusCircle from './src/plus-circle.svg';
import Send from './src/send.svg';
import ProfileImg from './src/profile.jpg';

export default function SideBar() {
  return (
    <div className="col-md-1 px-0" id="sidebar">
      <div className="all-elements">
        <div className="row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <g id="plus-circle" transform="translate(-1 -1)">
              <path
                id="Path_69"
                data-name="Path 69"
                d="M15,0A15,15,0,1,1,0,15,15,15,0,0,1,15,0Z"
                transform="translate(2 2)"
                fill="none"
                stroke="#d2ded2"
                strokeLinecap="round"
                strokeWidth="2"
              />
              <path
                id="Path_71"
                data-name="Path 71"
                d="M0,0V8"
                transform="translate(17 13)"
                fill="none"
                stroke="#d2ded2"
                strokeLinecap="round"
                strokeWidth="2"
              />
              <path
                id="Path_70"
                data-name="Path 70"
                d="M0,0H8"
                transform="translate(13 17)"
                fill="none"
                stroke="#d2ded2"
                strokeLinecap="round"
                strokeWidth="2"
              />
            </g>
          </svg>
        </div>
        <div className="row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32.001"
            viewBox="0 0 32 32.001"
          >
            <g id="grid" transform="translate(-2 -2)">
              <path
                id="Union_1"
                data-name="Union 1"
                d="M-2027.667-1444v-11.667H-2016V-1444Zm-18.333,0v-11.667h11.667V-1444Zm18.333-18.334V-1474H-2016v11.667Zm-18.333,0V-1474h11.667v11.667Z"
                transform="translate(2049 1477)"
                fill="rgba(0,0,0,0)"
                stroke="#d2ded2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </g>
          </svg>
        </div>
        <div className="row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34.333"
            height="31"
            viewBox="0 0 34.333 31"
          >
            <path
              id="activity"
              d="M35.333,18H28.667l-5,15-10-30-5,15H2"
              transform="translate(-1.5 -2.5)"
              fill="none"
              stroke="#D2DED2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35.396"
            height="31"
            viewBox="0 0 35.396 31"
          >
            <path
              id="heart"
              d="M33.292,5.65a9.05,9.05,0,0,0-12.8,0L18.746,7.395,17,5.65a9.052,9.052,0,0,0-12.8,12.8L5.944,20.2,18.746,33l12.8-12.8,1.744-1.744a9.05,9.05,0,0,0,0-12.8Z"
              transform="translate(-1.049 -2.498)"
              fill="none"
              stroke="#D2DED2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <g id="plus-circle" transform="translate(-1 -1)">
              <path
                id="Path_69"
                data-name="Path 69"
                d="M15,0A15,15,0,1,1,0,15,15,15,0,0,1,15,0Z"
                transform="translate(2 2)"
                fill="none"
                stroke="#d2ded2"
                strokeLinecap="round"
                strokeWidth="2"
              />
              <path
                id="Path_71"
                data-name="Path 71"
                d="M0,0V8"
                transform="translate(17 13)"
                fill="none"
                stroke="#d2ded2"
                strokeLinecap="round"
                strokeWidth="2"
              />
              <path
                id="Path_70"
                data-name="Path 70"
                d="M0,0H8"
                transform="translate(13 17)"
                fill="none"
                stroke="#d2ded2"
                strokeLinecap="round"
                strokeWidth="2"
              />
            </g>
          </svg>
        </div>
        <div className="row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35.396"
            height="31"
            viewBox="0 0 35.396 31"
          >
            <path
              id="heart"
              d="M33.292,5.65a9.05,9.05,0,0,0-12.8,0L18.746,7.395,17,5.65a9.052,9.052,0,0,0-12.8,12.8L5.944,20.2,18.746,33l12.8-12.8,1.744-1.744a9.05,9.05,0,0,0,0-12.8Z"
              transform="translate(-1.049 -2.498)"
              fill="none"
              stroke="#D2DED2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="row">
          <h6 className="px-0 mx-0">Nikita Belov</h6>
        </div>
        <div className="row">
          <div
            className="rounded-circle profile-image"
            style={{ backgroundImage: `url("${ProfileImg}")` }}
          />
        </div>
      </div>
    </div>
  );
}