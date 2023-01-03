import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {

	const shapka = 'What to learn';
	// const shapka2 = 'shapka2';
	const shapka3 = 'What to learn222222';

	const tasks1 = [
		{id: 1, title: "HTML&CSS", isDone: true}, //0
		{id: 2, title: "JS", isDone: true},       //1
		{id: 3, title: "ReactJS", isDone: false}  //2
	]
	const tasks2 = [
		{id: 1, title: "Hello world", isDone: true}, //0
		{id: 2, title: "I am Happy", isDone: false}, //1
		{id: 3, title: "Yo", isDone: false},         //2
		{id: 4, title: "HYo", isDone: false}         //3
	]


	return (
		<div className="App">
			<Todolist shapka={shapka} tasks={tasks1}/> {/*shapka2 = {'shapka2'}*/}
			<Todolist shapka={shapka3} tasks={tasks2}/>
		</div>
	);
}

export default App;

