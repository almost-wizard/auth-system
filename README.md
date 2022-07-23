# `Auth System`

Here is a fullstack auth system app made using Django Rest Framework as a server side and React JS as a client side.
#
### a) Clone Repository:
    git clone https://github.com/almost-wiz/auth-system
#
### b) Setup client-side:

1. Install dependencies: `npm install`
2. Run build script: `npm run build`

> **Note**: the default react script for creating the production version of app has been replaced with a custom one. You can see the changes in the `/client/package.json` file
#
### c) Setup server-side:

1. Update `.env` file using `.env.example`
2. Install `requirements.txt`
3. Up docker containers: `docker-compose up -d`
4. Migrate database:
    - `python manage.py makemigrations`
    - `python manage.py migrate`
5. Run server: `python manage.py runserver`
#
### d) Enjoy :D