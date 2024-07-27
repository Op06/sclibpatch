from bs4 import BeautifulSoup
import random
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

def generate_isbn_13():
    url = 'https://opac.sclib.org/book/' + str(random.randint(1, 4070085))
    print(url)
    response = requests.get(url)
    html = response.text
    soup = BeautifulSoup(html, "html.parser")
    img = soup.find("img", class_="bookcover_img")
    print(img)
    img.get('isbn')
    print(img.get('isbn'))
    if img.get('isbn') !="":
        return img.get('isbn')
    else :
        generate_isbn_13()
    # Prefix can be either 978 or 979
    #prefix = [9, 7, random.choice([8, 9])]
    # Generate the next 9 digits
    #isbn_13 = prefix + [random.randint(0, 9) for _ in range(9)]
    # Calculate the checksum digit
    #checksum = (10 - (sum(isbn_13[i] if i % 2 == 0 else 3 * isbn_13[i] for i in range(12)) % 10)) % 10
    #isbn_13.append(checksum)
    #return ''.join(map(str, isbn_13))


#url = 'https://book-resource.dataesb.com/websearch/metares?cmdACT=getImages&type=0&isbns=,'+generate_isbn_13()
#print(url)

@app.route('/randomapi/', methods=['GET'])
def get_data():
    #url = f"{url}"
    #print(url)
    #url = f"{url}"
    #print(url)
    try:
        url = 'https://book-resource.dataesb.com/websearch/metares?cmdACT=getImages&type=0&isbns=,' + str(generate_isbn_13()).replace('-', '')
        print(url)
        #response = requests.get(url, headers=headers)
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
    app.run(debug=True, host='0.0.0.0',port='7000')
