# main.py
import requests
import json
from config import API_KEY, BASE_URL


def fetch_weather(city):
    params = {
        'q': city,
        'appid': API_KEY,
        'units': 'metric'
    }
    response = requests.get(BASE_URL, params=params)
    data = response.json()

    if 'main' in data:
        return {
            'temp': data['main']['temp'],
            'humidity': data['main']['humidity'],
            'description': data['weather'][0]['description'],
            'updatedAt': data['dt']
        }
    else:
        return {'error': 'Data not found'}


def update_weather_js(data):
    js_content = f"const dehiwalaWeatherData = {json.dumps(data)};"
    with open("dehiwala_weather_updates.js", "w") as js_file:
        js_file.write(js_content)


if __name__ == "__main__":
    dehiwala_data = fetch_weather("Dehiwala")
    update_weather_js(dehiwala_data)
