"use server";

export async function subscribeAction(formData: FormData) {
  const email = String(formData.get("email") ?? "");

  if (!email) {
    return;
  }

  console.log(`New subscriber: ${email}`);
}
