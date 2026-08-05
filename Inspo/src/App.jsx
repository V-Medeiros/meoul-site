import { useEffect, useRef, useState } from 'react'
import { portfolio, projects } from './data/portfolio'
import './App.css'

const APP_DEFINITIONS = {
  about: { label: 'Sobre mim', icon: 'about', width: 660, height: 480, x: 170, y: 72 },
  projects: { label: 'Projetos', icon: 'projects', width: 760, height: 500, x: 310, y: 105 },
  experience: { label: 'Experiência', icon: 'experience', width: 650, height: 480, x: 245, y: 65 },
  skills: { label: 'Habilidades', icon: 'skills', width: 620, height: 470, x: 380, y: 80 },
  contact: { label: 'Contato', icon: 'contact', width: 610, height: 500, x: 420, y: 120 },
  resume: { label: 'Currículo', icon: 'resume', width: 680, height: 520, x: 210, y: 58 },
  trash: { label: 'Lixeira', icon: 'trash', width: 430, height: 300, x: 500, y: 170 },
}

const appOrder = Object.keys(APP_DEFINITIONS)

function PixelIcon({ type, small = false }) {
  const symbols = {
    about: '☺',
    projects: '▰',
    experience: '▣',
    skills: '✦',
    contact: '✉',
    resume: '▤',
    trash: '♲',
  }

  return (
    <span className={`pixel-icon pixel-icon--${type} ${small ? 'pixel-icon--small' : ''}`} aria-hidden="true">
      {symbols[type]}
    </span>
  )
}

function DesktopIcon({ id, selected, onSelect, onOpen }) {
  const app = APP_DEFINITIONS[id]

  return (
    <button
      className={`desktop-icon ${selected ? 'desktop-icon--selected' : ''}`}
      type="button"
      onClick={() => onSelect(id)}
      onDoubleClick={() => onOpen(id)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onOpen(id)
        }
      }}
      aria-label={`${app.label}. Pressione Enter ou dê um clique duplo para abrir.`}
    >
      <PixelIcon type={app.icon} />
      <span>{app.label}</span>
    </button>
  )
}

function AboutContent() {
  return (
    <div className="about-layout">
      <aside className="profile-card">
        <span className="profile-badge">DISPONÍVEL</span>
        <div className="pixel-avatar" role="img" aria-label="Avatar ilustrado de Alex Silva">
          <span className="avatar-hair" />
          <span className="avatar-face" />
          <span className="avatar-body" />
        </div>
        <h2>{portfolio.name}</h2>
        <p>{portfolio.role}</p>
        <div className="profile-status"><span /> Online para novos projetos</div>
      </aside>

      <section className="about-copy">
        <p className="eyebrow">ARQUIVO: QUEM_SOU.TXT</p>
        <h1>Olá! Eu transformo ideias em experiências digitais.</h1>
        <p>{portfolio.bio}</p>
        <dl className="quick-facts">
          <div><dt>Localização</dt><dd>{portfolio.location}</dd></div>
          <div><dt>Formação</dt><dd>{portfolio.education}</dd></div>
          <div><dt>Idiomas</dt><dd>{portfolio.languages.join(' · ')}</dd></div>
        </dl>
        <p className="placeholder-note">Conteúdo demonstrativo — substitua pelos seus dados.</p>
      </section>
    </div>
  )
}

