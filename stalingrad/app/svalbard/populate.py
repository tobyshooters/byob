import sqlite3
import pprint
import json

with open("./setup/mock_data.json") as data:
    mock_data = json.load(data)

printer = pprint.PrettyPrinter()
printer.pprint(mock_data)

conn = sqlite3.connect("svalbard.db")
c = conn.cursor()

with open("./setup/genesis.sql") as genesis:
    g = genesis.read().split(";")
    for statement in g:
        print(statement)
        c.execute(statement+";")

for tablename in mock_data.keys():
    c.execute("DELETE FROM " + tablename)
    for row in mock_data[tablename]:
        insert_query = "INSERT INTO " + tablename + " "
        fields = "("
        values = "("
        for field in row.keys():
            fields += field + ", "
            if type(row[field]) == str:
                values += "'" + str(row[field]) + "'" + ", "
            else:
                values += str(row[field]) + ", "
        insert_query += fields[:-2] + ") "
        insert_query += "VALUES " + values[:-2] + ")"
        print(insert_query)
        c.execute(insert_query)
conn.commit()

import os
os.system("sequelize-auto -h localhost -d svalbard.db -e sqlite -c setup/options.json")
os.system("mv models ../models")
