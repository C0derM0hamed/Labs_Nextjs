import connectMongo from "@/lib/db";
import Course from "@/models/Course";
import Link from "next/link";

// get all courses
export default async function CoursesPage() {
  let courses = [];
  try {
    await connectMongo();
    courses = await Course.find({}).lean();
  } catch (error) {
    console.error("Failed to fetch courses:", error.message);
  }

  return (
    <div className="container mt-4">
      <h2>Courses List</h2>
      <div className="row mt-3">
        {courses.map((course) => (
          <div key={course._id.toString()} className="col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text text-truncate">{course.description}</p>
                <Link href={`/courses/${course._id.toString()}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
        {courses.length === 0 && <p>No courses found. Add some to your database!</p>}
      </div>
    </div>
  );
}
