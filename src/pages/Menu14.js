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
import styles from "./Menu14.module.css";

const Menu14 = () => {
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
    navigate("/menu6");
  }, [navigate]);

  const onXCircleContainedIconClick = useCallback(() => {
    navigate("/menu11");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/menu11");
  }, [navigate]);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/menu2");
  }, [navigate]);

  const onTextClick = useCallback(() => {
    navigate("/menu2");
  }, [navigate]);

  const onText2Click = useCallback(() => {
    navigate("/menu3");
  }, [navigate]);

  const onText1Click = useCallback(() => {
    navigate("/menu5");
  }, [navigate]);

  const onText22Click = useCallback(() => {
    navigate("/menu4");
  }, [navigate]);

  const onXCircleContainedIcon2Click = useCallback(() => {
    navigate("/menu12");
  }, [navigate]);

  const onFrameContainer12Click = useCallback(() => {
    navigate("/menu12");
  }, [navigate]);

  const onSignOutCircleDuotoneLineIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.menu13}>
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
                <div className={styles.rectangleParent}>
                  <div className={styles.frameChild} />
                  <div className={styles.div9}>
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
                <div
                  className={styles.rectangleGroup}
                  onClick={onFrameContainer2Click}
                >
                  <div className={styles.frameChild} />
                  <div className={styles.div9}>
                    <span className={styles.span}>{`+ `}</span>
                    <span className={styles.span1}>Добавить</span>
                  </div>
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
                <div className={styles.frameDiv}>
                  <div className={styles.frameChild} />
                </div>
              </div>
              <div className={styles.div15}>Супы</div>
              <div className={styles.chevronDown2Parent}>
                <div className={styles.chevronDown2} />
                <div className={styles.frameChild1} />
                <div className={styles.rectangleContainer}>
                  <input className={styles.rectangleInput} type="text" />
                  <input className={styles.frameChild2} type="text" />
                  <a className={styles.group}>
                    <img className={styles.vectorIcon} alt="" />
                    <img
                      className={styles.vectorIcon1}
                      alt=""
                      src="/vector.svg"
                    />
                  </a>
                </div>
                <div className={styles.frameChild3} />
                <div className={styles.div16}>Наименование</div>
                <img
                  className={styles.xCircleContainedIcon}
                  alt=""
                  src="/xcirclecontained1.svg"
                  onClick={onXCircleContainedIconClick}
                />
                <div className={styles.div17}>Изображение</div>
                <div className={styles.div18}>Описание</div>
                <div className={styles.div19}>Цена</div>
                <textarea className={styles.rectangleTextarea} />
                <div className={styles.div20}> Категория</div>
                <div className={styles.id}>ID</div>
                <input className={styles.frameChild4} type="number" />
                <input className={styles.frameChild5} type="text" />
                <FormControl
                  className={styles.container}
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
                    "& .MuiInputBase-input": {
                      textAlign: "left",
                      p: "0 !important",
                    },
                  }}
                >
                  <InputLabel color="primary" />
                  <Select color="primary" disableUnderline displayEmpty>
                    <MenuItem value="Супы">Супы</MenuItem>
                    <MenuItem value="Горячие блюда">Горячие блюда</MenuItem>
                    <MenuItem value="Салаты">Салаты</MenuItem>
                    <MenuItem value="Десерты">Десерты</MenuItem>
                    <MenuItem value="Напитки">Напитки</MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
                <input className={styles.frameChild6} type="text" />
                <b className={styles.b}> Создать новые блюда</b>
                <div
                  className={styles.rectangleParent1}
                  onClick={onFrameContainer1Click}
                >
                  <div className={styles.frameChild7} />
                  <b className={styles.b1}>Сохранить</b>
                </div>
              </div>
            </div>
            <div className={styles.parent1} onClick={onFrameContainer3Click}>
              <div className={styles.div21} onClick={onTextClick}>
                Горячие блюда
              </div>
              <div className={styles.frameChild8} />
            </div>
            <div className={styles.div22} onClick={onText2Click}>
              Салаты
            </div>
            <div className={styles.div23} onClick={onText1Click}>
              Напитки
            </div>
            <div className={styles.div24} onClick={onText22Click}>
              Десерты
            </div>
          </div>
        </div>
        <div className={styles.chevronDown2Group}>
          <div className={styles.chevronDown21} />
          <div className={styles.frameChild9} />
          <div className={styles.rectangleParent2}>
            <input className={styles.frameChild10} type="text" />
            <div className={styles.frameChild11} />
          </div>
          <div className={styles.div25}>Наименование</div>
          <img
            className={styles.xCircleContainedIcon1}
            alt=""
            src="/xcirclecontained1.svg"
            onClick={onXCircleContainedIcon2Click}
          />
          <div className={styles.id1}>ID</div>
          <input className={styles.frameChild12} type="text" />
          <input className={styles.frameChild13} type="text" />
          <b className={styles.b2}>Создать категорию блюд</b>
          <div
            className={styles.rectangleParent3}
            onClick={onFrameContainer12Click}
          >
            <div className={styles.frameChild7} />
            <b className={styles.b3}> Сохранить</b>
          </div>
        </div>
        <div className={styles.tabTrn}>
          <div className={styles.taskbarTrn} />
          <div className={styles.saigonContainer}>
            <p className={styles.saigon}>
              <b>
                <span className={styles.span4}>{`  `}</span>
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
    </div>
  );
};

export default Menu14;
