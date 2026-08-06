import "./App.css";
import { TaskBar } from "./components/taskBar/main";
import { TemplateAtalhos } from "./components/templateAtalhos/main";

function App() {
  return (
    <>
      <main className="desktop">
        <section>
          <TemplateAtalhos />
        </section>
        <section>
          <TaskBar nome="silva"/>
        </section>
      </main>
    </>
  );
}

export default App;
