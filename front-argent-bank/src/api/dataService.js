import axios from "axios";
import { BASEURL } from "./config";

// Fonction pour créer une instance axios de base pour les requêtes API.
export function dataService() {
  return axios.create({
    // Définit l'URL de base pour toutes les requêtes de cette instance.
    baseURL: BASEURL,
    // Définit les headers par défaut pour toutes les requêtes, spécifiant que le contenu est de type JSON.
    headers: {
      "Content-Type": "application/json",
    },
  });
}

// Fonction pour créer une instance axios spécifique pour les requêtes API qui nécessitent une authentification.
export function dataServiceProfile(token) {
  return axios.create({
    // Définit l'URL de base, identique à celle de l'instance axios de base.
    baseURL: BASEURL,
    // Définit les headers pour inclure le token d'authentification.
    // Le token est ajouté dans le header Authorization sous la forme "Bearer token".
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
