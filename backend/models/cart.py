from lib.db import supabase_client

def add_to_cart(user_id: int, item_id: int, quantity: int):
    # Try to get the first matching item (if any)
    response = supabase_client.table("cart") \
        .select("*").eq("user_id", user_id).eq("item_id", item_id).limit(1).execute()

    existing = response.data[0] if response.data else None

    if existing:
        new_quantity = existing["quantity"] + quantity
        supabase_client.table("cart").update({"quantity": new_quantity}) \
            .eq("user_id", user_id).eq("item_id", item_id).execute()
    else:
        supabase_client.table("cart").insert({
            "user_id": user_id,
            "item_id": item_id,
            "quantity": quantity
        }).execute()

    return {"message": "Item added to cart"}


# Get all cart items for a user
def get_cart(user_id: int):
    response = supabase_client.table("cart").select("*").eq("user_id", user_id).execute()
    return response.data or []

# Increment quantity of a specific cart item by 1
def increment_cart_item(user_id: int, item_id: int):
    # Get current quantity
    current_data = supabase_client.table("cart") \
        .select("quantity").eq("user_id", user_id).eq("item_id", item_id).single().execute()
    
    current_quantity = current_data.data["quantity"] if current_data.data else 0
    new_quantity = current_quantity + 1

    supabase_client.table("cart").update({"quantity": new_quantity}) \
        .eq("user_id", user_id).eq("item_id", item_id).execute()
    
    return {"message": f"Cart item quantity increased to {new_quantity}"}


# Decrement quantity of a specific cart item by 1
def decrement_cart_item(user_id: int, item_id: int):
    # Get current quantity
    current_data = supabase_client.table("cart") \
        .select("quantity").eq("user_id", user_id).eq("item_id", item_id).single().execute()
    
    current_quantity = current_data.data["quantity"] if current_data.data else 0

    if current_quantity > 1:
        new_quantity = current_quantity - 1
        supabase_client.table("cart").update({"quantity": new_quantity}) \
            .eq("user_id", user_id).eq("item_id", item_id).execute()
        return {"message": f"Cart item quantity decreased to {new_quantity}"}
    elif current_quantity == 1:
        # Optionally remove item if quantity becomes 0
        supabase_client.table("cart").delete() \
            .eq("user_id", user_id).eq("item_id", item_id).execute()
        return {"message": "Cart item removed as quantity reached 0"}
    else:
        return {"message": "Cart item not found or already at 0"}

# Remove a specific item from cart
def remove_cart_item(user_id: int, item_id: int):
    supabase_client.table("cart").delete() \
        .eq("user_id", user_id).eq("item_id", item_id).execute()
    return

def clear_cart(user_id: int):
    supabase_client.table("cart").delete().eq("user_id", user_id).execute()
    return {"message": "Cart cleared"}

