"use client";

import { collection, deleteDoc, doc, getDocs, orderBy, query } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AdminButton, AdminCard, StatusMessage } from "@/components/admin/AdminUi";
import { BlogDoc } from "@/lib/content-types";
import { db } from "@/lib/firebase";

export default function AdminBlogs() {
  const [blogs, setBlogs] = useState<BlogDoc[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const loadBlogs = async () => {
    setLoading(true);
    const snapshot = await getDocs(query(collection(db, "blogs"), orderBy("createdAt", "desc")));
    setBlogs(snapshot.docs.map((item) => ({ id: item.id, ...item.data() })) as BlogDoc[]);
    setLoading(false);
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  const removeBlog = async (blog: BlogDoc) => {
    if (!blog.id || !window.confirm(`Delete "${blog.title}"?`)) return;

    await deleteDoc(doc(db, "blogs", blog.id));
    setMessage("Blog deleted.");
    loadBlogs();
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#FD853A]">Blog</p>
          <h2 className="text-4xl font-semibold">Posts</h2>
        </div>
        <Link href="/admin/blogs/new" className="rounded-full bg-[#FD853A] px-5 py-3 text-sm font-semibold text-white hover:bg-[#e46e24]">
          Add Blog
        </Link>
      </div>

      <StatusMessage message={message} type="success" />

      {loading && <AdminCard>Loading blogs...</AdminCard>}
      {!loading && blogs.length === 0 && <AdminCard>No blogs added yet.</AdminCard>}

      <div className="grid gap-5">
        {blogs.map((blog) => (
          <AdminCard key={blog.id} className="grid gap-5 lg:grid-cols-[160px_1fr_auto] lg:items-center">
            {blog.featuredImageUrl ? (
              <img src={blog.featuredImageUrl} alt={blog.title} className="h-auto w-full rounded-[18px]" />
            ) : (
              <div className="flex h-28 items-center justify-center rounded-[18px] bg-[#F2F4F7] text-sm text-[#667085]">No image</div>
            )}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#FD853A]">{blog.category}</p>
              <h3 className="mt-2 text-2xl font-semibold">{blog.title}</h3>
              <p className="mt-2 text-[#667085]">{blog.excerpt}</p>
              <p className="mt-2 text-sm font-semibold text-[#344054]">Status: {blog.status}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link href={`/admin/blogs/edit/${blog.id}`} className="rounded-full bg-[#171717] px-4 py-2 text-sm font-semibold text-white">
                Edit
              </Link>
              <AdminButton type="button" variant="danger" onClick={() => removeBlog(blog)}>
                Delete
              </AdminButton>
            </div>
          </AdminCard>
        ))}
      </div>
    </div>
  );
}
