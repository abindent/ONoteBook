import { NextResponse, type NextRequest } from "next/server";
import Error from "next/error";

// EMAILJS
import { init, send } from "@emailjs/browser";

export async function POST(request: NextRequest) {
  // EMAIL JS VARS
  const SERVICE_ID = "service_kgmka0a";
  const TEMPLATE_ID = "template_ncnqz1f";
  const USER_ID = process.env.EMAIL_JS_CONTACT_USER_ID;

  // FETCHING DATA FROM BODY
  const params = await request.json();
  // USER DETAILS
  interface UserDetails {
    name: string | undefined;
    mail: string | undefined;
    phone: string | undefined;
    message: string | undefined;
  }

  const _usr_details: UserDetails = {
    name: params["name"],
    mail: params["email"],
    phone: params["phone"],
    message: params["message"],
  };

  // EMAILJS SENDFORM
  await ContactSubmit(SERVICE_ID, TEMPLATE_ID, USER_ID, _usr_details);
}

async function ContactSubmit(
  SERVICE_ID: string,
  TEMPLATE_ID: string,
  USER_ID: string,
  _usr_details: Object
) {
  init(USER_ID);
  send(SERVICE_ID, TEMPLATE_ID, { ..._usr_details }, USER_ID)
    .then((result) => {
      return NextResponse.json({
        status: 200,
        success: `${result.text}`,
        message: "Message sent successfully!",
      });
    })
    .catch((error: Error) => {
      return NextResponse.json({
        status: 500,
        message: `${error} - Failed to post`,
      });
    });
}
