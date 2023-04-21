import { useCallback } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Input, Button } from "@rneui/themed"

SplashScreen.preventAutoHideAsync();

export default function HomeScreen({ route, navigation }) {
  
    // load fonts success!!
    const [fontsLoaded] = useFonts({
        'Titles': require('../assets/fonts/Demo_ConeriaScript.ttf'),
        'Reg': require('../assets/fonts/GatsbyFLF.ttf'),
        'RegBold': require('../assets/fonts/GatsbyFLF-Bold.ttf'),
        'RegItalic': require('../assets/fonts/GatsbyFLF-Italic.ttf'),
        'RegBoldItalic': require('../assets/fonts/GatsbyFLF-BoldItalic.ttf')
    });

    
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    // calculate the current date
    function GetCurrentDate() {
        let date = new Date().getDate()
        let month = new Date().getMonth() + 1
        let year = new Date().getFullYear()

        // identify the month
        let monthName
        switch(month) {
            case 1:
                monthName = "January"
                break
            case 2:
                monthName = "February"
                break
            case 3: 
                monthName = "March"
                break
            case 4: 
                monthName = "April"
                break
            case 5:
                monthName = "May"
                break
            case 6:
                monthName = "June"
                break
            case 7: 
                monthName = "July"
                break
            case 8:
                monthName = "August"
                break
            case 9:
                monthName = "September"
                break
            case 10:
                monthName = "October"
                break
            case 11:
                monthName = "November"
                break
            case 12:
                monthName = "December"
                break
            default:
                throw new Error("Something went wrong with calculating the month.")
        }

        return (
            <View style={styles.container}>
                <Text><h1 style={{fontFamily: 'Titles', fontSize: '2em'}}>{date} {monthName} {year}</h1></Text>
            </View>
        )
    }

    // categories
    let EXPENSES = [
        {category: "food", expenses: [{amount: 25.89, date:"4/15/2023", notes:"mcdonalds"}]},
        {category: "transport", expenses: [{amount: 40.36, date:"4/10/2023", notes:"uber"}]},
        {category: "rent", expenses: [{amount: 1010.00, date:"4/1/2023", notes:""}]},
        {category: "utilities", expenses: [{amount: 50.83, date:"4/1/2023", notes:""}]},
        {category: "clothing", expenses: [{amount: 36.78, date:"4/13/2023", notes:"target"}]},
        {category: "pet", expenses: [{amount: 5.09, date:"4/19/2023", notes:"cat treats"}]},
        {category: "subscriptions", expenses: [{amount: 10.00, date:"4/16/2023", notes:"hbo"}]}
    ]

    // params
    const params = route.params
    let budget = params.updatedBudget

    return (
        <View style={styles.container} onLayout={onLayoutRootView}>
            <GetCurrentDate />
            <View style={styles.format}>
                <Text style={{marginRight: '1em', marginBottom: '0.3em', fontFamily: 'RegBold', fontSize: '1.5em'}}>Current Budget: {budget}</Text>
                <Button
                    title="Set Budget"
                    titleStyle={{fontFamily: 'RegBold', fontSize:'1.5em'}}
                    onPress={() => navigation.navigate("Budget")}
                    buttonStyle={{width: 150, backgroundColor: "#FEC6DF"}}
                />
            </View>

        <Button
                title="Add Expense"
                onPress={() => navigation.navigate("Expense", {
                    infoArray: EXPENSES
                })}
                titleStyle={{fontFamily: 'RegBold', fontSize:'1.5em'}}
                buttonStyle={{width: 150, backgroundColor: "#FEC6DF"}}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    format: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        textAlign: 'right'
    },
});
