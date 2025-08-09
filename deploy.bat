@echo off
echo Starting deployment...
call npm run build
if %errorlevel% neq 0 (
    echo Build failed!
    exit /b 1
)
call npm run deploy
if %errorlevel% neq 0 (
    echo Deploy failed!
    exit /b 1
)
echo Deployment completed successfully!
pause