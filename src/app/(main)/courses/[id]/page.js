import connectMongo from "@/lib/db";
import Course from "@/models/Course";
import Link from "next/link";
import { notFound } from "next/navigation";

// get course by id
export default async function CourseDetailsPage({ params }) {
  const { id } = params;

  let course = null;
  try {
    await connectMongo();
    course = await Course.findById(id).lean();
  } catch (error) {
    console.error("Failed to fetch course details:", error.message);
    return notFound();
  }

  if (!course) {
    return notFound();
  }

  return (
    <div className="container mt-4">
      <h2>Course Details</h2>
      <div className="card mt-3">
        <div className="card-body">
          <h3 className="card-title">{course.title}</h3>
          <h6 className="card-subtitle mb-2 text-muted">Duration: {course.duration}</h6>
          <p className="card-text mt-3">{course.description}</p>
          <Link href="/courses" className="btn btn-secondary mt-3">
            Back to Courses
          </Link>
        </div>
      </div>
    </div>
  );
}
