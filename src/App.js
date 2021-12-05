import './index.css';
// import { Task1 } from './Tasks/Task1';
// import { data } from './Task1data';
// import { Task2 } from './Tasks/Task2';
import { Task3 } from './Tasks/Task3';
import { data } from './Task3data';

function App() {
    return (
        <div className="App">
            {/* <Task1 /> */}
            {/* <Task2 array={data} /> */}
            <Task3 data={data} />
        </div>
    );
}

export default App;
