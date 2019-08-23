from flask import Flask, render_template,request,redirect,jsonify
from flask_scss import Scss
from db import open_db, sqlite3
from passlib.hash import sha256_crypt
app = Flask(__name__,template_folder='src')
app.debug = True
Scss(app, static_dir='static', asset_dir='assets')
open_db()
app.static_folder='static'
@app.route("/")
def index():
    return render_template("challenge.html")
@app.route("/user",methods=["POST"])
def create_user():
    content = request.get_json()
    print(content['name'])
    password = sha256_crypt.encrypt(content['password'])
    print(password)
    try:
        with sqlite3.connect("database.db") as con:
            cursor = con.cursor()
            cursor.execute("INSERT INTO USERS(name,email,password) VALUES(?,?,?)",
                        (content['name'],content['email'],password))
            con.commit()
            print("User created")
    except:
        con.rollback()
        print("Error")
    finally:
        print("Returning")
        return jsonify({'Success': content}), 201
@app.route("/success")
def redirected():
    return render_template("success.html")
if __name__ == '__main__':
    app.run()