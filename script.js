
const transactionUL = document.querySelector('#transactions')//recupera a ul da dom
const incomeDisplay = document.querySelector('#money-plus')//pega o p da dom para mostra a receita
const expenseDisplay = document.querySelector('#money-minus')//pega o p da dom para mostra a despesas
const balanceDisplay = document.querySelector('#balance')//pega o h1 da dom para mostra o saldo total
console.log({incomeDisplay, expenseDisplay,balanceDisplay})
const dummyTransactions = [
    {id:1, nome: 'Bolo de brigadeiro',amount:-20},
    {id:2, nome: 'Salário',amount:300},
    {id:3, nome: 'Torta de frango',amount:-10},
    {id:4, nome: 'Violão',amount:150}
]
const addtransactionIntoDom = transaction =>{
    //add sinal de mais ou menos de acordo com o valor  da propriedade amount do obj passdo no parametro 
    const operator = transaction.amount < 0 ? '-' : '+';
    //add a class  de acordo com o valor  da propriedade amount do obj passdo no parametro 
    const CSSClass = transaction.amount < 0 ? 'minus' : 'plus';
    //vai tirar qual sinal que vir no mumero
    const amountWithoutOperator = Math.abs(transaction.amount);
    // cria a li 
    const li = document.createElement('li');
    li.classList.add(CSSClass);//add a class na li
    //add a span na li
    li.innerHTML =`
    ${transaction.nome} <span> ${operator} R$ ${amountWithoutOperator}</span><button class="delete-btn">x</button>`;
    transactionUL.append(li);//inserido a li na dom
    //append coloca o ultimo elememto inserido como o primeiro filho
    //prepend coloca o ultimo elemento inserido como o ultimo filho
    
}
const updateBalanceValues = () =>{
    const transactonsAmounts = dummyTransactions
          .map(transaction => transaction.amount);
    const total = transactonsAmounts
          .reduce((accumulator, transaction) => accumulator + transaction,0)
          .toFixed(2);//aqui o valor total saldo
    const income = transactonsAmounts
          .filter(value => value > 0)
          .reduce((accumulator, value) => accumulator + value,0)
          .toFixed(2);//aqui a saldo total da receitas
    const  expense = transactonsAmounts
           .filter(value => value < 0 )
           .reduce((accumulator, value) => accumulator + value,0)
           .toFixed(2);
           balanceDisplay.textContent =`R$ ${total}`;
           incomeDisplay.textContent = `R$ ${income}`;
           expenseDisplay.textContent =`R$ ${Math.abs(expense)}`;
    console.log(expense)

}
 const init = () =>{
     dummyTransactions.forEach(addtransactionIntoDom);
     updateBalanceValues()
 }
//responsavél para inicializar os dados na tela
init()