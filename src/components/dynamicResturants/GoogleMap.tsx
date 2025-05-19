import { useState } from "react";
import Wrapper from "../shared/Wrapper";
 
const offices = [
  {
    name: "Germany Office",
    lat: 52.52,
    lng: 13.405,
  },
  {
    name: "UK Office",
    lat: 51.5074,
    lng: -0.1278,
  },
  {
    name: "USA Office",
    lat: 40.7128,
    lng: -74.006,
  },
  {
    name: "Saudi Arabia's Office",
    lat: 24.7136,
    lng: 46.6753,
  },
  {
    name: "AUS Office",
    lat: -33.8688,
    lng: 151.2093,
  },
  {
    name: "South Africa Office",
    lat: -33.9249,
    lng: 18.4241,
  },
];
 
const GoogleMap = () => {
  const [activeOffice] = useState(offices[2]);
 
  return (
    <Wrapper>
    <div className="w-full p-3 md:p-12 bg-white rounded-[12px] shadow-md">
      
      <div className="mapouter relative w-full h-[389px] mb-6">
        <div className="gmap_canvas w-full h-full rounded-[12px]  ">
          <iframe
            title="Google Map"
            className="gmap_iframe w-full h-full "
            src={`https://maps.google.com/maps?width=600&height=400&hl=en&q=${activeOffice.lat},${activeOffice.lng}&t=&z=15&ie=UTF8&iwloc=B&output=embed`}
            
          ></iframe>
        </div>
        <style>
          {`
            .mapouter {
              position: relative;
              width: 100%;
              height: 400px;
            }
            .gmap_canvas {
              overflow: hidden;
              background: none !important;
              width: 100%;
              height: 400px;
            }
            .gmap_iframe {
              width: 100% !important;
              height: 400px !important;
            }
          `}
        </style>
      </div>
      <div className="w-2/6 relative -top-90 left-20 h-auto bg-black rounded-[12px] p-4 flex flex-col justify-center items-start">
        <div>
            <p className="text-[30px] font-bold text-start text-white   ">
          Urban Bistro
        </p>
        <p className="text-green-500">South London</p>
        </div>
        <div>
            <p className="text-white text-lg font-normal">Tooley St, London Bridge, London SE1 2TF,United Kingdom</p>
            <p className="text-white pt-3"> Phone number <br/><span className="text-green-500">+863 674 093 34</span> </p>
            <p className="text-white pt-3"> Website <br/><span className="text-green-500"> http://urban bistro.uk/</span> </p>
        </div>
      </div>
    </div>
    </Wrapper>
  );
};
 
export default GoogleMap;
