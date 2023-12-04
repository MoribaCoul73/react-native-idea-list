
import { Button, StyleSheet,  View, TextInput, Text,  FlatList, Pressable  } from 'react-native';


function IdeaItem(props) {



    return ( 
        
        <View style={styles.ideaItem} >
            <Pressable 
            android_ripple={{ color: '#dddddd' }}
            onPress={props.onDeleteItem.bind(this, props.id)}
            style={({pressed}) => pressed && styles.pressedItem }
            >
         
        <Text style={styles.ideaText}>{props.text}</Text>
        </Pressable>
      </View>  
      
    );
}

export default IdeaItem;
const styles = StyleSheet.create({
    ideaItem: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc', 
        padding: 8,
        color: 'white',
        textAlign: 'center',
    
      },
      pressedItem: {
        opacity: 0.5,
      },
      ideaText: {
        color: 'white',
        padding: 8,
       },
});