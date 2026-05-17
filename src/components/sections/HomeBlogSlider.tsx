"use client";

import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { GenericSlider } from "@/components/ui/GenericSlider";
import { Blog } from "@/data/data";
import { blogDocToBlog, BlogDoc } from "@/lib/content-types";
import { db } from "@/lib/firebase";

export default function HomeBlogSlider({ fallback }: { fallback: Blog[] }) {
  const [blogs, setBlogs] = useState<Blog[]>(fallback);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const snapshot = await getDocs(query(collection(db, "blogs"), where("status", "==", "published"), orderBy("createdAt", "desc")));
        const items = snapshot.docs.map((doc) => blogDocToBlog({ id: doc.id, ...doc.data() } as BlogDoc)).slice(0, 6);

        if (items.length) {
          setBlogs(items);
        }
      } catch {
        setBlogs(fallback);
      }
    };

    loadBlogs();
  }, [fallback]);

  return (
    <GenericSlider
      data={blogs}
      slidesPerView={3}
      heightClass=""
      cardType="blog"
      sourceHash="blog"
    />
  );
}
