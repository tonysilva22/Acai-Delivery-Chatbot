const qrcode = require("qrcode-terminal");
const { Client, MessageMedia } = require("whatsapp-web.js");
const fs = require("fs");

const client = new Client({
  puppeteer: {
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  },
});

// entao habilitamos o usuario a acessar o serviço de leitura do qr code
client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

// apos isso ele diz que foi tudo certin
client.on("ready", () => {
  console.log("Tudo certo! WhatsApp conectado.");
});

// E inicializa tudo para fazer a nossa magica =)
client.initialize();

const menu = {
  6: { name: "Açaí 143g", price: 5.0 },
  7: { name: "Açaí 172g", price: 6.0 },
  8: { name: "Açaí 200g", price: 7.0 },
  9: { name: "Açaí 229g", price: 8.0 },
  10: { name: "Açaí 257g", price: 9.0 },
  11: { name: "Açaí 286g", price: 10.0 },
  12: { name: "Açaí 314g", price: 11.0 },
  13: { name: "Açaí 343g", price: 12.0 },
  14: { name: "Açaí 372g", price: 13.0 },
  15: { name: "Açaí 400g", price: 14.0 },
  16: { name: "Açaí 429g", price: 15.0 },
  17: { name: "Açaí 457g", price: 16.0 },
  18: { name: "Açaí 486g", price: 17.0 },
  19: { name: "Açaí 514g", price: 18.0 },
  20: { name: "Açaí 543g", price: 19.0 },
  21: { name: "Açaí 571g", price: 20.0 },
  22: { name: "Açaí 600g", price: 21.0 },
  23: { name: "Açaí 629g", price: 22.0 },
  24: { name: "Açaí 657g", price: 23.0 },
  25: { name: "Açaí 686g", price: 24.0 },
};
const complementos = {
  26: { name: "Açaí Tradicional", price: 0.0 },
  27: { name: "Açaí Grego", price: 0.0 },
  28: { name: "Açaí Mesclado c/ Maracujá", price: 0.0 },
  29: { name: "Açaí Mesclado c/ Morango", price: 0.0 },
  30: { name: "Creme de Morango", price: 0.0 },
  31: { name: "Creme de Ninho Trufado", price: 0.0 },
  32: { name: "Creme de Ninho Puro", price: 0.0 },
  33: { name: "Creme de Ovomaltine ", price: 0.0 },
  34: { name: "Creme de Chocolate c/ Avelâ", price: 0.0 },
  35: { name: "Creme de Maracujá", price: 0.0 },
  36: { name: "Creme de Tapioca c/ Coco", price: 0.0 },
  37: { name: "Creme de Cupuaçu", price: 0.0 },
  38: { name: "Creme Grego c/ Frutas Vermelhas", price: 0.0 },
  39: { name: "Sorvete Flocos", price: 0.0 },
  40: { name: "Sorvete Creme c/ Passas", price: 0.0 },
  41: { name: "Sorvete Napolitano ", price: 0.0 },
  42: { name: "Sorvete Chocomenta", price: 0.0 },
  43: { name: "Sorvete Sensação", price: 0.0 },
  44: { name: "Sorvete Toffee", price: 0.0 },
  45: { name: "Sorvete de Ameixa", price: 0.0 },
  46: { name: "Leite em Pó ", price: 0.0 },
  47: { name: "Paçoca", price: 0.0 },
  48: { name: "M&m", price: 0.0 },
  49: { name: "Amendoim", price: 0.0 },
  50: { name: "Granola", price: 0.0 },
  51: { name: "Cereja", price: 0.0 },
  52: { name: "Granulado", price: 0.0 },
  53: { name: "Uva Passa", price: 0.0 },
  54: { name: "Canudinho Wefer", price: 0.0 },
  55: { name: "Chocopower", price: 0.0 },
  56: { name: "Marshmwllow", price: 0.0 },
  57: { name: "Brigadeiro", price: 0.0 },
  58: { name: "Beijinho", price: 0.0 },
  59: { name: "Gotas de Chocolate", price: 0.0 },
  60: { name: "Chocolate ao leite", price: 0.0 },
  61: { name: "Chocolate Branco", price: 0.0 },
  62: { name: "Palito de Chocolate", price: 0.0 },
  63: { name: "Flocos de Arroz", price: 0.0 },
  64: { name: "Farinha Láctea", price: 0.0 },
  65: { name: "Morango", price: 0.0 },
  66: { name: "Banana", price: 0.0 },
  67: { name: "Kiwi", price: 0.0 },
  68: { name: "Coco", price: 0.0 },
  69: { name: "Uva", price: 0.0 },
  70: { name: "Abacaxi em Calda", price: 0.0 },
  71: { name: "Finni Beijo", price: 0.0 },
  72: { name: "Finni Amora", price: 0.0 },
  73: { name: "Finni Banana", price: 0.0 },
  74: { name: "Finni Dentinho", price: 0.0 },
  75: { name: "Finni Sortido", price: 0.0 },
  76: { name: "Jujuba", price: 0.0 },
  77: { name: "Bala Deliket", price: 0.0 },
  78: { name: "Bala Ácida", price: 0.0 },
  79: { name: "Leite Condensado", price: 0.0 },
  80: { name: "Nutella", price: 0.0 },
  81: { name: "Mel", price: 0.0 },
  82: { name: "Cobertura de Chocolate", price: 0.0 },
  83: { name: "Cobertura de Morango", price: 0.0 },
  84: { name: "Cobertura de Kiwi", price: 0.0 },
  85: { name: "Cobertura de Menta", price: 0.0 },
  86: { name: "Cobertura de Maracujá", price: 0.0 },
  87: { name: "Cobertura de Limão", price: 0.0 },
  88: { name: "Cobertura de Caramelo", price: 0.0 },
  89: { name: "Cobertura Sonho Azul", price: 0.0 },
  90: { name: "Cobertura de Amora", price: 0.0 },
  91: { name: "Cobertura de Uva", price: 0.0 },
};

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