function ProjectsContent() {
  const [activeProject, setActiveProject] = useState(projects[0])

  return (
    <div className="explorer">
      <div className="explorer-toolbar" aria-label="Barra do explorador">
        <button type="button" disabled aria-label="Voltar">←</button>
        <button type="button" disabled aria-label="Avançar">→</button>
        <span>Local: C:\Portfolio\Projetos</span>
      </div>
      <div className="explorer-body">
        <nav className="folder-tree" aria-label="Pastas de projetos">
          <strong>▾ Meu computador</strong>
          <span>▾ Portfolio</span>
          <span className="folder-active">└ Projetos</span>
          <span>└ Estudos</span>
          <span>└ Experimentos</span>
        </nav>

        <section className="file-pane">
          <div className="file-grid" aria-label="Lista de projetos">
            {projects.map((project) => (
              <button
                key={project.id}
                className={activeProject.id === project.id ? 'file-item file-item--active' : 'file-item'}
                type="button"
                onClick={() => setActiveProject(project)}
              >
                <span className={`project-thumbnail project-thumbnail--${project.color}`} aria-hidden="true">
                  <i />
                  <b>{project.short}</b>
                </span>
                <span>{project.title}</span>
              </button>
            ))}
          </div>

          <article className="project-preview">
            <div>
              <p className="eyebrow">PROJETO SELECIONADO</p>
              <h2>{activeProject.title}</h2>
              <p>{activeProject.description}</p>
            </div>
            <div className="project-meta">
              <span>{activeProject.year}</span>
              {activeProject.tags.map((tag) => <span key={tag}>{tag}</span>)}
              <a href={activeProject.url} onClick={(event) => event.preventDefault()}>
                Visualizar ↗
              </a>
            </div>
          </article>
        </section>
      </div>
      <div className="status-bar">{projects.length} objetos · 1 selecionado</div>
    </div>
  )
}

