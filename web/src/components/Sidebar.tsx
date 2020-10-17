import React from 'react'
import '../styles/components/sidebar.css'
import { FiArrowLeft } from 'react-icons/fi'
import { useHistory } from 'react-router-dom'
import mapMarker from '../images/map-marker.svg'

export default function Sidebar () {
  const { goBack } = useHistory()

  return (
    <aside className="app-sidebar">
      <img src={mapMarker} alt="Happy" />

      <footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#fff" />
        </button>
      </footer>
    </aside>
  )
}
