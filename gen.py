a = 8
b = 11
y = 0
size = 164
print(f'decoded.lat = bytesToFloat(bytes.slice(0, 3));')
print(f'decoded.lon = bytesToFloat(bytes.slice(4, 7));')
while b <= size:
    val = ['temp','humid','batt','nc05','mc10','nc10','mc25','nc25','mc40','nc40','mc100','nc100','tvoc']
    print(f'decoded.{val[y]}max = bytesToFloat(bytes.slice({a}, {b}));')
    print(f'decoded.{val[y]}min = bytesToFloat(bytes.slice({a+4}, {b+4}));')
    print(f'decoded.{val[y]}avg = bytesToFloat(bytes.slice({a+8}, {b+8}));')
    a+=12
    b+=12
    y+=1
