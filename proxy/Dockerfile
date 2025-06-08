# Utilise une image légère de Nginx
FROM nginx:alpine

# Copie ton fichier de configuration nginx dans le dossier de conf
COPY default.conf /etc/nginx/conf.d/default.conf

# Copie les fichiers statiques générés par le frontend (optionnel selon structure)
# Exemple si ton frontend build est dans ../frontend/dist ou ../frontend/build
# Tu peux adapter ce chemin selon la sortie de ton build frontend
# COPY ../frontend/dist/ /usr/share/nginx/html/

# Expose le port 80 pour le trafic HTTP
EXPOSE 80

# Démarre nginx
CMD ["nginx", "-g", "daemon off;"]
