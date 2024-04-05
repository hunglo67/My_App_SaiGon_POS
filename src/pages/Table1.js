import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Table1.module.css";

const Table1 = () => {
  const navigate = useNavigate();

  const onChefsHatIconClick = useCallback(() => {
    navigate("/menu1");
  }, [navigate]);

  const onGroupFillIconClick = useCallback(() => {
    navigate("/customer1");
  }, [navigate]);

  const onLchSContainerClick = useCallback(() => {
    navigate("/history");
  }, [navigate]);

  const onSignOutCircleDuotoneLineIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onTextClick = useCallback(() => {
    navigate("/table1");
  }, [navigate]);

  const onText2Click = useCallback(() => {
    navigate("/table1");
  }, [navigate]);

  return (
    <div className={styles.table2}>
      <div className={styles.thanhTri}>
        <div className={styles.taskbarTri} />
        <div className={styles.menu}>
          <div className={styles.div}>Меню</div>
          <img
            className={styles.chefsHatIcon}
            alt=""
            src="/chefs-hat1.svg"
            onClick={onChefsHatIconClick}
          />
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
        <div className={styles.khchHng}>
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
        <div className={styles.boCo}>
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
        <div className={styles.parent}>
          <div className={styles.div5}>Ло В.Х.</div>
          <div className={styles.div6}>Кассир</div>
        </div>
        <img
          className={styles.chevronDown2Icon}
          alt=""
          src="/chevrondown-2.svg"
        />
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
        <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
        <img className={styles.iconWifi} alt="" src="/-icon-wifi.svg" />
      </div>
      <div className={styles.div7} onClick={onTextClick}>{`< Вернуться`}</div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
        <div className={styles.div8}> 1 Фо-бо 580</div>
        <div className={styles.div9}> 1 Суп фо га 580</div>
        <div className={styles.rectangleDiv} />
        <div className={styles.groupChild1} />
        <div className={styles.div10}> 2 Ком бо лук лак 630</div>
        <div className={styles.div11}> 1 Свежевый сок манго 399</div>
        <div className={styles.div12}> 1 Свежевый сок ананаса 399</div>
        <div className={styles.div13}>Промежуточная сумма 3218</div>
        <b className={styles.b}>Заказ #091</b>
        <div className={styles.div14}>СТ1</div>
        <div
          className={styles.div15}
        >{`Итоговая сумма                                                       3218    `}</div>
        <div
          className={styles.div16}
        >{`Скидка                                                                       `}</div>
        <div
          className={styles.div17}
        >{`%                                                                       `}</div>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameChild} />
          <div className={styles.div18} onClick={onText2Click}>
            Подтверждение оплаты
          </div>
        </div>
      </div>
      <div className={styles.table2Child} />
      <input className={styles.frameInput} autoFocus={true} type="checkbox" />
      <input className={styles.rectangleInput} type="checkbox" />
      <div className={styles.div19}>Наличный</div>
      <div className={styles.div20}>Терминал</div>
      <img
        className={styles.outlinedevicesprinterIcon}
        alt=""
        src="/outlinedevicesprinter.svg"
      />
      <input className={styles.table2Item} type="text" />
    </div>
  );
};

export default Table1;
