import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // In a real application, you would:
    // 1. Validate the data server-side
    // 2. Send an email to the admin team (e.g. via Resend or SendGrid)
    // 3. Save the enquiry to a database (e.g. Supabase or Sanity)
    // 4. Send an auto-responder to the user

    console.log("Received new enquiry:", data);

    return NextResponse.json({ success: true, message: "Enquiry received successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error processing enquiry:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process enquiry" },
      { status: 500 }
    );
  }
}
