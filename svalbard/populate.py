import sqlite3
import pprint
import json

with open("mock_data.json") as data:
    mock_data = json.load(data)

printer = pprint.PrettyPrinter()
printer.pprint(mock_data)

conn = sqlite3.connect("svalbard.db")
c = conn.cursor()

