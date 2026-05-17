"use client";

import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { FormEvent, useEffect, useState } from "react";
import { AdminButton, AdminCard, Field, inputClass, StatusMessage } from "@/components/admin/AdminUi";
import { SiteSettingsDoc } from "@/lib/content-types";
import { db } from "@/lib/firebase";
import { parseList } from "@/lib/slug";

const defaultSettings: SiteSettingsDoc = {
  heroTitle: "Professional",
  heroAnimatedWords: ["Graphic Designer", "Brand Designer", "Visual Designer"],
  heroDescription: "I create premium logos, brand identities, social media designs, and marketing visuals that help businesses look trusted, professional, and impossible to ignore.",
  whatsapp: "+92 3280830815",
  email: "clyrotechpk@gmail.com",
  linkedin: "",
  behance: "",
  instagram: "https://instagram.com/clyrotechpk",
  cvUrl: "/HammadGfx-CV.pdf",
};

export default function AdminSettings() {
  const [settings, setSettings] = useState<SiteSettingsDoc>(defaultSettings);
  const [wordsText, setWordsText] = useState(defaultSettings.heroAnimatedWords.join("\n"));
  const [message, setMessage] = useState("");

  useEffect(() => {
    const loadSettings = async () => {
      const snapshot = await getDoc(doc(db, "siteSettings", "main"));
      if (snapshot.exists()) {
        const data = snapshot.data() as SiteSettingsDoc;
        setSettings(data);
        setWordsText(data.heroAnimatedWords?.join("\n") || "");
      }
    };

    loadSettings();
  }, []);

  const save = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await setDoc(doc(db, "siteSettings", "main"), {
      ...settings,
      heroAnimatedWords: parseList(wordsText),
      updatedAt: serverTimestamp(),
    });
    setMessage("Settings saved.");
  };

  return (
    <AdminCard className="mx-auto max-w-4xl">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#FD853A]">Site Settings</p>
      <h2 className="mt-2 text-3xl font-semibold">Global Content</h2>
      <StatusMessage message={message} type="success" />

      <form onSubmit={save} className="mt-6 grid gap-5">
        <Field label="Hero Title">
          <input className={inputClass} value={settings.heroTitle} onChange={(event) => setSettings({ ...settings, heroTitle: event.target.value })} />
        </Field>
        <Field label="Hero Animated Words">
          <textarea className={inputClass} rows={4} value={wordsText} onChange={(event) => setWordsText(event.target.value)} />
        </Field>
        <Field label="Hero Description">
          <textarea className={inputClass} rows={4} value={settings.heroDescription} onChange={(event) => setSettings({ ...settings, heroDescription: event.target.value })} />
        </Field>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="WhatsApp">
            <input className={inputClass} value={settings.whatsapp} onChange={(event) => setSettings({ ...settings, whatsapp: event.target.value })} />
          </Field>
          <Field label="Email">
            <input className={inputClass} value={settings.email} onChange={(event) => setSettings({ ...settings, email: event.target.value })} />
          </Field>
          <Field label="Instagram">
            <input className={inputClass} value={settings.instagram} onChange={(event) => setSettings({ ...settings, instagram: event.target.value })} />
          </Field>
          <Field label="CV URL">
            <input className={inputClass} value={settings.cvUrl} onChange={(event) => setSettings({ ...settings, cvUrl: event.target.value })} />
          </Field>
        </div>
        <AdminButton type="submit">Save Settings</AdminButton>
      </form>
    </AdminCard>
  );
}
