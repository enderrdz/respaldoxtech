# Guía de Instalación de SSL en Producción

Esta guía detalla los pasos para obtener e instalar certificados SSL gratuitos de **Let's Encrypt** en un servidor de producción (Ubuntu con Nginx).

## Requisitos Previos

- Un servidor con Ubuntu (o similar) accesible vía SSH.
- Un nombre de dominio apuntando a la IP de tu servidor.
- Puerto 80 y 443 abiertos en el firewall.

## Pasos

### 1. Instalar Certbot
Ejecuta los siguientes comandos para instalar Certbot y el plugin de Nginx:

```bash
sudo apt update
sudo apt install certbot python3-certbot-nginx
```

### 2. Obtener el Certificado
Reemplaza `tudominio.com` con tu dominio real:

```bash
sudo certbot --nginx -d tudominio.com -d www.tudominio.com
```

Sigue las instrucciones en pantalla. Certbot configurará automáticamente Nginx para usar los certificados.

### 3. Verificar Renovación Automática
Los certificados de Let's Encrypt duran 90 días, pero Certbot configura una tarea programada para renovarlos. Puedes probarla con:

```bash
sudo certbot renew --dry-run
```

## Configuración de Nginx (Referencia)
Si necesitas configurar Nginx manualmente, tu archivo de sitio en `/etc/nginx/sites-available/` debería verse similar a esto:

```nginx
server {
    listen 80;
    server_name tudominio.com www.tudominio.com;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name tudominio.com www.tudominio.com;

    ssl_certificate /etc/letsencrypt/live/tudominio.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/tudominio.com/privkey.pem;

    location / {
        proxy_pass http://localhost:5173; # O la ruta de tu build
        # ... otras configuraciones
    }
}
```
