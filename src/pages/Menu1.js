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
import styles from "./Menu1.module.css";

const Menu1 = () => {
  const navigate = useNavigate();

  const onKitchenStoveIconClick = useCallback(() => {
    navigate("/table1");
  }, [navigate]);

  const onKhchHngContainerClick = useCallback(() => {
    navigate("/customer1");
  }, [navigate]);

  const onLchSContainerClick = useCallback(() => {
    navigate("/history");
  }, [navigate]);

  const onBoCoContainerClick = useCallback(() => {
    navigate("/report");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/menu7");
  }, [navigate]);

  const onText1Click = useCallback(() => {
    navigate("/menu1");
  }, [navigate]);

  const onText2Click = useCallback(() => {
    navigate("/menu4");
  }, [navigate]);

  const onText3Click = useCallback(() => {
    navigate("/menu5");
  }, [navigate]);

  const onText4Click = useCallback(() => {
    navigate("/menu3");
  }, [navigate]);

  const onSignOutCircleDuotoneLineIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.menu2}>
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
            <div className={styles.div6}>Продавец</div>
          </div>
          <img
            className={styles.chevronDown2Icon}
            alt=""
            src="/chevrondown-2.svg"
          />
        </div>
        <div className={styles.thanhMunuWrapper}>
          <div className={styles.thanhMunu}>
            <div className={styles.div7}>Горячие блюда</div>
            <div className={styles.thanhMunuChild} />
            <div className={styles.sup}>
              <div className={styles.phB}>
                <div className={styles.phBChild} />
                <img
                  className={styles.phBItem}
                  alt=""
                  src="/rectangle-41645@2x.png"
                />
                <div className={styles.div8}>
                  <p className={styles.p}>499 ₽</p>
                  <p className={styles.p1}>Нем</p>
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
                  src="/rectangle-41646@2x.png"
                />
                <div className={styles.div8}>
                  <p className={styles.p}>599 ₽</p>
                  <p className={styles.p1}>Бун бо</p>
                </div>
                <div className={styles.rectangleGroup}>
                  <div className={styles.frameChild} />
                  <div className={styles.div11}>
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
                <div className={styles.div12}>
                  <p className={styles.p}>619 ₽</p>
                  <p className={styles.p1}>Ком ранг том</p>
                </div>
                <div className={styles.rectangleContainer}>
                  <div className={styles.frameChild} />
                  <div className={styles.div9}>
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
                <div className={styles.div12}>
                  <p className={styles.p}>619 ₽</p>
                  <p className={styles.p1}>Фо сао га</p>
                </div>
                <div className={styles.rectangleContainer}>
                  <div className={styles.frameChild} />
                  <div className={styles.div9}>
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
                <div className={styles.div8}>
                  <p className={styles.p}>599 ₽</p>
                  <p className={styles.p1}>Том чиен су</p>
                </div>
                <div className={styles.rectangleParent1}>
                  <div className={styles.frameChild} />
                  <div className={styles.div9}>
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
                <div className={styles.div8}>
                  <p className={styles.p}>630 ₽</p>
                  <p className={styles.p1}>Ком бо лук лак</p>
                </div>
                <div
                  className={styles.rectangleParent2}
                  onClick={onFrameContainerClick}
                >
                  <div className={styles.frameChild} />
                  <div className={styles.div9}>
                    <span className={styles.span}>{`+ `}</span>
                    <span className={styles.span1}>Добавить</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.div20} onClick={onText1Click}>
              Супы
            </div>
            <div className={styles.div21} onClick={onText2Click}>
              Десерты
            </div>
            <div className={styles.div22} onClick={onText3Click}>
              Напитки
            </div>
            <div className={styles.div23} onClick={onText4Click}>
              Салаты
            </div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <FormControl
            className={styles.group}
            variant="filled"
            sx={{
              borderRadius: "0px 0px 0px 0px",
              width: "60px",
              height: "37px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "37px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "37px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "37px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "37px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": { textAlign: "left", p: "0 !important" },
            }}
          >
            <InputLabel color="primary" />
            <Select color="primary" disableUnderline displayEmpty>
            <MenuItem value="Стол">Стол</MenuItem>
              <MenuItem value="T1">СT1</MenuItem>
              <MenuItem value="T2">СT2</MenuItem>
              <MenuItem value="T3">СT3</MenuItem>
              <MenuItem value="T4">СT4</MenuItem>
              <MenuItem value="T5">СT5</MenuItem>
              <MenuItem value="T6">СT6</MenuItem>
              <MenuItem value="T7">СT7</MenuItem>
              <MenuItem value="T8">СT8</MenuItem>
              <MenuItem value="T9">СT9</MenuItem>
              <MenuItem value="T10">СT10</MenuItem>
              <MenuItem value="T11">СT11</MenuItem>
              <MenuItem value="T12">СT12</MenuItem>
              <MenuItem value="T13">СT13</MenuItem>
              <MenuItem value="T14">СT14</MenuItem>
              <MenuItem value="T15">СT15</MenuItem>
              <MenuItem value="T16">СT16</MenuItem>
              <MenuItem value="T17">СT17</MenuItem>
              <MenuItem value="T18">СT18</MenuItem>
              <MenuItem value="T19">СT19</MenuItem>
              <MenuItem value="T20">СT20</MenuItem>
              <MenuItem value="T21">СT21</MenuItem>
              <MenuItem value="T22">СT22</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
          <textarea className={styles.rectangleTextarea} />
          <div className={styles.frameChild4} />
          <div className={styles.div24}>Перчать на кухнии</div>
          <div className={styles.div25}>Комментария</div>
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
      </div>
    </div>
  );
};

export default Menu1;
