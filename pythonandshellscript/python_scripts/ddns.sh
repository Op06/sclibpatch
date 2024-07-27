SUBDOMAIN=ia32
TOKEN=
IP=`ip a | grep 192.168.122 | grep -oP '(?<=inet )[0-9.]+' `
curl  "https://www.duckdns.org/update/${SUBDOMAIN}/${TOKEN}/${IP}"
sleep 600s 
