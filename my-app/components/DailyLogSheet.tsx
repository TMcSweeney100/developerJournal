"use client"

import { z } from "zod";

const dailyLogSchema = z.object({

    title: z.string().min(1,"Title is Required"),
    workedOn: z.string().optional(),
    tasksCompleted: z.string().optional(),
    blockers: z.string().optional(),
    difficulties: z.string().optional(),
    thingsLearned: z.string().optional(),
    toolsLearned: z.string().optional(),
    toolsUsed: z.string().optional(),
    notesForTomorrow: z.string().optional(),
    confidenceRating: z.number().min(1).max(10).optional(),
})