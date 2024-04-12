
# Implement an endpoint to obtain an order ion a bar

<p align="center">
  <a href="#prepare-local-environment">Prepare local environment</a> •
  <a href="#database">Database</a> •
  <a href="#endpoints">Endpoints</a> •
  <a href="#run-unitest">Run unitest</a> •

</p>

## Prepare local environment
### BackEnd

Go into python folder and create a virtual env if needed
```bash
cd python/beerbar
pip install virtualenv
python -m venv myenv
source myenv/bin/activate
```

Then configure the project
```bash
pip install -r requirements.txt
python manage.py migrate
```
To run the backend run
```bash
python manage.py runserver
```
Use [http://localhost:8000](http://localhost:8000) to test the endpoint in postman.

### FrontEnd

```bash
cd react/beer-app
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Database

-SQLite: there is some information available to test the endpoints

## Endpoints
- GET http://127.0.0.1:8000/api/order/1. 
Returns the order #1, another id returns 404 (not found)
- GET http://127.0.0.1:8000/api/stock
Returns the available stock

## Run unitest

For backend run
```bash
cd python/beerbar
pytest
```

For frontend run
```bash
cd react/beer-app
npm test
```

