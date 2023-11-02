import { StyleSheet } from "react-native"


export const globalStyles = StyleSheet.create({
    container: {
        padding: 20,
    },
    text: {
        fontFamily: 'Nunito-SemiBold',
        fontSize: 20,
    },
    headerText: {
        fontFamily: 'Nunito-SemiBold',
        fontSize: 23,
        textAlign: "center"
    },
    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        padding: 10,
        fontSize: 18,
        fontFamily: 'Nunito-Regular',
        borderRadius: 6,
        marginBottom: 10,
    },
    errorText: {
        fontFamily: 'Nunito-SemiBold',
        color: 'crimson',
        marginBottom: 3,
    },
})
