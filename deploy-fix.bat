@echo off
echo Fixing gh-pages deployment issue...

REM Clear gh-pages cache
if exist "node_modules\.cache\gh-pages" (
    echo Clearing gh-pages cache...
    rmdir /s /q "node_modules\.cache\gh-pages"
)

REM Clean any existing build
if exist "build" (
    echo Cleaning existing build...
    rmdir /s /q "build"
)

echo Building project...
call npm run build
if %errorlevel% neq 0 (
    echo Build failed!
    exit /b 1
)

echo Deploying with GitHub Actions instead...
git add .
git commit -m "Deploy: Trigger GitHub Actions deployment"
git push origin master

echo.
echo Deployment initiated via GitHub Actions!
echo Check the deployment status at: https://github.com/JiffytechSolutions/JiffyDemo/actions
echo Your site will be available at: https://jiffytechsolutions.github.io/JiffyDemo/
echo.
pause