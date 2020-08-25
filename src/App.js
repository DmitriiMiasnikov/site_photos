import React from 'react';
import styles from './App.module.scss';
import Header from './components/Header/HeaderContainer';
import Footer from './components/Footer/FooterContainer';
import MainPage from './components/MainPage/MainPageContainer';
import ArchPage from './components/ArchPage/ArchPageContainer';
import NaturePage from './components/NaturePage/NaturePageContainer';
import AboutMePage from './components/AboutmePage/AboutmePageContainer';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.main}>
        <Route path={'/main'} render={() => <MainPage />} />
        <Route path={'/nature'} render={() => <NaturePage />} />
        <Route path={'/arch'} render={() => <ArchPage />} />
        <Route path={'/aboutme'} render={() => <AboutMePage />} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
