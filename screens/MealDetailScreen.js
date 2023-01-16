import { useLayoutEffect } from "react"
import { Text, View, StyleSheet, FlatList } from "react-native"
import { MEALS, CATEGORIES } from "../data/dummy-data"
import MealItem from "../components/MealItem"

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId
  return (
    <View style={styles.container}>
      <Text>This is the Meal Detail Screen: {mealId}</Text>
    </View>
  )
}

export default MealDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  }
})