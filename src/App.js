import { Task1 } from './Tasks/Task1';
import { Task2 } from './Tasks/Task2';
import { data } from './Task1data';
import './index.css';

function App() {
    return (
        <div className="App">
            <Task1 array={data} />
            <Task2 />
        </div>
    );
}

export default App;
