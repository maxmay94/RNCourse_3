import { View, Pressable, Text } from "react-native"

function CategorGridTile({title, color}) {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default CategorGridTile