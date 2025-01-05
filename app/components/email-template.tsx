import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  organizationName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  organizationName,
  email,
  message,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: '#333' }}>
    <h1 style={{ color: '#0066cc' }}>Thank You, {firstName}!</h1>
    <p>
      We’re excited to receive your partnership request on behalf of <strong>{organizationName}</strong>.
      Our team is thrilled at the opportunity to collaborate and explore ways we can work together.
    </p>
    <p>
      Here’s a summary of your submission:
    </p>
    <ul>
      <li><strong>Name:</strong> {firstName}</li>
      <li><strong>Organization:</strong> {organizationName}</li>
      <li><strong>Email:</strong> {email}</li>
      <li><strong>Message:</strong> {message}</li>
    </ul>
    <p>
      We’ll review your information and get back to you shortly. If you have additional details
      or documents you’d like to share, feel free to reply to this email.
    </p>
    <p>
      Looking forward to building a strong partnership!
    </p>
    <p>
      Best regards,<br />
      The [Your Company Name] Team
    </p>
    <hr />
    <footer style={{ fontSize: '0.9em', color: '#777' }}>
      This is an automated email. If you have questions, contact us at <a href="mailto:selasisepenu5@gmail.com">partnerships@yourcompany.com</a>.
    </footer>
  </div>
);
