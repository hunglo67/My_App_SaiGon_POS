import { FunctionComponent, useCallback } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./Report3.module.css";

const Report3: FunctionComponent = () => {
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

  const onExpand02IconClick = useCallback(() => {
    navigate("/report");
  }, [navigate]);

  return (
    <div className={styles.report02}>
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
      <div className={styles.x}> X-отчет</div>
      <div className={styles.vectorParent}>
        <img className={styles.frameChild} alt="" src="/rectangle-41881.svg" />
        <div className={styles.frameItem} />
        <div className={styles.div8}>Название Количество Классифицировать</div>
        <div className={styles.div9}>Топ самых продаваемых блюд</div>
        <img
          className={styles.expand02Icon}
          alt=""
          src="/expand021.svg"
          onClick={onExpand02IconClick}
        />
        <div className={styles.frameInner} />
        <div className={styles.div10}>Экспорт</div>
        <div className={styles.rectangleParent}>
          <div className={styles.rectangleDiv} />
          <div className={styles.div11}>
            <p className={styles.saigon}>&nbsp;</p>
            <p className={styles.p1}> Суп бун том 981 02</p>
          </div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.rectangleDiv} />
          <div className={styles.div11}>
            <p className={styles.saigon}>&nbsp;</p>
            <p className={styles.p1}> Том чиен су 914 04</p>
          </div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.rectangleDiv} />
          <div className={styles.div11}>
            <p className={styles.saigon}>&nbsp;</p>
            <p className={styles.p1}> Том ям 897 06</p>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.rectangleDiv} />
          <div className={styles.div14}>
            <p className={styles.saigon}>&nbsp;</p>
            <p className={styles.p1}> Ком бо лук лак 842 08</p>
          </div>
        </div>
        <div className={styles.rectangleParent1}>
          <div className={styles.rectangleDiv} />
          <div className={styles.div11}>
            <p className={styles.saigon}>&nbsp;</p>
            <p className={styles.p1}> Бананы кляре 809 10</p>
          </div>
        </div>
        <div className={styles.div16}>
          <p className={styles.saigon}>&nbsp;</p>
          <p className={styles.p1}> Фо-бо 1200 01</p>
        </div>
        <div className={styles.div17}>
          <p className={styles.saigon}>&nbsp;</p>
          <p className={styles.p1}> Нем 932 03</p>
        </div>
        <div className={styles.div18}>
          <p className={styles.saigon}>&nbsp;</p>
          <p className={styles.p1}> Ком ранг том 909 05</p>
        </div>
        <div className={styles.div19}>
          <p className={styles.saigon}>&nbsp;</p>
          <p className={styles.p1}> Салат хоай том 891 07</p>
        </div>
        <div className={styles.div20}>
          <p className={styles.saigon}>&nbsp;</p>
          <p className={styles.p1}> Бун бо 812 09</p>
        </div>
      </div>
      <FormControl
        className={styles.group}
        variant="filled"
        sx={{
          borderRadius: "0px 0px 0px 0px",
          width: "105px",
          height: "35px",
          m: 0,
          p: 0,
          "& .MuiInputBase-root": {
            m: 0,
            p: 0,
            minHeight: "35px",
            justifyContent: "center",
            display: "inline-flex",
          },
          "& .MuiInputLabel-root": {
            m: 0,
            p: 0,
            minHeight: "35px",
            display: "inline-flex",
          },
          "& .MuiMenuItem-root": {
            m: 0,
            p: 0,
            height: "35px",
            display: "inline-flex",
          },
          "& .MuiSelect-select": {
            m: 0,
            p: 0,
            height: "35px",
            alignItems: "center",
            display: "inline-flex",
          },
          "& .MuiInput-input": { m: 0, p: 0 },
          "& .MuiInputBase-input": { textAlign: "left", p: "0 !important" },
        }}
      >
        <InputLabel color="primary" />
        <Select color="primary" disableUnderline displayEmpty>
          <MenuItem value="Январь">Январь</MenuItem>
          <MenuItem value="Февраль">Февраль</MenuItem>
          <MenuItem value="Март">Март</MenuItem>
          <MenuItem value="Апрель">Апрель</MenuItem>
          <MenuItem value="Май">Май</MenuItem>
          <MenuItem value="Июнь">Июнь</MenuItem>
          <MenuItem value="Июль">Июль</MenuItem>
          <MenuItem value="Август">Август</MenuItem>
          <MenuItem value="Сентябрь">Сентябрь</MenuItem>
          <MenuItem value="Октябрь">Октябрь</MenuItem>
          <MenuItem value="Ноябрь">Ноябрь</MenuItem>
          <MenuItem value="Декабрь">Декабрь</MenuItem>
        </Select>
        <FormHelperText />
      </FormControl>
    </div>
  );
};

export default Report3;
