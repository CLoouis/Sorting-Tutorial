import uuid

from flask_cors import CORS, cross_origin
from flask import Flask
from flask import jsonify
from flask import request
import bubbleSort
import mergeSort


# configuration
DEBUG = True

# instantiate the app
app = Flask(__name__)
app.config.from_object(__name__)

# enable CORS
CORS(app)


@app.route('/sort', methods=['POST'])
def get_sort():
    restemp = []
    if (request.json 
        and request.json['array'] 
        and isinstance(request.json['array'], list)
        and len(request.json['array']) > 0
        and len(request.json['array']) <= 10
        and isinstance(request.json['array'][0], int)
        and request.json['method']
        and request.json['method'] in ['bubble', 'merge']
        and isinstance(request.json['asc'], bool)):
        if(request.json['method'] == 'bubble'):
            bubbleSort.bubbleSort(restemp, request.json['array'], request.json['asc'])
        else:
            mergeSort.mergeSort(restemp, request.json['array'], request.json['asc'])
        return jsonify({'res': restemp })
        
        
    else:
        return jsonify({'res': 'Input is not valid, please input 1 up to 10 numbers' })

if __name__ == '__main__':
    app.run()