import React from 'react';
import Header from '../../components/header/index';
import SideBar from '../../components/sidebar/index';
import Body from '../../components/body/index';

export default function HomePage() {
  return (
    <div>
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
