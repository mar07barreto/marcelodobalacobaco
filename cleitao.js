//Arrays
    let arr = [0,1,2,3,4,5]
    let arr2 = ['uva', 'maça', 'pera']
    let arr3 = ['João',40,'Casado',3, true]
    //let arr2 = [,0 1, 2]
    let tup = (0,1,2,3,4,5)
    let tup2 = ('gabiroba','gavirova','guabiroba','guavirova')
    let tup3 = ("João", 45, 'Casado',3, true)
    //Dicionarios
    let pessoa = {
        'nome' : 'João',
        'idade' : 45,
        'estado_civil' : 'Casado',
        'filhos' : 3,
        'registrado' : true
    }
    console.log(pessoa)

    let pessoa2 = {
    
        nome : 'João',
        idade : 45,
        estado_civil : 'Casado',
        filhos : 3,
        registrado : true
    }
    console.log(pessoa2)

    //laço de repetição 
    //Enquanto - while
    let indice = 0
    let parar = true
    //while (ENQUANTO) quando eu não sei o tamanho dos dados 
    //ou o resultado de uma operação 
    //ler arquivos / conectar site ou banco de dados 
    //preciso de um criterio de parada, senão é infinito
    //Arquivo - EOF
    while(indice < 100){
        console.log(indice)
        indice++
    }
    //para ou até ou faça - for / foreach
    //index = i 
    for (let i = 0; i < arr3.length; i++) {
        const element = arr3[i];
        console.log(element)
    }

    let arr4 = [0,1,2,3,4,5,6,7,8,9,10]
    arr4.forEach(element => console.log(element))

    const arr5 = arr4.map( x => x * 2)
    console.log(arr5)

    //Recaptulando 
    //Array = é uma coleção de dados, varios tipos, e podem 
    //ser alterados conforme a necessidade.
    //Você pode consutar usando o indice, a partir do 0 até
    //o tamanho do array, e pode alterar tambem cada indice
    //é definido pelo [] (colchetes)
    //unidirecional = [0]
    let un = [1,2,3]
    //bidimencional = [0][0]
    let bid = [
        [0,1,2],
        [0,1,3]
    ]
    //Tridimencional = [0][0][0]
    let tri = [
        [
            [0,1,2]
            [0,1,3]
        ]
    ]

    //Array vazio 
    let vazio = []

    vazio.push(1)
    vazio.push(2)
    vazio.push(3)
    vazio.push(5)
    vazio.push(7)
    vazio.push(11)

    console.log(vazio)
    vazio.pop()//Remove ultimo elemento 
    console.log(vazio)
    vazio.shift() // Remove o primeiro elemento
    console.log(vazio)

    let p1 = {nome:'Maria',idade: 45, estado_civil: 'Casada'}
    let p2 = {nome:'Ana',idade: 40, estado_civil: 'Casada'}
    let p3 = {nome:'Paula',idade: 20, estado_civil: 'Solteira'}
    //quando eu quero acessar o atributo eu pego a variavel e
    //chamo pelo nome
    console.log(p2.nome)

    let lista = [p1, p2, p3]
    console.log(lista)
    //Remover por indce e total de registros apos este indice
    lista.splice(1,1)
    console.log(lista)
