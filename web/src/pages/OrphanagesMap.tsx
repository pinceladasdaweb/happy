import React from 'react'
import 'leaflet/dist/leaflet.css'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import '../styles/pages/orphanages-map.css'
import { Map, TileLayer } from 'react-leaflet'
import mapMarker from '../images/map-marker.svg'

export default function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarker} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Campos Novos</strong>
          <span>Santa Catarina</span>
        </footer>
      </aside>

      <Map
        center={[-27.4006091,-51.223618]}
        zoom={15}
        style={{width: '100%', height: '100%'}}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  )
}