let aguardandoFormaPagamento = false;
let aguardandoValorTroco = false;
let aguardandoObservacao = false;
let Observacao = "";
let aguardandoEndereco = false;
let aguardandoObservacaoTexto = false;
let end = "";
let formaPagamento = "";
let valorTroco = "";
let aguardandoTroco = false;
let aguardandoNome = false;
let nome = "";
let perguntouPedido = false;
let perguntouComplemento = false;
let pedidoItens = [];
let totalPedidoCliente = 0;
let totalComplemento = 0;
let pedidosClientes = [];
let itensPedido = [];
let complementosPedido = [];

function salvarResumoPedido(resumoPedido) {
  fs.appendFile("resumos.txt", resumoPedido + "\n", (err) => {
    if (err) {
      console.error("Erro ao salvar o resumo do pedido:", err);
    } else {
      console.log("Resumo do pedido salvo com sucesso!");
    }
  });
}

function cumprimentar() {
  const dataAtual = new Date();
  const hora = dataAtual.getHours();

  let saudacao;

  if (hora >= 6 && hora < 12) {
    saudacao = "Bom dia!";
  } else if (hora >= 12 && hora < 17) {
    saudacao = "Boa tarde!";
  } else {
    saudacao = "Boa noite!";
  }

  return saudacao;
}

function getNomeCliente(numero) {
  try {
    const data = fs.readFileSync("contatos.txt", "utf8");
    const linhas = data.split("\n");
    for (const linha of linhas) {
      const [num, nome] = linha.split(",");
      if (num === numero) {
        return nome;
      }
    }
  } catch (err) {
    return null;
  }
  return null;
}

// Função para salvar o número do telefone e o nome do cliente no arquivo de texto
function salvarNomeCliente(numero, nome) {
  const data = `${numero},${nome}\n`;
  fs.appendFileSync("contatos.txt", data, { flag: "a+" });
  console.log(`salvo ${numero},${nome}\n`);
}

