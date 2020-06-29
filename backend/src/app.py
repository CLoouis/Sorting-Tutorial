import Merge
import Bubble
import re
from flask import Flask, render_template, request, jsonify
from flask_cors import CORS

app = Flask(__name__, static_folder='../build', static_url_path='/')
CORS(app)

@app.route('/')
def index():
    return app.send_static_file(index.html)

@app.route('/src/process', methods=['GET'])
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

method = 'Bubble'
string = '1,3,2,7,4,5,10,19,7,6,12,11,10,10'
print(Sort(string, method))