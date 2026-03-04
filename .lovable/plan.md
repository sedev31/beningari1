

## Ajustement du logo en arrière-plan du Hero

Le logo est actuellement affiché avec `opacity-[0.06]` et une taille de `w-[600px] md:w-[800px]`, ce qui le rend quasi invisible.

### Modifications dans `src/components/Hero.tsx` (ligne 16-18)

1. **Augmenter l'opacité** de `0.06` → `0.12` pour que le logo soit subtilement visible sans gêner la lecture
2. **Agrandir le logo** de `w-[600px] md:w-[800px]` → `w-[700px] md:w-[900px]` pour mieux remplir l'espace
3. **Ajouter un léger flou** avec `blur-[1px]` pour un rendu plus doux et intégré au fond

Résultat : le logo sera visible en filigrane, professionnel, sans surcharger visuellement la section Hero.

