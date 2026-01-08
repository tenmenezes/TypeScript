type Uuid = string | number | null;

function acessar(uuid: Uuid, nome: string) {
    console.log(`Bem vindo ${nome}, ID: ${uuid}`);
}

function logUser(uuid: Uuid) {
    console.log(`Usuário de ID: ${uuid}`);
}

acessar(123, "Yago Menezes");
logUser(123);

