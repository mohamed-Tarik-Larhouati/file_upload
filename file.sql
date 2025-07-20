drop database drive;
create database drive;
use drive;
CREATE TABLE users (
    id int PRIMARY KEY auto_increment,  -- Identifiant unique auto-incrémenté
    username VARCHAR(50) NOT NULL UNIQUE,  -- Nom d'utilisateur
    email VARCHAR(100) NOT NULL UNIQUE,  -- Adresse e-mail
    password_hash TEXT NOT NULL,  -- Mot de passe haché
    profile_picture TEXT  -- URL ou chemin de l'image de profil
);
CREATE TABLE file_manager (
    id SERIAL PRIMARY KEY,  -- Identifiant unique
    user_id INTEGER NOT NULL,  -- Référence à l'utilisateur propriétaire du fichier
    file_name VARCHAR(255) NOT NULL,  -- Nom du fichier
    file_path TEXT NOT NULL,  -- Chemin d'accès ou URL au fichier
    file_type VARCHAR(50),  -- Type MIME (ex: image/png, application/pdf)
    file_size BIGINT,  -- Taille du fichier en octets
    is_public BOOLEAN DEFAULT FALSE,  -- Fichier visible par tous ou non
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Date d’upload
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE  -- Lien avec la table users
);
