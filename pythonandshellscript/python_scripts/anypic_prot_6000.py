from flask import Flask, request, send_file
import requests
import io

app = Flask(__name__)

@app.route('/api/', methods=['GET'])
def get_data():
    url = request.args.get('url')
    if not url:
        return 'URL is required', 400

    try:
        response = requests.get(url)
        response.raise_for_status()
        return send_file(
            io.BytesIO(response.content),
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
    app.run(debug=True, host='0.0.0.0',port='6000')

# curl http://localhost:5000/api/?url=https://example.com/api/data 
# http://localhost:5000/api/?url=https://opac.sclib.org/faq/getImage/1
# http://192.168.122.53:5000/api/?url=https://image-2.openbookscan.com.cn:1235/bookcover/20150209/3521569.jpg
# http://192.168.122.53:6000/api/?url=https://emoji.bj.bcebos.com/yige-aigc/index_aigc/final/toolspics/pc_aigc.png
