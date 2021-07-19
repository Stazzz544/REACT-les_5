import './App.css';
import React from 'react';
import { useState } from 'react';



function App() {
	//states
	const [st1, setSt1] = useState();
	const [st2, setSt2] = useState(0);
	const [st3, setSt3] = useState();
	const [st4, setSt4] = useState(0);
	const [st5, setSt5] = useState();
	const [st6, setSt6] = useState();
	const [st7, setSt7] = useState();
	//refs
	let inp1 = React.createRef();
	//vars
	let numTaks2 = 0;


  function task1() {
		setSt1(inp1.current.value);
  }
  function task2() {
		let count = st2;
		count++
		setSt2(count);
  }
  function task3(e) {
	  setSt3(e.target.value)
  }
  function task4() {
	   let count = st4;
		count++;
		setSt4(count);
  }
  function task5(e) {
		if (e.target.checked) {
			setSt5(e.target.value);
		} else {
			setSt5(0);
		}
  }
  function task6(e) {
	setSt6(e.target.value);
  }

  function task7() {
	let r = randomInt(0, 255),
		 g = randomInt(0, 255),
		 b = randomInt(0, 255);

	setSt7('background-color: rgb(1,2,3)')

	function randomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	 }
  }
  function task8() {

  }
  function task9() {

  }
  function task10() {

  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
		<input type="text" ref={inp1}/>
        <button onClick={task1} className="task-1">Push</button>
        <div>{st1}</div>
      </section>

       <section>
        <h2>Task 2</h2>
        <div onMouseEnter={task2} className="task-2"></div>
        <div>{st2}</div>
      </section>

      <section>
        <h2>Task 3</h2>
        <input onInput={task3} type="text" className="task-3"/>
        <div>{st3}</div>
      </section>

      <section>
        <h2>Task 4</h2>
        <button onClick={task4} className="task-4">Count</button>
        <div>{st4}</div>
      </section>

      <section>
        <h2>Task 5</h2>
        <input onChange={task5} type="checkbox" currentValue="55" />
        <div>{st5}</div>
      </section>

      <section>
        <h2>Task 6</h2>
        <select onChange={task6} className="task-6">
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div>{st6}</div>
      </section>

     <section>
        <h2>Task 7</h2>
        <div className="block-7"></div>
        <button onClick={task7} className="task-7">Color</button>
        <div style={st7}></div>
      </section>

   {/*    <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8"></input>
        <div>{st8}</div>
      </section>

      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9"></input>
        <div>{st9}</div>
      </section>

      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10"></input>
        <button className="task-10">Push</button>
        <div>Тут выводим - форма вывода любая!</div>
      </section> */}
    </>
  );
}

export default App;
