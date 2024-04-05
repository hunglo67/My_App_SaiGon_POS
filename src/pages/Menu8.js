import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Menu8.module.css";

const Menu8 = () => {
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
    navigate("/menu22");
  }, [navigate]);

  const onTextClick = useCallback(() => {
    navigate("/menu22");
  }, [navigate]);

  const onText2Click = useCallback(() => {
    navigate("/menu33");
  }, [navigate]);

  const onText1Click = useCallback(() => {
    navigate("/menu55");
  }, [navigate]);

  const onText22Click = useCallback(() => {
    navigate("/menu44");
  }, [navigate]);

  const onSignOutCircleDuotoneLineIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onText3Click = useCallback(() => {
    navigate("/menu12");
  }, [navigate]);

  return (
    <div className={styles.menu11}>
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
              src="/group-fill@2x.png"
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
            <div className={styles.sup}>
              <div className={styles.phB}>
                <div className={styles.phBChild} />
                <img
                  className={styles.phBItem}
                  alt=""
                  src="/rectangle-4164@2x.png"
                />
                <div className={styles.div8}>
                  <p className={styles.p}>580 ₽</p>
                  <p className={styles.p1}>Фо-бо</p>
                </div>
              </div>
              <div className={styles.phB1}>
                <div className={styles.phBInner} />
                <img
                  className={styles.phBItem}
                  alt=""
                  src="/rectangle-41641@2x.png"
                />
                <div className={styles.div8}>
                  <p className={styles.p}>630 ₽</p>
                  <p className={styles.p1}>Том ям</p>
                </div>
              </div>
              <div className={styles.phB2}>
                <div className={styles.rectangleDiv} />
                <img
                  className={styles.phBItem}
                  alt=""
                  src="/rectangle-41642@2x.png"
                />
                <div className={styles.div8}>
                  <p className={styles.p}>630 ₽</p>
                  <p className={styles.p1}>Фо-бо Саи Таи Лан</p>
                </div>
              </div>
              <div className={styles.phB3}>
                <div className={styles.phBChild2} />
                <img
                  className={styles.phBItem}
                  alt=""
                  src="/rectangle-41643@2x.png"
                />
                <div className={styles.div8}>
                  <p className={styles.p}>580 ₽</p>
                  <p className={styles.p1}>Суп Фо га</p>
                </div>
              </div>
              <div className={styles.phB4}>
                <div className={styles.phBInner} />
                <img
                  className={styles.phBItem}
                  alt=""
                  src="/rectangle-41644@2x.png"
                />
                <div className={styles.div8}>
                  <p className={styles.p}>630 ₽</p>
                  <p className={styles.p1}>Суп Бун том</p>
                </div>
              </div>
              <div className={styles.div13}>Супы</div>
            </div>
            <div className={styles.group} onClick={onFrameContainer2Click}>
              <div className={styles.div14} onClick={onTextClick}>
                Горячие блюда
              </div>
              <div className={styles.frameChild} />
            </div>
            <div className={styles.div15} onClick={onText2Click}>
              Салаты
            </div>
            <div className={styles.div16} onClick={onText1Click}>
              Напитки
            </div>
            <div className={styles.div17} onClick={onText22Click}>
              Десерты
            </div>
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
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameItem} />
        <b
          className={styles.b}
          onClick={onText3Click}
        >{`          Создать `}</b>
      </div>
    </div>
  );
};

export default Menu8;
