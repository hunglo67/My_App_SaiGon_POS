import { FunctionComponent, useCallback } from "react";
import "antd/dist/antd.min.css";
import { DatePicker, Select as AntSelect } from "antd";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./Customer2.module.css";

const Customer2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onChefsHatIconClick = useCallback(() => {
    navigate("/menu11");
  }, [navigate]);

  const onKitchenStoveIconClick = useCallback(() => {
    navigate("/table11");
  }, [navigate]);

  const onLchSContainerClick = useCallback(() => {
    navigate("/history11");
  }, [navigate]);

  const onTimeAtackFillContainerClick = useCallback(() => {
    navigate("/history11");
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

  const onSolidCommunicationUserClick = useCallback(() => {
    navigate("/employee");
  }, [navigate]);

  return (
    <div className={styles.customer11}>
      <div className={styles.customer11Inner}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <DatePicker
            className={styles.frameItem}
            picker="date"
            size="small"
            placeholder="Дата бронирования"
            bordered={true}
            allowClear={false}
          />
          <FormControl
            className={styles.parent}
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
              <MenuItem value="T1">T1</MenuItem>
              <MenuItem value="T2">T2</MenuItem>
              <MenuItem value="T3">T3</MenuItem>
              <MenuItem value="T4">T4</MenuItem>
              <MenuItem value="T5">T5</MenuItem>
              <MenuItem value="T6">T6</MenuItem>
              <MenuItem value="T7">T7</MenuItem>
              <MenuItem value="T8">T8</MenuItem>
              <MenuItem value="T9">T9</MenuItem>
              <MenuItem value="T10">T10</MenuItem>
              <MenuItem value="T11">T11</MenuItem>
              <MenuItem value="T12">T12</MenuItem>
              <MenuItem value="T13">T13</MenuItem>
              <MenuItem value="T14">T14</MenuItem>
              <MenuItem value="T15">T15</MenuItem>
              <MenuItem value="T16">T16</MenuItem>
              <MenuItem value="T17">T17</MenuItem>
              <MenuItem value="T18">T18</MenuItem>
              <MenuItem value="T19">T19</MenuItem>
              <MenuItem value="T20">T20</MenuItem>
              <MenuItem value="T21">T21</MenuItem>
              <MenuItem value="T22">T22</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
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
              <MenuItem value="T1">T1</MenuItem>
              <MenuItem value="T2">T2</MenuItem>
              <MenuItem value="T3">T3</MenuItem>
              <MenuItem value="T4">T4</MenuItem>
              <MenuItem value="T5">T5</MenuItem>
              <MenuItem value="T6">T6</MenuItem>
              <MenuItem value="T7">T7</MenuItem>
              <MenuItem value="T8">T8</MenuItem>
              <MenuItem value="T9">T9</MenuItem>
              <MenuItem value="T10">T10</MenuItem>
              <MenuItem value="T11">T11</MenuItem>
              <MenuItem value="T12">T12</MenuItem>
              <MenuItem value="T13">T13</MenuItem>
              <MenuItem value="T14">T14</MenuItem>
              <MenuItem value="T15">T15</MenuItem>
              <MenuItem value="T16">T16</MenuItem>
              <MenuItem value="T17">T17</MenuItem>
              <MenuItem value="T18">T18</MenuItem>
              <MenuItem value="T19">T19</MenuItem>
              <MenuItem value="T20">T20</MenuItem>
              <MenuItem value="T21">T21</MenuItem>
              <MenuItem value="T22">T22</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
          <FormControl
            className={styles.container}
            variant="filled"
            sx={{
              borderRadius: "0px 0px 0px 0px",
              width: "128px",
              height: "33px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "33px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "33px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "33px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "33px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": { textAlign: "left", p: "0 !important" },
            }}
          >
            <InputLabel color="primary" />
            <Select color="primary" size="small" disableUnderline displayEmpty>
              <MenuItem value="Ожидание">Ожидание</MenuItem>
              <MenuItem value="Прибыл">Прибыл</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
        </div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.frameInner} />
        <FormControl
          className={styles.frameFormcontrol}
          variant="filled"
          sx={{
            borderRadius: "0px 0px 0px 0px",
            width: "128px",
            height: "33px",
            m: 0,
            p: 0,
            "& .MuiInputBase-root": {
              m: 0,
              p: 0,
              minHeight: "33px",
              justifyContent: "center",
              display: "inline-flex",
            },
            "& .MuiInputLabel-root": {
              m: 0,
              p: 0,
              minHeight: "33px",
              display: "inline-flex",
            },
            "& .MuiMenuItem-root": {
              m: 0,
              p: 0,
              height: "33px",
              display: "inline-flex",
            },
            "& .MuiSelect-select": {
              m: 0,
              p: 0,
              height: "33px",
              alignItems: "center",
              display: "inline-flex",
            },
            "& .MuiInput-input": { m: 0, p: 0 },
            "& .MuiInputBase-input": { textAlign: "left", p: "0 !important" },
          }}
        >
          <InputLabel color="primary" />
          <Select color="primary" disableUnderline displayEmpty>
            <MenuItem value="Ожидание">Ожидание</MenuItem>
            <MenuItem value="Прибыл">Прибыл</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
        <div className={styles.wrapper}>
          <div
            className={styles.div}
          >{`          107                                Ольга             +79123634598                                  3                               18:45                          `}</div>
        </div>
        <FormControl
          className={styles.parent1}
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
            <MenuItem value="" />
            <MenuItem value="СT1">СT1</MenuItem>
            <MenuItem value="СT2">СT2</MenuItem>
            <MenuItem value="СT3">СT3</MenuItem>
            <MenuItem value="СT4">СT4</MenuItem>
            <MenuItem value="СT5">СT5</MenuItem>
            <MenuItem value="СT6">СT6</MenuItem>
            <MenuItem value="СT7">СT7</MenuItem>
            <MenuItem value="СT8">СT8</MenuItem>
            <MenuItem value="СT9">СT9</MenuItem>
            <MenuItem value="СT10">СT10</MenuItem>
            <MenuItem value="СT11">СT11</MenuItem>
            <MenuItem value="СT12">СT12</MenuItem>
            <MenuItem value="СT13">СT13</MenuItem>
            <MenuItem value="СT14">СT14</MenuItem>
            <MenuItem value="СT15">СT15</MenuItem>
            <MenuItem value="СТ16">СТ16</MenuItem>
            <MenuItem value="СT17">СT17</MenuItem>
            <MenuItem value="СT18">СT18</MenuItem>
            <MenuItem value="СT19">СT19</MenuItem>
            <MenuItem value="СT20">СT20</MenuItem>
            <MenuItem value="СT21">СT21</MenuItem>
            <MenuItem value="СT22">СT22</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.frameInner} />
        <FormControl
          className={styles.frameFormcontrol}
          variant="filled"
          sx={{
            borderRadius: "0px 0px 0px 0px",
            width: "128px",
            height: "33px",
            m: 0,
            p: 0,
            "& .MuiInputBase-root": {
              m: 0,
              p: 0,
              minHeight: "33px",
              justifyContent: "center",
              display: "inline-flex",
            },
            "& .MuiInputLabel-root": {
              m: 0,
              p: 0,
              minHeight: "33px",
              display: "inline-flex",
            },
            "& .MuiMenuItem-root": {
              m: 0,
              p: 0,
              height: "33px",
              display: "inline-flex",
            },
            "& .MuiSelect-select": {
              m: 0,
              p: 0,
              height: "33px",
              alignItems: "center",
              display: "inline-flex",
            },
            "& .MuiInput-input": { m: 0, p: 0 },
            "& .MuiInputBase-input": { textAlign: "left", p: "0 !important" },
          }}
        >
          <InputLabel color="primary" />
          <Select color="primary" disableUnderline displayEmpty>
            <MenuItem value="Ожидание">Ожидание</MenuItem>
            <MenuItem value="Прибыл">Прибыл</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
        <div className={styles.wrapper}>
          <div
            className={styles.div}
          >{`          109                                Алексей         +79122141445                                 3                               19:00                          `}</div>
        </div>
        <FormControl
          className={styles.parent1}
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
            <MenuItem value="" />
            <MenuItem value="СT1">СT1</MenuItem>
            <MenuItem value="СT2">СT2</MenuItem>
            <MenuItem value="СT3">СT3</MenuItem>
            <MenuItem value="СT4">СT4</MenuItem>
            <MenuItem value="СT5">СT5</MenuItem>
            <MenuItem value="СT6">СT6</MenuItem>
            <MenuItem value="СT7">СT7</MenuItem>
            <MenuItem value="СT8">СT8</MenuItem>
            <MenuItem value="СT9">СT9</MenuItem>
            <MenuItem value="СT10">СT10</MenuItem>
            <MenuItem value="СT11">СT11</MenuItem>
            <MenuItem value="СT12">СT12</MenuItem>
            <MenuItem value="СT13">СT13</MenuItem>
            <MenuItem value="СT14">СT14</MenuItem>
            <MenuItem value="СT15">СT15</MenuItem>
            <MenuItem value="СТ16">СТ16</MenuItem>
            <MenuItem value="СT17">СT17</MenuItem>
            <MenuItem value="СT18">СT18</MenuItem>
            <MenuItem value="СT19">СT19</MenuItem>
            <MenuItem value="СT20">СT20</MenuItem>
            <MenuItem value="СT21">СT21</MenuItem>
            <MenuItem value="СT22">СT22</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
      </div>
      <div className={styles.thanhTri}>
        <div className={styles.taskbarTri} />
        <div className={styles.menu}>
          <div className={styles.div2}>Меню</div>
          <img
            className={styles.chefsHatIcon}
            alt=""
            src="/chefs-hat3.svg"
            onClick={onChefsHatIconClick}
          />
        </div>
        <div className={styles.bn}>
          <div className={styles.div3}>Столы</div>
          <img
            className={styles.kitchenStoveIcon}
            alt=""
            src="/kitchen-stove.svg"
            onClick={onKitchenStoveIconClick}
          />
        </div>
        <div className={styles.thanhTriChild} />
        <div className={styles.khchHng}>
          <img
            className={styles.groupFillIcon}
            alt=""
            src="/group-fill4@2x.png"
          />
          <div className={styles.div4}>Клиенты</div>
        </div>
        <div className={styles.lchS} onClick={onLchSContainerClick}>
          <div
            className={styles.timeAtackFill}
            onClick={onTimeAtackFillContainerClick}
          >
            <img className={styles.subtractIcon} alt="" src="/subtract.svg" />
          </div>
          <div className={styles.div5}>История</div>
        </div>
        <div className={styles.boCo} onClick={onBoCoContainerClick}>
          <img
            className={styles.chartFillIcon}
            alt=""
            src="/chart-fill@2x.png"
          />
          <div className={styles.div6}>Отчеты</div>
        </div>
        <img
          className={styles.signOutCircleDuotoneLineIcon}
          alt=""
          src="/sign-out-circle-duotone-line.svg"
          onClick={onSignOutCircleDuotoneLineIconClick}
        />
        <div className={styles.groupDiv}>
          <div className={styles.div7}>Ло В.Х.</div>
          <div className={styles.div8}>Менеджер</div>
        </div>
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
            onClick={onSolidCommunicationUserClick}
          />
          <div className={styles.div9}>Сотрудник</div>
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
      <div className={styles.c}>Cписок бронирования столов</div>
      <div className={styles.image1} />
      <div className={styles.customer11Child} />
      <div className={styles.div10}>Имя</div>
      <div className={styles.iconChevronRightvariant2} />
      <div className={styles.id}>ID_Клиента</div>
      <div className={styles.div11}>Номер телефона</div>
      <div className={styles.div12}> Стол</div>
      <div className={styles.div13}>Количество</div>
      <div className={styles.div14}>Статус</div>
      <div className={styles.parent4}>
        <div
          className={styles.div15}
        >{`          110                                Наталья          +79012355461                                2                               19:00                          `}</div>
        <FormControl
          className={styles.parent5}
          variant="filled"
          sx={{
            borderRadius: "0px 0px 0px 0px",
            width: "128px",
            height: "33px",
            m: 0,
            p: 0,
            "& .MuiInputBase-root": {
              m: 0,
              p: 0,
              minHeight: "33px",
              justifyContent: "center",
              display: "inline-flex",
            },
            "& .MuiInputLabel-root": {
              m: 0,
              p: 0,
              minHeight: "33px",
              display: "inline-flex",
            },
            "& .MuiMenuItem-root": {
              m: 0,
              p: 0,
              height: "33px",
              display: "inline-flex",
            },
            "& .MuiSelect-select": {
              m: 0,
              p: 0,
              height: "33px",
              alignItems: "center",
              display: "inline-flex",
            },
            "& .MuiInput-input": { m: 0, p: 0 },
            "& .MuiInputBase-input": { textAlign: "left", p: "0 !important" },
          }}
        >
          <InputLabel color="primary" />
          <Select color="primary" disableUnderline displayEmpty>
            <MenuItem value="Ожидание">Ожидание</MenuItem>
            <MenuItem value="Прибыл">Прибыл</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
        <FormControl
          className={styles.parent6}
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
            <MenuItem value="" />
            <MenuItem value="СT1">СT1</MenuItem>
            <MenuItem value="СT2">СT2</MenuItem>
            <MenuItem value="СT3">СT3</MenuItem>
            <MenuItem value="СT4">СT4</MenuItem>
            <MenuItem value="СT5">СT5</MenuItem>
            <MenuItem value="СT6">СT6</MenuItem>
            <MenuItem value="СT7">СT7</MenuItem>
            <MenuItem value="СT8">СT8</MenuItem>
            <MenuItem value="СT9">СT9</MenuItem>
            <MenuItem value="СT10">СT10</MenuItem>
            <MenuItem value="СT11">СT11</MenuItem>
            <MenuItem value="СT12">СT12</MenuItem>
            <MenuItem value="СT13">СT13</MenuItem>
            <MenuItem value="СT14">СT14</MenuItem>
            <MenuItem value="СT15">СT15</MenuItem>
            <MenuItem value="СТ16">СТ16</MenuItem>
            <MenuItem value="СT17">СT17</MenuItem>
            <MenuItem value="СT18">СT18</MenuItem>
            <MenuItem value="СT19">СT19</MenuItem>
            <MenuItem value="СT20">СT20</MenuItem>
            <MenuItem value="СT21">СT21</MenuItem>
            <MenuItem value="СT22">СT22</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
      </div>
      <div className={styles.parent7}>
        <div
          className={styles.div15}
        >{`          108                                Кирилл          +79017234237                                  6                               19:00                          `}</div>
        <FormControl
          className={styles.parent5}
          variant="filled"
          sx={{
            borderRadius: "0px 0px 0px 0px",
            width: "128px",
            height: "33px",
            m: 0,
            p: 0,
            "& .MuiInputBase-root": {
              m: 0,
              p: 0,
              minHeight: "33px",
              justifyContent: "center",
              display: "inline-flex",
            },
            "& .MuiInputLabel-root": {
              m: 0,
              p: 0,
              minHeight: "33px",
              display: "inline-flex",
            },
            "& .MuiMenuItem-root": {
              m: 0,
              p: 0,
              height: "33px",
              display: "inline-flex",
            },
            "& .MuiSelect-select": {
              m: 0,
              p: 0,
              height: "33px",
              alignItems: "center",
              display: "inline-flex",
            },
            "& .MuiInput-input": { m: 0, p: 0 },
            "& .MuiInputBase-input": { textAlign: "left", p: "0 !important" },
          }}
        >
          <InputLabel color="primary" />
          <Select color="primary" disableUnderline displayEmpty>
            <MenuItem value="Ожидание">Ожидание</MenuItem>
            <MenuItem value="Прибыл">Прибыл</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
        <FormControl
          className={styles.parent6}
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
            <MenuItem value="" />
            <MenuItem value="СT1">СT1</MenuItem>
            <MenuItem value="СT2">СT2</MenuItem>
            <MenuItem value="СT3">СT3</MenuItem>
            <MenuItem value="СT4">СT4</MenuItem>
            <MenuItem value="СT5">СT5</MenuItem>
            <MenuItem value="СT6">СT6</MenuItem>
            <MenuItem value="СT7">СT7</MenuItem>
            <MenuItem value="СT8">СT8</MenuItem>
            <MenuItem value="СT9">СT9</MenuItem>
            <MenuItem value="СT10">СT10</MenuItem>
            <MenuItem value="СT11">СT11</MenuItem>
            <MenuItem value="СT12">СT12</MenuItem>
            <MenuItem value="СT13">СT13</MenuItem>
            <MenuItem value="СT14">СT14</MenuItem>
            <MenuItem value="СT15">СT15</MenuItem>
            <MenuItem value="СТ16">СТ16</MenuItem>
            <MenuItem value="СT17">СT17</MenuItem>
            <MenuItem value="СT18">СT18</MenuItem>
            <MenuItem value="СT19">СT19</MenuItem>
            <MenuItem value="СT20">СT20</MenuItem>
            <MenuItem value="СT21">СT21</MenuItem>
            <MenuItem value="СT22">СT22</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
      </div>
      <div className={styles.parent10}>
        <div
          className={styles.div17}
        >{`          106                                Михайл          +79015423624                                  2                               18:45                          `}</div>
        <FormControl
          className={styles.parent5}
          variant="filled"
          sx={{
            borderRadius: "0px 0px 0px 0px",
            width: "128px",
            height: "33px",
            m: 0,
            p: 0,
            "& .MuiInputBase-root": {
              m: 0,
              p: 0,
              minHeight: "33px",
              justifyContent: "center",
              display: "inline-flex",
            },
            "& .MuiInputLabel-root": {
              m: 0,
              p: 0,
              minHeight: "33px",
              display: "inline-flex",
            },
            "& .MuiMenuItem-root": {
              m: 0,
              p: 0,
              height: "33px",
              display: "inline-flex",
            },
            "& .MuiSelect-select": {
              m: 0,
              p: 0,
              height: "33px",
              alignItems: "center",
              display: "inline-flex",
            },
            "& .MuiInput-input": { m: 0, p: 0 },
            "& .MuiInputBase-input": { textAlign: "left", p: "0 !important" },
          }}
        >
          <InputLabel color="primary" />
          <Select color="primary" disableUnderline displayEmpty>
            <MenuItem value="Ожидание">Ожидание</MenuItem>
            <MenuItem value="Прибыл">Прибыл</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
        <FormControl
          className={styles.parent6}
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
            <MenuItem value="" />
            <MenuItem value="СT1">СT1</MenuItem>
            <MenuItem value="СT2">СT2</MenuItem>
            <MenuItem value="СT3">СT3</MenuItem>
            <MenuItem value="СT4">СT4</MenuItem>
            <MenuItem value="СT5">СT5</MenuItem>
            <MenuItem value="СT6">СT6</MenuItem>
            <MenuItem value="СT7">СT7</MenuItem>
            <MenuItem value="СT8">СT8</MenuItem>
            <MenuItem value="СT9">СT9</MenuItem>
            <MenuItem value="СT10">СT10</MenuItem>
            <MenuItem value="СT11">СT11</MenuItem>
            <MenuItem value="СT12">СT12</MenuItem>
            <MenuItem value="СT13">СT13</MenuItem>
            <MenuItem value="СT14">СT14</MenuItem>
            <MenuItem value="СT15">СT15</MenuItem>
            <MenuItem value="СТ16">СТ16</MenuItem>
            <MenuItem value="СT17">СT17</MenuItem>
            <MenuItem value="СT18">СT18</MenuItem>
            <MenuItem value="СT19">СT19</MenuItem>
            <MenuItem value="СT20">СT20</MenuItem>
            <MenuItem value="СT21">СT21</MenuItem>
            <MenuItem value="СT22">СT22</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
      </div>
      <div className={styles.parent13}>
        <div
          className={styles.div18}
        >{`           102                               Ло                   +79017203586                                  2                               18:30                          `}</div>
        <div
          className={styles.div19}
        >{`           104                               Андрей          +79234567890                                  2                               18:30                          `}</div>
        <FormControl
          className={styles.parent14}
          variant="filled"
          sx={{
            borderRadius: "0px 0px 0px 0px",
            width: "128px",
            height: "33px",
            m: 0,
            p: 0,
            "& .MuiInputBase-root": {
              m: 0,
              p: 0,
              minHeight: "33px",
              justifyContent: "center",
              display: "inline-flex",
            },
            "& .MuiInputLabel-root": {
              m: 0,
              p: 0,
              minHeight: "33px",
              display: "inline-flex",
            },
            "& .MuiMenuItem-root": {
              m: 0,
              p: 0,
              height: "33px",
              display: "inline-flex",
            },
            "& .MuiSelect-select": {
              m: 0,
              p: 0,
              height: "33px",
              alignItems: "center",
              display: "inline-flex",
            },
            "& .MuiInput-input": { m: 0, p: 0 },
            "& .MuiInputBase-input": { textAlign: "left", p: "0 !important" },
          }}
        >
          <InputLabel color="primary" />
          <Select color="primary" disableUnderline displayEmpty>
            <MenuItem value="Ожидание">Ожидание</MenuItem>
            <MenuItem value="Прибыл">Прибыл</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
        <FormControl
          className={styles.parent15}
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
            <MenuItem value="" />
            <MenuItem value="СT1">СT1</MenuItem>
            <MenuItem value="СT2">СT2</MenuItem>
            <MenuItem value="СT3">СT3</MenuItem>
            <MenuItem value="СT4">СT4</MenuItem>
            <MenuItem value="СT5">СT5</MenuItem>
            <MenuItem value="СT6">СT6</MenuItem>
            <MenuItem value="СT7">СT7</MenuItem>
            <MenuItem value="СT8">СT8</MenuItem>
            <MenuItem value="СT9">СT9</MenuItem>
            <MenuItem value="СT10">СT10</MenuItem>
            <MenuItem value="СT11">СT11</MenuItem>
            <MenuItem value="СT12">СT12</MenuItem>
            <MenuItem value="СT13">СT13</MenuItem>
            <MenuItem value="СT14">СT14</MenuItem>
            <MenuItem value="СT15">СT15</MenuItem>
            <MenuItem value="СТ16">СТ16</MenuItem>
            <MenuItem value="СT17">СT17</MenuItem>
            <MenuItem value="СT18">СT18</MenuItem>
            <MenuItem value="СT19">СT19</MenuItem>
            <MenuItem value="СT20">СT20</MenuItem>
            <MenuItem value="СT21">СT21</MenuItem>
            <MenuItem value="СT22">СT22</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
      </div>
      <AntSelect
        className={styles.frameAntselect}
        placeholder="Bce"
        style={{ width: "105px" }}
        filterOption={(input: any, option: any) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        virtual={false}
        showArrow={false}
      >
        <AntSelect.Option value="Все">Все</AntSelect.Option>
        <AntSelect.Option value="Прибыл">Прибыл</AntSelect.Option>
        <AntSelect.Option value="Ожидание">Ожидание</AntSelect.Option>
      </AntSelect>
      <div className={styles.frameDiv}>
        <div className={styles.div20}> 1</div>
        <img
          className={styles.iconArrowRight}
          alt=""
          src="/-icon-arrow-right1.svg"
        />
        <img
          className={styles.iconArrowRight1}
          alt=""
          src="/-icon-arrow-right@2x.png"
        />
      </div>
      <div className={styles.div21}>Время</div>
      <div className={styles.rectangleParent1}>
        <div className={styles.frameInner} />
        <FormControl
          className={styles.frameFormcontrol}
          variant="filled"
          sx={{
            borderRadius: "0px 0px 0px 0px",
            width: "128px",
            height: "33px",
            m: 0,
            p: 0,
            "& .MuiInputBase-root": {
              m: 0,
              p: 0,
              minHeight: "33px",
              justifyContent: "center",
              display: "inline-flex",
            },
            "& .MuiInputLabel-root": {
              m: 0,
              p: 0,
              minHeight: "33px",
              display: "inline-flex",
            },
            "& .MuiMenuItem-root": {
              m: 0,
              p: 0,
              height: "33px",
              display: "inline-flex",
            },
            "& .MuiSelect-select": {
              m: 0,
              p: 0,
              height: "33px",
              alignItems: "center",
              display: "inline-flex",
            },
            "& .MuiInput-input": { m: 0, p: 0 },
            "& .MuiInputBase-input": { textAlign: "left", p: "0 !important" },
          }}
        >
          <InputLabel color="primary" />
          <Select color="primary" disableUnderline displayEmpty>
            <MenuItem value="Ожидание">Ожидание</MenuItem>
            <MenuItem value="Прибыл">Прибыл</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
        <div className={styles.wrapper}>
          <div
            className={styles.div}
          >{`           105                               Ирина             +79121235314                                  5                               18:45                          `}</div>
        </div>
        <FormControl
          className={styles.parent1}
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
            <MenuItem value="" />
            <MenuItem value="СT1">СT1</MenuItem>
            <MenuItem value="СT2">СT2</MenuItem>
            <MenuItem value="СT3">СT3</MenuItem>
            <MenuItem value="СT4">СT4</MenuItem>
            <MenuItem value="СT5">СT5</MenuItem>
            <MenuItem value="СT6">СT6</MenuItem>
            <MenuItem value="СT7">СT7</MenuItem>
            <MenuItem value="СT8">СT8</MenuItem>
            <MenuItem value="СT9">СT9</MenuItem>
            <MenuItem value="СT10">СT10</MenuItem>
            <MenuItem value="СT11">СT11</MenuItem>
            <MenuItem value="СT12">СT12</MenuItem>
            <MenuItem value="СT13">СT13</MenuItem>
            <MenuItem value="СT14">СT14</MenuItem>
            <MenuItem value="СT15">СT15</MenuItem>
            <MenuItem value="СТ16">СТ16</MenuItem>
            <MenuItem value="СT17">СT17</MenuItem>
            <MenuItem value="СT18">СT18</MenuItem>
            <MenuItem value="СT19">СT19</MenuItem>
            <MenuItem value="СT20">СT20</MenuItem>
            <MenuItem value="СT21">СT21</MenuItem>
            <MenuItem value="СT22">СT22</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
      </div>
      <div className={styles.rectangleParent2}>
        <div className={styles.frameInner} />
        <FormControl
          className={styles.frameFormcontrol}
          variant="filled"
          sx={{
            borderRadius: "0px 0px 0px 0px",
            width: "128px",
            height: "33px",
            m: 0,
            p: 0,
            "& .MuiInputBase-root": {
              m: 0,
              p: 0,
              minHeight: "33px",
              justifyContent: "center",
              display: "inline-flex",
            },
            "& .MuiInputLabel-root": {
              m: 0,
              p: 0,
              minHeight: "33px",
              display: "inline-flex",
            },
            "& .MuiMenuItem-root": {
              m: 0,
              p: 0,
              height: "33px",
              display: "inline-flex",
            },
            "& .MuiSelect-select": {
              m: 0,
              p: 0,
              height: "33px",
              alignItems: "center",
              display: "inline-flex",
            },
            "& .MuiInput-input": { m: 0, p: 0 },
            "& .MuiInputBase-input": { textAlign: "left", p: "0 !important" },
          }}
        >
          <InputLabel color="primary" />
          <Select color="primary" disableUnderline displayEmpty>
            <MenuItem value="Ожидание">Ожидание</MenuItem>
            <MenuItem value="Прибыл">Прибыл</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
        <div className={styles.wrapper}>
          <div
            className={styles.div}
          >{`           103                               Елена             +79123412446                                  3                               18:30                          `}</div>
        </div>
        <FormControl
          className={styles.parent1}
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
            <MenuItem value="" />
            <MenuItem value="СT1">СT1</MenuItem>
            <MenuItem value="СT2">СT2</MenuItem>
            <MenuItem value="СT3">СT3</MenuItem>
            <MenuItem value="СT4">СT4</MenuItem>
            <MenuItem value="СT5">СT5</MenuItem>
            <MenuItem value="СT6">СT6</MenuItem>
            <MenuItem value="СT7">СT7</MenuItem>
            <MenuItem value="СT8">СT8</MenuItem>
            <MenuItem value="СT9">СT9</MenuItem>
            <MenuItem value="СT10">СT10</MenuItem>
            <MenuItem value="СT11">СT11</MenuItem>
            <MenuItem value="СT12">СT12</MenuItem>
            <MenuItem value="СT13">СT13</MenuItem>
            <MenuItem value="СT14">СT14</MenuItem>
            <MenuItem value="СT15">СT15</MenuItem>
            <MenuItem value="СТ16">СТ16</MenuItem>
            <MenuItem value="СT17">СT17</MenuItem>
            <MenuItem value="СT18">СT18</MenuItem>
            <MenuItem value="СT19">СT19</MenuItem>
            <MenuItem value="СT20">СT20</MenuItem>
            <MenuItem value="СT21">СT21</MenuItem>
            <MenuItem value="СT22">СT22</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
      </div>
      <div className={styles.rectangleParent3}>
        <div className={styles.frameInner} />
        <FormControl
          className={styles.frameFormcontrol}
          variant="filled"
          sx={{
            borderRadius: "0px 0px 0px 0px",
            width: "128px",
            height: "33px",
            m: 0,
            p: 0,
            "& .MuiInputBase-root": {
              m: 0,
              p: 0,
              minHeight: "33px",
              justifyContent: "center",
              display: "inline-flex",
            },
            "& .MuiInputLabel-root": {
              m: 0,
              p: 0,
              minHeight: "33px",
              display: "inline-flex",
            },
            "& .MuiMenuItem-root": {
              m: 0,
              p: 0,
              height: "33px",
              display: "inline-flex",
            },
            "& .MuiSelect-select": {
              m: 0,
              p: 0,
              height: "33px",
              alignItems: "center",
              display: "inline-flex",
            },
            "& .MuiInput-input": { m: 0, p: 0 },
            "& .MuiInputBase-input": { textAlign: "left", p: "0 !important" },
          }}
        >
          <InputLabel color="primary" />
          <Select color="primary" disableUnderline displayEmpty>
            <MenuItem value="Ожидание">Ожидание</MenuItem>
            <MenuItem value="Прибыл">Прибыл</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
        <div className={styles.wrapper}>
          <div
            className={styles.div}
          >{`           101                               Фатима          +79123412564                                  3                               18:30                          `}</div>
        </div>
        <FormControl
          className={styles.parent1}
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
            <MenuItem value="" />
            <MenuItem value="СT1">СT1</MenuItem>
            <MenuItem value="СT2">СT2</MenuItem>
            <MenuItem value="СT3">СT3</MenuItem>
            <MenuItem value="СT4">СT4</MenuItem>
            <MenuItem value="СT5">СT5</MenuItem>
            <MenuItem value="СT6">СT6</MenuItem>
            <MenuItem value="СT7">СT7</MenuItem>
            <MenuItem value="СT8">СT8</MenuItem>
            <MenuItem value="СT9">СT9</MenuItem>
            <MenuItem value="СT10">СT10</MenuItem>
            <MenuItem value="СT11">СT11</MenuItem>
            <MenuItem value="СT12">СT12</MenuItem>
            <MenuItem value="СT13">СT13</MenuItem>
            <MenuItem value="СT14">СT14</MenuItem>
            <MenuItem value="СT15">СT15</MenuItem>
            <MenuItem value="СТ16">СТ16</MenuItem>
            <MenuItem value="СT17">СT17</MenuItem>
            <MenuItem value="СT18">СT18</MenuItem>
            <MenuItem value="СT19">СT19</MenuItem>
            <MenuItem value="СT20">СT20</MenuItem>
            <MenuItem value="СT21">СT21</MenuItem>
            <MenuItem value="СT22">СT22</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
      </div>
      <FormControl
        className={styles.parent22}
        variant="filled"
        sx={{
          borderRadius: "0px 0px 0px 0px",
          width: "128px",
          height: "33px",
          m: 0,
          p: 0,
          "& .MuiInputBase-root": {
            m: 0,
            p: 0,
            minHeight: "33px",
            justifyContent: "center",
            display: "inline-flex",
          },
          "& .MuiInputLabel-root": {
            m: 0,
            p: 0,
            minHeight: "33px",
            display: "inline-flex",
          },
          "& .MuiMenuItem-root": {
            m: 0,
            p: 0,
            height: "33px",
            display: "inline-flex",
          },
          "& .MuiSelect-select": {
            m: 0,
            p: 0,
            height: "33px",
            alignItems: "center",
            display: "inline-flex",
          },
          "& .MuiInput-input": { m: 0, p: 0 },
          "& .MuiInputBase-input": { textAlign: "left", p: "0 !important" },
        }}
      >
        <InputLabel color="primary" />
        <Select color="primary" disableUnderline displayEmpty>
          <MenuItem value="Ожидание">Ожидание</MenuItem>
          <MenuItem value="Прибыл">Прибыл</MenuItem>
        </Select>
        <FormHelperText />
      </FormControl>
      <FormControl
        className={styles.parent23}
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
          <MenuItem value="" />
          <MenuItem value="СT1">СT1</MenuItem>
          <MenuItem value="СT2">СT2</MenuItem>
          <MenuItem value="СT3">СT3</MenuItem>
          <MenuItem value="СT4">СT4</MenuItem>
          <MenuItem value="СT5">СT5</MenuItem>
          <MenuItem value="СT6">СT6</MenuItem>
          <MenuItem value="СT7">СT7</MenuItem>
          <MenuItem value="СT8">СT8</MenuItem>
          <MenuItem value="СT9">СT9</MenuItem>
          <MenuItem value="СT10">СT10</MenuItem>
          <MenuItem value="СT11">СT11</MenuItem>
          <MenuItem value="СT12">СT12</MenuItem>
          <MenuItem value="СT13">СT13</MenuItem>
          <MenuItem value="СT14">СT14</MenuItem>
          <MenuItem value="СT15">СT15</MenuItem>
          <MenuItem value="СТ16">СТ16</MenuItem>
          <MenuItem value="СT17">СT17</MenuItem>
          <MenuItem value="СT18">СT18</MenuItem>
          <MenuItem value="СT19">СT19</MenuItem>
          <MenuItem value="СT20">СT20</MenuItem>
          <MenuItem value="СT21">СT21</MenuItem>
          <MenuItem value="СT22">СT22</MenuItem>
        </Select>
        <FormHelperText />
      </FormControl>
    </div>
  );
};

export default Customer2;
