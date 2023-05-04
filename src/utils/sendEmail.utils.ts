import { createTransport } from "nodemailer";
import Mailgen from "mailgen";
import "dotenv/config";
import { AppError } from "../errors/appError";
import { ISendEmailRequest } from "../interfaces/users/user.interface";

const sendPasswordResetEmail = async ({ to, subject, html }: ISendEmailRequest) => {
  const transporter = createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: "grupo5.recoverypass@gmail.com",
      to,
      subject,
      html,
    });
  } catch (error) {
    console.error(error);
    throw new AppError("Error sending email. Try again later.", 500);
  }
};

const resetPasswordTemplate = (
  userName: string,
  userEmail: string,
  resetToken: string
) => {
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Motors shop",
      link: process.env.FRONTEND_HOST,
      logo: "https://cdn.discordapp.com/attachments/1092588708198350869/1099099499571454022/Logo.png",
      copyright: "© 2023 Motors shop. Todos os direitos reservados.",
    },
  });

  const email = {
    body: {
      greeting: "Olá",
      name: userName,
      intro:
        "Você recebeu este e-mail porque uma solicitação de redefinição de senha para sua conta foi recebida.",
      action: {
        instructions: "Clique no botão abaixo para redefinir sua senha:",
        button: {
          color: "#4529E6",
          text: "Redefina sua senha",
          link: process.env.FRONTEND_HOST + `/recovery/${resetToken}`,
        },
      },
      outro:
        "Se você não solicitou uma redefinição de senha, nenhuma outra ação será necessária de sua parte.",
      signature: "Atenciosamente",
    },
  };

  const emailBody = mailGenerator.generate(email);

  const emailTemplate = {
    to: userEmail,
    subject: "Redefinir senha",
    html: emailBody,
  };

  return emailTemplate;
};

export { sendPasswordResetEmail, resetPasswordTemplate };
