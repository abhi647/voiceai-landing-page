import os
import requests
from dotenv import load_dotenv

load_dotenv()
api_key = os.getenv("ELEVEN_API_KEY")

url = "https://api.elevenlabs.io/v1/user"
headers = {"xi-api-key": api_key}
response = requests.get(url, headers=headers)
print("Status Code:", response.status_code)
print("Response:", response.text)
