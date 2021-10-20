import styles from "./styles.module.scss";
import logoImg from "../../assets/logo.svg";
import {api} from './../../services/api';
import { useEffect } from "react";


export function MessageList() {
  useEffect(()=> {
    api.get('messages/last3').then(response => {
      console.log(response.data);
    })
  },[])
  
  
  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="DoWhile2021" />
      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Não vejo a hora de começar esse evento, com certeza vai ser o melhor
            de todos os tempos, vamooo pracima!
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img
                src="https://github.com/sh4kaa.png"
                alt="Dario souza"
                title="Dario"
              />
            </div>
            <span>Dario</span>
          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>
            Não vejo a hora de começar esse evento, com certeza vai ser o melhor
            de todos os tempos, vamooo pracima!
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img
                src="https://github.com/sh4kaa.png"
                alt="Dario souza"
                title="Dario"
              />
            </div>
            <span>Dario</span>
          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>
            Não vejo a hora de começar esse evento, com certeza vai ser o melhor
            de todos os tempos, vamooo pracima!
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img
                src="https://github.com/sh4kaa.png"
                alt="Dario souza"
                title="Dario"
              />
            </div>
            <span>Dario</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
