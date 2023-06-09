import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React, { useState } from "react"
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading'

// components
import HomeScreen from "./components/Home.js"
import BudgetScreen from './components/Budget.js';
import ExpenseScreen from './components/Expense.js';
import SortScreen from './components/Sort.js';

const Stack = createNativeStackNavigator()

export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} initialParams={{updatedBudget: 0.00, EXPENSES: [], enableButton: true}}/>
        <Stack.Screen name="Budget" component={BudgetScreen}/>
        <Stack.Screen name="Expense" component={ExpenseScreen}/>
        <Stack.Screen name="Sort" component={SortScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
