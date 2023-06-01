import { createTheme } from '@mui/material/styles'

const MainTheme = createTheme({
    palette:{
        primary: {
            main: "#6a57b8",
            light: "#76dbe1",
            dark: "#2182c0"
        },
        card:{
            main:"#6a57b8",
            light: "#a798e3",
            dark: "#373b81"
        }
    }
})

export { MainTheme }