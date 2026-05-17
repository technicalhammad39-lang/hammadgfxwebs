"use client";

import { addDoc, collection, deleteDoc, doc, getDocs, orderBy, query, serverTimestamp, updateDoc } from "firebase/firestore";
import { FormEvent, useEffect, useState } from "react";
import { AdminButton, AdminCard, Field, inputClass, StatusMessage } from "@/components/admin/AdminUi";
import { NotificationDoc } from "@/lib/content-types";
import { db } from "@/lib/firebase";

const emptyNotification: NotificationDoc = {
  title: "",
  message: "",
  type: "info",
  active: true,
};

export default function AdminNotifications() {
  const [items, setItems] = useState<NotificationDoc[]>([]);
  const [form, setForm] = useState<NotificationDoc>(emptyNotification);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  const loadItems = async () => {
    const snapshot = await getDocs(query(collection(db, "notifications"), orderBy("createdAt", "desc")));
    setItems(snapshot.docs.map((item) => ({ id: item.id, ...item.data() })) as NotificationDoc[]);
  };

  useEffect(() => {
    loadItems();
  }, []);

  const save = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload = {
      ...form,
      updatedAt: serverTimestamp(),
    };

    if (editingId) {
      await updateDoc(doc(db, "notifications", editingId), payload);
      setMessage("Notification updated.");
    } else {
      await addDoc(collection(db, "notifications"), {
        ...payload,
        createdAt: serverTimestamp(),
      });
      setMessage("Notification added.");
    }

    setForm(emptyNotification);
    setEditingId(null);
    loadItems();
  };

  const edit = (item: NotificationDoc) => {
    setEditingId(item.id || null);
    setForm(item);
  };

  const remove = async (item: NotificationDoc) => {
    if (!item.id || !window.confirm(`Delete "${item.title}"?`)) return;
    await deleteDoc(doc(db, "notifications", item.id));
    setMessage("Notification deleted.");
    loadItems();
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <AdminCard>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#FD853A]">Notifications</p>
        <h2 className="mt-2 text-3xl font-semibold">{editingId ? "Edit Notification" : "Add Notification"}</h2>
        <StatusMessage message={message} type="success" />

        <form onSubmit={save} className="mt-6 flex flex-col gap-4">
          <Field label="Title">
            <input className={inputClass} value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value })} required />
          </Field>
          <Field label="Message">
            <textarea className={inputClass} rows={5} value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} required />
          </Field>
          <Field label="Type">
            <select className={inputClass} value={form.type} onChange={(event) => setForm({ ...form, type: event.target.value as NotificationDoc["type"] })}>
              <option value="info">Info</option>
              <option value="update">Update</option>
              <option value="success">Success</option>
              <option value="warning">Warning</option>
            </select>
          </Field>
          <label className="flex items-center gap-2 text-sm font-semibold">
            <input type="checkbox" checked={form.active} onChange={(event) => setForm({ ...form, active: event.target.checked })} />
            Active
          </label>
          <div className="flex flex-wrap gap-3">
            <AdminButton type="submit">{editingId ? "Update Notification" : "Add Notification"}</AdminButton>
            {editingId && <AdminButton type="button" variant="light" onClick={() => { setEditingId(null); setForm(emptyNotification); }}>Cancel</AdminButton>}
          </div>
        </form>
      </AdminCard>

      <div className="flex flex-col gap-4">
        {items.length === 0 && <AdminCard>No notifications found.</AdminCard>}
        {items.map((item) => (
          <AdminCard key={item.id}>
            <div className="flex flex-col justify-between gap-4 sm:flex-row">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#FD853A]">{item.type}</p>
                <h3 className="mt-1 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-[#667085]">{item.message}</p>
                <p className="mt-2 text-sm font-semibold text-[#344054]">Active: {item.active ? "Yes" : "No"}</p>
              </div>
              <div className="flex gap-2">
                <AdminButton type="button" variant="dark" onClick={() => edit(item)}>Edit</AdminButton>
                <AdminButton type="button" variant="danger" onClick={() => remove(item)}>Delete</AdminButton>
              </div>
            </div>
          </AdminCard>
        ))}
      </div>
    </div>
  );
}
