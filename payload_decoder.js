// Air Quality Decoder
function Decoder(bytes) {
  
  // Based on https://stackoverflow.com/a/37471538 by Ilya Bursov
  function bytesToFloat(bytes) {
    // JavaScript bitwise operators yield a 32 bits integer, not a float.
    // Assume LSB (least significant byte first).
    var bits = bytes[3]<<24 | bytes[2]<<16 | bytes[1]<<8 | bytes[0];
    var sign = (bits>>>31 === 0) ? 1.0 : -1.0;
    var e = bits>>>23 & 0xff;
    var m = (e === 0) ? (bits & 0x7fffff)<<1 : (bits & 0x7fffff) | 0x800000;
    var f = sign * m * Math.pow(2, e - 150);
    return f;
  }  
    
    var decoded = {};
    decoded.tempmax = bytesToFloat(bytes.slice(0, 3));
    decoded.tempmin = bytesToFloat(bytes.slice(4, 7));  
    decoded.tempavg = bytesToFloat(bytes.slice(8, 11)); 
    decoded.humidmax = bytesToFloat(bytes.slice(12, 15));
    decoded.humidmin = bytesToFloat(bytes.slice(16, 19));
    decoded.humidavg = bytesToFloat(bytes.slice(20, 23));
    decoded.battmax = bytesToFloat(bytes.slice(24, 27));
    decoded.battmin = bytesToFloat(bytes.slice(28, 31));
    decoded.battavg = bytesToFloat(bytes.slice(32, 35));
    decoded.nc05max = bytesToFloat(bytes.slice(36, 39));
    decoded.nc05min = bytesToFloat(bytes.slice(40, 43));
    decoded.nc05avg = bytesToFloat(bytes.slice(44, 47));
    decoded.mc10max = bytesToFloat(bytes.slice(48, 51));
    decoded.mc10min = bytesToFloat(bytes.slice(52, 55));
    decoded.mc10avg = bytesToFloat(bytes.slice(56, 59));
    decoded.nc10max = bytesToFloat(bytes.slice(60, 63));
    decoded.nc10min = bytesToFloat(bytes.slice(64, 67));
    decoded.nc10avg = bytesToFloat(bytes.slice(68, 71));
    decoded.mc25max = bytesToFloat(bytes.slice(72, 75));
    decoded.mc25min = bytesToFloat(bytes.slice(76, 79));
    decoded.mc25avg = bytesToFloat(bytes.slice(80, 83));
    decoded.nc25max = bytesToFloat(bytes.slice(84, 87));
    decoded.nc25min = bytesToFloat(bytes.slice(88, 91));
    decoded.nc25avg = bytesToFloat(bytes.slice(92, 95));
    decoded.mc40max = bytesToFloat(bytes.slice(96, 99));
    decoded.mc40min = bytesToFloat(bytes.slice(100, 103));
    decoded.mc40avg = bytesToFloat(bytes.slice(104, 107));
    decoded.nc40max = bytesToFloat(bytes.slice(108, 111));
    decoded.nc40min = bytesToFloat(bytes.slice(112, 115));
    decoded.nc40avg = bytesToFloat(bytes.slice(116, 119));
    decoded.mc100max = bytesToFloat(bytes.slice(120, 123));
    decoded.mc100min = bytesToFloat(bytes.slice(124, 127));
    decoded.mc100avg = bytesToFloat(bytes.slice(128, 131));
    decoded.nc100max = bytesToFloat(bytes.slice(132, 135));
    decoded.nc100min = bytesToFloat(bytes.slice(136, 139));
    decoded.nc100avg = bytesToFloat(bytes.slice(140, 143));
    decoded.tvocmax = bytesToFloat(bytes.slice(144, 147));
    decoded.tvocmin = bytesToFloat(bytes.slice(148, 151));
    decoded.tvocavg = bytesToFloat(bytes.slice(152, 155));

    return decoded;
  }