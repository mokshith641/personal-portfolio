import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Secure validation check
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All contact fields are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format." },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      // Simulation mode for testing when credentials aren't yet configured on Vercel
      console.log("---------------- CONTACT MESSAGE SIMULATED ----------------");
      console.log(`From: ${name} <${email}>`);
      console.log(`Subject: ${subject}`);
      console.log(`Message:\n${message}`);
      console.log("-----------------------------------------------------------");
      
      // Artificial delay to make the loader feel realistic
      await new Promise((resolve) => setTimeout(resolve, 800));

      return NextResponse.json({
        success: true,
        message: "Simulated message received successfully."
      });
    }

    // Call Resend email API directly
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>", // onboarding address requires verified domain for other sends
        to: ["mokshith641@gmail.com"],
        subject: `Portfolio Contact: ${subject}`,
        html: `
          <h3>New Message from Portfolio Website</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        `,
      }),
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      throw new Error(resendData.message || "Failed to transmit email through Resend API.");
    }

    return NextResponse.json({
      success: true,
      message: "Email dispatched successfully."
    });

  } catch (error: any) {
    console.error("API contact routing error:", error?.message);
    return NextResponse.json(
      { error: error?.message || "Internal server error occurred." },
      { status: 500 }
    );
  }
}
