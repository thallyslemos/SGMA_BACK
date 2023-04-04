-- DropForeignKey
ALTER TABLE "courses_students" DROP CONSTRAINT "courses_students_id_course_fkey";

-- DropForeignKey
ALTER TABLE "courses_students" DROP CONSTRAINT "courses_students_id_student_fkey";

-- AddForeignKey
ALTER TABLE "courses_students" ADD CONSTRAINT "courses_students_id_course_fkey" FOREIGN KEY ("id_course") REFERENCES "courses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "courses_students" ADD CONSTRAINT "courses_students_id_student_fkey" FOREIGN KEY ("id_student") REFERENCES "students"("id") ON DELETE CASCADE ON UPDATE CASCADE;
