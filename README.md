## Instructions to run the code:

1. Run mongodb locally on the default host/port aka `localhost:27017`. I followed these instructions to get set up:

   https://docs.microsoft.com/en-gb/windows/wsl/tutorials/wsl-database#install-mongodb

   If you cannot run it on the default host/port, then configure it in `backend/dependencies.py`

2. Install python requirements
   `pip install backend/requirements.txt`
3. Run python API:
   `python3 backend/main.py`
4. Check out the docs at http://localhost:8000
5. Install frontend requirements
   `npm i` from the frontend folder
6. Run frontend:
   `npm run dev`
7. Open browser to http://localhost:3000/users

## Things left to do:

### Backend:

- Docker image or similar for setting up mongodb
- Some way to deploy
- Auth protection of some kind for /users
- Set up some kind of migration framework eg alembic
- Paginate the /users route and make general pagination code
- Implement search/filtering at the API level for users (if there are frontend scalability requirements)
- Schemas for user input and user model validation
- Testing

### Frontend:

- Improve everything about all the css
- Make some of the components a little more generalisable
- Input validation (eg for email)
- Add API error handling (at the moment there is none which is awful)
- Work out how to do Next js api routing/proxying properly
- Server-side rendering? I'm not familiar with Next JS yet
- Testing
