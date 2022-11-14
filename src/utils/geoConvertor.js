import proj4 from 'proj4';


const geoConventor = (coordinates) => {

    proj4.defs(
        "EPSG:6335000", 
        "+proj=tmerc +lat_0=55.66666666667 +lon_0=37.5 +k=1 +x_0=0 +y_0=0.63 +ellps=BESSEL +towgs84=316.151, 78.924, 589.650, 1.57273, -2.69209, -2.34693, 8.4507 +units=m +no_defs"
      );
      
    proj4.defs(
        "EPSG:WGS84", 
        "+proj=longlat +datum=WGS84 +no_defs"
      );

    return proj4('EPSG:6335000', 'EPSG:WGS84', coordinates)

}

export default geoConventor;