client.on("message", async (msg) => {
  const chat = await msg.getChat();
  const nomeCliente = getNomeCliente(msg.from);
  const lowerCaseMsg = msg.body.toLowerCase();

  if (
    msg.body === "Boa tarde" ||
    msg.body === "boa tarde" ||
    msg.body === "BOA TARDE" ||
    msg.body === "Boa tarde" ||
    msg.body === "Boa Noite" ||
    msg.body === "boa noite" ||
    msg.body === "BOA NOITE" ||
    msg.body === "Oi" ||
    msg.body === "oi" ||
    msg.body === "OI" ||
    msg.body === "Olá" ||
    msg.body === "ola" ||
    msg.body === "Ola" ||
    msg.body === "OLÁ" ||
    msg.body === "OLA" ||
    msg.body === "bom dia"
  ) {
    if (nomeCliente && msg.from.endsWith("@c.us")) {
      await delay(2000); //delay de 3 segundos
      await chat.sendStateTyping(); // Simulando Digitação
      await delay(4000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
      await client.sendMessage(
        msg.from,
        `${cumprimentar()} ${nomeCliente}!\nBem-vindo ao Sabor Açaí. Como posso ajudar?\n🤖 Este é um atendimento AUTOMÁTICO 🤖.\nEscolha uma opção:\n1️⃣ Fazer um Pedido de Açaí \n2️⃣ Horário de Funcionamento`
      );

    } else {
      await delay(2000); //delay de 3 segundos
      await chat.sendStateTyping(); // Simulando Digitação
      await delay(4000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
      await client.sendMessage(
        msg.from,
        `${cumprimentar()} 🤖 Olá! Eu sou o Robô do Sabor Açaí 🤖\n\nVamos começar de forma personalizada! 😊 Pode me contar o seu nome, por favor?`
      );
      aguardandoNome = true;
    }
  } else if (aguardandoNome && msg.from.endsWith("@c.us")) {
    nome = msg.body;
    aguardandoNome = false;
    salvarNomeCliente(msg.from, nome); // Salva o nome do cliente no arquivo de texto
    await delay(2000); //delay de 3 segundos
    await chat.sendStateTyping(); // Simulando Digitação
    await delay(4000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
    await client.sendMessage(
      msg.from,
      `🌟 Olá, ${nome}! 🌟\nBem-vindo ao Sabor Açaí! Estamos aqui para tornar o seu dia ainda mais especial.\n\nEscolha a opção desejada:\n\n1️⃣ Fazer um Pedido de Açaí\n2️⃣ Horário de Funcionamento`
    );


  } else if (
    (msg.body === "1" || lowerCaseMsg === "pedir açaí") &&
    msg.from.endsWith("@c.us")
  ) {
    const chat = await msg.getChat();
    await delay(2000); //delay de 3 segundos
    await chat.sendStateTyping(); // Simulando Digitação
    await delay(4000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
    await client.sendMessage(
      msg.from,
      `Certo, ${nomeCliente}, vou enviar o nosso cardápio:`
    );
    const img2 = MessageMedia.fromFilePath("./tamanho.png");
    await client.sendMessage(msg.from, img2, {
      caption: "Escolha o número referente ao seu pedido:",
    });
    perguntouPedido = true;
    perguntouComplemento = false;
  } else if (perguntouPedido && msg.from.endsWith("@c.us")) {
    const options = msg.body.split(" ");

    for (let i = 0; i < options.length; i++) {
      const option = options[i];

      if (!isNaN(option)) {
        const itemNumber = option;
        const item = menu[itemNumber];

        if (item) {
          const itemName = item.name;
          const itemPrice = item.price;
          pedidoItens.push(`${itemNumber} ${itemName}`);
          totalPedidoCliente += itemPrice;
        } else {
          await client.sendMessage(
            msg.from,
            "Opção inválida do menu: " + option
          );
        }
      }
    }

    if (pedidoItens.length > 0) {
      const pedido = pedidoItens[0]; // Primeiro item do pedido
      const complementos = pedidoItens.slice(1).join("\n"); // Complementos como uma única string

      await client.sendMessage(msg.from, "Pedido:\n" + pedido);
      await delay(2000); //delay de 3 segundos
      await chat.sendStateTyping(); // Simulando Digitação
      await delay(4000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
      if (complementos.length > 0) {
        await client.sendMessage(msg.from, "Complementos:\n " + complementos);
      }

      await delay(2000); //delay de 3 segundos
      await chat.sendStateTyping(); // Simulando Digitação
      await delay(4000); //Delay de 3000 milisegundos mais conhecido como 3 segundos

      await client.sendMessage(
        msg.from,
        "Total a pagar: R$" + totalPedidoCliente.toFixed(2)
      );
      await delay(2000); //delay de 3 segundos
      await chat.sendStateTyping(); // Simulando Digitação
      await delay(2000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
      await client.sendMessage(
        msg.from,
        `Certo, ${nomeCliente}, agora escolha os complementos`
      );
      const img3 = MessageMedia.fromFilePath("./Complementos.png");
      await client.sendMessage(msg.from, img3, {
        caption: "Escolha o número referente ao complemento desejado:",
      });

      perguntouPedido = false;
      perguntouComplemento = true;
    }
  } else if (perguntouComplemento && msg.from.endsWith("@c.us")) {
    const options = msg.body.split(" ");

    for (let i = 0; i < options.length; i++) {
      const option = options[i];

      if (!isNaN(option)) {
        const itemNumber = option;
        const item = complementos[itemNumber];

        if (item) {
          const itemName = item.name;
          const itemPrice = item.price;
          pedidoItens.push(`${itemNumber} ${itemName}`);
          totalComplemento += itemPrice;
        } else {
          await client.sendMessage(
            msg.from,
            "Opção inválida do menu de complementos: " + option
          );
        }
      }
    }

    if (pedidoItens.length > 0) {
      const pedido = pedidoItens[0];
      const complementos = pedidoItens.slice(1).join("\n");

      await delay(2000); //delay de 3 segundos
      await chat.sendStateTyping(); // Simulando Digitação
      await delay(4000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
      await client.sendMessage(msg.from, "*Pedido:* \n" + pedido);
      if (complementos.length > 0) {
        await client.sendMessage(msg.from, "*Complementos:*\n " + complementos);
      }
      await delay(2000); //delay de 3 segundos
      await chat.sendStateTyping(); // Simulando Digitação
      await delay(4000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
      await client.sendMessage(
        msg.from,
        "Total a pagar: R$" + (totalPedidoCliente + totalComplemento).toFixed(2)
      );
      await delay(2000); //delay de 3 segundos
      await chat.sendStateTyping(); // Simulando Digitação
      await delay(4000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
      await client.sendMessage(
        msg.from,
        `Para fazer um pedido extra, digite 1️⃣\n\n${nomeCliente}😊 Você gostaria de retirar o pedido ou precisa de entrega?\n\n8️⃣ *Retirar no local*\n9️⃣ *Entrega em domicílio*`
      );

      pedidosClientes.push({
        itensPedido: pedido,
        complementosPedido: complementos,
        totalPedidoCliente: totalPedidoCliente,
        totalComplemento: totalComplemento,
      });

      totalPedidoCliente = 0;
      totalComplemento = 0;
      pedidoItens = [];

      perguntouComplemento = false;
    }
  } else if (
    (msg.body === "8" || lowerCaseMsg === "retirar no local") &&
    msg.from.endsWith("@c.us")
  ) {
    const dataAtual = new Date();
    const dataFormatada = dataAtual.toLocaleDateString();
    const horaFormatada = dataAtual.toLocaleTimeString();
    const chat = await msg.getChat();
    await delay(2000); //delay de 3 segundos
    await chat.sendStateTyping(); // Simulando Digitação
    await delay(4000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
    if (pedidosClientes.length === 0) {
      await client.sendMessage(
        msg.from,
        `Ainda não foram feitos pedidos. Para fazer um pedido, digite "Pedir Açaí".`
      );
      return;
    }

    let resumo = `Resumo do Pedido de ${nomeCliente}:\n`;
    resumo += `${dataFormatada} ${horaFormatada}\n\n`; // caso der erro

    let totalGeralPedido = 0;

    for (let i = 0; i < pedidosClientes.length; i++) {
      const pedido = pedidosClientes[i];
      resumo += `\nPedido ${i + 1}:\n`;
      resumo += `${pedido.itensPedido}`;

      if (
        typeof pedido.complementosPedido === "string" &&
        pedido.complementosPedido.length > 0
      ) {
        resumo += `Complementos: ${pedido.complementosPedido}\n`;
      }

      const totalPedido = pedido.totalPedidoCliente + pedido.totalComplemento;
      resumo += `Total do Pedido: R$${totalPedido.toFixed(2)}\n`;

      totalGeralPedido += totalPedido;
    }
    resumo += `Total Geral dos Pedidos: R$${totalGeralPedido.toFixed(2)}\n\n`;

    resumo += `\nPerfeito, ${nomeCliente}! Seu pedido ficará pronto em até 20 minutos. Pode vir buscá-lo na nossa loja!\n`;

    await client.sendMessage(msg.from, resumo);
    const otherNumber = "557588114675";
    await client.sendMessage(otherNumber + "@c.us", resumo);
    salvarResumoPedido(resumo);
    console.log("resuno do pedido enviado para tony");

    itensPedido = [];
    complementosPedido = [];
    totalPedidoCliente = 0;
    totalComplemento = 0;
    perguntouPedido = false;
    perguntouComplemento = false;
    pedidosClientes = [];
  } else if (
    (msg.body === "9" || lowerCaseMsg === "entrega") &&
    msg.from.endsWith("@c.us")
  ) {
    const chat = await msg.getChat();
    await delay(2000); //delay de 3 segundos
    await chat.sendStateTyping(); // Simulando Digitação
    await delay(4000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
    await client.sendMessage(
      msg.from,
      ` ${nomeCliente}! Para entregarmos 🛵 direitinho, precisamos do seu endereço completo. Por favor, inclua muitos detalhes, como:\n\n*Exemplo: Rua das Rosas, Nº 456, Casa 2, Bairro Jardim Feliz, próximo ao mercado.*`
    );
    aguardandoEndereco = true;

    // Aguarda o endereço para a entrega
  } else if (aguardandoEndereco && msg.from.endsWith("@c.us")) {
    end = msg.body;
    const chat = await msg.getChat();
    await chat.sendStateTyping(); // Simulando Digitação
    await delay(4000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
    await client.sendMessage(
      msg.from,
      `🛵 Confirme o endereço de entrega para o seu pedido:\n\n*${end}*`
    );

    await delay(2000); //delay de 3 segundos
    await chat.sendStateTyping(); // Simulando Digitação
    await delay(4000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
    await client.sendMessage(
      msg.from,
      `🏠 O endereço está correto? Responda *Sim* para confirmar ou *Não* para fazer correções.`
    );
    aguardandoEndereco = false;
    aguardandoFormaPagamento = true;
  } else if (aguardandoFormaPagamento && msg.from.endsWith("@c.us")) {
    if (msg.body.toLowerCase() === "sim") {
      const chat = await msg.getChat();
      await delay(2000); //delay de 3 segundos
      await chat.sendStateTyping(); // Simulando Digitação
      await delay(4000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
      await client.sendMessage(
        msg.from,
        `${nomeCliente}! Agora, vamos definir a forma de pagamento para finalizar o seu pedido:\n\n*Pix*\n*Cartão*\n*Dinheiro*`
      );

      aguardandoFormaPagamento = false;
    } else if (msg.body.toLowerCase() === "não") {
      await client.sendMessage(
        msg.from,
        `🛵 Confirme o endereço de entrega para o seu pedido:\n\n*${end}*`
      );
      aguardandoEndereco = true;
      aguardandoFormaPagamento = false;
      aguardandoObservacao = true;
    } else {
      await client.sendMessage(
        msg.from,
        "Desculpe, não entendi a sua resposta. Por favor, responda *Sim* para confirmar o endereço ou *Não* para corrigir."
      );
    }
  } else if (msg.body.toLowerCase() === "pix") {
    const chat = await msg.getChat();
    await delay(2000); //delay de 3 segundos
    await chat.sendStateTyping(); // Simulando Digitação
    await delay(4000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
    formaPagamento = "Pix";
    await client.sendMessage(
      msg.from,
      `🌟 Perfeito, ${nomeCliente}! Agora você está quase lá. Para concluir o pagamento, utilize a nossa chave Pix: *tonysilvatj@gmail.com*. 📱💸\n\nAssim que recebermos a confirmação do pagamento, seu pedido será preparado com todo carinho!`
    );

    await delay(2000); //delay de 3 segundos
    await chat.sendStateTyping(); // Simulando Digitação
    await delay(4000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
    await client.sendMessage(
      msg.from,
      `📝 Se tiver alguma observação para o pedido, digite 3️⃣.\n\n *Exemplo: 'Mais sorvete e menos açaí.'* \n\nSe não houver observações, digite 0️⃣ paraprosseguir.`
    );

    aguardandoObservacao = true;
  } else if (msg.body.toLowerCase() === "cartão") {
    formaPagamento = "Cartão";
    await client.sendMessage(
      msg.from,
      `📝 Se tiver alguma observação para o pedido, digite 3️⃣.\n\n *Exemplo: 'Mais sorvete e menos açaí.'* \n\nSe não houver observações, digite 0️⃣ paraprosseguir.`
    );
    aguardandoObservacao = true;
  } else if (aguardandoObservacao && msg.body.toLowerCase() === "3") {
    const chat = await msg.getChat();
    await delay(2000); //delay de 3 segundos
    await chat.sendStateTyping(); // Simulando Digitação
    await delay(4000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
    await client.sendMessage(msg.from, `Qual é a sua Observação?`);
    aguardandoObservacaoTexto = true;
  } else if (aguardandoObservacaoTexto) {
    const chat = await msg.getChat();
    Observacao = msg.body;
    aguardandoObservacaoTexto = false;
    await delay(2000); //delay de 3 segundos
    await chat.sendStateTyping(); // Simulando Digitação
    await delay(4000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
    await client.sendMessage(
      msg.from,
      `Está correto?\n\n *${Observacao}* \n\n Digite  0️⃣ para confirmar`
    );
  } else if (msg.body.toLowerCase() === "dinheiro") {
    const chat = await msg.getChat();
    await delay(2000); //delay de 3 segundos
    await chat.sendStateTyping(); // Simulando Digitação
    await delay(4000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
    formaPagamento = "Dinheiro";
    await client.sendMessage(
      msg.from,
      `💵 Para facilitar a entrega, precisaremos saber se você precisa de troco. Por favor, escolha uma das opções abaixo:\n\n*Sim*, preciso de troco\n*Não*, não preciso de troco`
    );

    aguardandoTroco = true;
  } else if (aguardandoTroco && msg.from.endsWith("@c.us")) {
    const lowerCaseMsg = msg.body.toLowerCase();
    const chat = await msg.getChat();
    if (lowerCaseMsg === "não" || lowerCaseMsg === "não preciso") {
      await delay(2000); //delay de 3 segundos
      await chat.sendStateTyping(); // Simulando Digitação
      await delay(4000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
      await client.sendMessage(
        msg.from,
        `📝 Se tiver alguma observação para o pedido, digite 3️⃣.\n\n *Exemplo: 'Mais sorvete e menos açaí.'* \n\nSe não houver observações, digite 0️⃣ paraprosseguir.`
      );
      aguardandoTroco = false;
    } else if (lowerCaseMsg === "sim" || lowerCaseMsg === "preciso") {
      const chat = await msg.getChat();
      await delay(2000); //delay de 3 segundos
      await chat.sendStateTyping(); // Simulando Digitação
      await delay(4000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
      await client.sendMessage(
        msg.from,
        `💵 Certo, Para agilizar o processo de entrega, por favor, informe o valor para o troco. Você pode usar o seguinte exemplo como referência:\n\n*EXEMPLO: Preciso de troco para R$ 100,00*`
      );
      aguardandoValorTroco = true;
      aguardandoTroco = false;
    }
  } else if (aguardandoValorTroco && msg.from.endsWith("@c.us")) {
    const chat = await msg.getChat();
    await delay(2000); //delay de 3 segundos
    await chat.sendStateTyping(); // Simulando Digitação
    await delay(4000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
    valorTroco = msg.body;
    if (!isNaN(valorTroco) && valorTroco > 0) {
      await delay(2000); //delay de 3 segundos
      await chat.sendStateTyping(); // Simulando Digitação
      await delay(4000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
      await client.sendMessage(
        msg.from,
        `📝 Se tiver alguma observação para o pedido, digite 3️⃣.\n\n *Exemplo: 'Mais sorvete e menos açaí.'* \n\nSe não houver observações, digite 0️⃣ paraprosseguir.`
      );
      aguardandoObservacao = true;
      aguardandoValorTroco = false;
    }
  } else if (
    (msg.body.toLowerCase() === "finalisz" || msg.body === "0") &&
    msg.from.endsWith("@c.us")
  ) {
    const chat = await msg.getChat();
    await delay(2000); //delay de 3 segundos
    await chat.sendStateTyping(); // Simulando Digitação
    await delay(4000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
    const dataAtual = new Date();
    const dataFormatada = dataAtual.toLocaleDateString();
    const horaFormatada = dataAtual.toLocaleTimeString();

    //------------------------------------------------------------------------------------------------------------
    let resumo = `*Resumo do Pedido de ${nomeCliente}:*\n`;
    resumo += `${dataFormatada} ${horaFormatada}\n\n`;
    resumo += `*Endereço de Entrega:* ${end}\n\n`;
    resumo += `*Forma de Pagamento:* ${formaPagamento}\n\n`;

    if (Observacao.trim() !== "") {
      resumo += `*Observacao*: ${Observacao}\n\n`;
    }
    if (valorTroco.trim() !== "") {
      resumo += `*Troco Para*: ${valorTroco}\n\n`;
    }

    let totalGeralPedido = 0;

    for (let i = 0; i < pedidosClientes.length; i++) {
      const pedido = pedidosClientes[i];
      resumo += `*Pedido ${i + 1}*:\n`;
      resumo += `${pedido.itensPedido}\n`;
      if (
        typeof pedido.complementosPedido === "string" &&
        pedido.complementosPedido.length > 0
      ) {
        resumo += `*Complementos*:\n ${pedido.complementosPedido}\n`;
      }

      const totalPedido = pedido.totalPedidoCliente + pedido.totalComplemento;
      resumo += `*Total do Pedido*: R$${totalPedido.toFixed(2)}\n\n`;

      totalGeralPedido += totalPedido;
    }

    resumo += `*Total Geral dos Pedidos*: *R$${totalGeralPedido.toFixed(
      2
    )}*\n\n`;

    resumo += `\n*Perfeito, ${nomeCliente}! Seu pedido será entregue em breve!*`;

    await client.sendMessage(msg.from, resumo);
    const otherNumber = "557588114675";
    await client.sendMessage(otherNumber + "@c.us", resumo);
    salvarResumoPedido(resumo);
    console.log("resuno do pedido enviado para tony");
    itensPedido = [];
    complementosPedido = [];
    totalPedidoCliente = 0;
    totalComplemento = 0;
    perguntouPedido = false;
    perguntouComplemento = false;
    pedidosClientes = [];
  }

  if (
    (msg.body === "2" ||
      msg.body.toLowerCase() === "Horário de Funcionamento") &&
    msg.from.endsWith("@c.us")
  ) {
    await client.sendMessage(
      msg.from,
      `⏰ Horário de Funcionamento:\n\n📅 Segunda a Quinta: 13h às 21h\n📅 Sexta: 13h às 17h\n📅 Sábado: 18h às 22h\n📅 Domingo: 13h às 22h\n\nEstamos ansiosos para atendê-lo(a)! Caso queira fazer um pedido, digite 1️⃣.`
    );
  }
});
