import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import {HoverAlt} from "./HoverAlt";


const App: React.FunctionComponent = () => {
  return (
    <div className={styles.App}>
      <HoverAlt
          foregroundImg="https://d.facdn.net/art/dr-spangle/1595287206/1595287256.dr-spangle_07-10-20_colored_sketch_zephyr42_nomessver_edit_final_l.png"
          backgroundImg="https://d.facdn.net/art/zephyr42/1595287208/1595287237.zephyr42_07-10-20_colored_sketch_zephyr42_messver_edit_final_l.png"
      />
      <header className={styles.AppHeader}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <a
          className={styles.AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
