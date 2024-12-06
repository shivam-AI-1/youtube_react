import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Sidebar from '../src/Components/Sidebar'
import Navbar from '../src/Components/navbar'
import VideoGrid from "../src/Components/Thumbnails";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sidebar />
    <Navbar />
    <VideoGrid />
  </StrictMode>,
)
