import { EmailTemplate } from "../../components/email-template";
import { Resend } from 'resend';

// Initialize Resend with API key
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Parse incoming data
    const { firstName, organizationName, email, message } = await request.json();

    // Send email
    const { data, error } = await resend.emails.send({
      from: 'selasisepenu5@gmail.com',
      to: [email], // Send to the user who submitted the form
      subject: `Thank you for partnering with us, ${firstName}!`,
      react: await EmailTemplate({
        firstName,
        organizationName,
        email,
        message,
      }),
    });

    // Handle potential errors
    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error:any) {
    // General error handling
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
