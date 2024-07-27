nircmd.exe exec show "%windir%\system32\msdt.exe " /id AeroDiagnostic
ping -n 2 127.0.0.1 > nul
nircmd.exe sendkey alt down
nircmd.exe sendkey n down
nircmd.exe sendkey alt up
nircmd.exe sendkey n up
ping -n 30 127.0.0.1 > nul
nircmd.exe killprocess "%windir%\system32\msdt.exe"
exit

