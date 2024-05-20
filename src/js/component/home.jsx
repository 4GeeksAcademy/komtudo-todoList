import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [todos, setTodos ] = useState([])
	const [inputValue, setInputValue ] = useState("")

	const handleAddItem = () => {
		setTodos([...todos, inputValue])
		setInputValue("")
	}
	const validateInput = () => {
		inputValue === "" ? alert("The input cannot be empty") : handleAddItem()
	}
	const handleKeyEnter = (e) => {
		if (e.key === "Enter") {
			validateInput();
		}
	}
	const handleDelete = (id) => {
		setTodos(todos.filter((_elem, index) => index !== id))
	}

	const checkItemNumber = () => {
		if (todos.length === 0) {
			return "No tienes tareas, agrega alguna."
		} else return `${todos.length} ${todos.length === 1 ? "tarea" : "tareas"} agregadas`
	}
	return (

		<div className="text-center pt-5">
			<h1 className="text-secondary font-monospace mb-0">ToDo List</h1>
			<div className="col-7 col-xl-5 mx-auto mt-3 d-flex flex-column">
				<input id="input" type="text" className="form-control border rounded-0 py-3 px-4 fs-5" placeholder="Que quieres hacer ahora?" 
				onChange={e => 
				setInputValue(e.target.value)} value={inputValue} onKeyDown={handleKeyEnter}/>
				<ul id="list" className="list-group">{todos.map((elem, id) => (
					<li id="list-item" className="text-start list-group-item rounded-0 border-top-0 d-flex align-items-center justify-content-between" key={id}>
						<span className="ms-4 fs-5">{elem}</span>
						<button onClick={() => handleDelete(id)} className="btn-close me-2 hoverX"></button>
					</li>
				))}</ul>
					<p className="text-secondary text-end border border-top-0 pe-4">{checkItemNumber()}</p>
			</div>
		</div>

	);
};

export default Home;
