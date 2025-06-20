from fastapi import FastAPI
from pydantic import BaseModel
from models import users

app = FastAPI()

@app.get("/ping")
def read_root():
    return "pong"

class SignupRequest(BaseModel):
    name: str
    phone: str
    password: str
    email: str

@app.post("/signup")
def signup_route(req: SignupRequest):
    users.sign_up(req.email, req.name, req.phone, req.password)
    return {
        "status": "success"
    }
