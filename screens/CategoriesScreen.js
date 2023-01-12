import { FlatList } from 'react-native'

import { CATEGORIES } from "../data/dummy-data" 
import CategorGridTile from '../components/CategoryGridTile'

function renderCategoryItem(itemData) {
  return (
    <CategorGridTile 
      title={itemData.item.title} 
      color={itemData.item.color} 
    />
  )
}

function CategoriesScreen() {
  return (
    <FlatList 
      data={CATEGORIES} 
      keyExtractor={ (item) => item.id } 
      renderItem={renderCategoryItem} 
    />
  )
}

export default CategoriesScreen