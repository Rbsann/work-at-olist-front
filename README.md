
# Olist frontend challenge
> Built with vanilla js and served with Python Flask

My personal entry for Olist challenge

## Installing / Getting started

To install type pip3 install -r requirements.txt
You need to have python3 installed on your environment. 

## Developing

### Built With
Built with vanilla js, css and html.Bootstrap is used sparingly.
 It is served with Flask.Just as proof of concept my entry went beyond what was
required and provides a simple Rest API endpoint with connectivity to a sqlite db.
The password is encrypted with SHA 256 before it is stored on the table.
My entry uses Jquery solely for Ajax request.


### Prerequisites
All dependencies are listed on requirements.txt


### Setting up Dev

To get the entry running clone the repo, install the dependencies and run it with
export FLASK_APP=olist.py
python -m flask olist.py




## Api Reference
Post request
Endpoint:
/user
Params : 
```
{name, content, password}
```
Success:
```
Success! Code:201
```
## Environment used

This challenge was built in a Linux mint system. I used Vs Code as text editor