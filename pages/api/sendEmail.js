import sendEmail from "@/utils/sendEmail";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;
    try {
      await sendEmail(email, 'Welcome to Our Service!', 'Thank you for signing up!');
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Failed to send welcome email:', error);
      res.status(500).json({ error: 'Failed to send welcome email' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
