import {Dimensions} from 'react-native';

export let deviceWidth = Dimensions.get('window').width;

const Styles = {
    color: {
        mediumpurple: '#a47cd0',
        gold: '#ffc200',
        darkslateblue:'#653f90',
        mediumpurple2:'#8a5dbc',
        plum: '#bf93f1',
        darkslategray:'#212529',
        white: '#ffffff'
    },
    ff:{
        Bold: "Causten-Bold",
        ExtraBold: "Causten-ExtraBold",
        Light: "Causten-Light",
        Medium: "Causten-Medium",
        Regular: "Causten-Regular",
        SemiBold: "Causten-SemiBold",
        Thin: "Causten-Thin",
    },
    fs: (size) => (
        deviceWidth>360?size:size-1
    )
}

export default Styles;