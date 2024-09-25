import threading

import cv2
from fastapi import APIRouter

router = APIRouter()


@router.get("/")
async def root():
    print("rPPG route reached.")
    return {"message": "rPPG route reached."}


camera_active = False


def access_camera():
    global camera_active
    cap = cv2.VideoCapture(0)

    while camera_active:
        ret, frame = cap.read()

        if ret:
            cv2.imshow("Camera", frame)
        if cv2.waitKey(1) & 0xFF == ord("q"):
            break

    cap.release()
    cv2.destroyAllWindows()


@router.get("/start_camera")
def start_camera():
    global camera_active
    if not camera_active:
        camera_active = True
        threading.Thread(target=access_camera).start()
    return {"message": "Camera started."}


@router.get("/stop_camera")
def stop_camera():
    global camera_active
    camera_active = False
    return {"message": "Camera stopped."}
