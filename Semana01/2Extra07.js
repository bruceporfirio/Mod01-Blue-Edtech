// E os 10% do garçom? - Defina uma variável para o valor de uma refeição que custou R$ 42,54. 
// Na sequência, defina uma variável para o valor da taxa de serviço que é de 10%. 
// Por fim defina uma variável que será responsável pelo cálculo do valor total da conta e exiba-o no console 
// com a seguinte formatação: R$99.99 (valor com duas casas decimais).

let refeicao = 42.54
let taxa = 0.1

let total = ((taxa * refeicao) + refeicao).toFixed(2)

console.log(`O valor da refeição foi de R${refeicao} + 10%. Total: R$${total}.`)