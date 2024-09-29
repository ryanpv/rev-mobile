from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Routes
from main.routers.rPPG import router as rPPG_router

app = FastAPI()


origins = [
    "http://192.168.2.43:3000",
    "http://192.168.1.32:4040",
    "http://localhost:4040",
    "http://localhost:8081",
    "http://localhost:8000",
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(rPPG_router)  # prefix="/rPPG" ???

print("Main server file read")
