# Troubleshooting 

## After setting up MFA for Maya Chen, I wasn't able to get her to login the Application.  I tested my own admin username to confirm it wasn't just her. 

<img width="446" height="570" alt="image" src="https://github.com/user-attachments/assets/22bc802a-0003-4367-ba09-8765f876b551" />

Error:<img width="655" height="814" alt="image" src="https://github.com/user-attachments/assets/e8f1eb1e-b716-47cd-812d-46c1f371b0b8" />

It was a URI mismatch error: https://learn.microsoft.com/en-us/troubleshoot/entra/entra-id/app-integration/error-code-AADSTS50011-redirect-uri-mismatch

Followed the directions to configure the URI redirect:
<img width="774" height="144" alt="image" src="https://github.com/user-attachments/assets/0d5acff1-360f-455e-8bc9-cc9223ce697e" />

Confirmed Maya able to log into the application:
<img width="1270" height="796" alt="image" src="https://github.com/user-attachments/assets/64e2364f-096f-4b92-9dae-69fd108b15a7" />
