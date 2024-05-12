import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';

const OurMap = () => {
    const customIcon = L.icon({
        iconUrl: 'https://i.ibb.co/1z4RGm6/placeholder-684908-removebg-preview.png',
        iconSize: [32, 32],
      });
    return (
        <div>
          <div className="text-center py-8 ">
             <h2 className=" text-2xl lg:text-4xl font-extrabold">
              Our Hotel Location
             </h2>
              {/* <p className=" pt-6 w-full mx-auto lg:w-9/12">
              Explore the luxury rooms   on our platform.{" "}
               </p> */}
      </div>
             <div className="p-5 relative z-0">
        <MapContainer
        className="w-full h-[50vh] md:h-[60vh] lg:h-[80vh] "
          center={[23.8769, 90.3795]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[23.8759, 90.3795]} icon={customIcon}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
            
        </div>
    );
};

export default OurMap;
