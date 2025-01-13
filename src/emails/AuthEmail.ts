import { transport } from "../config/nodemailer";

type EmailType = {
  name: string;
  email: string;
  token: string;
};

export class AuthEmail {
  static sendConfirmationEmail = async (user: EmailType) => {
    try {
      const email = await transport.sendMail({
        from: "CashTracker <admin@cashtrackr.com>",
        to: user.email,
        subject: "CashTracker - Confirma tu Cuenta",
        html: `
      <p>Hola ${user.name}! has creado tu cuenta en CashTracker, ya está casi lista.</p>
      <p>Visita el siguiente enlace:</p>
      <a href="#">Confirmar cuenta</a>
      <p>e ingresa el código: <b>${user.token}</b></p>
    `,
      });
      console.log("Mensaje enviado:", email.messageId);
    } catch (error) {
      console.error("Error al enviar el correo:", error.message);
    }
  };

  static sendPasswordResetToken = async (user: EmailType) => {
    try {
      const email = await transport.sendMail({
        from: "CashTracker <admin@cashtrackr.com>",
        to: user.email,
        subject: "CashTracker - Reestablece tu Password",
        html: `
      <p>Hola ${user.name}! has solicitado reestablecer tu password.</p>
      <p>Visita el siguiente enlace:</p>
      <a href="#">Reestablece Password</a>
      <p>e ingresa el código: <b>${user.token}</b></p>
    `,
      });
      console.log("Mensaje enviado:", email.messageId);
    } catch (error) {
      console.error("Error al enviar el correo:", error.message);
    }
  };
}
