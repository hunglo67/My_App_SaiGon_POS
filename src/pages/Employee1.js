import { useCallback } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./Employee1.module.css";

const Employee1 = () => {
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

  const onBoCoContainerClick = useCallback(() => {
    navigate("/report");
  }, [navigate]);

  const onSignOutCircleDuotoneLineIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onXCircleContainedIconClick = useCallback(() => {
    navigate("/employee");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/employee");
  }, [navigate]);

  return (
    <div className={styles.employee1}>
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
      <div className={styles.thanhMunu}>
        <div className={styles.thanhMunuChild} />
        <div className={styles.sup}>
          <div className={styles.supChild} />
          <div className={styles.id}>
            {" "}
            ID ФИО Номер_телефона Почта Пароль Роль
          </div>
        </div>
        <div className={styles.thanhMunuItem} />
        <div
          className={styles.hunglo6720yandexruSg01112}
        >{`02                    Ло В.Х.                      +79252321345                    Hunglo6720@yandex.ru                         SG01112                   Продавец       `}</div>
        <div
          className={styles.hunglo6720gmailcomSg01112}
        >{`01                    Ло В.Х.                      +79017203519                    Hunglo6720@gmail.com                        SG01112                   Менеджер       `}</div>
      </div>
      <div className={styles.chevronDown2Parent}>
        <div className={styles.chevronDown2} />
        <div className={styles.frameChild} />
        <div className={styles.rectangleParent}>
          <div className={styles.frameItem} />
          <FormControl
            className={styles.group}
            variant="filled"
            sx={{
              borderRadius: "0px 0px 0px 0px",
              width: "240px",
              height: "60px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "60px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "60px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "60px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "60px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": { textAlign: "left", p: "0 !important" },
            }}
          >
            <InputLabel color="primary" />
            <Select color="primary" disableUnderline displayEmpty>
              <MenuItem value="Кассир">Кассир</MenuItem>
              <MenuItem value="Продавец">Продавец</MenuItem>
              <MenuItem value="Менеджер">Менеджер</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
          <div className={styles.frameInner} />
          <b className={styles.b}> +</b>
        </div>
        <div className={styles.rectangleDiv} />
        <div className={styles.div8}>ФИО</div>
        <div className={styles.div9}>Номер телефона</div>
        <img
          className={styles.xCircleContainedIcon}
          alt=""
          src="/xcirclecontained.svg"
          onClick={onXCircleContainedIconClick}
        />
        <div className={styles.div10}>Роль</div>
        <div className={styles.div11}>Пароль</div>
        <div className={styles.div12}>Почта</div>
        <input className={styles.rectangleInput} type="text" />
        <div className={styles.id1}> ID</div>
        <input className={styles.frameChild1} type="text" />
        <input className={styles.frameChild2} type="text" />
        <input className={styles.frameChild3} type="text" />
        <input className={styles.frameChild4} type="text" />
        <b className={styles.b1}>Создать нового пользователя</b>
        <div className={styles.rectangleGroup} onClick={onFrameContainer1Click}>
          <div className={styles.frameChild5} />
          <b className={styles.b2}> Сохранить</b>
        </div>
      </div>
      <div className={styles.div13}>Список пользователей</div>
    </div>
  );
};

export default Employee1;
