
import './App.css'
import { useTheme } from './context/ThemeProvidert'

function App() {

   const {theme, setTheme} = useTheme();

   
  return (
    <div style={{ background: theme === 'dark' ? '#333' : '#FFF', color: theme === 'dark' ? '#FFF' : '#333', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '10px', transition: 'all 0.3s ease' }}>
    <div>
      <h1>Dark Mode Toggle</h1>
    <button style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        Toggle to {theme === 'dark' ? 'light' : 'dark'} mode
    </button>
    </div>
    </div>
  )
}

export default App
