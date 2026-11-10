@echo off
cd /d "%~dp0"
echo Opening Nicolas Portfolio local preview...
where npm >nul 2>nul
if errorlevel 1 (
  echo ERROR: npm is not installed or not available in PATH.
  pause
  exit /b 1
)
if not exist "node_modules" (
  call npm install
  if errorlevel 1 (pause & exit /b 1)
)
call npm run dev
pause
