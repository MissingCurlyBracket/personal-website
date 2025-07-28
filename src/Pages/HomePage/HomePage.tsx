import React from 'react';
import { Outlet } from 'react-router-dom';
import PageTitle from '../../Atoms/PageTitle/PageTitle';

export default function HomePage() {
  return (
    <div className="home-page">
      <PageTitle title={'Lucian Negru'} />
      <Outlet />
    </div>
  );
}
