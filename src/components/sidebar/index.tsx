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
              strokeWidth="1"
            />
          </svg>
        </div>
        <div className="row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42.265"
            height="31.018"
            viewBox="0 0 42.265 31.018"
          >
            <path
              id="cloud"
              d="M32.879,15.25H30.516A15,15,0,1,0,16,34H32.879a9.374,9.374,0,0,0,0-18.749Z"
              transform="translate(-0.488 -3.482)"
              fill="none"
              stroke="#D2DED2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
            />
          </svg>
        </div>
        <div className="row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="31"
            viewBox="0 0 31 31"
          >
            <g id="grid" transform="translate(-2.5 -2.5)">
              <rect
                id="Rectangle_7"
                data-name="Rectangle 7"
                width="11.667"
                height="11.667"
                transform="translate(3 3)"
                fill="none"
                stroke="#D2DED2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
              />
              <rect
                id="Rectangle_8"
                data-name="Rectangle 8"
                width="11.667"
                height="11.667"
                transform="translate(21.333 3)"
                fill="none"
                stroke="#D2DED2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
              />
              <rect
                id="Rectangle_9"
                data-name="Rectangle 9"
                width="11.667"
                height="11.667"
                transform="translate(21.333 21.333)"
                fill="none"
                stroke="#D2DED2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
              />
              <rect
                id="Rectangle_10"
                data-name="Rectangle 10"
                width="11.667"
                height="11.667"
                transform="translate(3 21.333)"
                fill="none"
                stroke="#D2DED2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
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
              strokeWidth="1"
            />
          </svg>
        </div>
        <div className="row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="31"
            viewBox="0 0 31 31"
          >
            <g id="plus-circle" transform="translate(-1.5 -1.5)">
              <circle
                id="Ellipse_5"
                data-name="Ellipse 5"
                cx="15"
                cy="15"
                r="15"
                transform="translate(2 2)"
                fill="none"
                stroke="#D2DED2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
              />
              <line
                id="Line_4"
                data-name="Line 4"
                y2="8"
                transform="translate(17 13)"
                fill="none"
                stroke="#D2DED2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
              />
              <line
                id="Line_5"
                data-name="Line 5"
                x2="8"
                transform="translate(13 17)"
                fill="none"
                stroke="#D2DED2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
              />
            </g>
          </svg>
        </div>
        <div className="row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31.207"
            height="31.207"
            viewBox="0 0 31.207 31.207"
          >
            <g id="send" transform="translate(-1.5 -56.293)">
              <line
                id="Line_6"
                data-name="Line 6"
                x1="16.5"
                y2="16.5"
                transform="translate(15.5 57)"
                fill="none"
                stroke="#D2DED2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
              />
              <path
                id="Path_12"
                data-name="Path 12"
                d="M32,2,21.5,32l-6-13.5L2,12.5Z"
                transform="translate(0 55)"
                fill="none"
                stroke="#D2DED2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
              />
            </g>
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
