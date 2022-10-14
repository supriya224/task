import './App.css';
import FormInput from './component/FormInput';
import Footer from './component/Footer'
import  List from './component/List'
import {DataProvider} from './component/DataProvider'

function App() {
  return (
   <DataProvider>
      <div className="App">
        <h1>real life system</h1>
        <FormInput />
        <List />
        <Footer />
      </div>
    </DataProvider>
  );
}

export default App;
