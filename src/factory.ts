type NotificationProps = SMS | PushNotification | Email;

interface SMS {
  phoneNumber: string;
  message: string;
}

interface PushNotification {
  token: string;
  message: string;
  messageTitle: string;
}

interface Email {
  mailAddress: string;
  message: string;
  messageBody: string;
}

const createSMSNotification = (phoneNumber: string, message: string): SMS => ({
  phoneNumber,
  message,
});

const createPushNotification = (
  token: string,
  message: string,
  messageTitle: string
): PushNotification => ({
  token,
  message,
  messageTitle,
});

const createEmailNotification = (
  mailAddress: string,
  message: string,
  messageBody: string
): Email => ({
  mailAddress,
  message,
  messageBody,
});

function notificationFactory(type: string, params: any): NotificationProps {
  const creators: { [key: string]: (...args: any[]) => NotificationProps } = {
    sms: createSMSNotification,
    push: createPushNotification,
    email: createEmailNotification,
  };

  const createNotification = creators[type];

  return createNotification(...params);
}

console.log(
  notificationFactory("sms", ["31991420483", "teste de mensagem capitão!"])
);

console.log(
  notificationFactory("email", [
    "teste@email.com",
    "mensagem para email",
    "texto do email",
  ])
);

console.log(
  notificationFactory("push", [
    "123456",
    "mensagem para push",
    "mensagem para push",
  ])
);
