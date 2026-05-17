"use client";

import { collection, getCountFromServer, getDocs, query, where } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AdminCard } from "@/components/admin/AdminUi";
import { db } from "@/lib/firebase";

const metrics = [
  { label: "Total portfolio projects", collectionName: "portfolioProjects" },
  { label: "Total blog posts", collectionName: "blogs" },
  { label: "Total work experiences", collectionName: "workExperience" },
  { label: "Total notifications", collectionName: "notifications" },
];

const actions = [
  { label: "Add Project", href: "/admin/projects/new" },
  { label: "Add Blog", href: "/admin/blogs/new" },
  { label: "Add Experience", href: "/admin/experience" },
  { label: "Add Notification", href: "/admin/notifications" },
];

export default function AdminDashboard() {
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [activeNotifications, setActiveNotifications] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCounts = async () => {
      setLoading(true);

      try {
        const entries = await Promise.all(
          metrics.map(async (metric) => {
            const snapshot = await getCountFromServer(collection(db, metric.collectionName));
            return [metric.collectionName, snapshot.data().count] as const;
          })
        );
        const notifications = await getDocs(query(collection(db, "notifications"), where("active", "==", true)));
        setCounts(Object.fromEntries(entries));
        setActiveNotifications(notifications.size);
      } finally {
        setLoading(false);
      }
    };

    loadCounts();
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <AdminCard key={metric.collectionName}>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#FD853A]">{metric.label}</p>
            <p className="mt-5 text-5xl font-semibold text-[#171717]">{loading ? "-" : counts[metric.collectionName] ?? 0}</p>
          </AdminCard>
        ))}
      </div>

      <AdminCard className="bg-[#171717] text-white">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold">Quick actions</h2>
            <p className="mt-2 text-white/70">Create new content, upload Hostinger images, and publish updates.</p>
          </div>
          <p className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-[#FD853A]">
            Active notifications: {activeNotifications}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {actions.map((action) => (
            <Link key={action.href} href={action.href} className="rounded-full bg-[#FD853A] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#e46e24]">
              {action.label}
            </Link>
          ))}
        </div>
      </AdminCard>
    </div>
  );
}
