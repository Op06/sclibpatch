cd wallpaper

:A
%RANDOM%
Set /a _rand=(%RANDOM%*73/32768)+1
WallP.exe 0 "1 (%_rand%).jpg"
echo "1 (%_rand%).jpg" %RANDOM%
echo setting random wallpaper 
date /t 
time /t
ping -n 60 127.0.0.1 > nul
goto A