import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Report4.module.css";

const Report4: FunctionComponent = () => {
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

  const onExpand02IconClick = useCallback(() => {
    navigate("/report");
  }, [navigate]);

  return (
    <div className={styles.report03}>
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
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.div8}>Общий доход: 18,028,850</div>
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.frameChild1} />
        <div className={styles.frameChild2} />
        <div className={styles.frameChild3} />
        <div className={styles.frameChild4} />
        <b className={styles.b}>Месяц Доход(Рублей) Процент(%)</b>
        <div className={styles.overview}>
          <div className={styles.group}>
            <div className={styles.div9}>Обзор</div>
            <div className={styles.div10}>Ежемесячный доход</div>
            <div className={styles.div11}>Ян</div>
            <div className={styles.div12}>Фер</div>
            <div className={styles.div13}>Мар</div>
            <b className={styles.b1}>Апр</b>
            <div className={styles.div14}>Май</div>
            <div className={styles.div15}>июнь</div>
            <div className={styles.div16}>июль</div>
            <div className={styles.div17}>Авг</div>
            <div className={styles.div18}>Сен</div>
            <div className={styles.div19}>Окт</div>
            <div className={styles.div20}>Ноя</div>
            <div className={styles.div21}>Дек</div>
            <div className={styles.frameChild5} />
            <div className={styles.frameChild6} />
            <div className={styles.frameChild7} />
            <div className={styles.frameChild8} />
          </div>
          <div className={styles.vectorParent}>
            <img
              className={styles.groupChild}
              alt=""
              src="/rectangle-291.svg"
            />
            <div className={styles.container}>
              <div className={styles.div22}>5%</div>
              <img className={styles.vectorIcon} alt="" src="/vector3.svg" />
              <img className={styles.vectorIcon1} alt="" src="/vector4.svg" />
            </div>
          </div>
        </div>
        <div className={styles.div23}>Январь 4345000.00 19.14</div>
        <div className={styles.div24}>Февраль 5190000.00 22.86</div>
        <div className={styles.div25}>Апрель 6909000.00 30.43</div>
        <div className={styles.naNa}>Май N/A N/A</div>
        <div className={styles.naNa1}>Июнь N/A N/A</div>
        <div className={styles.naNa2}>Июль N/A N/A</div>
        <div className={styles.naNa3}>Август N/A N/A</div>
        <div className={styles.naNa4}>Сентябрь N/A N/A</div>
        <div className={styles.naNa5}>Октябрь N/A N/A</div>
        <div className={styles.naNa6}>Ноябрь N/A N/A</div>
        <div className={styles.naNa7}>Декабрь N/A N/A</div>
        <div className={styles.div26}>Март 6255850.00 27.55</div>
        <div className={styles.min4345000}>Min: 4,345,000</div>
        <div className={styles.max6909000}>Max: 6,909,000</div>
        <div className={styles.div27}>Месячный доход</div>
        <div className={styles.frameChild9} />
        <div className={styles.div28}>Экспорт</div>
        <img
          className={styles.expand02Icon}
          alt=""
          src="/expand021.svg"
          onClick={onExpand02IconClick}
        />
      </div>
    </div>
  );
};

export default Report4;
