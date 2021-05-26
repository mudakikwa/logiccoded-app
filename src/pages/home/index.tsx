import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/header/index';
import SideBar from '../../components/sidebar/index';
import Body from '../../components/body/index';
import FeedBack from '../../components/feedback/index';
import Rate from '../../components/rate/index';

export default function HomePage() {
  const { feedBack, rate } = useSelector((state) => state.panelData);
  return (
    <div>
      {/* {rate && <Rate />} */}
      {feedBack && <FeedBack />}
      <Header />
      <div className="container-fluid">
        <div className="row">
          <SideBar />
          <Body />
        </div>
      </div>
    </div>
  );
}
