import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  Image
} from 'react-native';
import CustomTextInput from './src/Components/CustomTextInput';
import Task from './src/Components/Task';


class App extends Component {
  state = {
    task: [],
    taskComment: '',
    deleteTask: [],
  };

  renderItem = ({item,index}) => {
    console.log(item)
    return (
      <Task
        text={item.name}
        onPress={() => this.onChangeSelection(item.id)}
        isSelected={(item.isSelected)}/>
    );
  };

  returnFalse = (id) => {
    let data = this.state.task.slice()

    let i = this.state.task.findIndex((index) => {
       for(var x=0; x<data.length; x++)
           if(data[x].id == id)
               return x;
      }
    )
  
    data[i].isSelected = false
    this.setState({task : data})
  }

  keyExtractor = (item) => {
    return item;
  };
  addTodoTask = () => {
    let data = {
      name : this.state.taskComment ,
      id : Math.random(), 
      isSelected : false
    }
    this.setState({
      task: [...this.state.task, data],
      taskComment: '',
    });
  };
  onChangeText = (text) => {
    this.setState({taskComment: text});
  };
   removeTodoTask = (index) => {
   let i = this.state.task.findIndex((item) => {

      return item.id == index 
     }
   )
   let data = this.state.task
   console.log(data )
  //  data.splice(i,1)
   this.setState({task : data})
}

onChangeSelection = (id) => {
  console.log(id)
  let data = this.state.task.slice()
  let deleteData = this.state.deleteTask.slice()
  console.log(data)
  data.map(item =>{
  if(item.id === id){
    console.log('here')
    deleteData.push(id)
    const currentSelectionState = item.isSelected
    item.isSelected = !currentSelectionState
    return item
  } 
  return item;
  
})
this.setState({task: data , deleteTask : deleteData})
}
delete = () => {
  const newTaskList = this.state.task.filter(
    item => !this.state.deleteTask.includes(item.id)
  );
  this.setState({ task: newTaskList, deleteTask:[] });
};
    //  this.setState ({deletTask : [...this.state.deletTask , item]})

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.tasks}>
          <View style={styles.header}>
            <Text style={styles.section}>TODO LIST</Text>
            <TouchableOpacity onPress = {() => this.delete()}>
              <Text>Delete</Text>
            </TouchableOpacity>
          </View>
          {/* {/ Task list /} */}
        
          <View style={styles.items}>
            <FlatList
              data={this.state.task}
              renderItem={this.renderItem}
              keyExtractor={(item) => item.index}
            />
          </View>
         
        </View>
        {/* {/ Text Input & Add Button /} */}
        <View style={styles.writeText}>
          <CustomTextInput
            placeholder={'Write a task'}
            value={this.state.taskComment}
            onChangeText={this.onChangeText}
          />

          <TouchableOpacity onPress={() => this.addTodoTask()}>
            <View style={styles.add}>
              <Image
                style={styles.addButton}
                source={require('./img/addbutton.png')}></Image>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tasks: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  section: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 20,
  },
  writeText: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  addButton: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default App;
