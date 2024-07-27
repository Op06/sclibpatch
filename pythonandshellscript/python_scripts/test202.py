from flask import Flask, request, send_file
import requests
import io
import json

app = Flask(__name__)

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/115.0",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.5",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Upgrade-Insecure-Requests": "1",
    "Sec-Fetch-Dest": "document",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-Site": "none",
    "Sec-Fetch-User": "?1"  # Note: this might be incorrect, as the original header had a `?` character
}

@app.route('/coverapi/', methods=['GET'])
def get_data():
    #url = f"{url}"
    
    url = request.args.get('url')
    #print(url)
    #url = f"{url}"
    #print(url)
    if not url:
        return 'URL is required', 400

    try:
        response = requests.get(url, headers=headers)
        print(url)
        response.raise_for_status()
        # -----------------process json for book-resource.dataesb.com--------------------
        data = json.loads(response.text.strip('()'))
        resource_links = [item['resourceLink'] for item in data['result']]
        print(data)
        print(response.text)
        print(type(resource_links)) 
        response2 = requests.get(resource_links[0], headers=headers)
		# -----------------------------
        # ----------------- resend request and get cover------------

        # ----------------------------------------------

        return send_file(
            io.BytesIO(response2.content),
            mimetype='image/jpeg'  # or whatever mime type the file has
        )
    except requests.exceptions.HTTPError as errh:
        return 'HTTP Error: ' + str(errh), 501
    except requests.exceptions.ConnectionError as errc:
        return 'Error Connecting: ' + str(errc), 500
    except requests.exceptions.Timeout as errt:
        return 'Timeout Error: ' + str(errt), 504
    except requests.exceptions.RequestException as err:
        return 'Something went wrong: ' + str(err), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
	
# !!!!!!!!!!  attention I can only handle book-resource.dataesb.com !!!!!!!!!!
# !!!!!!!!!!  
#https://book-resource.dataesb.com/websearch/metares?cmdACT=getImages&type=0&isbns=,    
#https://book-resource.dataesb.com/websearch/metares?cmdACT=getImages&type=0&isbns=,9787543964853

# _____test url
#  http://192.168.122.53:5000/coverapi/?url=https%3A%2F%2Fbook-resource.dataesb.com%2Fwebsearch%2Fmetares%3FcmdACT%3DgetImages%26type%3D0%26isbns%3D%2C9787219080054

# ____________________________
# process url with js code or it doesn't work 
# ____________________________

#const originalString = "https://book-resource.dataesb.com/websearch/metares?cmdACT=getImages&type=0&isbns=9787219080054";
#const encodedString = encodeURIComponent(originalString).replace(/%(3A|2F|5F|26)/g, '$1');
#console.log(encodedString);


