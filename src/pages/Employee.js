import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Employee.module.css";

const Employee = () => {
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

  const onTimeAtackFillContainerClick = useCallback(() => {
    navigate("/history");
  }, [navigate]);

  const onBoCoContainerClick = useCallback(() => {
    navigate("/report");
  }, [navigate]);

  const onSignOutCircleDuotoneLineIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/employee1");
  }, [navigate]);

  const onText1Click = useCallback(() => {
    navigate("/employee1");
  }, [navigate]);

  return (
    <div className={styles.employee}>
      <div className={styles.thanhTri}>
        <div className={styles.taskbarTri} />
        <div className={styles.menu}>
          <div className={styles.div}>Меню</div>
          <img
            className={styles.chefsHatIcon}
            alt=""
            src="/chefs-hat4.svg"
            onClick={onChefsHatIconClick}
          />
        </div>
        <img className={styles.thanhTriChild} alt="" src="/rectangle-11.svg" />
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
        <div className={styles.lchS}>
          <div
            className={styles.timeAtackFill}
            onClick={onTimeAtackFillContainerClick}
          >
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
          <div className={styles.div5}>Сотрудник</div>
        </div>
        <div className={styles.parent}>
          <div className={styles.div6}>Ло В.Х.</div>
          <div className={styles.div7}>Менеджер</div>
        </div>
        <img
          className={styles.chevronDown2Icon}
          alt=""
          src="/chevrondown-2.svg"
        />
        <img
          className={styles.signOutCircleDuotoneLineIcon}
          alt=""
          src="/sign-out-circle-duotone-line.svg"
          onClick={onSignOutCircleDuotoneLineIconClick}
        />
        <img
          className={styles.solidcommunicationuserIcon}
          alt=""
          src="/solidcommunicationuser1.svg"
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
      <b className={styles.b}>{`          Создать `}</b>
      <div className={styles.employeeChild} onClick={onRectangleClick} />
      <div className={styles.thanhMunu}>
        <div className={styles.thanhMunuChild} />
        <div className={styles.sup}>
          <div className={styles.supChild} />
          <div
            className={styles.id}
          >{`ID                      Ф.И.О                            Номер телефон                                     Почта                                           Пароль                        Роль   `}</div>
        </div>
        <div className={styles.thanhMunuItem} />
        <div
          className={styles.lovanhunggmailcomSg01113}
        >{`03                      Ло В.Х.                         +79251838763                      Lovanhung@gmail.com                       SG01113                     Кассир          `}</div>
        <div
          className={styles.hunglo6720yandexruSg01112}
        >{`02                      Ло В.Х.                         +79252321345                     Hunglo6720@yandex.ru                      SG01112                    Продавец       `}</div>
        <div
          className={styles.hunglo6720gmailcomSg01112}
        >{`01                      Ло В.Х.                         +79017203519                     Hunglo6720@gmail.com                     SG01112                    Менеджер       `}</div>
      </div>
      <b className={styles.b1} onClick={onText1Click}>{`          Создать `}</b>
      <div className={styles.div8}>Список пользователей</div>
    </div>
  );
};

export default Employee;
