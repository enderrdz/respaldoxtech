@echo off
setlocal enabledelayedexpansion

echo.
echo ========================================
echo   RespaldoXTech - GitHub Push Tool
echo ========================================
echo.

:: Check if git is installed
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Git is not installed or not in PATH.
    pause
    exit /b
)

:: User input for commit message
set /p msg="Introduce el mensaje de commit (por defecto 'Subida automatica'): "
if "%msg%"=="" set msg=Subida automatica

:: Initialize Git if it doesn't exist
if not exist .git (
    echo [INFO] Inicializando repositorio Git...
    git init
    git branch -M main
)

:: Add remote if it doesn't exist
git remote get-url origin >nul 2>&1
if %errorlevel% neq 0 (
    echo [INFO] Configurando repositorio remoto...
    git remote add origin https://github.com/enderrdz/respaldoxtech.git
) else (
    :: Update remote just in case
    git remote set-url origin https://github.com/enderrdz/respaldoxtech.git
)

:: Push process
echo [INFO] Preparando archivos...
git add .

echo [INFO] Creando commit: "%msg%"
git commit -m "%msg%"

echo [INFO] Subiendo a GitHub (rama main)...
git push -u origin main

if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Hubo un problema al subir los archivos. 
    echo Asegurate de tener permisos y que el repositorio existe.
) else (
    echo.
    echo [SUCCESS] ¡Todo listo! Tu codigo ya esta en GitHub.
)

echo.
pause
