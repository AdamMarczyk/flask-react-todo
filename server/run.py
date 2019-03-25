from flask import Flask, render_template
from flask_cors import CORS

from . import db

app = Flask(__name__,
            static_folder="../client/build/static",
            template_folder="../client/build")
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

db.init_app(app)


@app.route('/api/todos')
def showTodos():
    data = json.loads(request.data)
    return jsonify(data)


@app.route('/api/todos/add', methods=['POST'])
def addTodo():
    data = json.loads(request.data)
    return jsonify(data)


@app.route('/api/todos/delete/<item_id>', methods=['DELETE'])
def removeTodo(item_id):
    data = {'id': item_id}
    return jsonify(data)


@app.route('/api/save')
def saveTodos():
    data = json.loads(request.data)
    return jsonify(data)


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return render_template("index.html")
