import React,{ useEffect, useState} from 'react';
import{ Link }from 'react-router-dom';
import { FiPlus,FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import mapMarkerImg from '../images/map-marker.svg';
import mapIcon from '../utils/mapIcon';
import app from '../services/api';



import '../styles/pages/OrphanagesMap.css';

interface Orphanage{
    id: number;
    name: string
    latitude: number;
    longitude: number;
}

function OrpanagesMap(){
    const [ orphanages, setOrphanages] = useState<Orphanage[]>([]);

    useEffect(()=>{
        app.get('orphanages').then(response => {
            setOrphanages(response.data);           
        });
    },[]);

    return(
       <div id="page-map">
           <aside>
               <header>
                   <img src={mapMarkerImg} alt="Happy"/>

                   <h2>Escolha um orfanato no mapa</h2>
                   <p>
                   Muitas crianças estão
                   esperando a sua visita :)
                   </p>
               </header>

               <footer>
                   <strong>São Bernardo do Campo</strong>
                   <span>São Paulo</span>
               </footer>
           </aside>

           <Map
           center={[-23.7096015,-46.577663]}
           zoom={15}
           style={{width:'100%',height:'100%'}}
           >
              <TileLayer 
               url={"https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"} 
              />

             
            {orphanages.map(orphanages => {
                return(
                    <Marker 
                    icon={mapIcon}
                    position={[orphanages.latitude,orphanages.longitude]}
                    key={orphanages.id}
                 >
                     <Popup closeButton= {false} minWidth={240} maxHeight= {240} className='map-popup'>
                       {orphanages.name}
                       <Link to={`/orphanages/${orphanages.id}`}>
                           <FiArrowRight size={20} color="#fff"/>
                       </Link>
                     </Popup>
                 </Marker>
                )
            })}
           </Map>

           <Link to='/orphanage/create' className='create-orphanage'>
               <FiPlus size={32}  color="#fff"/>
           </Link>
       </div>
    );
}

export default OrpanagesMap;