import uuid

# from flask_cors import CORS
from flask import Flask
from flask import jsonify
from flask import request



RESULTS = [
    {
        'step': 1,
    }
]

# configuration
DEBUG = True

# instantiate the app
app = Flask(__name__)
app.config.from_object(__name__)

# enable CORS
# CORS(app, resources={r'/*': {'origins': '*'}})


@app.route('/', methods=['GET', 'POST'])
def all_results():
    response_object = {'status': 'success'}
    if request.method == 'POST':
        post_data = request.get_json()
        RESULTS.append({
            'step': post_data.get('bubble')
        })
        response_object['message'] = 'Book added!'
    else:
        response_object['results'] = RESULTS
    return jsonify(response_object)


# @app.route('/books/<book_id>', methods=['PUT', 'DELETE'])
# def single_book(book_id):
#     response_object = {'status': 'success'}
#     if request.method == 'PUT':
#         post_data = request.get_json()
#         remove_book(book_id)
#         BOOKS.append({
#             'id': uuid.uuid4().hex,
#             'title': post_data.get('title'),
#             'author': post_data.get('author'),
#             'read': post_data.get('read')
#         })
#         response_object['message'] = 'Book updated!'
#     if request.method == 'DELETE':
#         remove_book(book_id)
#         response_object['message'] = 'Book removed!'
#     return jsonify(response_object)


if __name__ == '__main__':
    app.run()