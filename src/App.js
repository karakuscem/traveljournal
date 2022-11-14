import './Styles/styles.css';
import Navbar from "./Components/Navbar";
import Content from './Components/Content';
import Data from './Components/Data';

export default function App() {
    const allContent = Data.map((content) => {
        return (
            <Content
                key={content.id}
                content={content}
            />);
    });
    return (
        <div className="App">
            <Navbar />
            <section className="cards">
                {allContent}
            </section>
        </div>
    );
}