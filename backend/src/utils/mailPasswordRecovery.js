import nodemailer from "nodemailer"; //Enviar correos
import { config } from "../config.js";

// 1- Configurar el transporter => ¿Quien lo envia?
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: config.email.email_user,
    pass: config.email.email_password,
  },
});

//2-Enviar el correo
const sendEmail = async (to, subject, text, html) => {
  try {
    const info = await transporter.sendMail({
      from: '"CinemarkPlus" <danieloswaldo1007@gmail.com>',
      to,
      subject,
      text,
      html,
    });

    return info;
  } catch (error) {
    console.log("Error sending email"+error);
  }
};

// 3- Funcion para generar el HTML
const HTMLRecoveryEmail = (code) => {
  return `<div style="font-family: 'Segoe UI', Roboto, Arial, sans-serif; background-color: #ffffff; color: #333; padding: 30px; border: 1px solid #e0e0e0; border-radius: 8px; max-width: 600px; margin: 0 auto; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Cinemark_logo.svg/2560px-Cinemark_logo.svg.png" alt="Cinemark Logo" style="max-width: 180px; margin-bottom: 30px; display: block; margin-left: auto; margin-right: auto;">
  
  <h2 style="color: #b20e10; font-size: 22px; margin-bottom: 10px; text-align: center;">Password Recovery</h2>
  
  <p style="font-size: 16px; line-height: 1.6; text-align: center;">
    Hello, we've received a request to reset your Cinemark account password.<br>
    Please use the verification code below to proceed with the recovery process.
  </p>
  
  <div style="text-align: center; margin: 30px 0;">
    <span style="display: inline-block; background-color: #b20e10; color: #fff; padding: 14px 28px; font-size: 20px; font-weight: bold; letter-spacing: 2px; border-radius: 6px;">
      ${code}
    </span>
  </div>

  <p style="font-size: 14px; color: #666; text-align: center;">
    This code will expire in <strong>15 minutes</strong> for your security. If you didn't request a password reset, you can safely ignore this message.
  </p>

  <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 30px 0;">

  <footer style="font-size: 12px; color: #999; text-align: center;">
    Need help? Contact our support team at 
    <a href="mailto:support@cinemark.com" style="color: #b20e10; text-decoration: none;">support@cinemark.com</a>
    or visit our <a href="https://www.cinemark.com/help" style="color: #b20e10; text-decoration: none;">Help Center</a>.
  </footer>
</div>

    `;
};

export { sendEmail, HTMLRecoveryEmail };
