from lib.db import supabase_client
from datetime import datetime

def place_order(user_id: int):
    # Step 1: Fetch cart items
    cart_items = supabase_client.table("cart") \
        .select("*").eq("user_id", user_id).execute().data

    if not cart_items:
        return {"status": "error", "message": "Cart is empty"}

    # Step 2: Calculate total price from menu
    total_price = 0
    order_items_data = []

    for item in cart_items:
        item_id = item["item_id"]
        quantity = item["quantity"]

        # Get item price from menu
        menu_item = supabase_client.table("menu") \
            .select("price").eq("id", item_id).single().execute().data

        if not menu_item:
            continue  # or raise error if item is missing

        price = menu_item["price"]
        total_price += price * quantity

        order_items_data.append({
            "item_id": item_id,
            "quantity": quantity,
            "price": price
        })

    # Step 3: Insert into orders table
    order_response = supabase_client.table("orders").insert({
        "user_id": user_id,
        "total_price": total_price,
        "status": "pending",  # default status
        "created_at": datetime.now().isoformat()
    }).execute()

    order_id = order_response.data[0]["id"]

    # Step 4: Insert order items
    for item in order_items_data:
        supabase_client.table("order_items").insert({
            "order_id": order_id,
            "item_id": item["item_id"],
            "quantity": item["quantity"],
            "price": item["price"]
        }).execute()

    # Step 5: Clear cart
    supabase_client.table("cart").delete().eq("user_id", user_id).execute()

    return {"status": "success", "message": "Order placed", "order_id": order_id}

def get_orders(user_id: int):
    response = supabase_client.table("orders").select("*") \
        .eq("user_id", user_id).order("created_at", desc=True).execute()
    return response.data

def get_order_by_id(order_id: int):
    # Get the order
    order = supabase_client.table("orders").select("*") \
        .eq("id", order_id).single().execute().data

    if not order:
        return {"status": "error", "message": "Order not found"}

    # Get the order items
    items = supabase_client.table("order_items").select("*") \
        .eq("order_id", order_id).execute().data

    return {
        "order": order,
        "items": items
    }
