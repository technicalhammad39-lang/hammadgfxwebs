import { auth } from "@/lib/firebase";

export async function uploadAdminFile(file: File, folder: "portfolio" | "blogs" | "profile" | "site-assets") {
  const token = await auth.currentUser?.getIdToken();

  if (!token) {
    throw new Error("You must be logged in as admin to upload files.");
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("folder", folder);

  const response = await fetch("/api/admin/upload", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  const payload = await response.json();

  if (!response.ok || !payload.ok) {
    throw new Error(payload.message || "Image upload failed.");
  }

  return payload.url as string;
}
