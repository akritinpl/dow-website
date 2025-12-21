import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

// Ensure environment variables exist
const REGION = process.env.SES_REGION;
const COMPANY_EMAIL = process.env.COMPANY_EMAIL;

if (!REGION) throw new Error("SES_REGION environment variable is not defined");
if (!COMPANY_EMAIL) throw new Error("COMPANY_EMAIL environment variable is not defined");

// Create SES client
const ses = new SESClient({ region: REGION });

export const handler = async (event) => {
  try {
    const { name, email, message } = JSON.parse(event.body);

    const params = {
      Destination: { ToAddresses: [COMPANY_EMAIL] },
      Message: {
        Body: {
          Text: { Data: `New message from ${name} (${email}):\n\n${message}` },
        },
        Subject: { Data: "New Contact Form Submission" },
      },
      Source: COMPANY_EMAIL,
    };

    await ses.send(new SendEmailCommand(params));

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email" })
    };
  }
};
