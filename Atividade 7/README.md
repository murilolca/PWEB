# Criando um jogo

"Pedra, papel ou tesoura" é um jogo clássico para 2 pessoas.  
Cada jogador escolhe pedra, papel ou tesoura. Neste exercício o jogador irá jogar com o computador.  

## Resultados possíveis
- Empate.  
- Pedra quebra tesoura.  
- Tesoura corta papel.  
- Papel cobre a pedra.  

## Fases
a. O usuário faz uma escolha.  
b. O computador faz uma escolha  
   (método random – ponto flutuante aleatórios [0, 1),  
   0 (inclusivo) até, mas não incluindo, 1 (exclusivo)).  
   Sugestão: divida 0.99 em 3 partes.  
c. A partir das duas escolhas, determinar o vencedor.  

