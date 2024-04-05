import { FunctionComponent, useCallback } from "react";
import "antd/dist/antd.min.css";
import { DatePicker } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./History2.module.css";

const History2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onChefsHatContainerClick = useCallback(() => {
    navigate("/menu1");
  }, [navigate]);

  const onChefsHatIconClick = useCallback(() => {
    navigate("/menu1");
  }, [navigate]);

  const onKitchenStoveIconClick = useCallback(() => {
    navigate("/table1");
  }, [navigate]);

  const onKhchHngContainerClick = useCallback(() => {
    // Please sync "Customer1" to the project
  }, []);

  const onBoCoContainerClick = useCallback(() => {
    navigate("/report");
  }, [navigate]);

  const onSignOutCircleDuotoneLineIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onText12Click = useCallback(() => {
    navigate("/history");
  }, [navigate]);

  return (
    <div className={styles.history1}>
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
            src="/kitchen-stove.svg"
            onClick={onKitchenStoveIconClick}
          />
        </div>
        <div className={styles.thanhTriChild} />
        <div className={styles.khchHng} onClick={onKhchHngContainerClick}>
          <img
            className={styles.groupFillIcon}
            alt=""
            src="/group-fill1@2x.png"
          />
          <div className={styles.div2}>Клиенты</div>
        </div>
        <div className={styles.lchS}>
          <div className={styles.timeAtackFill}>
            <img className={styles.subtractIcon} alt="" src="/subtract1.svg" />
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
        <div className={styles.parent}>
          <div className={styles.div5}>Ло В.Х.</div>
          <div className={styles.div6}>Кассир</div>
        </div>
        <img
          className={styles.signOutCircleDuotoneLineIcon}
          alt=""
          src="/sign-out-circle-duotone-line.svg"
          onClick={onSignOutCircleDuotoneLineIconClick}
        />
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
        <img className={styles.iconWifi} alt="" src="/-icon-wifi.svg" />
        <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
      </div>
      <div className={styles.div7}>История заказов</div>
      <div className={styles.vectorParent}>
        <img className={styles.frameChild} alt="" src="/rectangle-4188.svg" />
        <DatePicker
          className={styles.frameItem}
          size="large"
          placeholder="Выбор даты"
          bordered={true}
          allowClear={false}
        />
      </div>
      <div className={styles.history1Child} />
      <div className={styles.id}>
        {" "}
        ID_Заказ Время Стол Итоговая сумма Способ оплаты
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.div8}>
          <span className={styles.span1}> 101</span>
          <span className={styles.span2}> 16:30 1 3218 Терминал</span>
        </div>
        <div className={styles.div9}>
          <span className={styles.span3}>{`     `}</span>
          <span className={styles.span4}>085 16:29 11 1690 Терминал</span>
        </div>
        <div className={styles.div10}> 080 16:24 7 590 Терминал</div>
        <div className={styles.div11}> 099 16:18 16 820 Терминал</div>
        <div className={styles.div12}>
          <span className={styles.span3}>{`  `}</span>
          <span className={styles.span4}> 083 16:07 4 2190 Терминал</span>
        </div>
        <div className={styles.div13}>
          <span className={styles.span7}>{` `}</span>
          <span className={styles.span2}> 091 15:50 10 590 Терминал</span>
        </div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupChild} />
        <div className={styles.div14}>
          <span className={styles.span3}>{`     `}</span>
          <span className={styles.span4}>096 16:25 9 1290 Терминал</span>
        </div>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupChild} />
        <div className={styles.div14}>
          <span className={styles.span3}>{`     `}</span>
          <span className={styles.span4}>078 16:20 3 1100 Терминал</span>
        </div>
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.groupChild} />
        <div className={styles.div16}> 076 16:10 1 2320 Наличный</div>
      </div>
      <div className={styles.rectangleParent1}>
        <div className={styles.groupChild} />
        <div className={styles.div16}> 098 15:59 6 890 Наличный</div>
      </div>
      <div className={styles.rectangleParent2}>
        <div className={styles.groupChild} />
        <div className={styles.div16}> 090 15:33 9 780 Терминал</div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.group}>
          <div className={styles.div19}> 1</div>
          <img
            className={styles.iconArrowRight}
            alt=""
            src="/-icon-arrow-right@2x.png"
          />
          <img
            className={styles.iconArrowRight1}
            alt=""
            src="/-icon-arrow-right1.svg"
          />
        </div>
        <div className={styles.rectangleParent3}>
          <div className={styles.groupChild3} />
          <div className={styles.groupChild4} />
          <div className={styles.groupChild5} />
          <div className={styles.div20}>1 Фо-бо 580</div>
          <div className={styles.div21}>1 Суп фо га 580</div>
          <div className={styles.groupChild6} />
          <div className={styles.groupChild7} />
          <div className={styles.div22}>2 Ком бо лук лак 630</div>
          <div className={styles.div23}>1 Свежевый сок манго 399</div>
          <div className={styles.div24}>1 Свежевый сок ананаса 399</div>
          <div className={styles.div25}>Промежуточная сумма 3218</div>
          <b className={styles.b}>Заказ #101</b>
          <div className={styles.div26}>СТ1</div>
          <div
            className={styles.div27}
          >{`Итоговая сумма                                                  3218    `}</div>
          <div
            className={styles.div28}
          >{`Терминал                                                              3218   `}</div>
          <div
            className={styles.div29}
          >{` Кассир: Ло В.Х.                                                    `}</div>
          <div className={styles.div30}>Скидка 0.00</div>
          <div className={styles.groupChild8} />
          <div className={styles.div31} onClick={onText12Click}>
            Печатать чек
          </div>
          <div className={styles.div32}>
            <p className={styles.p1}>16:30 Март 15, 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History2;
