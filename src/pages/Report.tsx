import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Report.module.css";

const Report: FunctionComponent = () => {
  const navigate = useNavigate();

  const onChefsHatIconClick = useCallback(() => {
    navigate("/menu11");
  }, [navigate]);

  const onKitchenStoveIconClick = useCallback(() => {
    navigate("/table11");
  }, [navigate]);

  const onKhchHngContainerClick = useCallback(() => {
    navigate("/customer11");
  }, [navigate]);

  const onLchSContainerClick = useCallback(() => {
    navigate("/history11");
  }, [navigate]);

  const onSignOutCircleDuotoneLineIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSolidCommunicationUserClick = useCallback(() => {
    navigate("/employee");
  }, [navigate]);

  const onTextClick = useCallback(() => {
    navigate("/report01");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/report03");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/report02");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/report02");
  }, [navigate]);

  return (
    <div className={styles.report}>
      <div className={styles.thanhTri}>
        <div className={styles.taskbarTri} />
        <div className={styles.menu}>
          <div className={styles.div}>Меню</div>
          <img
            className={styles.chefsHatIcon}
            alt=""
            src="/chefs-hat3.svg"
            onClick={onChefsHatIconClick}
          />
        </div>
        <div className={styles.bn}>
          <div className={styles.div1}>Столы</div>
          <img
            className={styles.kitchenStoveIcon}
            alt=""
            src="/kitchen-stove.svg"
            onClick={onKitchenStoveIconClick}
          />
        </div>
        <div className={styles.khchHng} onClick={onKhchHngContainerClick}>
          <img
            className={styles.groupFillIcon}
            alt=""
            src="/group-fill1@2x.png"
          />
          <div className={styles.div2}>Клиенты</div>
        </div>
        <div className={styles.lchS} onClick={onLchSContainerClick}>
          <div className={styles.timeAtackFill}>
            <img className={styles.subtractIcon} alt="" src="/subtract2.svg" />
          </div>
          <div className={styles.div3}>История</div>
        </div>
        <div className={styles.boCo}>
          <img
            className={styles.chartFillIcon}
            alt=""
            src="/chart-fill1@2x.png"
          />
          <div className={styles.div4}>Отчеты</div>
        </div>
        <img
          className={styles.signOutCircleDuotoneLineIcon}
          alt=""
          src="/sign-out-circle-duotone-line.svg"
          onClick={onSignOutCircleDuotoneLineIconClick}
        />
        <div className={styles.parent}>
          <div className={styles.div5}>Ло В.Х.</div>
          <div className={styles.div6}>Менеджер</div>
        </div>
        <img
          className={styles.chevronDown2Icon}
          alt=""
          src="/chevrondown-2.svg"
        />
        <div className={styles.thanhTriChild} />
        <img
          className={styles.solidcommunicationuserIcon}
          alt=""
          src="/solidcommunicationuser.svg"
          onClick={onSolidCommunicationUserClick}
        />
        <div className={styles.div7}>Сотрудник</div>
      </div>
      <div className={styles.tabTrn}>
        <div className={styles.taskbarTrn} />
        <div className={styles.saigonContainer}>
          <p className={styles.saigon}>
            <b>
              <span className={styles.span}>{`  `}</span>
              <span>SAIGON</span>
            </b>
          </p>
          <p className={styles.p}>Вьетнамская кухня</p>
        </div>
        <img className={styles.tabTrnChild} alt="" />
        <img className={styles.iconWifi} alt="" src="/-icon-wifi.svg" />
        <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
      </div>
      <div className={styles.reportChild} />
      <img className={styles.reportItem} alt="" src="/rectangle-4198.svg" />
      <b className={styles.b} onClick={onTextClick}>
        Открый Смена
      </b>
      <div className={styles.overview}>
        <div className={styles.group} onClick={onFrameContainerClick}>
          <div className={styles.div8}>Обзор</div>
          <div className={styles.div9}>Ежемесячный доход</div>
          <div className={styles.div10}>Ян</div>
          <div className={styles.div11}>Фер</div>
          <div className={styles.div12}>Мар</div>
          <b className={styles.b1}>Апр</b>
          <div className={styles.div13}>Май</div>
          <div className={styles.div14}>июнь</div>
          <div className={styles.div15}>июль</div>
          <div className={styles.div16}> Авг</div>
          <div className={styles.div17}>Сен</div>
          <div className={styles.div18}>Окт</div>
          <div className={styles.div19}>Ноя</div>
          <div className={styles.div20}>Дек</div>
          <div className={styles.frameChild} />
          <div className={styles.frameItem} />
          <div className={styles.frameInner} />
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-25.svg"
          />
          <img className={styles.frameChild1} alt="" />
          <img className={styles.frameChild2} alt="" />
        </div>
        <div className={styles.vectorParent}>
          <img className={styles.groupChild} alt="" src="/rectangle-29.svg" />
          <div className={styles.container}>
            <div className={styles.div21}>5%</div>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent} onClick={onFrameContainer2Click}>
        <div className={styles.rectangleDiv} onClick={onRectangleClick} />
        <div className={styles.div22}>Топ самых продаваемых блюд</div>
        <div className={styles.div23}>Март</div>
        <img className={styles.groupIcon} alt="" src="/group-27.svg" />
      </div>
    </div>
  );
};

export default Report;
