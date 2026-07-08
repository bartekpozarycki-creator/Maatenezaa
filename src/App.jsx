import './App.css'
import Pages from "@/pages/index.jsx"
import { Toaster } from "@/components/ui/toaster"
import { MobilePerformanceProvider } from "@/context/MobilePerformanceContext.jsx"

function App() {
  return (
    <MobilePerformanceProvider>
      <Pages />
      <Toaster />
    </MobilePerformanceProvider>
  )
}

export default App 