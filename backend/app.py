import Merge
import Bubble
import re
from flask import Flask, Blueprint, render_template, request, jsonify
from flask_cors import CORS

app = Flask(__name__, static_folder='../build', static_url_path='/')
CORS(app)
api = Blueprint('api', __name__)

@app.route('/api')
def test():
    return "Hello"

@app.route('/api/src/process', methods=['GET'])
def process():
    string =  request.args.get('input')
    method = request.args.get('method')
    res = Sort(string, method)

    res = buildResponse(res)
    sol = jsonify(res)
    return sol

def Sort(string, method):
    array = re.split(',', string)
    new_array = []
    if (len(array) <= 10):
        for i in range(len(array)):
            new_array.append(int(array[i]))
        
        res = []
        if (method == 'Merge'):
            temp = Merge.mergeSort(new_array, res)
            solution = Merge.parseResult(temp)
        else:
            solution = Bubble.bubbleSort(new_array)
        
        return solution
 

def buildResponse(arr):
    res = {

        "actions" : arr[1],
        "results" : arr[2],
        "steps" : arr[0]
    }
    return res

app.register_blueprint(api, url_prefix='/api')

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=5050)