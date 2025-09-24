---
title: flask-postgres-socketio
date: 2025-09-28
---

This tutorial will guide you through building a real-time inventory tracking dashboard using Flask, Postgres, and Socket.IO. You'll learn how to stream live data updates from the backend to the frontend using Postgres' [LISTEN](https://www.postgresql.org/docs/current/sql-listen.html)/[NOTIFY](https://www.postgresql.org/docs/current/sql-notify.html) and [Flask-SocketIO](https://flask-socketio.readthedocs.io/en/latest/)'s WebSocket support.

## Contents

*   [Objectives](#objectives)
*   [What Are We Building?](#what-are-we-building)
*   [Project Setup](#project-setup)
*   [Models](#models)
*   [Postgres Setup](#postgres-setup)
    *   [Install and Verify Postgres](#install-and-verify-postgres)
*   [Database Setup](#database-setup)
*   [PostgreSQL Notification Listener](#postgresql-notification-listener)
*   [Socket.IO WebSocket Handling](#socketio-websocket-handling)
*   [API Routes](#api-routes)
    *   [GET inventories](#get-inventories)
    *   [POST inventory](#post-inventory)
    *   [UPDATE inventory](#update-inventory)
    *   [DELETE inventory](#delete-inventory)
    *   [Error handlers](#error-handlers)
*   [Initialize Application](#initialize-application)
*   [Finalizing the Flask Application](#finalizing-the-flask-application)
*   [Creating the Frontend](#creating-the-frontend)
    *   [Step 1: HTML Structure](#step-1-html-structure)
    *   [Step 2: JavaScript Application Logic](#step-2-javascript-application-logic)
*   [Real-time Inventory Dashboard](#real-time-inventory-dashboard)
    *   [Step 1: Set Up the Database](#step-1-set-up-the-database)
    *   [Step 2: Start the Flask Application](#step-2-start-the-flask-application)
*   [Conclusion](#conclusion)

## Objectives

By the end of this tutorial, you should be able to:

1.  Develop a RESTful API with Flask for inventory management
2.  Implement real-time data updates using Postgres' LISTEN/NOTIFY
3.  Stream change events to the frontend via Flask-SocketIO connections
4.  Track full document history of updated or deleted items using Postgres' triggers
5.  Build a responsive dashboard UI using HTML, CSS, and JavaScript

## What Are We Building?

We'll create an inventory management API and a real-time dashboard that displays live inventory updates, quantity changes, and item deletions.

## Project Setup

We'll start by creating the project structure. The entire project will be housed in a single folder as we're making use of HTML, CSS, and JavaScript powered frontend.

Open your terminal and run:

```bash
$ mkdir flask-postgresql-realtime-tracker
$ cd flask-postgresql-realtime-tracker
``` 

Next, let's set up a virtual environment, create our base file structure, and install the dependencies.

Start by creating and activating a virtual environment:

```bash
$ python -m venv venv
$ source venv/bin/activate
``` 

Create the following files and folders:

```console
flask-postgresql-realtime-tracker
├── database.py
├── main.py
├── models.py
├── notify.py
├── requirements.txt
├── setup_database.sql
└── static
    ├── index.html
    └── index.js
``` 

Add the packages to the *requirements.txt* file:

```txt
Flask==3.1.2
Flask-SQLAlchemy==3.1.1
Flask-SocketIO==5.5.1
psycopg2-binary==2.9.10
python-socketio==5.13.0
python-engineio==4.12.2
``` 

**Why these packages?**

*   [Flask](https://flask.palletsprojects.com/en/stable/) powers the web API and serves our application.
*   [Flask-SQLAlchemy](https://flask-sqlalchemy.readthedocs.io/en/stable/) is our ORM for database access.
*   [Flask-SocketIO](https://flask-socketio.readthedocs.io/en/latest/) provides WebSocket support with automatic fallbacks.
*   [psycopg2-binary](https://www.psycopg.org/) is our Postgres driver for database connections.
*   [python-socketio](https://python-socketio.readthedocs.io/en/stable/) and [python-engineio](https://python-engineio.readthedocs.io/en/stable/) are the underlying Socket.IO libraries.

Finally, install the packages:

```bash
(venv)$ pip install -r requirements.txt
``` 

## Models

We'll use Flask-SQLAlchemy for our database models. In *database.py*, let's start by setting up our Flask application and database configuration:

```python
import os

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def init_db(app):
    """Initialize database with Flask app"""
    db.init_app(app)

def create_tables():
    """Create database tables"""
    db.create_all()

def get_database_url():
    """Get database URL from environment or use default"""
    return os.getenv(
        "DATABASE_URL",
        "postgresql://localhost/inventory_db"
    )
``` 

In the code block above, we initialized the `SQLAlchemy` instance as well as three functions:

*   `init_db`: This function initializes the database with the Flask application, `app`.
*   `create_tables`: This function creates the database tables.
*   `get_database_url`: This function retrieves the database URL from the environment or uses the default `inventory_db` hosted on localhost.

Now, let's define our Inventory model in *models.py*:

```python
from datetime import datetime

from typing import Dict, Any

from database import db

class Inventory(db.Model):
    __tablename__ = "inventory"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def to_dict(self) -> Dict[str, Any]:
        """Convert model instance to dictionary"""
        return {
            "id": self.id,
            "name": self.name,
            "quantity": self.quantity,
            "updated_at": self.updated_at.isoformat() if self.updated_at else None
        }

    def __repr__(self):
        return f"<Inventory {self.name}: {self.quantity}>"
```

In the code block above, we defined an `Inventory` table using Flask-SQLAlchemy, which will hold each record of an item created. The inventory model has four fields:

1.  `id`: The unique ID of an item stored in the inventory.
2.  `name`: The name of the item. This field can not be null.
3.  `quantity`: The quantity of the item stored in the inventory database.
4.  `updated_at`: A datetime object to record the timestamp for updates made to the inventory item.

The `to_dict()` method converts our SQLAlchemy model to a dictionary for JSON serialization, which Flask will use to return data in for our API responses.

## Postgres Setup

Now that we have our schema in place, let's set up Postgres and configure our application to communicate with it.

### Install and Verify Postgres

If you don't have Postgres installed, follow the [official installation guide](https://www.postgresql.org/download/). Once installed, start the Postgres service and verify it's running:

`psql postgres` 

You should see the Postgres prompt. You can also check the version:

`psql --version` 

This tutorial uses Postgres v15.4, but any recent version should work.

## Database Setup

With Postgres running, let's set up our database tables and triggers for real-time notifications.

Next, add the following SQL command to *setup\_database.sql*:

```sql
-- Create the inventory table
CREATE TABLE IF NOT EXISTS inventory (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 quantity INTEGER NOT NULL,
 updated_at TIMESTAMPTZ DEFAULT NOW()
);
``` 

In the code block above, we created the `inventory` table and defined its associated fields: `id`, `name`, `quantity`, and `updated_at`.

Next, add the following to the same file to create a trigger function to send a real-time notification whenever a row in the inventory table is inserted, updated, or deleted:

```sql
-- Create the trigger function for notifications
CREATE OR REPLACE FUNCTION notify_inventory_changes() RETURNS trigger AS $$
DECLARE
 payload JSON;
BEGIN
 IF (TG_OP = 'DELETE') THEN
 payload = json_build_object('event', TG_OP, 'data', row_to_json(OLD));
 ELSE
 payload = json_build_object('event', TG_OP, 'data', row_to_json(NEW));
 END IF;
 PERFORM pg_notify('inventory_channel', payload::text);
 RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;
``` 

Let's understand what the code above does:

1.  Line 1 defines a new trigger function, `notify_inventory_changes`, that will be used in a table trigger. The function will return a trigger type, as required for Postgres triggers.
2.  In lines 2 - 3, we defined a variable called `payload` of type JSON. The variable will hold the notification data to be sent.
3.  Lines 4 - 12 hold the core logic for the notification trigger:
4.  Line 4 begins the main function logic, and lines 5 - 7 builds the payload from old row data if the database operation is of type `DELETE`.
5.  Lines 8 - 10 build up the payload from new row data if the database operation type is an `INSERT` or an `UPDATE`.
6.  Line 11 sends the payload as a notification on the inventory\_channel using Postgres' `pg_notify` function.
7.  Line 12 returns either the new or old row, as required by trigger functions. This ensures the trigger works for all operation types.
8.  Line 13 specifies that the function is written in Postgres' procedural language.

Next, let's create the trigger:

```sql
-- Create the trigger
DROP TRIGGER IF EXISTS inventory_trigger ON inventory;
CREATE TRIGGER inventory_trigger
AFTER INSERT OR UPDATE OR DELETE ON inventory
FOR EACH ROW EXECUTE FUNCTION notify_inventory_changes();
``` 

In the code block above, we removed the old trigger if it doesn't exist and created a new trigger. We then specified that the trigger fires after an `INSERT`, `UPDATE`, or `DELETE` on the inventory table, for each row affected.

## PostgreSQL Notification Listener

To receive real-time updates from Postgres, we need a listener that reacts to `LISTEN/NOTIFY` events. Since Flask is synchronous by default, we'll use threading to handle the database notifications without blocking our main application.

Add the following PostgreSQL listener class to *notify.py*:

```python
import logging
import json
import select
import threading

import psycopg2

logger = logging.getLogger(__name__)

class PostgresListener:
    def __init__(self, database_url: str, socketio=None):
        self.database_url = database_url
        self.connection = None
        self.running = False
        self.thread = None
        self.socketio = socketio

    def connect(self):
        """Connect to PostgreSQL for listening"""
        try:
            self.connection = psycopg2.connect(self.database_url)
            self.connection.set_isolation_level(psycopg2.extensions.ISOLATION_LEVEL_AUTOCOMMIT)
            logger.info("Connected to PostgreSQL for notifications")
        except Exception as e:
            logger.error(f"Failed to connect to PostgreSQL: {e}")
            raise

    def start_listening(self):
        """Start listening to PostgreSQL notifications in a separate thread"""
        if self.running:
            return

        self.running = True
        self.thread = threading.Thread(target=self._listen_loop, daemon=True)
        self.thread.start()
        logger.info("Started PostgreSQL notification listener")

    def stop_listening(self):
        """Stop listening to PostgreSQL notifications"""
        self.running = False
        if self.connection:
            self.connection.close()
        logger.info("Stopped PostgreSQL notification listener")

    def set_socketio(self, socketio):
        """Set the SocketIO instance for broadcasting"""
        self.socketio = socketio

    def _listen_loop(self):
        """Main listening loop"""
        try:
            if not self.connection:
                self.connect()

            # Listen to the inventory channel
            cursor = self.connection.cursor()
            cursor.execute("LISTEN inventory_channel;")

            logger.info("Listening for PostgreSQL notifications on inventory_channel")

            while self.running:
                if select.select([self.connection], [], [], 1) == ([], [], []):
                    continue

                self.connection.poll()
                while self.connection.notifies:
                    notify = self.connection.notifies.pop(0)
                    try:
                        payload = json.loads(notify.payload)
                        logger.info(f"Received notification: {payload}")

                        # Broadcast to all connected WebSocket clients
                        if self.socketio:
                            self.socketio.emit('inventory_update', payload, namespace='/')

                    except Exception as e:
                        logger.error(f"Error processing notification: {e}")

        except Exception as e:
            logger.error(f"Error in PostgreSQL listener: {e}")
        finally:
            if self.connection:
                self.connection.close()
 ``` 

Let's understand what this class does:

1.  **Threading**: The listener runs in a separate daemon thread to avoid blocking Flask's main thread.
2.  **Connection Management**: It manages its own PostgreSQL connection specifically for listening to notifications.
3.  **Notification Handling**: When it receives a notification from the `inventory_channel`, it parses the JSON payload and broadcasts it to all connected WebSocket clients using Flask-SocketIO.
4.  **Graceful Shutdown**: The listener can be cleanly stopped when the application shuts down.

## Socket.IO WebSocket Handling

Flask-SocketIO provides robust WebSocket support with automatic fallbacks. Let's register two event handlers to handle connection and disconnection to the Websocket in *main.py*:

```python
import logging

from flask import Flask, request, jsonify
from flask_socketio import SocketIO, emit

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def register_socketio_events(socketio):
    """Register Socket.IO event handlers"""

    @socketio.on("connect")
    def handle_connect():
        logger.info(f"Client connected: {request.sid}")
        emit("connection_status", {"connected": True})

    @socketio.on("disconnect")
    def handle_disconnect():
        logger.info(f"Client disconnected: {request.sid}")` 
```

These handlers are much simpler than managing raw WebSocket connections. Flask-SocketIO handles all the connection management, reconnection logic, and broadcasting for us.

## API Routes

Now let's create the API routes to add, update, and delete inventory items. These routes will trigger changes in the database, which in turn will generate real-time notifications.

Before we begin, let's update the imports in *main.py* and add a global listener instance for our inventory application:

```python
import atexit
import os
import logging
from datetime import datetime

from flask import Flask, request, jsonify
from flask_socketio import SocketIO, emit

from database import db, init_db, create_tables, get_database_url
from model import Inventory
from notify import PostgresListener

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Global listener instance
postgres_listener = None
``` 

Next, let's register the routes:

```python
def register_routes(app):
    """Register all Flask routes"""

    @app.route("/")
    def index():
        """Serve the main page"""
        try:
            with open("static/index.html", "r") as f:
                return f.read()
        except FileNotFoundError:
            return """
 <!DOCTYPE html>
 <html>
 <head>
 <title>Flask Inventory Tracker</title>
 </head>
 <body>
 <h1>Flask Real-Time Inventory Tracker</h1>
 <p>Please create the static/index.html file from the tutorial.</p>
 </body>
 </html>
 """
 ``` 

In the code block above, we start with defining a `register_routes` function which will house all the routes for creating, reading, updating, and deleting an inventory. The first route defined inside the function is the main route `/`, which renders the frontend page in `static/index.html`. If the page doesn't exist, we return an error message asking that the `static/index.html` page is created.

### GET inventories

Next, let's add a `GET` route to retrieve the items in the inventory:

```python
@app.route("/api/inventories", methods=["GET"])
def get_inventory():
    """Get all inventory items"""
    try:
        items = Inventory.query.order_by(Inventory.updated_at.desc()).all()
        return jsonify([item.to_dict() for item in items])
    except Exception as e:
        logger.error(f"Error fetching inventory: {e}")
        return jsonify({"error": "Failed to fetch inventory"}), 500
``` 

In the code block above, we defined a route to retrieve all the inventory data from the database as a properly formatted JSON object.

### POST inventory

Now that we have the route to retreive the inventory, add the folllowing code to enable us create an inventory item:

```python
@app.route("/api/inventories", methods=["POST"])
def create_inventory_item():
    """Create a new inventory item"""
    try:
        data = request.get_json()

        # Validation
        if not data or "name" not in data or "quantity" not in data:
            return jsonify({"error": "Name and quantity are required"}), 400

        if not isinstance(data["quantity"], int) or data["quantity"] < 0:
            return jsonify({"error": "Quantity must be a non-negative integer"}), 400

        # Create new item
        item = Inventory(
            name=data["name"].strip(),
            quantity=data["quantity"]
        )

        db.session.add(item)
        db.session.commit()

        logger.info(f"Created inventory item: {item.name}")
        return jsonify(item.to_dict()), 201

    except Exception as e:
        db.session.rollback()
        logger.error(f"Error creating inventory item: {e}")
        return jsonify({"error": "Failed to create item"}), 500
``` 

In the code block above, we defined a route to create an inventory item. We added some basic validation to ensure the `name` and `quantity` objects are valid. Once the input has been validated, we created an inventory item, committed it to the database, and returned the item object.

### UPDATE inventory

With the `POST` route in place, let's define the route to update an item in the inventory:

```python
@app.route("/api/inventories/<int:item_id>", methods=["PUT"])
def update_inventory_item(item_id: int):
    """Update an inventory item's quantity"""
    try:
        item = Inventory.query.get_or_404(item_id)
        data = request.get_json()

        # Validation
        if not data or "quantity" not in data:
            return jsonify({"error": "Quantity is required"}), 400

        if not isinstance(data["quantity"], int) or data["quantity"] < 0:
            return jsonify({"error": "Quantity must be a non-negative integer"}), 400

        # Update item
        item.quantity = data["quantity"]
        item.updated_at = datetime.utcnow()

        db.session.commit()

        logger.info(f"Updated inventory item: {item.name} (quantity: {item.quantity})")
        return jsonify(item.to_dict())

    except Exception as e:
        db.session.rollback()
        logger.error(f"Error updating inventory item: {e}")
        return jsonify({"error": "Failed to update item"}), 500
``` 

In the code block above, we defined a route to update an inventory item whose ID is strictly an integer. We first try to retreive the item using the `get_or_404()` method. If the item exists in the database, we validated the quality input and committed it to the database. However, if the item is not found, we returned a not found response to the user.

### DELETE inventory

The last route is the `DELETE` route. Add the following:

```python
@app.route("/api/inventory/<int:item_id>", methods=["DELETE"])
def delete_inventory_item(item_id: int):
    """Delete an inventory item"""
    try:
        item = Inventory.query.get_or_404(item_id)
        item_name = item.name

        db.session.delete(item)
        db.session.commit()

        logger.info(f"Deleted inventory item: {item_name}")
        return jsonify({"message": "Item deleted successfully"})

    except Exception as e:
        db.session.rollback()
        logger.error(f"Error deleting inventory item: {e}")
        return jsonify({"error": "Failed to delete item"}), 500
``` 

Summarily, these are the routes we have implemented:

*   `GET /api/inventories` - Fetch all inventory items
*   `POST /api/inventories` - Create a new item
*   `PUT /api/inventories/<id>` - Update an item's quantity
*   `DELETE /api/inventories/<id>` - Delete an item

Each route includes proper error handling and validation, and uses Flask-SQLAlchemy for database operations.

### Error handlers

To handle `404` and `500` errors, add the following error handlers in the `register_routes` function:

```python
@app.errorhandler(404)
def not_found(error):
    return jsonify({"error": "Item not found"}), 404

@app.errorhandler(500)
def internal_error(error):
    db.session.rollback()
    return jsonify({"error": "Internal server error"}), 500
``` 

## Initialize Application

In the previous section, we defined the CRUD routes for the application. Next, we'll define a function to initialize the application and start the PostgreSQL database and listener. In *main.py*, add the following function:

```python
def initialize_application(socketio):
    """Initialize database and start PostgreSQL listener"""
    global postgres_listener

    # Create tables
    create_tables()
    logger.info("Database tables created")

    # Start PostgreSQL listener
    try:
        database_url = get_database_url()
        postgres_listener = PostgresListener(database_url, socketio)
        postgres_listener.start_listening()
    except Exception as e:
        logger.error(f"Failed to start PostgreSQL listener: {e}")
``` 

In the code block above, we created a global `postgres_listener`, which will be shared in the application as the sole source of truth for listening for Postgres notifications. We then created the tables and started the `PostgresListener` on the database URL and Socket.IO instance.

Next, define a clean up function, to shutdown and close the listeners, and register it:

```python
def cleanup():
    """Cleanup function for application shutdown"""
    global postgres_listener
    if postgres_listener:
        postgres_listener.stop_listening()

# Register cleanup function
atexit.register(cleanup)
``` 

The `@app.before_first_request` decorator ensures our database tables are created and the PostgreSQL listener is started when the application first handles a request.

## Finalizing the Flask Application

In *main.py*, add the following:

```python
def create_app():
    """Create and configure Flask application"""
    app = Flask(__name__)

    # Configuration
    app.config["SQLALCHEMY_DATABASE_URI"] = get_database_url()
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    # Initialize extensions
    init_db(app)
    socketio = SocketIO(app, cors_allowed_origins="*", async_mode="threading")

    # Register routes
    register_routes(app)
    register_socketio_events(socketio)

    # Initialize database and listener
    with app.app_context():
        initialize_application(socketio)

    return app, socketio
``` 

In the code block above, we defined a `create_app()` function which creates and configures the Flask application. We initilaized the database as well as the Socket.IO instance for listening and broadcasting change notifications from the database. We also registered the routes and socket events and returned the working instance.

Lastly, add the following to *main.py*:

```python
if __name__ == "__main__":
    # Create static directory if it doesn't exist
    os.makedirs("static", exist_ok=True)

    # Create and run the application
    app, socketio = create_app()

    # Run the application
    socketio.run(
        app,
        host="0.0.0.0",
        port=8000,
        debug=True,
        allow_unsafe_werkzeug=True  # Only for development
    )
``` 

## Creating the Frontend

To listen for Websocket events, we'll use Socket.IO's JavaScript client instead of raw WebSockets.

### Step 1: HTML Structure

In *static/index.html*, add the following:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Real-Time Inventory Tracker</title>
    <style>
 * {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
 }

 body {
 font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
 background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
 min-height: 100vh;
 color: #333;
 }

 .container {
 max-width: 1200px;
 margin: 0 auto;
 padding: 20px;
 }

 .header {
 text-align: center;
 margin-bottom: 2rem;
 color: white;
 }

 .header h1 {
 font-size: 2.5rem;
 margin-bottom: 0.5rem;
 }

 .card {
 background: white;
 border-radius: 15px;
 box-shadow: 0 20px 40px rgba(0,0,0,0.1);
 padding: 2rem;
 margin-bottom: 2rem;
 }

 .status {
 padding: 10px 15px;
 border-radius: 25px;
 font-weight: 600;
 text-align: center;
 margin-bottom: 2rem;
 }

 .status.connected {
 background: #d4edda;
 color: #155724;
 border: 1px solid #c3e6cb;
 }

 .status.disconnected {
 background: #f8d7da;
 color: #721c24;
 border: 1px solid #f5c6cb;
 }

 .form-section h2 {
 margin-bottom: 1rem;
 color: #333;
 }

 .form-group {
 display: flex;
 gap: 1rem;
 margin-bottom: 1rem;
 }

 input[type="text"], input[type="number"] {
 flex: 1;
 padding: 12px;
 border: 2px solid #e1e5e9;
 border-radius: 8px;
 font-size: 1rem;
 transition: border-color 0.3s;
 }

 input[type="text"]:focus, input[type="number"]:focus {
 outline: none;
 border-color: #667eea;
 }

 .btn {
 padding: 12px 24px;
 background: #667eea;
 color: white;
 border: none;
 border-radius: 8px;
 cursor: pointer;
 font-size: 1rem;
 font-weight: 600;
 transition: all 0.3s;
 }

 .btn:hover {
 background: #5a67d8;
 transform: translateY(-2px);
 }

 .btn-danger {
 background: #e53e3e;
 }

 .btn-danger:hover {
 background: #c53030;
 }

 .btn-small {
 padding: 8px 16px;
 font-size: 0.875rem;
 }

 .inventory-list h2 {
 margin-bottom: 1rem;
 color: #333;
 }

 .inventory-item {
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 1rem;
 border: 1px solid #e1e5e9;
 border-radius: 8px;
 margin-bottom: 0.5rem;
 transition: all 0.3s;
 }

 .inventory-item:hover {
 border-color: #667eea;
 transform: translateY(-1px);
 box-shadow: 0 4px 12px rgba(0,0,0,0.1);
 }

 .inventory-item.updating {
 opacity: 0.7;
 pointer-events: none;
 }

 .item-info {
 flex: 1;
 }

 .item-name {
 font-weight: 600;
 font-size: 1.1rem;
 margin-bottom: 0.25rem;
 }

 .item-meta {
 color: #666;
 font-size: 0.875rem;
 }

 .item-actions {
 display: flex;
 gap: 1rem;
 align-items: center;
 }

 .quantity-input {
 width: 80px;
 padding: 8px;
 border: 2px solid #e1e5e9;
 border-radius: 4px;
 text-align: center;
 font-weight: 600;
 }

 .loading, .empty-state {
 text-align: center;
 padding: 3rem;
 color: #666;
 }

 .empty-state h3 {
 margin-bottom: 0.5rem;
 color: #333;
 }
 </style>

    <!-- Socket.IO Client Library -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.7.2/socket.io.js"></script>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📦 Real-Time Inventory Tracker</h1>
            <p>Add, update, and track inventory items in real-time</p>
        </div>
        <div class="card">
            <div id="connection-status" class="status disconnected">
                🔴 Disconnected from server
            </div>
            <div class="form-section">
                <h2>Add New Item</h2>
                <form id="add-item-form">
                    <div class="form-group">
                        <input type="text" id="item-name" placeholder="Item name" required>
                        <input type="number" id="item-quantity" placeholder="Quantity" min="0" required>
                        <button type="submit" class="btn">Add Item</button>
                    </div>
                </form>
            </div>
            <div class="inventory-list">
                <h2>Inventory Items</h2>
                <div id="inventory-container">
                    <div class="loading">Loading inventory...</div>
                </div>
            </div>
        </div>
    </div>
    <script src="static/index.js"></script>
</body>
</html>
``` 

### Step 2: JavaScript Application Logic

In *static/index.js*, add the following:

```js
class InventoryApp {
 constructor() {
 this.socket = null;
 this.inventoryItems = new Map();
 this.isConnected = false;
 this.pendingUpdates = new Set();
 this.init();
 }

 init() {
 this.setupEventListeners();
 this.connectSocket();
 this.loadInitialData();
 }

 setupEventListeners() {
 const form = document.getElementById('add-item-form');
 form.addEventListener('submit', (e) => this.handleAddItem(e));
 }

 connectSocket() {
 // Initialize Socket.IO connection
 this.socket = io();

 this.socket.on('connect', () => {
 console.log('Connected to server');
 this.updateConnectionStatus(true);
 });

 this.socket.on('disconnect', () => {
 console.log('Disconnected from server');
 this.updateConnectionStatus(false);
 });

 this.socket.on('inventory_update', (data) => {
 console.log('Received inventory update:', data);
 this.handleSocketMessage(data);
 });

 this.socket.on('connection_status', (data) => {
 console.log('Connection status:', data);
 });
 }

 updateConnectionStatus(connected) {
 this.isConnected = connected;
 const statusElement = document.getElementById('connection-status');
 if (connected) {
 statusElement.className = 'status connected';
 statusElement.textContent = '🟢 Connected to server';
 } else {
 statusElement.className = 'status disconnected';
 statusElement.textContent = '🔴 Disconnected from server';
 }
 }

 async loadInitialData() {
 try {
 const response = await fetch('/api/inventory');
 if (response.ok) {
 const items = await response.json();
 this.inventoryItems.clear();
 items.forEach(item => {
 this.inventoryItems.set(item.id, item);
 });
 this.renderInventory();
 }
 } catch (error) {
 this.showError('Failed to load inventory data');
 }
 }

 handleSocketMessage(data) {
 const {event, data: itemData} = data;
 switch (event) {
 case 'INSERT':
 this.inventoryItems.set(itemData.id, itemData);
 this.renderInventory();
 this.showNotification(`Added: ${itemData.name}`, 'success');
 break;
 case 'UPDATE':
 this.inventoryItems.set(itemData.id, itemData);
 this.renderInventory();
 this.showNotification(`Updated: ${itemData.name}`, 'info');
 break;
 case 'DELETE':
 this.inventoryItems.delete(itemData.id);
 this.renderInventory();
 this.showNotification(`Deleted: ${itemData.name}`, 'warning');
 break;
 default:
 break;
 }
 }

 async handleAddItem(event) {
 event.preventDefault();
 const nameInput = document.getElementById('item-name');
 const quantityInput = document.getElementById('item-quantity');
 const name = nameInput.value.trim();
 const quantity = parseInt(quantityInput.value);

 if (!name || quantity < 0) {
 this.showError('Please enter a valid item name and quantity');
 return;
 }

 try {
 const response = await fetch('/api/inventory', {
 method: 'POST',
 headers: {'Content-Type': 'application/json'},
 body: JSON.stringify({name, quantity}),
 });

 if (response.ok) {
 nameInput.value = '';
 quantityInput.value = '';
 } else {
 const error = await response.json();
 this.showError(error.error || 'Failed to add item');
 }
 } catch (error) {
 this.showError('Failed to add item');
 }
 }

 async updateItemQuantity(id, newQuantity) {
 if (this.pendingUpdates.has(id)) return;
 this.pendingUpdates.add(id);

 const item = this.inventoryItems.get(id);
 if (item) {
 const originalQuantity = item.quantity;
 item.quantity = newQuantity;
 this.renderInventory();

 try {
 const response = await fetch(`/api/inventory/${id}`, {
 method: 'PUT',
 headers: {'Content-Type': 'application/json'},
 body: JSON.stringify({quantity: newQuantity}),
 });

 if (!response.ok) {
 item.quantity = originalQuantity;
 this.renderInventory();
 const error = await response.json();
 this.showError(error.error || 'Failed to update item');
 }
 } catch (error) {
 item.quantity = originalQuantity;
 this.renderInventory();
 this.showError('Failed to update item');
 } finally {
 this.pendingUpdates.delete(id);
 }
 }
 }

 async deleteItem(id) {
 if (!confirm('Are you sure you want to delete this item?')) return;

 const itemElement = document.querySelector(`[data-item-id="${id}"]`);
 if (itemElement) itemElement.style.opacity = '0.5';

 try {
 const response = await fetch(`/api/inventory/${id}`, {method: 'DELETE'});
 if (!response.ok) {
 if (itemElement) itemElement.style.opacity = '1';
 const error = await response.json();
 this.showError(error.error || 'Failed to delete item');
 }
 } catch (error) {
 if (itemElement) itemElement.style.opacity = '1';
 this.showError('Failed to delete item');
 }
 }

 renderInventory() {
 const container = document.getElementById('inventory-container');
 if (this.inventoryItems.size === 0) {
 container.innerHTML = `
 <div class="empty-state">
 <h3>No items in inventory</h3>
 <p>Add your first item using the form above!</p>
 </div>
 `;
 return;
 }

 const sortedItems = Array.from(this.inventoryItems.values())
 .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

 container.innerHTML = sortedItems.map(item => this.renderInventoryItem(item)).join('');
 }

 renderInventoryItem(item) {
 const updatedAt = new Date(item.updated_at).toLocaleString();
 const isUpdating = this.pendingUpdates.has(item.id);
 return `
 <div class="inventory-item ${isUpdating ? 'updating' : ''}" data-item-id="${item.id}">
 <div class="item-info">
 <div class="item-name">${this.escapeHtml(item.name)}</div>
 <div class="item-meta">Last updated: ${updatedAt}</div>
 </div>
 <div class="item-actions">
 <input
 type="number"
 class="quantity-input"
 value="${item.quantity}"
 min="0"
 onchange="app.updateItemQuantity(${item.id}, parseInt(this.value))"
 ${isUpdating ? 'disabled' : ''}
 >
 <button
 class="btn btn-danger btn-small"
 onclick="app.deleteItem(${item.id})"
 ${isUpdating ? 'disabled' : ''}
 >
 Delete
 </button>
 </div>
 </div>
 `;
 }

 escapeHtml(text) {
 const div = document.createElement('div');
 div.textContent = text;
 return div.innerHTML;
 }

 showNotification(message, type = 'info') {
 const notification = document.createElement('div');
 notification.className = `notification ${type}`;
 notification.textContent = message;
 notification.style.cssText = `
 position: fixed;
 top: 20px;
 right: 20px;
 padding: 12px 20px;
 border-radius: 6px;
 color: white;
 font-weight: 600;
 z-index: 1000;
 animation: slideIn 0.3s ease;
 max-width: 300px;
 `;

 switch (type) {
 case 'success':
 notification.style.background = '#28a745';
 break;
 case 'warning':
 notification.style.background = '#ffc107';
 notification.style.color = '#212529';
 break;
 case 'error':
 notification.style.background = '#dc3545';
 break;
 default:
 notification.style.background = '#17a2b8';
 }

 document.body.appendChild(notification);
 setTimeout(() => {
 notification.style.animation = 'slideOut 0.3s ease';
 setTimeout(() => {
 if (notification.parentNode) {
 notification.parentNode.removeChild(notification);
 }
 }, 300);
 }, 3000);
 }

 showError(message) {
 this.showNotification(message, 'error');
 }
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
 @keyframes slideIn {
 from {
 transform: translateX(100%);
 opacity: 0;
 }
 to {
 transform: translateX(0);
 opacity: 1;
 }
 }
 @keyframes slideOut {
 from {
 transform: translateX(0);
 opacity: 1;
 }
 to {
 transform: translateX(100%);
 opacity: 0;
 }
 }
`;
document.head.appendChild(style);

// Initialize the app
const app = new InventoryApp();
``` 

We defined an `InventoryApp` class to power our real-time inventory dashboard. It manages WebSocket connections to receive live updates, fetches and displays inventory items, and handles adding, updating, and deleting items. The UI is updated instantly as changes occur, and users receive notifications for each action, ensuring a responsive and interactive experience.

## Real-time Inventory Dashboard

With both the backend and frontend set up, you can now run your Flask application and see real-time updates in action.

### Step 1: Set Up the Database

First, make sure your Postgres database is running. Then, create the database and run the setup script:

```bash
$ createdb inventory_db
$ psql -d inventory_db -f setup_database.sql
``` 

### Step 2: Start the Flask Application

Start the Flask app:

```bash
(venv)$ python main.py
``` 

Visit [http://localhost:5000](http://localhost:5000) in your browser. You should see the dashboard page with a connection status indicator and a form to add new inventory items.

Try adding, updating, or deleting items using the web interface or by making API requests. All changes will be reflected in real-time across all connected browser tabs.

## Conclusion

In this tutorial, you built a real-time inventory tracking dashboard using Flask, Postgres, and Socket.IO. You learned how to:

*   Create a RESTful API with Flask for inventory management
*   Use Postgres triggers and LISTEN/NOTIFY for real-time updates
*   Stream change events to the frontend via Socket.IO
*   Build a responsive dashboard UI with live event visualization
*   Handle real-time data synchronization across multiple clients

The key components that make this system work in real-time are:

*   **Postgres Triggers**: Automatically emit NOTIFY events on data changes
*   **Threading Integration**: Listen to Postgres notifications in a separate thread
*   **Socket.IO Broadcasting**: Push updates to all connected clients instantly with automatic fallbacks
*   **Event-driven Frontend**: React to real-time events and update the UI

Looking for more enhancements?

1.  **Add authentication and user management** to track who makes changes
2.  **Implement room-based subscriptions** using Socket.IO rooms for multi-tenant applications
3.  **Add data visualization charts** to show inventory trends over time
4.  **Scale with Redis** as a message broker for multiple Flask instances

This tutorial provides a complete foundation for building real-time applications with Flask and Postgres. The combination of database triggers, threading, Socket.IO, and a modern frontend creates a responsive and scalable inventory tracking system that's production-ready.

The Flask approach offers excellent developer experience with its familiar synchronous programming model while still delivering powerful real-time capabilities through intelligent use of threading and Socket.IO's robust WebSocket implementation.

Cheers!