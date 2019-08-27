import sqlite3
def open_db():
    conn = sqlite3.connect('database.db')
    conn.execute('CREATE TABLE IF NOT EXISTS users (id int AUTO_INCREMENT,name TEXT, email TEXT, password TEXT, PRIMARY KEY(id))')
    print ("Table created successfully")
    conn.close()