import "./App.css";
import { TaskBar } from "./components/taskBar/main";
import { TemplateAtalhos } from "./components/templateAtalhos/main";
import { JanelasProvider } from "./contexts/JanelasContext";

function App() {
  return (
  <>
    <JanelasProvider>
      <main className="desktop">
        <section>
          <TemplateAtalhos />
        </section>
        <section>
          <TaskBar />
        </section>
      </main>
    </JanelasProvider>
  </>
  );
}

export default App;
