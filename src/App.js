import React from 'react';
import styles from './App.module.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './components/MainPage/MainPage';
import ArchPage from './components/ArchPage/ArchPage';
import NaturePage from './components/NaturePage/NaturePage';
import AboutMePage from './components/AboutmePage/AboutmePage';
import { Route, Switch, Redirect } from 'react-router-dom';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.main}>
        <Switch>
          <Redirect exact from={'/'} to={'/main'} />
          <Route exact path={'/main'} render={() => <MainPage />} />
          <Route exact path={'/nature'} render={() => <NaturePage />} />
          <Route exact path={'/arch'} render={() => <ArchPage />} />
          <Route exact path={'/aboutme'} render={() => <AboutMePage />} />
          <Route path={'*'} render={() =>
            <div style={{ fontSize: 32, margin: '30px 0' }}>404 error, page not found</div>
          } />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
