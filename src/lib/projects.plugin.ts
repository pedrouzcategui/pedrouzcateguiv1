import path from "path";
import { getBaseDirectory } from "@/utils";
import { readdir } from "fs/promises";

const ProjectsFolderName = "projects";

export function getProjectsFolderPath(): string {
  return path.join(getBaseDirectory(), ProjectsFolderName);
}

export async function getProjectObject(fileName: string): Promise<any> {
  try {
    return await import(`@/projects/${fileName}`);
  } catch (error) {
    console.log(`Error reading project: ${fileName}`, error);
    return null;
  }
}

export async function getProjects(): Promise<any> {
  const projectsFileNames = await readdir(getProjectsFolderPath());
  try {
    const projectsPromises = projectsFileNames.map(
      async (fileName) => await getProjectObject(fileName)
    );
    const projects = await Promise.all(projectsPromises);
    return projects;
  } catch (error) {
    console.log("Error fetching projects: ", error);
    return null;
  }
}

export async function getProjectBySlug(slug: string): Promise<any> {
  try {
    return await import(`@/projects/${slug}.mdx`);
  } catch (error) {
    console.log(`Error importing project slug ${slug}:`, error);
    return null;
  }
}
