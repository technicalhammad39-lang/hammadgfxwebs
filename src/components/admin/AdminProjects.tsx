"use client";

import { collection, deleteDoc, doc, getDocs, orderBy, query } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AdminButton, AdminCard, StatusMessage } from "@/components/admin/AdminUi";
import { PortfolioProjectDoc } from "@/lib/content-types";
import { db } from "@/lib/firebase";

export default function AdminProjects() {
  const [projects, setProjects] = useState<PortfolioProjectDoc[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const loadProjects = async () => {
    setLoading(true);
    const snapshot = await getDocs(query(collection(db, "portfolioProjects"), orderBy("order", "asc")));
    setProjects(snapshot.docs.map((item) => ({ id: item.id, ...item.data() })) as PortfolioProjectDoc[]);
    setLoading(false);
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const removeProject = async (project: PortfolioProjectDoc) => {
    if (!project.id || !window.confirm(`Delete "${project.title}"?`)) return;

    await deleteDoc(doc(db, "portfolioProjects", project.id));
    setMessage("Project deleted.");
    loadProjects();
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#FD853A]">Portfolio</p>
          <h2 className="text-4xl font-semibold">Projects</h2>
        </div>
        <Link href="/admin/projects/new" className="rounded-full bg-[#FD853A] px-5 py-3 text-sm font-semibold text-white hover:bg-[#e46e24]">
          Add Project
        </Link>
      </div>

      <StatusMessage message={message} type="success" />

      {loading && <AdminCard>Loading projects...</AdminCard>}

      {!loading && projects.length === 0 && <AdminCard>No projects found.</AdminCard>}

      <div className="grid gap-5">
        {projects.map((project) => (
          <AdminCard key={project.id} className="grid gap-5 lg:grid-cols-[160px_1fr_auto] lg:items-center">
            {project.mainImageUrl ? (
              <img src={project.mainImageUrl} alt={project.title} className="h-auto w-full rounded-[18px]" />
            ) : (
              <div className="flex h-28 items-center justify-center rounded-[18px] bg-[#F2F4F7] text-sm text-[#667085]">No image</div>
            )}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#FD853A]">{project.category}</p>
              <h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-[#667085]">{project.shortDescription}</p>
              <p className="mt-2 text-sm font-semibold text-[#344054]">Status: {project.status}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link href={`/admin/projects/edit/${project.id}`} className="rounded-full bg-[#171717] px-4 py-2 text-sm font-semibold text-white">
                Edit
              </Link>
              <AdminButton type="button" variant="danger" onClick={() => removeProject(project)}>
                Delete
              </AdminButton>
            </div>
          </AdminCard>
        ))}
      </div>
    </div>
  );
}
