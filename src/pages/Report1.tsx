import { FunctionComponent, useCallback } from "react";
import "antd/dist/antd.min.css";
import { DatePicker } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./Report1.module.css";

const Report1: FunctionComponent = () => {
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

  const onGroupContainerClick = useCallback(() => {
    navigate("/report011");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/report");
  }, [navigate]);

  const onXTextClick = useCallback(() => {
    navigate("/report");
  }, [navigate]);

  const onExpand02IconClick = useCallback(() => {
    navigate("/report");
  }, [navigate]);

  return (
    <div className={styles.report01}>
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
      <DatePicker
        className={styles.report01Child}
        size="large"
        placeholder="Период"
        bordered={true}
        allowClear={false}
      />
      <div className={styles.rectangleParent} onClick={onGroupContainerClick}>
        <div className={styles.groupChild} />
        <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
      </div>
      <div className={styles.x}> X-отчет</div>
      <b className={styles.b}>Открый Смена</b>
      <div className={styles.rectangleGroup}>
        <div className={styles.frameChild} />
        <div className={styles.group}>
          <div className={styles.div8}> Тип</div>
          <div className={styles.frameItem} />
          <div className={styles.frameInner} />
          <div className={styles.lineDiv} />
          <div className={styles.frameChild1} />
          <div className={styles.frameChild2} />
          <div className={styles.frameChild3} />
          <div className={styles.div9}>Сумма</div>
          <img className={styles.lineIcon} alt="" />
          <div className={styles.frameChild4} />
          <img className={styles.frameChild5} alt="" />
          <div className={styles.frameChild6} />
          <div className={styles.frameChild7} />
          <div className={styles.frameChild8} />
          <div className={styles.frameChild9} />
          <div className={styles.div10}> Кол-во</div>
          <div className={styles.text}>{`        `}</div>
          <div className={styles.frameChild10} />
          <div className={styles.div11}>Терминал</div>
          <div className={styles.div12}>Сумма</div>
          <div className={styles.div13}>Чеки продаж</div>
          <div className={styles.text1}>{`        `}</div>
          <div className={styles.div14}> Наличные</div>
          <div className={styles.text2}>{`  `}</div>
          <div className={styles.text3}>{`   `}</div>
          <div className={styles.div15}> 0</div>
          <div className={styles.div16}>Чеки возвратов</div>
          <div className={styles.div17}>Наличность:</div>
          <div className={styles.text4}>{`         `}</div>
          <div className={styles.text5}>{`   `}</div>
          <div className={styles.div18}> 0.00</div>
          <div className={styles.div19}> 0.00</div>
          <div className={styles.div20}> 0.00</div>
          <img className={styles.frameChild11} alt="" />
        </div>
        <b className={styles.b1}>Смена № 108</b>
        <div className={styles.rectangleDiv} onClick={onRectangle1Click} />
        <div className={styles.frameChild12} />
        <div className={styles.div21}>Экспорт</div>
        <div className={styles.div22}> Открыта 16.03.2024</div>
        <div className={styles.x1} onClick={onXTextClick}>
          {" "}
          X-отчет
        </div>
        <img
          className={styles.expand02Icon}
          alt=""
          src="/expand02.svg"
          onClick={onExpand02IconClick}
        />
        <div className={styles.div23}> 208</div>
        <b className={styles.b2}> 208</b>
        <b className={styles.b3}>36700.00</b>
        <div className={styles.div24}>36700.00</div>
        <b className={styles.b4}>36700.00</b>
        <div className={styles.div25}>159000.00</div>
        <b className={styles.b5}>159000.00</b>
        <div className={styles.div26}>196700.00</div>
        <b className={styles.b6}>196700.00</b>
      </div>
    </div>
  );
};

export default Report1;
