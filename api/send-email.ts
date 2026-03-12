import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, phone, email, orderDetails, subtotal, customRequest } = req.body;
    
    // The email address that will receive the orders
    const toEmail = process.env.CONTACT_EMAIL || 'ysabellemichaud@gmail.com';

    let htmlContent = `
      <h2>Nouvelle commande de ${name || "un client"}</h2>
      <p><strong>Téléphone :</strong> ${phone || "Non spécifié"}</p>
      <p><strong>Courriel :</strong> ${email || "Non spécifié"}</p>
      <br />
      <h3>DÉTAILS DE LA COMMANDE</h3>
      <p>${orderDetails.replace(/\n/g, '<br/>')}</p>
      <hr />
      <h3>TOTAL ESTIMÉ : ${subtotal} $</h3>
    `;

    if (customRequest) {
      htmlContent += `<br/><h3>NOTE / DEMANDE SPÉCIALE :</h3><p>${customRequest}</p>`;
    }

    const data = await resend.emails.send({
      from: 'La Savonnière <onboarding@resend.dev>', 
      to: [toEmail],
      reply_to: email || undefined,
      subject: `Nouvelle commande La Savonnière - ${name || "Nouveau Client"}`,
      html: htmlContent,
    });

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error sending email' });
  }
}
