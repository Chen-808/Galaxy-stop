import { createTheme } from '@mui/material/styles'

const galaxyPurple = "#6a57b8"
const galaxyBlue = "#2182c0"

const MainTheme = createTheme({
    palette:{
        primary: {
            main: `${galaxyPurple}` ,
            light: "#76dbe1",
            dark: "#2182c0"
        },
        card:{
            main: `${galaxyBlue}`,
            light: "#a798e3",
            dark: "#373b81"
        }
    }
})

export { MainTheme }