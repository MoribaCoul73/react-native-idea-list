import { useState } from 'react';
import React from 'react';
import { Provider } from 'react';
import { StatusBar } from 'expo-status-bar';
import {  StyleSheet,  View,   FlatList, Button } from 'react-native';
import IdeaItem  from './IdeaItem'; 
import IdeaInput from './IdeaInput';
export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  // const [enteredIdeaText, setEnteredIdeaText] = useState('');
  const [courseIdeas, setCourseIdeas] = useState([]);
  // function ideaInputHandler(enteredText){
  //  setEnteredIdeaText(enteredText)
  // }


  function StartAddIdeaHandler() {
    setModalIsVisible(true);
  }

  function EndAddIdeaHandler() {
    setModalIsVisible(false);
    //console.log("EndAddIdeaHandle");
  }

  function addIdeaHandler(enteredIdeaText) {
    setCourseIdeas(currentCourseIdeas => [
      ...currentCourseIdeas, 
      {text: enteredIdeaText, id: Math.random().toString()},
    ]);
    EndAddIdeaHandler
  }





  function deleteIdeaHandler(id) {
    setCourseIdeas((currentCourseIdeas) =>{

     return currentCourseIdeas.filter((idea) => idea.id !== id);
    });
    }






  return (

<>

  <StatusBar style="light"/>
  




  <View style={styles.Appcontainer} >
    <Button title='Add New Idea'
    color="#a065ec"
    onPress={StartAddIdeaHandler}
    />
   < IdeaInput 
   visible={modalIsVisible} 
   onAddIdea={addIdeaHandler} 
   onCancel={EndAddIdeaHandler}
   />
    
        <View style={styles.ideasContainer}> 
            <FlatList data={courseIdeas} renderItem={(itemData) => {
              return (
              <IdeaItem 
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteIdeaHandler} 
                />
              );

            }} 
            keyExtractor={(item, index) =>{
              return item.id;
            }}
            alwaysBounceVertical={false}
            />
            
              
              {/* </FlatList> */}
          </View>
    </View>
    </>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Appcontainer:{
    flex: 1,
    paddingTop:50,
    paddingHorizontal: 16,
     backgroundColor: '#1e085a',
    
  },
   ideasContainer:{
   // flex:2,
   //backgroundColor: '#fff',

   },
});
