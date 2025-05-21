// src/app/projects/page.jsx
import ProjectSection from "./ProjectSection";
import ProjectCardData from "./ProjectCardData";

// Calculate total pages for static generation (optional)
export async function generateStaticParams() {
    const totalProjects = Object.keys(ProjectCardData).length;
    const totalPages = Math.ceil(totalProjects); // 1 project per page (DISPLAY_COUNT)
    return Array.from({ length: totalPages }, (_, i) => ({
        page: (i + 1).toString(),
    }));
}

export default function Projects({ searchParams }) {
    const page = parseInt(searchParams.page) || 1; // Default to page 1
    const startIndex = (page - 1); // 1 project per page (DISPLAY_COUNT)

    return <ProjectSection startIndex={startIndex} />;
}