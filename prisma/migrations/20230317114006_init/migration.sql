-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "students" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "birth_date" TIMESTAMP(3),

    CONSTRAINT "students_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "courses_students" (
    "id" TEXT NOT NULL,
    "id_course" TEXT NOT NULL,
    "id_student" TEXT NOT NULL,
    "grade_1" DOUBLE PRECISION NOT NULL,
    "grade_2" DOUBLE PRECISION NOT NULL,
    "grade_3" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "courses_students_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "courses" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "courses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "token" (
    "id" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "hash" TEXT NOT NULL,

    CONSTRAINT "token_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_name_key" ON "users"("name");

-- CreateIndex
CREATE UNIQUE INDEX "students_cpf_key" ON "students"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "courses_name_key" ON "courses"("name");

-- CreateIndex
CREATE UNIQUE INDEX "token_userName_key" ON "token"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "token_hash_key" ON "token"("hash");

-- AddForeignKey
ALTER TABLE "courses_students" ADD CONSTRAINT "courses_students_id_course_fkey" FOREIGN KEY ("id_course") REFERENCES "courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "courses_students" ADD CONSTRAINT "courses_students_id_student_fkey" FOREIGN KEY ("id_student") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
