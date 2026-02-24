import os
import requests
from dotenv import load_dotenv

load_dotenv()
api_key = os.getenv("ELEVEN_API_KEY")

url = "https://api.elevenlabs.io/v1/text-to-speech/X03mvPuTfprif8QBAVeJ"
headers = {"xi-api-key": api_key, "Content-Type": "application/json"}
data = {
  "text": "Hello, this is a test.",
  "model_id": "eleven_turbo_v2_5",
}
response = requests.post(url, json=data, headers=headers)
print("Status Code:", response.status_code)
if response.status_code != 200:
    print("Response:", response.text)
else:
    print("Success: Audio data received. Length:", len(response.content))
