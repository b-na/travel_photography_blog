import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { countries } from "./Gallery";

export default function MyMap() {
const geoUrl = 'travel_photography_blog/countries-110m.json'
  return (
    <ComposableMap id='map-container'>
      <Geographies id='map' geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography country={geo.properties.name} key={geo.rsmKey} geography={geo} fill={countries.some(x => geo.properties.name === x) ? '#ee582a' : '#e9e9e9'}/>
          ))
        }
      </Geographies>
    </ComposableMap>
  )
}