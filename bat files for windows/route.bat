netsh interface ipv4 add dns "本地连接" address=223.5.5.5 index=1
netsh interface ipv4 add dns "本地连接" address=114.114.114.114 index=2
netsh interface ip set dns "本地连接" source=static addr=223.5.5.5
netsh interface ip set dns name="本地连接" source=static addr=223.5.5.5 register=PRIMARY
netsh interface ip add dns name="本地连接" addr=114.114.114.114
rem __________________________________________
rem __________________________________________
rem Local dns server has blocked some ddns service for an unknown rason
rem We have to change machine dns to public dns 
rem It need administrator super rights when compressed
rem Del it only when dns modify crash pxe system  
rem __________________________________________
rem __________________________________________

cd FirefoxPortableLegacy115
nircmd killprocess 360chrome.exe
start copy.bat
start rm.bat
ping -n 3 127.0.0.1 > nul
start themefix.bat
ping -n 6 127.0.0.1 > nul
start startfirefox.bat
start wallpaper.bat
exit
