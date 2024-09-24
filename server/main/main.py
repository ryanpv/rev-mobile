from fastapi import FastAPI

# Routes
from main.routers.rPPG import router as rPPG_router

app = FastAPI()

app.include_router(rPPG_router)  # prefix="/rPPG" ???

print("Main server file read")
