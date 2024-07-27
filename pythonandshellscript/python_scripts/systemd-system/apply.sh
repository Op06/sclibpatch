echo must runs on roo
cp api.service          /usr/lib/systemd/system/api.service        
cp ddns.service         /usr/lib/systemd/system/ddns.service       
cp pythonhttp.service   /usr/lib/systemd/system/pythonhttp.service 


systemctl enable api.service  
systemctl enable ddns.service  
systemctl enable pythonhttp.service

systemctl start api.service  
systemctl start ddns.service  
systemctl start pythonhttp.service

sleep 5s
systemctl status api.service  
systemctl status ddns.service  

systemctl status pythonhttp.service
