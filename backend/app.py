from flask import Flask, request, jsonify
import gspread
from oauth2client.service_account import ServiceAccountCredentials
import os

app = Flask(__name__)

# Configuração da API do Google Sheets
scope = ["https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/drive"]
creds = ServiceAccountCredentials.from_json_keyfile_name("credentials.json", scope)
client = gspread.authorize(creds)
sheet = client.open("task-manager").sheet1

@app.route('/tasks', methods=['GET'])
def get_tasks():
    tasks = sheet.get_all_records()
    return jsonify(tasks), 200

@app.route('/tasks', methods=['POST'])
def add_task():
    task = request.json['task']
    sheet.append_row([task])
    return jsonify({"message": "Task added successfully"}), 201

@app.route('/tasks/<int:task_id>', methods=['DELETE'])
def delete_task(task_id):
    sheet.delete_row(task_id + 1)
    return jsonify({"message": "Task deleted successfully"}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0')
