from fastapi import FastAPI
from pydantic import BaseModel
from models import users , menu

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
    
class MenuItem(BaseModel):
    name: str
    price: float
    image: str
    category: str
    description: str
    isVeg: bool
    rating: float
    prepTime: str

@app.get("/menu")
def get_all_menu():
    return menu.get_all_menu_items()

@app.get("/menu/{item_id}")
def get_menu_item(item_id: int):
    item = menu.get_menu_item_by_id(item_id)
    if item:
        return item
    raise HTTPException(status_code=404, detail="Menu item not found")

@app.post("/menu")
def create_menu_item_route(item: MenuItem):
    return menu.create_menu_item(item.dict())

@app.put("/menu/{item_id}")
def update_menu_item_route(item_id: int, item: MenuItem):
    return menu.update_menu_item(item_id, item.dict())

@app.delete("/menu/{item_id}")
def delete_menu_item_route(item_id: int):
    return menu.delete_menu_item(item_id)
