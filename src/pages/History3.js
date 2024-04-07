import { useCallback } from "react";
import "antd/dist/antd.min.css";
import { DatePicker } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./History3.module.css";

const History3 = () => {
  const navigate = useNavigate();

  const onChefsHatContainerClick = useCallback(() => {
    navigate("/menu11");
  }, [navigate]);

  const onChefsHatIconClick = useCallback(() => {
    navigate("/menu1");
  }, [navigate]);

  const onKitchenStoveIconClick = useCallback(() => {
    navigate("/table11");
  }, [navigate]);

  const onKhchHngContainerClick = useCallback(() => {
    navigate("/customer11");
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

  const onTextClick = useCallback(() => {
    navigate("/history1");
  }, [navigate]);

  return (
    <div className={styles.history11}>
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
          <div className={styles.div6}>Менеджер</div>
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
      <div className={styles.div8}>История заказов</div>
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
      <div className={styles.history11Child} />
      <div className={styles.id}>
      {" "}
        ID_Заказ                       Время                           Стол                                Итоговая сумма                   Способ оплаты
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.div9} onClick={onTextClick}>
        <span className={styles.span1}>    101</span>
          <span className={styles.span2}>                               16:30                              СТ1                                             3218                                          Терминал</span>
        </div>
        <div className={styles.div10}>
          <span className={styles.span3}>{`     `}</span>
          <span className={styles.span4}>
            <span
              className={styles.span5}
              >{`085                               16:29                              `}</span>
              <span className={styles.span6}>СТ</span>
              <span className={styles.span7}>11                                          1690                                           Терминал</span>
            </span>
        </div>
        <div className={styles.div11}>
          <span
            className={styles.span7}
          >{`     080                               16:24                              `}</span>
          <span>СТ</span>
          <span className={styles.span7}>11                                          1690                                           Терминал</span>
        </div>
        <div className={styles.div12}>      099                             16:18                            СТ16                                         820                                           Терминал</div>
        <div className={styles.div13}>
          <span className={styles.span3}>{`  `}</span>
          <span className={styles.span4}>
            <span
              className={styles.span5}
            >{`    083                              16:07                              `}</span>
            <span className={styles.span6}>СТ</span>
            <span className={styles.span7}>6                                             890                                               Наличный</span>
          </span>
        </div>
        <div className={styles.div14}>
          <span className={styles.span15}>{` `}</span>
          <span className={styles.span2}>     099                             16:18                            СТ16                                         820                                           Терминал</span>
        </div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupChild} />
        <div className={styles.div15}>
          <span className={styles.span3}>{`     `}</span>
          <span className={styles.span4}>
            <span
              className={styles.span5}
            >{`096                               16:25                              `}</span>
            <span className={styles.span6}>СТ</span>
            <span className={styles.span7}>9                                            1290                                           Терминал</span>
          </span>
        </div>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupChild} />
        <div className={styles.div15}>
          <span className={styles.span3}>{`     `}</span>
          <span className={styles.span4}>
            <span
              className={styles.span5}
            >{`078                               16:20                              `}</span>
            <span className={styles.span6}>СТ</span>
            <span className={styles.span7}>3                                            1100                                            Терминал</span>
          </span>
        </div>
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.groupChild} />
        <div className={styles.div15}>
          <span
            className={styles.span7}
          >{`      076                              16:10                              `}</span>
          <span>СТ</span>
          <span className={styles.span7}>6                                             890                                               Наличный</span>
        </div>
      </div>
      <div className={styles.rectangleParent1}>
        <div className={styles.groupChild} />
        <div className={styles.div15}>
          <span
            className={styles.span7}
          >{`      098                              15:59                              `}</span>
          <span>СТ</span>
          <span className={styles.span7}>6                                             890                                               Наличный</span>
        </div>
      </div>
      <div className={styles.rectangleParent2}>
        <div className={styles.groupChild} />
        <div className={styles.div15}>
          <span
            className={styles.span7}
          >{`      090                               15:33                             `}</span>
          <span>СТ</span>
          <span className={styles.span7}>6                                             890                                               Наличный</span>
        </div>
      </div>
      <div className={styles.history11Inner}>
        <div className={styles.group}>
          <div className={styles.div20}> 1</div>
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
      </div>
    </div>
  );
};

export default History3;
