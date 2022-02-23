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
    decoded.val1max = bytesToFloat(bytes.slice(0, 3));
    decoded.val1min = bytesToFloat(bytes.slice(4, 7));  
    decoded.val1avg = bytesToFloat(bytes.slice(8, 11)); 
    decoded.val2max = bytesToFloat(bytes.slice(12, 15));
    decoded.val2min = bytesToFloat(bytes.slice(16, 19));
    decoded.val2avg = bytesToFloat(bytes.slice(20, 23));
    decoded.val3max = bytesToFloat(bytes.slice(24, 27));
    decoded.val3min = bytesToFloat(bytes.slice(28, 31));
    decoded.val3avg = bytesToFloat(bytes.slice(32, 35));
    decoded.val4max = bytesToFloat(bytes.slice(36, 39));
    decoded.val4min = bytesToFloat(bytes.slice(40, 43));
    decoded.val4avg = bytesToFloat(bytes.slice(44, 47));
    decoded.val5max = bytesToFloat(bytes.slice(48, 51));
    decoded.val5min = bytesToFloat(bytes.slice(52, 55));
    decoded.val5avg = bytesToFloat(bytes.slice(56, 59));
    decoded.val6max = bytesToFloat(bytes.slice(60, 63));
    decoded.val6min = bytesToFloat(bytes.slice(64, 67));
    decoded.val6avg = bytesToFloat(bytes.slice(68, 71));
    decoded.val7max = bytesToFloat(bytes.slice(72, 75));
    decoded.val7min = bytesToFloat(bytes.slice(76, 79));
    decoded.val7avg = bytesToFloat(bytes.slice(80, 83));
    decoded.val8max = bytesToFloat(bytes.slice(84, 87));
    decoded.val8min = bytesToFloat(bytes.slice(88, 91));
    decoded.val8avg = bytesToFloat(bytes.slice(92, 95));
    decoded.val9max = bytesToFloat(bytes.slice(96, 99));
    decoded.val9min = bytesToFloat(bytes.slice(100, 103));
    decoded.val9avg = bytesToFloat(bytes.slice(104, 107));
    decoded.val10max = bytesToFloat(bytes.slice(108, 111));
    decoded.val10min = bytesToFloat(bytes.slice(112, 115));
    decoded.val10avg = bytesToFloat(bytes.slice(116, 119));
    decoded.val11max = bytesToFloat(bytes.slice(120, 123));
    decoded.val11min = bytesToFloat(bytes.slice(124, 127));
    decoded.val11avg = bytesToFloat(bytes.slice(128, 131));
    decoded.val12max = bytesToFloat(bytes.slice(132, 135));
    decoded.val12min = bytesToFloat(bytes.slice(136, 139));
    decoded.val12avg = bytesToFloat(bytes.slice(140, 143));
    decoded.val13max = bytesToFloat(bytes.slice(144, 147));
    decoded.val13min = bytesToFloat(bytes.slice(148, 151));
    decoded.val13avg = bytesToFloat(bytes.slice(152, 155));
    decoded.val14max = bytesToFloat(bytes.slice(156, 159));
    decoded.val14min = bytesToFloat(bytes.slice(160, 163));
    decoded.val14avg = bytesToFloat(bytes.slice(164, 167));
    decoded.val15max = bytesToFloat(bytes.slice(168, 171));
    decoded.val15min = bytesToFloat(bytes.slice(172, 175));
    decoded.val15avg = bytesToFloat(bytes.slice(176, 179));

    return decoded;
  }