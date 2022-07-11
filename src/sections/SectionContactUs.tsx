import React from 'react';
import {Box, CardContent, Grid, TextField} from '@mui/material'
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import {useTranslation} from "react-i18next";
import Button from "@mui/material/Button";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
// @ts-ignore
const Map: React.FC<{}> = () => {
};

// function initMap(): void {
//   // The location of Uluru
//   const uluru = { lat: -25.344, lng: 131.031 };
//   // The map, centered at Uluru
//   const map = new google.maps.Map(
//     document.getElementById("map") as HTMLElement,
//     {
//       zoom: 4,
//       center: uluru,
//     }
//   );
//
//   // The marker, positioned at Uluru
//   const marker = new google.maps.Marker({
//     position: uluru,
//     map: map,
//   });
// }
//
// const render = (status: Status): ReactElement => {
//   if (status === Status.FAILURE) return <ErrorComponent />;
//   return <Spinner />;
// };
interface State {
    name: string,
    email: string,
    message: string,
}

export const regexEmail = `(?:[a-z0-9!#$%&'*+/=?^_\`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_\`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])`

export const emailRegexCompiled = new RegExp(regexEmail)

const SectionContactUs = () => {
    const [t,] = useTranslation('translation');

    const [values, setValues] = React.useState<State>({
        name: '',
        email: '',
        message: '',
    });
    const handleChange =
        (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
            setValues({...values, [prop]: event.target.value});
        };
    const [errorText, setError] = React.useState<string>('')
    const resetError = () => {
        setError("")
    }
    const validateEmail = (val: string) => {
        if (!val.match(emailRegexCompiled)) {
            setError(t("invalid_email"))
        } else {
            setError("")
        }
    }


    const sendRequest = () => {
        //http://semiotics-lab.com:8001/save_request?name=Denis&email=Den20vekfox%40gmail.com&message=sdsadasdasd
        const url = new URL('http://semiotics-lab.com:8001/save_request')
        //@ts-ignore
        Object.keys(values).forEach(key => url.searchParams.append(key, values[key]))
        //@ts-ignore
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
            });
    }

    return <Box sx={{width: '100%'}}>
        <section id="contact-us">
            <Grid container>
                <Grid item>
                    <img src="/img_1.png" alt="Map" width="100%"/>
                </Grid>
                <Grid item>
                    <Card sx={{width: '100%'}}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Contact Us
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                text
                            </Typography>
                            <br/>
                            <Grid container direction="column" spacing={1}>
                                <Grid item>
                                    <FormControl fullWidth sx={{m: 1}}>
                                        <InputLabel htmlFor="outlined-adornment-amount">{t("Name")}</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-amount"
                                            value={values.name}
                                            onChange={handleChange('name')}
                                            label={t("Name")}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                       id="outlined-adornment-amount"
                                        value={values.email}
                                        onChange={handleChange('email')}
                                        autoComplete="email"
                                        label={t("Email")}
                                        onBlur={() => {
                                            validateEmail(values.email)
                                        }}
                                        onFocus={resetError}
                                        /* @ts-ignore */
                                        error={errorText !== ''}
                                        /* @ts-ignore */
                                        // helperText={errorText}

                                        autoFocus={false}
                                    />

                                </Grid>
                                <Grid item>
                                    <FormControl fullWidth sx={{m: 1}}>
                                        <InputLabel htmlFor="outlined-adornment-amount">{t("Message")}</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-amount"
                                            value={values.message}
                                            onChange={handleChange('message')}
                                            label={t("Message")}
                                            multiline
                                            rows={4}
                                            required
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" onClick={sendRequest} color="secondary"
                                            endIcon={<SendRoundedIcon/>}
                                    >Send Now</Button>
                                </Grid>
                                {/*<Grid item><TextField id="outlined-basic" label="Outlined" variant="outlined" multiline*/}
                                {/*                      rows={4}/></Grid>*/}
                            </Grid>
                        </CardContent>
                    </Card>

                </Grid>
            </Grid>
        </section>

    </Box>
}

export default SectionContactUs