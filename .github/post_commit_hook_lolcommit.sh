#!/bin/bash

# Chemin vers le fichier post-commit
post_commit_file=".git/hooks/post-commit"

# Chaîne à remplacer
old_content='lolcommits --capture'

# Nouveau contenu à ajouter
new_content='LOLCOMMITS_DIR="./lolcommits" lolcommits --capture'

# Vérifier si le fichier post-commit existe
if [ ! -f "$post_commit_file" ]; then
  echo "post-commit file not found."
  exit 1
fi

# Remplacer l'ancienne chaîne par la nouvelle dans le fichier post-commit
if grep -q "$old_content" "$post_commit_file"; then
  sed -i "s|$old_content|$new_content|" "$post_commit_file"
  echo "Le hook post-commit a été mis à jour avec succès."
else
  echo "La chaîne à remplacer n'a pas été trouvée dans le hook post-commit."
fi