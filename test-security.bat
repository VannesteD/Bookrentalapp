@echo off
REM Security Testing Script for Bookrentalapp
REM Tests rate limiting and API security features

echo ========================================
echo Security Testing - Bookrentalapp
echo ========================================
echo.

echo Testing Rate Limiting (5 requests per hour)...
echo Sending 7 rapid requests to /api/subscribe
echo.

for /L %%i in (1,1,7) do (
    echo Request %%i:
    curl -X POST http://localhost:3000/api/subscribe ^
         -H "Content-Type: application/json" ^
         -d "{\"email\":\"test%%i@example.com\"}" ^
         -w "\nStatus: %%{http_code}\n" ^
         -s
    echo.
    timeout /t 1 /nobreak >nul
)

echo.
echo ========================================
echo Test Complete
echo Expected: First 5 requests should succeed (200)
echo          Requests 6-7 should be rate limited (429)
echo ========================================
