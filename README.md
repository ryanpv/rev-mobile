# REV-MOBILE

## Server

### Local Setup
Connecting a React Native app to the FastAPI server is a bit more complicated. There are some network restrictions that don't allow them to communicate unless certain system configurations are in place (security reasons of course). Even though we use "localhost" to communicate, the local IP would actually be different as they are unique to the devices. Therefore, we need to set up port fowarding and explicitly use the PC/laptop IP to access the server port instead of "localhost". For additional context, I am using WSL2 to develop my applications so I haven't tried this with Windows OS.

First temporarily set your CORS to this:
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Setup steps:
1) Open Windows Powershell and run ipconfig to get your PC/laptop IPv4 (this will replace "localhost" in the fetch function)
2) Open Windows Firewall Settings:
   * Press Windows + R, type control, and press Enter. This will open the Control Panel.
   * In the Control Panel, click on System and Security.
   * Click on Windows Defender Firewall.
3) Advanced Settings:
   * On the left side of the Windows Defender Firewall window, click Advanced settings.
4) Create a New Inbound Rule:
   * In the Windows Defender Firewall with Advanced Security window, click on Inbound Rules on the left pane.
   * On the right side, click on New Rule....
5) Configure the Rule:
   * In the New Inbound Rule Wizard, select Port and click Next.
   * Choose TCP (since HTTP/HTTPS traffic uses TCP) and select Specific local ports. In the text box, type 8000, then click Next.
   * On the Action page, select Allow the connection and click Next.
   * On the Profile page, choose where you want the rule to apply. If you're on a private network (like a home Wi-Fi), select Private. If you     want this rule to apply to all networks (public and private), select all options and click Next.
   * Name the rule something like Allow Port 8000 (Or whatever port your server runs on) and click Finish.
6) Test your access by opening your browser and try accessing http://<your-IPv4-address>:8000/ from another device.
7) Run the server using this line:
   * uvicorn main:app --host 0.0.0.0 --port 8000 (or whatever port your server is on)

If it still doesn't work, these additional steps should help:
   * Find WSL2 IP address by running this in bash: hostname -I
   * Next run this in Windows Powershell: netsh interface portproxy add v4tov4 listenport=8000 listenaddress=0.0.0.0 connectport=8000 connectaddress=<WSL2 IP Address>
   * rerun your server with: uvicorn main:app --host 0.0.0.0 --port 8000 (or whatever port your server is on)


