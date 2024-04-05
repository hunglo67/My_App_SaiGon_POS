import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Table.module.css";

const Table: FunctionComponent = () => {
  const navigate = useNavigate();

  const onChefsHatIconClick = useCallback(() => {
    navigate("/menu1");
  }, [navigate]);

  const onKhchHngContainerClick = useCallback(() => {
    // Please sync "Customer1" to the project
  }, []);

  const onLchSContainerClick = useCallback(() => {
    navigate("/history");
  }, [navigate]);

  const onSignOutCircleDuotoneLineIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onText5Click = useCallback(() => {
    navigate("/menu1");
  }, [navigate]);

  const onText6Click = useCallback(() => {
    navigate("/table2");
  }, [navigate]);

  return (
    <div className={styles.table1}>
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
      <div className={styles.bn4}>
        <div className={styles.bn4Child} />
        <div className={styles.bn4Item} />
        <div className={styles.bn4Inner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.ellipseDiv} />
        <div className={styles.bn4Child1} />
        <div className={styles.div7}> СТ5</div>
      </div>
      <div className={styles.bn2}>
        <div className={styles.bn4Child} />
        <div className={styles.bn4Item} />
        <div className={styles.bn4Inner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.ellipseDiv} />
        <div className={styles.bn4Child1} />
        <div className={styles.div7}> СТ2</div>
      </div>
      <div className={styles.bn5}>
        <div className={styles.bn5Child} />
        <div className={styles.bn4Item} />
        <div className={styles.bn4Inner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.ellipseDiv} />
        <div className={styles.bn4Child1} />
        <div className={styles.div9}> #103</div>
        <div className={styles.div10}> СТ6</div>
      </div>
      <div className={styles.bn3}>
        <div className={styles.bn4Child} />
        <div className={styles.bn4Item} />
        <div className={styles.bn4Inner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.ellipseDiv} />
        <div className={styles.bn4Child1} />
        <div className={styles.div7}> СТ3</div>
      </div>
      <div className={styles.bn7}>
        <div className={styles.bn4Child} />
        <div className={styles.bn4Item} />
        <div className={styles.bn4Inner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.ellipseDiv} />
        <div className={styles.bn4Child1} />
        <div className={styles.div7}> СТ4</div>
      </div>
      <div className={styles.bn8}>
        <div className={styles.bn5Child} />
        <div className={styles.bn4Item} />
        <div className={styles.bn4Inner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.ellipseDiv} />
        <div className={styles.bn4Child1} />
        <div className={styles.div13}> #091</div>
        <div className={styles.div7}> СТ8</div>
      </div>
      <div className={styles.bn6}>
        <div className={styles.bn4Child} />
        <div className={styles.bn4Item} />
        <div className={styles.bn4Inner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.ellipseDiv} />
        <div className={styles.bn4Child1} />
        <div className={styles.div7}> СТ7</div>
      </div>
      <div className={styles.group}>
        <div className={styles.div16}> 1</div>
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
      <div className={styles.table1Child} />
      <div className={styles.div17}>Все</div>
      <div className={styles.div18}>Занято</div>
      <div className={styles.div19}>Вакантно</div>
      <div className={styles.table1Item} />
      <div className={styles.table1Inner} />
      <div className={styles.table1Child1} />
      <div className={styles.div20}> СТОЛ СТ1</div>
      <div className={styles.div21}>Заказ #091</div>
      <div className={styles.bn1}>
        <div className={styles.bn1Child} />
        <div className={styles.bn1Item} />
        <div className={styles.bn1Inner} />
        <div className={styles.bn1Child1} />
        <div className={styles.bn1Child2} />
        <div className={styles.bn1Child3} />
        <div className={styles.div22}>#091</div>
        <div className={styles.div7}> СТ1</div>
      </div>
      <div className={styles.table1Child2} />
      <div className={styles.table1Child3} />
      <div className={styles.div24} onClick={onText5Click}>
        + Добавить блюдо
      </div>
      <div className={styles.div25} onClick={onText6Click}>
        Перейти к оплате
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
    </div>
  );
};

export default Table;
