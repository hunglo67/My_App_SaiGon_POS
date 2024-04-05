import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Table2.module.css";

const Table2 = () => {
  const navigate = useNavigate();

  const onChefsHatContainerClick = useCallback(() => {
    navigate("/menu11");
  }, [navigate]);

  const onChefsHatIconClick = useCallback(() => {
    navigate("/menu11");
  }, [navigate]);

  const onKhchHngContainerClick = useCallback(() => {
    navigate("/customer11");
  }, [navigate]);

  const onGroupFillIconClick = useCallback(() => {
    navigate("/customer11");
  }, [navigate]);

  const onLchSContainerClick = useCallback(() => {
    navigate("/history11");
  }, [navigate]);

  const onBoCoContainerClick = useCallback(() => {
    navigate("/report");
  }, [navigate]);

  const onSignOutCircleDuotoneLineIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/employee");
  }, [navigate]);

  return (
    <div className={styles.table11}>
      <div className={styles.thanhTri}>
        <div className={styles.taskbarTri} />
        <div className={styles.menu}>
          <div className={styles.div}>Меню</div>
          <div className={styles.chefsHat} onClick={onChefsHatContainerClick}>
            <img
              className={styles.chefsHatIcon}
              alt=""
              src="/chefs-hat2.svg"
              onClick={onChefsHatIconClick}
            />
          </div>
        </div>
        <div className={styles.bn}>
          <div className={styles.div1}>Столы</div>
          <img
            className={styles.kitchenStoveIcon}
            alt=""
            src="/kitchen-stove1.svg"
          />
          <div className={styles.bnChild} />
        </div>
        <div className={styles.khchHng} onClick={onKhchHngContainerClick}>
          <img
            className={styles.groupFillIcon}
            alt=""
            src="/group-fill@2x.png"
            onClick={onGroupFillIconClick}
          />
          <div className={styles.div2}>Клиенты</div>
        </div>
        <div className={styles.lchS} onClick={onLchSContainerClick}>
          <div className={styles.timeAtackFill}>
            <img className={styles.subtractIcon} alt="" src="/subtract.svg" />
          </div>
          <div className={styles.div3}>История</div>
        </div>
        <div className={styles.boCo} onClick={onBoCoContainerClick}>
          <img
            className={styles.chartFillIcon}
            alt=""
            src="/chart-fill@2x.png"
          />
          <div className={styles.div4}>Отчеты</div>
        </div>
        <img
          className={styles.signOutCircleDuotoneLineIcon}
          alt=""
          src="/sign-out-circle-duotone-line.svg"
          onClick={onSignOutCircleDuotoneLineIconClick}
        />
        <div className={styles.wrapper}>
          <div className={styles.div5}>Ло В.Х.</div>
        </div>
        <img
          className={styles.chevronDown2Icon}
          alt=""
          src="/chevrondown-2.svg"
        />
        <div className={styles.div6}>
          <p className={styles.p}>Менеджер</p>
        </div>
        <div
          className={styles.solidcommunicationuserParent}
          onClick={onFrameContainerClick}
        >
          <img
            className={styles.solidcommunicationuserIcon}
            alt=""
            src="/solidcommunicationuser.svg"
          />
          <div className={styles.div7}>Сотрудник</div>
        </div>
      </div>
      <div className={styles.tabTrn}>
        <div className={styles.taskbarTrn} />
        <div className={styles.saigonContainer}>
          <p className={styles.p}>
            <b>
              <span className={styles.span}>{`  `}</span>
              <span>SAIGON</span>
            </b>
          </p>
          <p className={styles.p1}>Вьетнамская кухня</p>
        </div>
        <img className={styles.tabTrnChild} alt="" />
        <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
        <img className={styles.iconWifi} alt="" src="/-icon-wifi.svg" />
      </div>
      <div className={styles.table11Child} />
      <div className={styles.div8}>{`Количество `}</div>
      <div className={styles.table11Item} />
      <div className={styles.div9}>+</div>
      <div className={styles.div10}>0</div>
      <div className={styles.chevronDown2Parent}>
        <div className={styles.chevronDown2} />
        <div className={styles.frameChild} />
        <div className={styles.rectangleParent}>
          <div className={styles.frameItem} />
          <input className={styles.frameInner} type="text" />
          <div className={styles.rectangleDiv} />
          <img
            className={styles.xCircleContainedIcon}
            alt=""
            src="/xcirclecontained2.svg"
          />
        </div>
        <div className={styles.id}>
          <b>{` `}</b>
          <span className={styles.id1}>ID</span>
        </div>
        <div className={styles.div11}>Номер</div>
        <b className={styles.b}> Новая стола</b>
        <input className={styles.frameInput} type="text" />
      </div>
    </div>
  );
};

export default Table2;
