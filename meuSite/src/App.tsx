import "./App.css";
import { TaskBar } from "./components/taskBar/main";
import { TemplateAtalhos } from "./components/templateAtalhos/main";
import { JanelasProvider } from "./contexts/JanelasContext";
import { IdiomaProvider } from "./contexts/IdiomaProvider";

function App() {
  return (
  <>
    <IdiomaProvider>
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
    </IdiomaProvider>
  </>
  );
}

export default App;
