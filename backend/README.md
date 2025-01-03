# Backend - Django<br>

This repository contains the backend code for a Django project. Django is a high-level Python web framework that follows the Model-View-Controller (MVC) architectural pattern. It provides a robust and scalable foundation for building web applications.

# Getting Started<br>
<h2>Prerequisites</h2><br>
Make sure you have Python and pip installed on your machine.
# Installation
Clone the repository:
<code>git clone https://github.com/Yabuale/ICIMS.git </code><br>
Navigate to the project directory:<br>
<code>cd backend</code><br>

# Create a virtual environment:<br>
<code>python -m venv env</code><br>

# Activate the virtual environment:<br>
For Windows:<br>
<code>env\Scripts\activate</code><br>
For macOS and Linux:<br>
<code>source env/bin/activate </code><br>

# Install the required packages:<br>
<code>pip install -r requirements.txt</code><br>
<code> python manage.py makemigrations </code> this will create migrations and creates the database.<br>

<code> python manage.py migrate </code> Applies any pending database migrations.<br>

# Development
To start the Django development server, run the following command:<br>
<code>python manage.py runserver</code><br>
This will start the server at http://localhost:8000/ and you can access the API endpoints from your browser or API testing tool.<br>

# Additional Scripts

<code> python manage.py createsuperuser </code> Creates a superuser account for accessing the Django admin panel. <br>
use this account and login after that you can create other users 
<code> python manage.py collectstatic </code> Collects static files into a single directory for easy serving.
Contributing
