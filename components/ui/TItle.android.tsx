import {Text , StyleSheet, View, Platform } from "react-native";

let Title = ({children, style}: {children: any, style?: any}) =>
{
  return (
    <View style={[style]}>
      <Text style={styles.title}> {children}</Text>
    </View> 
  )
}

export default Title

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    // fontWeight: 'bold',
    color: '#b235bb',
    textAlign: 'center',
    padding: 12,
    borderWidth: 2,
    borderColor: '#b235bb',
    maxWidth: '80%',
    width: 300
  }
})  