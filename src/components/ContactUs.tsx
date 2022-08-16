import React from "react";
import {
  Box,
  CardContent,
  CardMedia,
  Collapse,
  Grid,
  IconButton,
  TextField,
} from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import CloseIcon from "@mui/icons-material/Close";
import AlertTitle from "@mui/material/AlertTitle";

interface State {
  name: string;
  email: string;
  message: string;
}

export const regexEmail = `(?:[a-z0-9!#$%&'*+/=?^_\`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_\`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])`;

export const emailRegexCompiled = new RegExp(regexEmail);

interface AlertWProps {
  alertMessage: string;
}

const AlertW = (props: AlertWProps) => {
  const [t] = useTranslation("translation");
  const [open, setOpen] = React.useState(true);
  setTimeout(() => setOpen(false), 5 * 1000);
  return (
    <Collapse in={open}>
      <Alert
        severity="error"
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setOpen(false);
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ mb: 2 }}
      >
        <AlertTitle>{t("error")}</AlertTitle>
        {props.alertMessage}
      </Alert>
    </Collapse>
  );
};

const ContactUs = () => {
  const [t] = useTranslation("translation");

  const [width, setWidth] = React.useState<number>(window.innerWidth);
  const [values, setValues] = React.useState<State>({
    name: "",
    email: "",
    message: "",
  });
  const [alerts, setAlerts] = React.useState<string[]>([]);
  const [errorText, setError] = React.useState<string>("");
  const resetError = () => {
    setError("");
  };
  const validateEmail = (val: string) => {
    if (!val.match(emailRegexCompiled)) {
      setError(t("invalid_email"));
    } else {
      setError("");
    }
  };
  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      // console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
    }

    window.addEventListener("resize", handleResize);
  });
  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  // let percent = 0.85;
  // let marginLeft = 0;
  // let spacing = 2;

  // if (width > 1000) {
  //   percent = 0.45;
  //   marginLeft = 1;
  //   spacing = 0;
  // }
  // const widthCard = width * percent;
  // console.log(widthCard, width, percent)
  const sendRequest = () => {
    //http://semiotics-lab.com:8001/save_request?name=Denis&email=Den20vekfox%40gmail.com&message=sdsadasdasd
    if (values.email && values.name && values.message) {
      const url = new URL("http://semiotics-lab.com:8001/save_request");
      //@ts-ignore
      Object.keys(values).forEach((key) => url.searchParams.append(key, values[key])
      );
      //@ts-ignore
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
        });
    } else {
      const val = [...alerts];
      val.push(t("not all required fields"));
      setAlerts(val);
    }
  };

  return (
    <section id="contact-us">
      <Stack sx={{ width: "100%" }}>
        {alerts.map((msg, ind) => (
          <AlertW alertMessage={msg} key={`alert_${ind}`} />
        ))}
      </Stack>
      <Box className="contactUs-box">
        <div className="contact-us--box">
          <div>
            <Card className="contactUs-box-left">
              <a
                href="https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%86%D0%BD%D1%81%D1%82%D0%B8%D1%82%D1%83%D1%82%D1%81%D1%8C%D0%BA%D0%B0,+18,+%D0%9A%D0%B8%D1%97%D0%B2,+02000/@50.44542,30.5297598,17z/data=!4m5!3m4!1s0x40d4cfacb6c2d3c7:0x6ca1da62cf62c8b6!8m2!3d50.44542!4d30.5319485"
                target="_blank"
                rel="noreferrer"
                className="contactUsMapLink"
              >
                <div className="contactUsMapBlock">
                  <div className="contactUsMapBlock--box-adress">
                    <span className="contactUsMapBlock--header">
                      {t("contact_adress_title")}
                    </span>
                    <a
                      href="https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%86%D0%BD%D1%81%D1%82%D0%B8%D1%82%D1%83%D1%82%D1%81%D1%8C%D0%BA%D0%B0,+18,+%D0%9A%D0%B8%D1%97%D0%B2,+02000/@50.44542,30.5297598,17z/data=!4m5!3m4!1s0x40d4cfacb6c2d3c7:0x6ca1da62cf62c8b6!8m2!3d50.44542!4d30.5319485"
                      className="contactUsMapBlock--adress-link"
                    >
                      {t("contact_adress_descr")}
                    </a>
                  </div>
                  <div>
                    <div className="contactUsMapBlock--box-mail">
                      <span className="contactUsMapBlock--header">
                        {t("contact_email")}
                      </span>
                      <a
                        href="mailto:info@semiotics-lab.com"
                        className="contactUsMapBlock--email-link"
                      >
                        info@semiotics-lab.com
                      </a>
                    </div>
                    <div className="contactUsMapBlock--box-phone">
                      <span className="contactUsMapBlock--header">
                        {t("contact_phone")}
                      </span>
                      <a
                        href="tel:+380666046423"
                        className="contactUsMapBlock---phone-link"
                      >
                        +380666046423
                      </a>
                    </div>
                  </div>
                </div>
                <CardMedia
                  className="contactUsMapImg"
                  component="img"
                  image="/img_1.jpg"
                  alt="green iguana"
                />
              </a>
            </Card>
          </div>
          <div>
            <Card className="contact-us--box-form contactUs-box-right">
              <CardContent className="contact-us--formbox">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="contact-us--form-header"
                >
                  {t("ContactUsHeader")}
                </Typography>
                <br />
                <Grid container direction="column" spacing={1}>
                  <Grid item className="contactUs--container-input">
                    <TextField
                      required
                      fullWidth
                      id="outlined-adornment-amount"
                      value={values.name}
                      onChange={handleChange("name")}
                      autoComplete="name"
                      label={t("Name")}
                      autoFocus={false}
                      className="contactUs--container-input-name"
                    />
                  </Grid>
                  <Grid item className="contactUs--container-input">
                    <TextField
                      required
                      fullWidth
                      id="outlined-adornment-amount"
                      value={values.email}
                      onChange={handleChange("email")}
                      autoComplete="email"
                      label={t("Email")}
                      onBlur={() => {
                        validateEmail(values.email);
                      }}
                      onFocus={resetError}
                      /* @ts-ignore */
                      error={errorText !== ""}
                      /* @ts-ignore */
                      // helperText={errorText}
                      autoFocus={false}
                      className="contactUs--container-input-email"
                    />
                  </Grid>
                  <Grid item className="contactUs--container-input">
                    <TextField
                      required
                      fullWidth
                      id="outlined-adornment-amount"
                      value={values.message}
                      onChange={handleChange("message")}
                      autoComplete="message"
                      label={t("Message")}
                      autoFocus={false}
                      multiline
                      rows={6}
                      className="contactUs--container-input-message"
                    />
                  </Grid>
                  <Grid item className="contactUs--container-input">
                    <Button
                      variant="contained"
                      onClick={sendRequest}
                      color="secondary"
                      className="contactUs--container-input-button"
                    >
                      {t("ContactUsBtn")}
                      <img
                        src="/contactus/icon.svg"
                        alt="#"
                        className="contactUsMapBlock--button-icon"
                        width={"20%"}
                      />
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </div>
        </div>
      </Box>
    </section>
  );
};

export default ContactUs;
