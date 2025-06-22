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

class SigninRequest(BaseModel):
    email: str
    password: str

@app.post("/signin")
def signin_route(req: SigninRequest):
    user = users.sign_in(req.email, req.password)
    if user:
        return {"status": "success", "user": user}
    else:
        return {"status": "error", "message": "Invalid credentials"}
