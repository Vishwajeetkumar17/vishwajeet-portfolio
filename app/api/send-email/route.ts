import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, subject, message } = data;

    // Validate form data
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "vishwajitjee17@gmail.com",
      subject: `New message from ${name}: ${subject}`,
      text: `You have received a new message from ${name} (${email}):\n\n${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}