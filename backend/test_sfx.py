import requests, os
from dotenv import load_dotenv

load_dotenv()
api_key = os.getenv("ELEVEN_API_KEY")

url = "https://api.elevenlabs.io/v1/sound-generation"
headers = {
    "xi-api-key": api_key,
    "Content-Type": "application/json"
}
data = {
    "text": "Low hum of conversation in a packed office room, continuous ambient noise",
    "duration_seconds": 15
}
response = requests.post(url, json=data, headers=headers)
print(response.status_code)
if response.status_code == 200:
    with open("../public/crowded-room-7.mp3", "wb") as f:
        f.write(response.content)
    print("Saved as crowded-room-7.mp3")
else:
    print(response.text)
