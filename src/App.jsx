
import './index.css'
import { 
  BrowserRouter, 
  Routes, 
  Route, 
} from "react-router-dom"
import Hero from './components/Hero'
import Linki from './components/Linki'
import Lekcje from './components/Lekcje'
import Loguj from './components/Loguj'
import Layout from './components/Layout'
import Auth from './components/Auth'
import Wprowadzenie from './lekcje/Wprowadzenie'
import Lekcja1 from './lekcje/Lekcja1'
import Lekcja2 from './lekcje/Lekcja2'
import Lekcja3 from './lekcje/Lekcja3'
import Lekcja4 from './lekcje/Lekcja4'
import Lekcja5 from './lekcje/Lekcja5'
import Lekcja6 from './lekcje/Lekcja6'
import LekcjeLayout from './components/LekcjeLayout'




export default function App() {

  
  return (
<BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Hero />} />
    <Route path="linki" element={<Linki />} />
    <Route path="login" element={<Loguj />}/>
    <Route element={<Auth/>}>
    <Route path="lekcje" element={<Lekcje />}>
    <Route element={<LekcjeLayout />}>
    <Route index element={<Wprowadzenie />}/>
    <Route path="lekcja1" element={<Lekcja1 />}/>
    <Route path="lekcja2" element={<Lekcja2 />}/>
    <Route path="lekcja3" element={<Lekcja3 />}/>
    <Route path="lekcja4" element={<Lekcja4 />}/>
    <Route path="lekcja5" element={<Lekcja5 />}/>
    <Route path="lekcja6" element={<Lekcja6 />}/>
</Route>
</Route>
</Route>
</Route>

   
    </Routes>
    </BrowserRouter>
  )
}






