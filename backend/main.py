from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from hasil import hasil
from util import *

app = Flask(__name__)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/sorting-web', methods=["POST"])
@cross_origin()
def main():
    data = request.get_json()
    numbers = data['numbers']
    algo = data['algo']
    hasilSorting = hasil(algo, numbersToList(numbers))
    return jsonify({'data': hasilSorting}), 200
