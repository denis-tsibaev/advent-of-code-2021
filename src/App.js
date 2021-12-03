// import { Task1 } from './Tasks/Task1';
import { data } from './Task1data';
import './index.css';
import { Task2 } from './Tasks/Task2';

function App() {
    return (
        <div className="App">
            {/* <Task1 /> */}
            <Task2 array={data} />
        </div>
    );
}

export default App;
