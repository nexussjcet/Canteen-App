from lib.db import supabase_client
import hashlib

def hash(text: str):
  return hashlib.sha256(text.encode('utf-8')).hexdigest()

def sign_up(email: str, name: str, phone: str, password: str):
  hashed_password = hash(password)

  supabase_client.table("users").insert({
    "email": email,
    "phone": phone,
    "name": name,
    "password": hashed_password
  }).execute()