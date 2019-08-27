from flask_frozen import Freezer
from olist import app

freezer = Freezer(app)

if __name__ == '__main__':
    freezer.freeze()