import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();

  const onTextClick = useCallback(() => {
    navigate("/menu11");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/menu1");
  }, [navigate]);

  return (
    <div className={styles.login}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.div} onClick={onTextClick}>
          <span className={styles.span}>Забыли пароль?</span>
          <b>{` `}</b>
          <span className={styles.span1}>Нажмите здесь</span>
        </div>
        <div className={styles.frameItem} onClick={onRectangle1Click} />
        <img
          className={styles.iconEnvelopeClosed}
          alt=""
          src="/-icon-envelope-closed.svg"
        />
        <div className={styles.frameInner} />
        <div className={styles.rectangleDiv} />
        <b className={styles.b}>Авторизация</b>
        <b className={styles.b1}>Войти</b>
        <img
          className={styles.iconLockLocked}
          alt=""
          src="/-icon-lock-locked.svg"
        />
        <img
          className={styles.iconEnvelopeClosed1}
          alt=""
          src="/-icon-envelope-closed.svg"
        />
        <input className={styles.input} type="email" />
        <input className={styles.input1} type="password" />
        <div className={styles.tabTrn}>
          <div className={styles.taskbarTrn} />
          <div className={styles.saigonContainer}>
            <p className={styles.saigon}>
              <b>
                <span className={styles.span2}>{`  `}</span>
                <span>SAIGON</span>
              </b>
            </p>
            <p className={styles.p}>Вьетнамская кухня</p>
          </div>
          <img className={styles.tabTrnChild} alt="" />
          <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
          <img className={styles.iconWifi} alt="" src="/-icon-wifi.svg" />
        </div>
      </div>
    </div>
  );
};

export default Login;
