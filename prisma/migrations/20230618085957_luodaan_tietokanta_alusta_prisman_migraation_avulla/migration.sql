-- CreateTable
CREATE TABLE "User" (
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "todos" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL,
    "createdAt" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "todos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Person" (
    "PersonId" INTEGER NOT NULL,
    "PersonName" TEXT NOT NULL,
    "NickName" TEXT NOT NULL,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("PersonId")
);

-- CreateTable
CREATE TABLE "Exercise" (
    "ExerciseId" INTEGER NOT NULL,
    "ExerciseName" TEXT NOT NULL,
    "Author" TEXT NOT NULL,
    "DateCreated" TEXT NOT NULL,
    "ExerciseOtherInformation" TEXT NOT NULL,
    "Person_PersonId" INTEGER NOT NULL,

    CONSTRAINT "Exercise_pkey" PRIMARY KEY ("ExerciseId")
);

-- CreateTable
CREATE TABLE "Pose" (
    "PoseId" INTEGER NOT NULL,
    "PoseName" TEXT NOT NULL,
    "PoseCreateDate" TEXT NOT NULL,
    "PoseOtherInformation" TEXT NOT NULL,

    CONSTRAINT "Pose_pkey" PRIMARY KEY ("PoseId")
);

-- CreateTable
CREATE TABLE "Exercise_Posture" (
    "ExercisePoseId" INTEGER NOT NULL,
    "ExerciseId" INTEGER NOT NULL,
    "PoseId" INTEGER NOT NULL,

    CONSTRAINT "Exercise_Posture_pkey" PRIMARY KEY ("ExercisePoseId")
);

-- CreateTable
CREATE TABLE "Person_Exercise" (
    "PersonId" INTEGER NOT NULL,
    "ExcerciseId" INTEGER NOT NULL,
    "DateUsed" TEXT NOT NULL,

    CONSTRAINT "Person_Exercise_pkey" PRIMARY KEY ("PersonId")
);

-- CreateTable
CREATE TABLE "Phase" (
    "PhaseId" INTEGER NOT NULL,
    "PhaseName" TEXT NOT NULL,

    CONSTRAINT "Phase_pkey" PRIMARY KEY ("PhaseId")
);

-- CreateTable
CREATE TABLE "Sequence" (
    "SequenceId" INTEGER NOT NULL,
    "SequenceName" TEXT NOT NULL,
    "SequenceDescription" TEXT NOT NULL,
    "PhaseId" INTEGER NOT NULL,

    CONSTRAINT "Sequence_pkey" PRIMARY KEY ("SequenceId")
);

-- CreateTable
CREATE TABLE "Image" (
    "ImageId" INTEGER NOT NULL,
    "ImageName" TEXT NOT NULL,
    "ImagePath" TEXT NOT NULL,
    "ImageType" TEXT NOT NULL,
    "ImageColor" TEXT NOT NULL,
    "PostureId" INTEGER NOT NULL,
    "SequenceId" INTEGER NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("ImageId")
);

-- CreateTable
CREATE TABLE "Exercise_has_Sequence" (
    "Excercise_ExcerciseId" INTEGER NOT NULL,
    "Sequence_SequenceId" INTEGER NOT NULL,

    CONSTRAINT "Exercise_has_Sequence_pkey" PRIMARY KEY ("Excercise_ExcerciseId")
);

-- CreateTable
CREATE TABLE "Sequence_has_Pose" (
    "SequenceId" INTEGER NOT NULL,
    "PoseId" INTEGER NOT NULL,

    CONSTRAINT "Sequence_has_Pose_pkey" PRIMARY KEY ("SequenceId")
);

-- CreateTable
CREATE TABLE "Instruction" (
    "InstructionId" INTEGER NOT NULL,
    "InstructionTitle" TEXT NOT NULL,
    "InstructionText" TEXT NOT NULL,
    "ExcerciseId" INTEGER NOT NULL,
    "SequenceId" INTEGER NOT NULL,
    "PoseId" INTEGER NOT NULL,

    CONSTRAINT "Instruction_pkey" PRIMARY KEY ("InstructionId")
);

-- CreateTable
CREATE TABLE "PoseType" (
    "PoseTypeId" INTEGER NOT NULL,
    "PoseTypeName" TEXT NOT NULL,

    CONSTRAINT "PoseType_pkey" PRIMARY KEY ("PoseTypeId")
);

-- CreateTable
CREATE TABLE "Pose_has_PostureType" (
    "PoseId" INTEGER NOT NULL,
    "PoseTypeId" INTEGER NOT NULL,

    CONSTRAINT "Pose_has_PostureType_pkey" PRIMARY KEY ("PoseId")
);

-- CreateTable
CREATE TABLE "Excercise_has_Phase" (
    "ExcerciseId" INTEGER NOT NULL,
    "PhaseId" INTEGER NOT NULL,

    CONSTRAINT "Excercise_has_Phase_pkey" PRIMARY KEY ("ExcerciseId")
);

-- CreateTable
CREATE TABLE "Phase_has_Posture" (
    "PhaseId" INTEGER NOT NULL,
    "PoseId" INTEGER NOT NULL,

    CONSTRAINT "Phase_has_Posture_pkey" PRIMARY KEY ("PhaseId")
);
