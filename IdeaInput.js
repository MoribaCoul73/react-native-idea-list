import { useState } from 'react';
import {View, TextInput, Button, StyleSheet, Modal, Image} from 'react-native'
function IdeaInput(props)
{
    const [enteredIdeaText, setEnteredIdeaText] = useState('');


    function ideaInputHandler(enteredText){
        setEnteredIdeaText(enteredText)
        console.log(enteredText)
       }

    function addIdeaHandler(){
        props.onAddIdea(enteredIdeaText);
        setEnteredIdeaText('');
       }


    return (
    <Modal visible={props.visible} animationType="slide">
     <View style={styles.inputContainer}>
       <Image style={styles.image} 
       source={require("./assets/images/goal.png")}
       //source="/some/path/to/goal.png"
        
        />
      <TextInput style={styles.textInput} 
      placeholder='write your idea' 
      onChangeText={ideaInputHandler} />

        <View style={styles.buttonContainer}>

                    <View style={styles.button2}>
                    <Button 
                    title='Add idea' 
                    onPress={addIdeaHandler}
                    color= {"white"}
                    />
                    </View>
                    <View style={styles.button}>
                    <Button 
                    title='cancel'
                    onPress={props.onCancel}
                    color= {"white"}
                    />
                    </View>
     
      
        </View>
      
       
     </View>
     </Modal>
    );
}
export default IdeaInput;

const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
        
        justifyContent:'center',
        alignContent: 'center',
        borderWidth: 1,
        padding:16,
        backgroundColor: '#311b6b'
    
    
       },
       image:{
        width:100,
        height:100,
        margin:20,
        marginLeft:130,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',

        borderRadius: 100,

       },
       textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius:6,
        width:'100%',
        padding: 16,
       },
       buttonContainer:{
        marginTop:16,
        flexDirection: 'row',
        justifyContent: 'center',       
    },
       button:{
        marginHorizontal: 8,
        borderWidth: 1,
        backgroundColor: '#f31282',
        borderRadius:6,
       },
       button2:{
        marginHorizontal: 8,
        borderWidth: 1,
        backgroundColor: '#b180f0',
        borderRadius:6,
       },
       

})

