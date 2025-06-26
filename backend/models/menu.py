from lib.db import supabase_client  

def create_menu_item(data: dict):
    response = supabase_client.table("menu").insert(data).execute()
    return response.data

def get_all_menu_items():
    response = supabase_client.table("menu").select("*").execute()
    return response.data

def get_menu_item_by_id(item_id: int):
    response = supabase_client.table("menu").select("*").eq("id", item_id).single().execute()
    return response.data

def update_menu_item(item_id: int, data: dict):
    response = supabase_client.table("menu").update(data).eq("id", item_id).execute()
    return response.data

def delete_menu_item(item_id: int):
    response = supabase_client.table("menu").delete().eq("id", item_id).execute()
    return response.data 

def get_menu_items_by_category(category: str):
    response = supabase_client.table("menu").select("*").eq("category", category).execute()
    return response.data

