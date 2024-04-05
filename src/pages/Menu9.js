import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Menu9.module.css";

const Menu9 = () => {
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

  const onFrameContainer2Click = useCallback(() => {
    navigate("/menu7");
  }, [navigate]);

  const onText1Click = useCallback(() => {
    navigate("/menu11");
  }, [navigate]);

  const onText2Click = useCallback(() => {
    navigate("/menu44");
  }, [navigate]);

  const onText3Click = useCallback(() => {
    navigate("/menu55");
  }, [navigate]);

  const onText4Click = useCallback(() => {
    navigate("/menu33");
  }, [navigate]);

  const onSignOutCircleDuotoneLineIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onTextClick = useCallback(() => {
    navigate("/menu12");
  }, [navigate]);

  return (
    <div className={styles.menu22}>
      <div className={styles.thanhTriParent}>
        <div className={styles.thanhTri}>
          <div className={styles.taskbarTri} />
          <div className={styles.menu}>
            <div className={styles.div}>Меню</div>
            <img className={styles.menuChild} alt="" src="/rectangle-1.svg" />
            <img className={styles.chefsHatIcon} alt="" src="/chefs-hat.svg" />
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
              src="/group-fill2@2x.png"
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
          <div className={styles.wrapper}>
            <div className={styles.div5}>Ло В.Х.</div>
          </div>
          <img
            className={styles.chevronDown2Icon}
            alt=""
            src="/chevrondown-2.svg"
          />
          <div className={styles.iconParent} onClick={onFrameContainerClick}>
            <img className={styles.icon} alt="" src="/icon1.svg" />
            <div className={styles.div6}>Сотрудник</div>
          </div>
          <div className={styles.div7}>Менеджер</div>
        </div>
        <div className={styles.thanhMunuWrapper}>
          <div className={styles.thanhMunu}>
            <div className={styles.div8}>Горячие блюда</div>
            <div className={styles.thanhMunuChild} />
            <div className={styles.sup}>
              <div className={styles.phB}>
                <div className={styles.phBChild} />
                <img
                  className={styles.phBItem}
                  alt=""
                  src="/rectangle-41645@2x.png"
                />
                <div className={styles.div9}>
                  <p className={styles.p}>499 ₽</p>
                  <p className={styles.p1}>Нем</p>
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
                  src="/rectangle-41646@2x.png"
                />
                <div className={styles.div9}>
                  <p className={styles.p}>599 ₽</p>
                  <p className={styles.p1}>Бун бо</p>
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
                  src="/rectangle-41647@2x.png"
                />
                <div className={styles.div13}>
                  <p className={styles.p}>619 ₽</p>
                  <p className={styles.p1}>Ком ранг том</p>
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
                <div className={styles.rectangleDiv} />
                <img
                  className={styles.phBItem}
                  alt=""
                  src="/rectangle-41648@2x.png"
                />
                <div className={styles.div13}>
                  <p className={styles.p}>619 ₽</p>
                  <p className={styles.p1}>Фо сао га</p>
                </div>
                <div className={styles.rectangleContainer}>
                  <div className={styles.frameChild} />
                  <div className={styles.div10}>
                    <span className={styles.span}>{`+ `}</span>
                    <span className={styles.span1}>Добавить</span>
                  </div>
                </div>
              </div>
              <div className={styles.phB4}>
                <div className={styles.phBChild4} />
                <img
                  className={styles.phBItem}
                  alt=""
                  src="/rectangle-41649@2x.png"
                />
                <div className={styles.div9}>
                  <p className={styles.p}>599 ₽</p>
                  <p className={styles.p1}>Том чиен су</p>
                </div>
                <div className={styles.rectangleParent1}>
                  <div className={styles.frameChild} />
                  <div className={styles.div10}>
                    <span className={styles.span}>{`+ `}</span>
                    <span className={styles.span1}>Добавить</span>
                  </div>
                </div>
              </div>
              <div className={styles.phB5}>
                <div className={styles.phBInner} />
                <img
                  className={styles.phBItem}
                  alt=""
                  src="/rectangle-416410@2x.png"
                />
                <div className={styles.div9}>
                  <p className={styles.p}>630 ₽</p>
                  <p className={styles.p1}>Ком бо лук лак</p>
                </div>
                <div
                  className={styles.rectangleParent2}
                  onClick={onFrameContainer2Click}
                >
                  <div className={styles.frameChild} />
                  <div className={styles.div10}>
                    <span className={styles.span}>{`+ `}</span>
                    <span className={styles.span1}>Добавить</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.div21} onClick={onText1Click}>
              Супы
            </div>
            <div className={styles.div22} onClick={onText2Click}>
              Десерты
            </div>
            <div className={styles.div23} onClick={onText3Click}>
              Напитки
            </div>
            <div className={styles.div24} onClick={onText4Click}>
              Салаты
            </div>
          </div>
        </div>
        <div className={styles.tabTrn}>
          <div className={styles.taskbarTrn} />
          <div className={styles.saigonContainer}>
            <p className={styles.saigon}>
              <b>
                <span className={styles.span12}>{`  `}</span>
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
        <div className={styles.rectangleParent3}>
          <div className={styles.frameChild4} />
          <b
            className={styles.b}
            onClick={onTextClick}
          >{`          Создать `}</b>
        </div>
      </div>
    </div>
  );
};

export default Menu9;
