interface Notification {
  type?: string;
  content?: string;
  topic?: string;
  clientNumber?: string;
  clientName?: string;
  orderNumber?: string;
  deliveryDate?: Date;
  linkToSupport?: string;
  notificationTitle?: string;
  notificationIcon?: string;
  notificationSound?: string;
  notificationType?: string;
  productID?: string;
}

function createNotification(notification: Partial<Notification> = {}) {
  return {
    addType(type: string) {
      return createNotification({ ...notification, type });
    },
    addContent(content: string) {
      return createNotification({ ...notification, content });
    },
    addTopic(topic: string) {
      return createNotification({ ...notification, topic });
    },
    addClientNumber(clientNumber: string) {
      return createNotification({ ...notification, clientNumber });
    },
    addOrderNumber(orderNumber: string) {
      return createNotification({ ...notification, orderNumber });
    },
    addDeliveryDate(deliveryDate: Date) {
      return createNotification({ ...notification, deliveryDate });
    },
    addLinkToSupport(linkToSupport: string) {
      return createNotification({ ...notification, linkToSupport });
    },
    addNotificationTitle(notificationTitle: string) {
      return createNotification({ ...notification, notificationTitle });
    },
    addNotificationIcon(notificationIcon: string) {
      return createNotification({ ...notification, notificationIcon });
    },
    addNotificationSound(notificationSound: string) {
      return createNotification({ ...notification, notificationSound });
    },
    addNotificationType(notificationType: string) {
      return createNotification({ ...notification, notificationType });
    },
    additionalData({
      notificationType,
      productID,
      clientName,
      deliveryDate,
      linkToSupport,
    }: {
      notificationType?: string;
      productID?: string;
      clientName?: string;
      deliveryDate?: Date;
      linkToSupport?: string;
    }) {
      return createNotification({
        ...notification,
        notificationType,
        productID,
        clientName,
        deliveryDate,
        linkToSupport,
      });
    },
    addProductID(productID: string) {
      return createNotification({ ...notification, productID });
    },
    buildNotification() {
      return notification;
    },
  };
}

const emailNotification = createNotification()
  .addType("EMAIL_NOTIFICATION")
  .addTopic("Olá, sua compra foi confirmada")
  .addContent("Informações do pedido e nota fiscal...")
  .additionalData({
    clientName: "Joana da Silva",
    productID: "7654321",
    deliveryDate: new Date("2026-01-01"),
  })
  .buildNotification();

console.log(emailNotification);

const SMSNotification = createNotification()
  .addType("SMS_NOTIFICATION")
  .addContent(
    "Suas informações do pedido e nota fiscal estão no link abaixo https://pedido.com.br"
  )
  .additionalData({
    clientName: "Joana da Silva",
    productID: "7654321",
  })
  .buildNotification();

console.log(SMSNotification);

const WhatsappNotification = createNotification()
  .addType("WHATSAPP_NOTIFICATION")
  .addContent(
    "Noticias maravilhosas, pedido enviado, acompanhe no link abaixo https://pedido.com.br 😊😊😊"
  )
  .additionalData({
    clientName: "Joana da Silva",
    productID: "7654321",
    linkToSupport: "https://suporte.pedido.com.br",
  })
  .buildNotification();

console.log(WhatsappNotification);

const pushNotification = createNotification()
  .addType("PUSH_NOTIFICATION")
  .addNotificationTitle("Você está recebendo uma notificação do pedido")
  .addContent("Conteudo do seu pedido ...")
  .addNotificationIcon("😊")
  .addNotificationSound("Tanananana....")
  .additionalData({
    notificationType: "Status do pedido",
    productID: "12345667",
  })
  .buildNotification();

console.log(pushNotification);

// Usando o builder simplificado
// const meuFusca = criarCarro()
//   .adicionarMotor("1.6")
//   .adicionarCor("azul")
//   .adicionarPortas(2)
//   .montarCarro();

// console.log(meuFusca); // Saída: { motor: '1.6', cor: 'azul', portas: 2 }

// const meuSUV = criarCarro()
//   .adicionarMotor("2.0 Turbo")
//   .adicionarCor("branco")
//   .adicionarPortas(4)
//   .adicionarTetoSolar(true)
//   .adicionarArCondicionado(true)
//   .montarCarro();

// console.log(meuSUV); // Saída: { motor: '2.0 Turbo', cor: 'branco', portas: 4, tetoSolar: true, arCondicionado: true }
