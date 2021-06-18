import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/header/index';
import SideBar from '../../components/sidebar/index';
import Body from '../../components/body/index';
import FeedBack from '../../components/feedback/index';
import Rate from '../../components/rate/index';

export default function HomePage() {
  const { feedBack } = useSelector((state) => state.panelData);
  const { rate } = useSelector((state) => state.panelData);
  useEffect(() => {
    window.addEventListener('close', (e) => {
      e.preventDefault();
      console.log('ready to close');
    });
  });
  return (
    <div>
      {rate && <Rate />}
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
