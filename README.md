# projet-collectif---dataviz-treeoflife
projet-collectif---dataviz-treeoflife created by GitHub Classroom

RETROSPECTIVE DU PROJET DE GROUPE DATAVIZ

  On a commencé par tester des animations à l'aide de bibliothèques JS et Snapsvg:
- Snap.svg avec lequel on a réussi à animer une feuille trouvée en SVG sur internet : on l'a faite changer de couleur et tomber avec des animations 
- On a essayé de prendre un arbre entier en SVG pour isoler et animer chaque feuille mais impossible car pas d'ID pour chaque élément
- Alexia a créé une image SVG à la main avec Affinity Designer avec un calque par feuille 

  L'idée globale du projet était de faire tomber les feuilles de l'arbre en fonction de l'évolution en direct de la déforestation dans le monde :
- Recherche d'API sur le sujet qui n'a débouché sur rien puisque la seule qui nous intéressait n'était plus disponible 
- On a essayé de trouver autre chose avec des données qui auraient pu correspondre quand même au sujet : recul des espaces verts à Paris, déforestation plus ciblée (les forêts indonésiennes)...
- Ne trouvant rien de probant on a changé d'idée 

  L'idée numéro 2 était de prendre un API météo et de changer notre arbre en fonction du temps :
- Difficulté à trouver un API gratuit qui fonctionne 
- Difficulté à call l'API sur le JS --> test avec Jquery, Ajax, NodeJS, Fetch

  L'idée finale était d'utiliser l'API du NYT et de faire en sorte d'accéder à un article au hasard sur le thème de la forêt lorsqu'on clique sur une feuille de l'arbre en intégrant des animations:
- On a réussi à utiliser l'API du NYT   
- On a réussi à coder l'idée d'un article du NYT random quand on clique sur les feuilles de l'arbre
- On a réussi à faire des animations en CSS mais impossible de les faire fonctionner directement sur le projet 

Conclusion : 
On n'a pas du tout réussi à coder ce qu'on voulait mais en faisant plein d'expérimentations qui n'ont pas fait avancer le projet on sait bidouiller plein de trucs.
