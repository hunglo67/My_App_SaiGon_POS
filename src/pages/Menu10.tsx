import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Menu10.module.css";

const Menu10: FunctionComponent = () => {
  const navigate = useNavigate();

  const onKitchenStoveIconClick = useCallback(() => {
    navigate("/table11");
  }, [navigate]);

  const onKhchHngContainerClick = useCallback(() => {
    navigate("/customer11");
  }, [navigate]);

  const onLchSContainerClick = useCallback(() => {
    navigate("/history11");
  }, [navigate]);

  const onBoCoContainerClick = useCallback(() => {
    navigate("/report");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/employee");
  }, [navigate]);

  const onText1Click = useCallback(() => {
    navigate("/menu11");
  }, [navigate]);

  const onText2Click = useCallback(() => {
    navigate("/menu22");
  }, [navigate]);

  const onText3Click = useCallback(() => {
    navigate("/menu44");
  }, [navigate]);

  const onText4Click = useCallback(() => {
    navigate("/menu55");
  }, [navigate]);

  const onSignOutCircleDuotoneLineIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onTextClick = useCallback(() => {
    navigate("/menu12");
  }, [navigate]);

  return (
    <div className={styles.menu33}>
      <div className={styles.thanhTriParent}>
        <div className={styles.thanhTri}>
          <div className={styles.taskbarTri} />
          <div className={styles.menu}>
            <div className={styles.div}>Меню</div>
            <img className={styles.menuChild} alt="" src="/rectangle-1.svg" />
            <div className={styles.chefsHat}>
              <img
                className={styles.chefsHatIcon}
                alt=""
                src="/chefs-hat5.svg"
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
          <div className={styles.khchHng} onClick={onKhchHngContainerClick}>
            <img
              className={styles.groupFillIcon}
              alt=""
              src="/group-fill3@2x.png"
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
          <div className={styles.parent}>
            <div className={styles.div5}>Ло В.Х.</div>
            <div className={styles.div6}>Менеджер</div>
          </div>
          <img
            className={styles.chevronDown2Icon}
            alt=""
            src="/chevrondown-2.svg"
          />
          <div className={styles.iconParent} onClick={onFrameContainerClick}>
            <img className={styles.icon} alt="" src="/icon1.svg" />
            <div className={styles.div7}>Сотрудник</div>
          </div>
        </div>
        <div className={styles.thanhMunuWrapper}>
          <div className={styles.thanhMunu}>
            <div className={styles.div8}>Салаты</div>
            <div className={styles.thanhMunuChild} />
            <div className={styles.sup}>
              <div className={styles.phB}>
                <div className={styles.phBChild} />
                <img
                  className={styles.phBItem}
                  alt=""
                  src="/rectangle-416411@2x.png"
                />
                <div className={styles.div9}>
                  <p className={styles.p}>299 ₽</p>
                  <p className={styles.p1}>Салат вегетариалский</p>
                </div>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameChild} />
                  <div className={styles.div10}>
                    <span className={styles.span}>{`+ `}</span>
                    <span className={styles.span1}>Добавить</span>
                  </div>
                </div>
              </div>
              <div className={styles.phB1}>
                <div className={styles.phBInner} />
                <img
                  className={styles.phBItem}
                  alt=""
                  src="/rectangle-416412@2x.png"
                />
                <div className={styles.div11}>
                  <p className={styles.p}>199 ₽</p>
                  <p className={styles.p1}>Зья до</p>
                </div>
                <div className={styles.rectangleGroup}>
                  <div className={styles.frameChild} />
                  <div className={styles.div12}>
                    <span className={styles.span}>{`+ `}</span>
                    <span className={styles.span1}>Добавить</span>
                  </div>
                </div>
              </div>
              <div className={styles.phB2}>
                <div className={styles.rectangleDiv} />
                <img
                  className={styles.phBItem}
                  alt=""
                  src="/rectangle-416413@2x.png"
                />
                <div className={styles.div11}>
                  <p className={styles.p}>249 ₽</p>
                  <p className={styles.p1}>Вьетнамский салат</p>
                </div>
                <div className={styles.rectangleContainer}>
                  <div className={styles.frameChild} />
                  <div className={styles.div10}>
                    <span className={styles.span}>{`+ `}</span>
                    <span className={styles.span1}>Добавить</span>
                  </div>
                </div>
              </div>
              <div className={styles.phB3}>
                <div className={styles.phBInner} />
                <img
                  className={styles.phBItem}
                  alt=""
                  src="/rectangle-416414@2x.png"
                />
                <div className={styles.div11}>
                  <p className={styles.p}>430 ₽</p>
                  <p className={styles.p1}>Салат хоай том</p>
                </div>
                <div className={styles.frameDiv}>
                  <div className={styles.frameChild} />
                  <div className={styles.div10}>
                    <span className={styles.span}>{`+ `}</span>
                    <span className={styles.span1}>Добавить</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.div17} onClick={onText1Click}>
              Супы
            </div>
            <div className={styles.div18} onClick={onText2Click}>
              Горячие блюда
            </div>
            <div className={styles.div19} onClick={onText3Click}>
              Десерты
            </div>
            <div className={styles.div20} onClick={onText4Click}>
              Напитки
            </div>
          </div>
        </div>
        <div className={styles.tabTrn}>
          <div className={styles.taskbarTrn} />
          <div className={styles.saigonContainer}>
            <p className={styles.saigon}>
              <b>
                <span className={styles.span8}>{`  `}</span>
                <span>SAIGON</span>
              </b>
            </p>
            <p className={styles.p1}>Вьетнамская кухня</p>
          </div>
          <img className={styles.tabTrnChild} alt="" />
          <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
          <img className={styles.iconWifi} alt="" src="/-icon-wifi.svg" />
        </div>
        <img
          className={styles.signOutCircleDuotoneLineIcon}
          alt=""
          src="/sign-out-circle-duotone-line.svg"
          onClick={onSignOutCircleDuotoneLineIconClick}
        />
        <div className={styles.rectangleParent1}>
          <div className={styles.frameChild2} />
          <b
            className={styles.b}
            onClick={onTextClick}
          >{`          Создать `}</b>
        </div>
      </div>
    </div>
  );
};

export default Menu10;
