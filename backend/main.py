from fastapi import FastAPI , Body , HTTPException
from pydantic import BaseModel
from models import users , menu , cart , order

app = FastAPI()

@app.get("/ping")
def read_root():
    return "pong"

class SignupRequest(BaseModel):
    name: str
    phone: str
    password: str

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
    
# --- Menu Routes ---
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


@app.get("/menu/category/{category}")
def get_menu_by_category(category: str):
    items = menu.get_menu_items_by_category(category)
    return items

# --- Cart Routes ---
class CartRequest(BaseModel):
    item_id:int
    quantity:int
    
@app.get("/cart/{user_id}")
def get_cart_route(user_id:int):
    return cart.get_cart(user_id)

@app.post("/cart/{user_id}")
def add_to_cart_route(user_id:int, req: CartRequest):
    return cart.add_to_cart(user_id, req.item_id, req.quantity)

@app.post("/cart/{user_id}/item/{item_id}/increment")
def increment_cart_item_route(user_id: int, item_id: int):
    return cart.increment_cart_item(user_id, item_id)

@app.post("/cart/{user_id}/item/{item_id}/decrement")
def decrement_cart_item_route(user_id: int, item_id: int):
    return cart.decrement_cart_item(user_id, item_id)

@app.delete("/cart/{user_id}/item/{item_id}")
def remove_cart_item_route(user_id: int , item_id: int):
    return cart.remove_cart_item(user_id, item_id)

@app.delete("/cart/{user_id}")
def clear_cart_route(user_id: int):
    return cart.clear_cart(user_id)

# --- Cart Routes ---

@app.post("/order/{user_id}")
def place_order_route(user_id: int):
    return order.place_order(user_id)

@app.get("/orders/{user_id}")
def get_orders_route(user_id: int):
    return order.get_orders(user_id)

@app.get("/order/details/{order_id}")
def get_order_details_route(order_id: int):
    return order.get_order_by_id(order_id)