function ExperienceContent() {
  return (
    <div className="document-view">
      <header className="document-header">
        <p className="eyebrow">HISTÓRICO_PROFISSIONAL.DOC</p>
        <h2>Experiência</h2>
        <p>Uma pequena linha do tempo do trabalho que fiz até aqui.</p>
      </header>
      <div className="timeline">
        {portfolio.experience.map((item, index) => (
          <article key={item.company}>
            <div className="timeline-marker">0{index + 1}</div>
            <div>
              <span className="timeline-date">{item.period}</span>
              <h3>{item.role}</h3>
              <strong>{item.company}</strong>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

function SkillsContent() {
  return (
    <div className="skills-view">
      <header className="document-header">
        <p className="eyebrow">PAINEL_DE_CONTROLE / HABILIDADES</p>
        <h2>Minha caixa de ferramentas</h2>
      </header>
      <div className="skill-grid">
        {portfolio.skills.map((skill, index) => (
          <article key={skill.name}>
            <span className="skill-number">0{index + 1}</span>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
            <div className="meter" aria-label={`Nível demonstrativo de ${skill.name}: ${skill.level}%`}>
              <span style={{ width: `${skill.level}%` }} />
            </div>
          </article>
        ))}
      </div>
      <div className="language-strip">
        <strong>Idiomas:</strong>
        {portfolio.languages.map((language) => <span key={language}>{language}</span>)}
      </div>
    </div>
  )
}

function ContactContent() {
  const [sent, setSent] = useState(false)

  return (
    <div className="contact-view">
      <aside className="contact-sidebar">
        <p className="eyebrow">NOVA_MENSAGEM.MSG</p>
        <h2>Vamos criar algo juntos?</h2>
        <p>Conte sobre sua ideia. Este formulário é demonstrativo e não envia dados reais.</p>
        <div className="contact-links">
          <a href={`mailto:${portfolio.email}`}>✉ {portfolio.email}</a>
          <a href={portfolio.socials.github}>⌘ GitHub</a>
          <a href={portfolio.socials.linkedin}>in LinkedIn</a>
        </div>
      </aside>
      <form
        className="contact-form"
        onSubmit={(event) => {
          event.preventDefault()
          setSent(true)
        }}
      >
        <label>
          Seu nome
          <input name="name" type="text" placeholder="Digite seu nome" required />
        </label>
        <label>
          Seu e-mail
          <input name="email" type="email" placeholder="voce@email.com" required />
        </label>
        <label>
          Mensagem
          <textarea name="message" rows="5" placeholder="Olá, Alex..." required />
        </label>
        <button className="retro-primary" type="submit">Enviar mensagem</button>
        <p className="form-feedback" aria-live="polite">
          {sent ? '✓ Mensagem simulada com sucesso!' : 'Todos os campos são obrigatórios.'}
        </p>
      </form>
    </div>
  )
}

function ResumeContent() {
  return (
    <div className="resume-view">
      <header className="resume-title">
        <div>
          <p className="eyebrow">CURRICULO_VERSAO_FINAL.PDF</p>
          <h2>{portfolio.name}</h2>
          <p>{portfolio.role} · {portfolio.location}</p>
        </div>
        <button type="button" className="retro-primary" onClick={() => window.print()}>Imprimir / Salvar</button>
      </header>
      <div className="resume-columns">
        <section>
          <h3>Perfil</h3>
          <p>{portfolio.bio}</p>
          <h3>Formação</h3>
          <p><strong>{portfolio.education}</strong><br />Universidade Exemplo · 2017—2021</p>
        </section>
        <section>
          <h3>Experiência</h3>
          {portfolio.experience.map((item) => (
            <p key={item.company}><strong>{item.role}</strong><br />{item.company} · {item.period}</p>
          ))}
          <h3>Contato</h3>
          <p>{portfolio.email}<br />{portfolio.location}</p>
        </section>
      </div>
      <p className="placeholder-note">Este currículo contém dados fictícios para demonstração.</p>
    </div>
  )
}

function TrashContent() {
  return (
    <div className="trash-view">
      <PixelIcon type="trash" />
      <h2>A lixeira está vazia</h2>
      <p>Nenhuma ideia boa foi descartada por aqui.</p>
      <span>0 objetos · 0 KB</span>
    </div>
  )
}

function AppContent({ id }) {
  const content = {
    about: <AboutContent />,
    projects: <ProjectsContent />,
    experience: <ExperienceContent />,
    skills: <SkillsContent />,
    contact: <ContactContent />,
    resume: <ResumeContent />,
    trash: <TrashContent />,
  }
  return content[id]
}

function RetroWindow({ id, state, active, onFocus, onClose, onMinimize, onMaximize, onMove }) {
  const app = APP_DEFINITIONS[id]
  const dragRef = useRef(null)

  if (!state.open || state.minimized) return null

  const startDrag = (event) => {
    if (state.maximized || event.button !== 0 || event.target.closest('button')) return
    event.currentTarget.setPointerCapture(event.pointerId)
    dragRef.current = { pointerId: event.pointerId, startX: event.clientX, startY: event.clientY, x: state.x, y: state.y }
  }

  const drag = (event) => {
    const start = dragRef.current
    if (!start || start.pointerId !== event.pointerId) return
    onMove(id, start.x + event.clientX - start.startX, start.y + event.clientY - start.startY)
  }

  const stopDrag = (event) => {
    if (dragRef.current?.pointerId === event.pointerId) dragRef.current = null
  }

  const style = state.maximized
    ? { zIndex: state.z }
    : { width: app.width, height: app.height, left: state.x, top: state.y, zIndex: state.z }

  return (
    <section
      className={`retro-window ${state.maximized ? 'retro-window--maximized' : ''} ${active ? 'retro-window--active' : ''}`}
      style={style}
      onPointerDown={onFocus}
      role="dialog"
      aria-label={`Janela ${app.label}`}
    >
      <header
        className="window-titlebar"
        onPointerDown={startDrag}
        onPointerMove={drag}
        onPointerUp={stopDrag}
        onPointerCancel={stopDrag}
        onDoubleClick={() => onMaximize(id)}
      >
        <div><PixelIcon type={app.icon} small /><strong>{app.label}</strong></div>
        <div className="window-controls">
          <button type="button" onClick={() => onMinimize(id)} aria-label={`Minimizar ${app.label}`}>_</button>
          <button type="button" onClick={() => onMaximize(id)} aria-label={`${state.maximized ? 'Restaurar' : 'Maximizar'} ${app.label}`}>□</button>
          <button type="button" onClick={() => onClose(id)} aria-label={`Fechar ${app.label}`}>×</button>
        </div>
      </header>
      <div className="window-menu" aria-hidden="true"><span>Arquivo</span><span>Editar</span><span>Exibir</span><span>Ajuda</span></div>
      <div className="window-content"><AppContent id={id} /></div>
    </section>
  )
}

function StartMenu({ onOpen, onToggleSound, soundOn }) {
  return (
    <aside className="start-menu" aria-label="Menu principal">
      <div className="start-menu-rail"><span>PIXEL</span><strong>OS</strong></div>
      <div className="start-menu-content">
        <div className="start-profile">
          <div className="mini-avatar">AS</div>
          <div><strong>{portfolio.name}</strong><span>{portfolio.role}</span></div>
        </div>
        <nav>
          {appOrder.slice(0, -1).map((id) => (
            <button type="button" key={id} onClick={() => onOpen(id)}>
              <PixelIcon type={APP_DEFINITIONS[id].icon} small />
              <span><strong>{APP_DEFINITIONS[id].label}</strong><small>Abrir aplicativo</small></span>
            </button>
          ))}
        </nav>
        <div className="menu-footer">
          <button type="button" onClick={onToggleSound} aria-pressed={soundOn}>{soundOn ? '🔊 Sons ligados' : '🔇 Ativar sons'}</button>
          <span>Versão 1.0</span>
        </div>
      </div>
    </aside>
  )
}

function Taskbar({ windows, activeId, menuOpen, onMenu, onTask, soundOn, onToggleSound }) {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <footer className="taskbar">
      <button className={`start-button ${menuOpen ? 'start-button--active' : ''}`} type="button" onClick={onMenu} aria-expanded={menuOpen}>
        <span className="pixel-logo" aria-hidden="true"><i /><i /><i /><i /></span>
        Menu
      </button>
      <div className="task-divider" />
      <div className="task-list" aria-label="Aplicativos abertos">
        {appOrder.filter((id) => windows[id].open).map((id) => (
          <button
            key={id}
            className={activeId === id && !windows[id].minimized ? 'task-button task-button--active' : 'task-button'}
            type="button"
            onClick={() => onTask(id)}
          >
            <PixelIcon type={APP_DEFINITIONS[id].icon} small />
            <span>{APP_DEFINITIONS[id].label}</span>
          </button>
        ))}
      </div>
      <div className="system-tray">
        <button type="button" onClick={onToggleSound} aria-label={soundOn ? 'Desativar sons' : 'Ativar sons'}>{soundOn ? '🔊' : '🔇'}</button>
        <span className="signal" aria-label="Sinal conectado">▥</span>
        <time dateTime={now.toISOString()}>
          <strong>{now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</strong>
          <span>{now.toLocaleDateString('pt-BR')}</span>
        </time>
      </div>
    </footer>
  )
}

function App() {
  const zCounter = useRef(10)
  const [selectedIcon, setSelectedIcon] = useState(null)
  const [activeId, setActiveId] = useState('about')
  const [menuOpen, setMenuOpen] = useState(false)
  const [soundOn, setSoundOn] = useState(() => window.localStorage.getItem('retro-sound') === 'on')
  const [windows, setWindows] = useState(() => Object.fromEntries(
    appOrder.map((id) => [id, {
      open: id === 'about',
      minimized: false,
      maximized: false,
      x: APP_DEFINITIONS[id].x,
      y: APP_DEFINITIONS[id].y,
      z: id === 'about' ? 10 : 1,
    }]),
  ))

  const beep = (frequency = 520) => {
    if (!soundOn) return
    const AudioContext = window.AudioContext || window.webkitAudioContext
    if (!AudioContext) return
    const context = new AudioContext()
    const oscillator = context.createOscillator()
    const gain = context.createGain()
    oscillator.type = 'square'
    oscillator.frequency.value = frequency
    gain.gain.setValueAtTime(0.035, context.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.08)
    oscillator.connect(gain)
    gain.connect(context.destination)
    oscillator.start()
    oscillator.stop(context.currentTime + 0.08)
  }

  const focusWindow = (id) => {
    zCounter.current += 1
    setActiveId(id)
    setWindows((current) => ({
      ...current,
      [id]: { ...current[id], open: true, z: zCounter.current, minimized: false },
    }))
  }

  const openWindow = (id) => {
    focusWindow(id)
    setMenuOpen(false)
    setSelectedIcon(id)
    beep(620)
  }

  const closeWindow = (id) => {
    setWindows((current) => ({ ...current, [id]: { ...current[id], open: false, minimized: false } }))
    setActiveId(null)
    beep(280)
  }

  const minimizeWindow = (id) => {
    setWindows((current) => ({ ...current, [id]: { ...current[id], minimized: true } }))
    setActiveId(null)
    beep(390)
  }

  const toggleMaximize = (id) => {
    focusWindow(id)
    setWindows((current) => ({ ...current, [id]: { ...current[id], maximized: !current[id].maximized } }))
    beep(500)
  }

  const moveWindow = (id, x, y) => {
    const maxX = Math.max(8, window.innerWidth - 260)
    const maxY = Math.max(8, window.innerHeight - 120)
    setWindows((current) => ({
      ...current,
      [id]: { ...current[id], x: Math.min(Math.max(x, 8), maxX), y: Math.min(Math.max(y, 8), maxY) },
    }))
  }

  const handleTask = (id) => {
    if (activeId === id && !windows[id].minimized) minimizeWindow(id)
    else focusWindow(id)
  }

  const toggleSound = () => {
    const next = !soundOn
    setSoundOn(next)
    window.localStorage.setItem('retro-sound', next ? 'on' : 'off')
  }

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  return (
    <main className="desktop" onPointerDown={(event) => {
      if (event.target === event.currentTarget) {
        setSelectedIcon(null)
        setMenuOpen(false)
      }
    }}>
      <a className="skip-link" href="#desktop-icons">Pular para os aplicativos</a>

      <div className="sky-decoration" aria-hidden="true">
        <div className="cloud cloud--one"><i /><i /><i /><i /></div>
        <div className="cloud cloud--two"><i /><i /><i /><i /></div>
        <div className="cloud cloud--three"><i /><i /><i /></div>
        <div className="hill hill--back" />
        <div className="hill hill--front" />
        <div className="grass" />
      </div>

      <header className="desktop-welcome">
        <span>PORTFOLIO.EXE</span>
        <strong>Olá, visitante!</strong>
        <small>Dê um clique duplo em um ícone para começar.</small>
      </header>

      <nav className="desktop-icons" id="desktop-icons" aria-label="Aplicativos do portfólio">
        {appOrder.map((id) => (
          <DesktopIcon
            id={id}
            key={id}
            selected={selectedIcon === id}
            onSelect={setSelectedIcon}
            onOpen={openWindow}
          />
        ))}
      </nav>

      <div className="window-layer">
        {appOrder.map((id) => (
          <RetroWindow
            key={id}
            id={id}
            state={windows[id]}
            active={activeId === id}
            onFocus={() => focusWindow(id)}
            onClose={closeWindow}
            onMinimize={minimizeWindow}
            onMaximize={toggleMaximize}
            onMove={moveWindow}
          />
        ))}
      </div>

      {menuOpen && <StartMenu onOpen={openWindow} onToggleSound={toggleSound} soundOn={soundOn} />}

      <Taskbar
        windows={windows}
        activeId={activeId}
        menuOpen={menuOpen}
        onMenu={() => setMenuOpen((open) => !open)}
        onTask={handleTask}
        soundOn={soundOn}
        onToggleSound={toggleSound}
      />
    </main>
  )
}

export default App
