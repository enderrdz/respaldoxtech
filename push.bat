@echo off
echo --- PREPARANDO SUBIDA A GITHUB ---

echo 1. Inicializando Git...
git init

echo 2. Asegurando rama main...
git branch -M main


echo 3. Agregando archivos (esto puede tardar un poco)...
git add .

echo 4. Guardando cambios (Commit)...
git commit -m "Backup completo respaldoxtech - Codigo alpha"

echo 5. Configurando repositorio remoto...
git remote remove origin 2>nul
git remote add origin https://github.com/enderrdz/respaldoxtech.git

echo 6. Subiendo a GitHub...
git push -u origin main

echo.
echo --- PROCESO COMPLETADO ---
pause