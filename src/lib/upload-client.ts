import { auth } from "@/lib/firebase";

export type UploadFolder = "portfolio" | "blogs" | "services" | "profile" | "site-assets";

export async function uploadAdminFile(file: File, folder: UploadFolder) {
  const token = await auth.currentUser?.getIdToken();

  if (!token) {
    throw new Error("You must be logged in as admin to upload files.");
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("folder", folder);

  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), 30000);

  const response = await fetch("/api/admin/upload", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
    signal: controller.signal,
  }).finally(() => window.clearTimeout(timeoutId));

  const payload = await response.json();

  if (!response.ok || !payload.ok) {
    throw new Error(payload.message || "Image upload failed.");
  }

  return payload.url as string;
}
