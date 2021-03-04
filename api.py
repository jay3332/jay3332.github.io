import flask
from flask import request, jsonify

app = flask.Flask(__name__)
app.config["DEBUG"] = True

@app.route("/api/v1", methods=['GET'])
def home():
    return jsonify({
        "name": "jay3332 API",
        "endpoints": [
            "/test"
        ]
    })

@app.route("/api/v1/test", methods=['GET'])
def test():
    return jsonify({
        "message": "Test"
    })

app.run()