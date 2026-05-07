# Software Engineer Diary — Functional Specification

## 1. Project Overview

### Working Name

**DevLog**

Alternative names:

- DevDiary
- EngineerLog
- WorkTrace
- StandupLog
- DevJournal

For now, this specification will use **DevLog** as the working project name.

---

## 2. Product Summary

**DevLog** is a web application for software engineers to record what they worked on each day, what they learned, what they found difficult, what tools they used, and what goals they are working towards.

The main purpose of the application is to help developers:

- stay organised
- remember what they worked on in the past
- prepare for daily standups
- review weekly or monthly progress
- track goals over time
- collect useful evidence for performance reviews or manager check-ins
- build a searchable history of their engineering work

The first version should be simple and focused. It should feel like a practical daily tool that a software engineer would keep open beside them during work.

---

## 3. Core Problem

Software engineers often work on many different tasks, bugs, tools, meetings, blockers, and learning points during the week.

After a few days or weeks, it becomes difficult to remember:

- what was worked on
- when a specific issue was investigated
- what solution was found
- what blockers existed
- what was learned
- what should be mentioned in standup
- what progress was made toward weekly or monthly goals

Developers may currently track this information in scattered places such as:

- paper notebooks
- Slack messages
- Jira tickets
- Git commits
- Notion pages
- random text files
- memory

DevLog should provide one simple, searchable place for this information.

---

## 4. Target User

The primary user is a software engineer who wants to keep a private work diary.

Example user:

> A junior or mid-level software engineer working on multiple tasks during the week who wants to track daily progress, prepare for standups, remember past work, and produce useful weekly/monthly summaries.

Secondary users could include:

- interns
- apprentices
- junior developers
- freelance developers
- developers changing jobs
- developers preparing for reviews
- developers learning a new stack

The MVP should focus on a **single individual user experience**. Team features should not be included in the first version.

---

## 5. Product Goals

The application should allow a developer to:

1. Create a daily work log.
2. Record tasks worked on during the day.
3. Record blockers, difficulties, and things learned.
4. Add tags to logs, such as skills, tools, projects, or goals.
5. Create weekly and monthly goals.
6. Link daily logs to goals.
7. Search previous logs by keyword, tag, date, or goal.
8. Generate a simple standup summary from recent logs.
9. Generate weekly and monthly progress summaries.
10. Review past work in a timeline-style interface.

---

## 6. Non-Goals for Version 1

The first version should **not** try to be a full project management tool.

Do not include these in the MVP:

- team management
- manager accounts
- Jira integration
- GitHub integration
- Slack integration
- full AI assistant functionality
- public sharing
- complex skill analytics
- kanban boards
- invoicing
- time tracking with timers
- calendar sync
- mobile app
- browser extension

These may be added later, but the first version should stay focused on daily logging, recall, search, goals, and summaries.

---

## 7. Suggested Tech Stack

### Frontend

**Next.js**

Frontend responsibilities:

- pages and routing
- forms
- dashboard
- search interface
- timeline views
- summary views
- calling backend APIs

### Backend

**Spring Boot**

Backend responsibilities:

- REST API endpoints
- authentication and authorization
- business logic
- validation
- database access
- summary generation logic
- search queries

### Database

**PostgreSQL**

Database responsibilities:

- storing users
- storing logs
- storing tags
- storing goals
- storing generated summaries
- storing standup notes

---

## 7.1 Recommended Project Structure

For the first version, the project should use a single repository containing separate frontend and backend folders.

Recommended structure:

```text
devlog/
  frontend/
  backend/
  AGENTS.md
  README.md
  TASKS.md
```

### Folder Purpose

#### frontend

Contains the Next.js application.

This includes:

- pages and routing
- React components
- shadcn/ui components
- frontend forms
- frontend API calls
- dashboard and user interface screens

#### backend

Contains the Spring Boot application.

This includes:

- REST controllers
- services
- repositories
- entities/models
- validation
- authentication and authorization later
- PostgreSQL database connection logic

#### AGENTS.md

Contains instructions for AI coding agents such as Claude Code.

This file should explain:

- the project goal
- the learning-first approach
- the recommended phase order
- coding expectations
- what not to overbuild
- how changes should be explained

#### README.md

Contains the public-facing project overview.

This file should explain:

- what DevLog is
- the tech stack
- how to run the project
- the current development phase
- setup notes
- future portfolio information

#### TASKS.md

Contains the current build checklist.

This should stay simple and phase-based so the project can be built in small steps.

---

## 7.2 Local Development Database Choice

For the first version, PostgreSQL will be installed and run locally.

This means the developer will run PostgreSQL on their own machine during development instead of using Docker or a hosted cloud database at the start.

This is the preferred first approach for this project because it keeps the early learning path focused on:

- understanding PostgreSQL directly
- connecting Spring Boot to a local database
- learning how tables are created
- learning how backend code stores and retrieves data

Docker or a hosted PostgreSQL database can be added later if needed.


---

## 8. MVP Scope

The MVP should provide a complete but simple version of the product.

### MVP Features

1. User registration and login.
2. Create, edit, view, and delete daily logs.
3. Add tags to daily logs.
4. Create weekly and monthly goals.
5. Link logs to goals.
6. Search logs.
7. Generate a standup summary.
8. Generate weekly summary.
9. Generate monthly summary.
10. View dashboard with recent logs, active goals, and upcoming review prompts.

---

## 9. Main User Flows

## 9.1 Register and Log In

### Description

A user should be able to create an account and log in securely.

### Flow

1. User opens the application.
2. User clicks register.
3. User enters email, password, and display name.
4. Backend validates the input.
5. Account is created.
6. User can log in.
7. User is taken to the dashboard.

### Fields

- email
- password
- display name

### Validation Rules

- email is required
- email must be valid
- password is required
- password must meet minimum length rules
- display name is required

---

## 9.2 Create Daily Log

### Description

The user records what they worked on during the day.

### Flow

1. User clicks **New Log**.
2. User selects or confirms the log date.
3. User enters what they worked on.
4. User enters what they found difficult.
5. User enters what they learned.
6. User optionally enters blockers.
7. User optionally enters tools used.
8. User adds tags.
9. User links the log to one or more goals.
10. User saves the log.

### Suggested Fields

- log date
- title
- worked on
- tasks completed
- blockers
- difficulties
- things learned
- tools used
- notes for tomorrow
- mood or confidence rating
- tags
- linked goals

### Field Descriptions

#### Log Date

The date the work happened.

#### Title

A short title for the day or main focus.

Example:

> Spring Boot API validation and PostgreSQL setup

#### Worked On

A longer text field describing the main work done.

Example:

> I worked on creating the first REST endpoints for the daily log feature and connected them to the PostgreSQL database.

#### Tasks Completed

A list or text area containing completed tasks.

Example:

- created DailyLog entity
- added repository
- added create-log endpoint
- tested request body validation

#### Blockers

Things that slowed the developer down or stopped progress.

Example:

> I was blocked by a CORS error when trying to connect the Next.js frontend to the Spring Boot backend.

#### Difficulties

Things the developer found hard or confusing.

Example:

> I found it difficult to understand why the validation error was returning a 500 response instead of a 400 response.

#### Things Learned

Concepts, tools, syntax, or patterns learned.

Example:

> I learned that Spring Boot can use validation annotations like @NotBlank on request DTO fields.

#### Tools Used

Tools, libraries, frameworks, or platforms used during the day.

Example:

- Next.js
- Spring Boot
- PostgreSQL
- Postman
- IntelliJ
- Docker

#### Notes for Tomorrow

A small field for what the developer wants to continue next.

Example:

> Tomorrow I need to connect the create-log form in Next.js to the backend endpoint.

#### Mood or Confidence Rating

A simple optional rating from 1 to 5.

Example:

- 1 = very confused
- 2 = partly understood
- 3 = okay but need practice
- 4 = confident
- 5 = very confident

This should be optional. The app should not force the user to rate every day.

---

## 9.3 Edit Daily Log

### Description

The user can update a previously created daily log.

### Flow

1. User opens a log.
2. User clicks edit.
3. User changes fields.
4. User saves changes.
5. Updated log is displayed.

### Rules

- The user can only edit their own logs.
- The date should be editable.
- Tags and linked goals should be editable.

---

## 9.4 View Log History

### Description

The user can browse previous logs.

### Flow

1. User opens the logs page.
2. Logs are shown in reverse chronological order.
3. User can click a log to view full details.

### Display

Each log card should show:

- date
- title
- short preview
- tags
- linked goals
- mood/confidence rating if available

---

## 9.5 Search Logs

### Description

The user can search previous logs to remember when they worked on something.

### Example Use Case

The user types:

> CORS

The app returns logs where the user mentioned CORS in:

- title
- worked on
- blockers
- difficulties
- things learned
- tools used
- tags

### Search Filters

The search page should support:

- keyword search
- tag filter
- date range filter
- goal filter

### Example Search Results

Each result should show:

- date
- title
- matching text preview
- tags
- linked goals

### MVP Search Approach

For the MVP, basic PostgreSQL text matching is acceptable.

Later, this could be improved with PostgreSQL full-text search.

---

## 9.6 Create Tags

### Description

Tags are used to label logs.

Tags can represent:

- skills
- tools
- projects
- goals
- topics
- technologies
- work areas

Examples:

- Java
- Spring Boot
- PostgreSQL
- Next.js
- Debugging
- REST API
- Authentication
- CORS
- UI
- Testing
- Performance

### Rules

- A user can create custom tags.
- A log can have multiple tags.
- A tag can belong to many logs.
- Tags should be user-specific.

---

## 9.7 Weekly and Monthly Goals

### Description

The user can create goals they are working toward.

Goals help the user connect daily work to bigger progress.

### Goal Types

- weekly goal
- monthly goal

### Example Weekly Goal

> Understand how a Next.js frontend communicates with a Spring Boot backend.

### Example Monthly Goal

> Build and deploy the MVP of DevLog using Next.js, Spring Boot, and PostgreSQL.

### Goal Fields

- title
- description
- goal type
- start date
- end date
- status
- tags

### Goal Statuses

- active
- completed
- paused
- cancelled

### Rules

- A goal belongs to a user.
- A goal can be linked to many logs.
- A log can be linked to many goals.
- Goals can have tags.

---

## 9.8 Link Daily Logs to Goals

### Description

When creating or editing a log, the user can select which goals the log contributes to.

### Example

Goal:

> Learn Spring Boot REST API development

Daily log:

> Today I created my first POST endpoint for saving daily logs.

The user links this daily log to the Spring Boot goal.

### Benefit

At the end of the week or month, the app can show evidence of progress toward that goal.

---

## 9.9 Generate Standup Summary

### Description

The user can generate a short standup summary based on recent logs.

### MVP Approach

For the MVP, this can be generated using simple backend logic rather than AI.

The backend can pull yesterday's log and today's notes, then format them into a standup template.

### Suggested Standup Format

- What I worked on yesterday
- What I am working on today
- Blockers

### Example Output

> Yesterday I worked on the Spring Boot endpoint for creating daily logs and tested validation with Postman. Today I plan to connect the Next.js form to the backend. My main blocker is understanding how to display validation errors returned from the API.

### Inputs

The summary can use:

- previous day's worked-on field
- previous day's completed tasks
- previous day's blockers
- current day's notes for tomorrow from the previous log
- active goals

### Future Improvement

Later, this could use AI to produce a more natural standup summary.

---

## 9.10 Generate Weekly Summary

### Description

The user can generate a summary of what they worked on during a selected week.

### Flow

1. User opens Weekly Summary page.
2. User selects week.
3. App loads logs from that week.
4. App generates a structured summary.
5. User can save the summary.

### Suggested Weekly Summary Sections

- main work completed
- key tasks
- blockers encountered
- problems solved
- tools and technologies used
- things learned
- progress toward weekly goals
- suggested talking points for manager/review

### MVP Approach

For the MVP, this can be generated using rules and templates.

Example:

- collect all tasks completed from the week
- collect all blockers from the week
- collect all things learned from the week
- collect all tags used in the week
- list goals linked to the week's logs

### Example Weekly Summary

> This week I focused mainly on building the backend foundation for DevLog. I created the DailyLog entity, repository, service, and REST controller. I also connected the application to PostgreSQL and began testing API requests with Postman. The main difficulty was handling validation errors cleanly. I learned more about DTOs, request validation, and how Spring Boot returns API responses.

---

## 9.11 Generate Monthly Summary

### Description

The user can generate a higher-level monthly progress review.

### Suggested Monthly Summary Sections

- major areas of work
- most-used tags
- completed goals
- unfinished goals
- repeated blockers
- strongest learning areas
- useful examples for performance review
- next month focus areas

### Example Use Case

The user has a monthly one-to-one meeting with their manager and wants to quickly review what they worked on.

The app should help them answer:

- What did I work on this month?
- What progress did I make?
- What did I learn?
- What did I struggle with?
- What should I focus on next?

---

## 10. Dashboard Requirements

The dashboard should be the first page after login.

### Dashboard Should Show

- today's log status
- button to create today's log
- recent logs
- active weekly goals
- active monthly goals
- most-used tags this week
- quick standup generator button
- quick search bar

### Example Dashboard Cards

- Logs created this week
- Active weekly goals
- Active monthly goals
- Most recent blocker
- Top tags this week

### Dashboard Actions

- New Log
- Search Logs
- Generate Standup
- View Weekly Summary
- View Goals

---

## 11. Page List

## 11.1 Public Pages

- Landing page
- Login page
- Register page

## 11.2 Authenticated Pages

- Dashboard
- Logs list
- New log
- View log
- Edit log
- Search logs
- Goals list
- New goal
- View goal
- Edit goal
- Weekly summary
- Monthly summary
- Standup generator
- Settings

---

## 12. Data Model

This section describes the suggested PostgreSQL database structure.

The exact schema can change during implementation, but this should be the starting point.

---

## 12.1 users

Stores registered users.

### Columns

- id
- email
- password_hash
- display_name
- created_at
- updated_at

### Notes

Passwords must not be stored as plain text.

A password hash should be stored instead.

---

## 12.2 daily_logs

Stores daily work diary entries.

### Columns

- id
- user_id
- log_date
- title
- worked_on
- tasks_completed
- blockers
- difficulties
- things_learned
- tools_used
- notes_for_tomorrow
- confidence_rating
- created_at
- updated_at

### Relationships

- many daily logs belong to one user
- one daily log can have many tags
- one daily log can link to many goals

---

## 12.3 tags

Stores user-created tags.

### Columns

- id
- user_id
- name
- colour
- created_at
- updated_at

### Notes

The colour field is optional but useful for the UI.

Example colours could be used for tag chips.

---

## 12.4 daily_log_tags

Join table between daily logs and tags.

### Columns

- daily_log_id
- tag_id

### Purpose

This allows a daily log to have many tags, and a tag to appear on many logs.

---

## 12.5 goals

Stores weekly and monthly goals.

### Columns

- id
- user_id
- title
- description
- goal_type
- start_date
- end_date
- status
- created_at
- updated_at

### Goal Type Values

- weekly
- monthly

### Status Values

- active
- completed
- paused
- cancelled

---

## 12.6 goal_tags

Join table between goals and tags.

### Columns

- goal_id
- tag_id

### Purpose

This allows goals to be labelled with tags.

---

## 12.7 daily_log_goals

Join table between daily logs and goals.

### Columns

- daily_log_id
- goal_id

### Purpose

This links daily work to weekly or monthly goals.

---

## 12.8 summaries

Stores generated weekly and monthly summaries.

### Columns

- id
- user_id
- summary_type
- period_start
- period_end
- title
- content
- created_at
- updated_at

### Summary Type Values

- weekly
- monthly

### Notes

The content can be stored as text for the MVP.

Later, this could be split into structured fields.

---

## 12.9 standup_summaries

Stores generated standup summaries.

### Columns

- id
- user_id
- summary_date
- content
- created_at
- updated_at

---

## 13. Backend API Specification

The backend should expose REST API endpoints for the frontend.

A REST API is a set of backend URLs that the frontend calls to create, read, update, or delete data.

---

## 13.1 Authentication Endpoints

### Register

`POST /api/auth/register`

Creates a new user account.

Request body:

```json
{
  "email": "tim@example.com",
  "password": "password123",
  "displayName": "Tim"
}
```

Response:

```json
{
  "id": 1,
  "email": "tim@example.com",
  "displayName": "Tim"
}
```

---

### Login

`POST /api/auth/login`

Logs the user in.

Request body:

```json
{
  "email": "tim@example.com",
  "password": "password123"
}
```

Response should include authentication information depending on the chosen auth approach.

For the MVP, JWT authentication is a reasonable choice.

JWT means JSON Web Token. In simple terms, after login the backend gives the frontend a token, and the frontend sends that token with future requests to prove the user is logged in.

---

## 13.2 Daily Log Endpoints

### Get Logs

`GET /api/logs`

Returns the logged-in user's daily logs.

Optional query parameters:

- startDate
- endDate
- tag
- goalId
- keyword

---

### Get Single Log

`GET /api/logs/{id}`

Returns one daily log.

The backend must check that the log belongs to the logged-in user.

---

### Create Log

`POST /api/logs`

Creates a daily log.

Request body:

```json
{
  "logDate": "2026-05-07",
  "title": "Spring Boot API work",
  "workedOn": "Created the first daily log endpoints.",
  "tasksCompleted": "Created entity, repository, service, and controller.",
  "blockers": "Validation errors were not returning clearly.",
  "difficulties": "Understanding DTO validation.",
  "thingsLearned": "Learned how @Valid works in Spring Boot controllers.",
  "toolsUsed": "Spring Boot, PostgreSQL, Postman",
  "notesForTomorrow": "Connect the Next.js form to the backend.",
  "confidenceRating": 3,
  "tagIds": [1, 2],
  "goalIds": [5]
}
```

---

### Update Log

`PUT /api/logs/{id}`

Updates an existing log.

---

### Delete Log

`DELETE /api/logs/{id}`

Deletes a log.

---

## 13.3 Tag Endpoints

### Get Tags

`GET /api/tags`

Returns all tags belonging to the logged-in user.

---

### Create Tag

`POST /api/tags`

Request body:

```json
{
  "name": "Spring Boot",
  "colour": "blue"
}
```

---

### Update Tag

`PUT /api/tags/{id}`

---

### Delete Tag

`DELETE /api/tags/{id}`

---

## 13.4 Goal Endpoints

### Get Goals

`GET /api/goals`

Optional query parameters:

- goalType
- status
- startDate
- endDate

---

### Get Single Goal

`GET /api/goals/{id}`

---

### Create Goal

`POST /api/goals`

Request body:

```json
{
  "title": "Learn Spring Boot REST APIs",
  "description": "Build and understand REST endpoints using Spring Boot.",
  "goalType": "weekly",
  "startDate": "2026-05-04",
  "endDate": "2026-05-10",
  "status": "active",
  "tagIds": [1, 2]
}
```

---

### Update Goal

`PUT /api/goals/{id}`

---

### Delete Goal

`DELETE /api/goals/{id}`

---

## 13.5 Search Endpoint

### Search Logs

`GET /api/search/logs?keyword=cors`

Optional query parameters:

- keyword
- tagId
- goalId
- startDate
- endDate

Response should return matching logs with enough information to display result cards.

---

## 13.6 Summary Endpoints

### Generate Weekly Summary

`POST /api/summaries/weekly`

Request body:

```json
{
  "weekStart": "2026-05-04",
  "weekEnd": "2026-05-10"
}
```

The backend should collect logs in this date range and generate a weekly summary.

---

### Generate Monthly Summary

`POST /api/summaries/monthly`

Request body:

```json
{
  "monthStart": "2026-05-01",
  "monthEnd": "2026-05-31"
}
```

---

### Get Saved Summaries

`GET /api/summaries`

Optional query parameters:

- summaryType
- startDate
- endDate

---

## 13.7 Standup Endpoint

### Generate Standup Summary

`POST /api/standup/generate`

Request body:

```json
{
  "date": "2026-05-07"
}
```

The backend should use recent logs to create a standup summary.

Suggested logic:

- use yesterday's log for completed work
- use notes for tomorrow from yesterday's log as today's plan
- include blockers from yesterday or current active blockers
- include linked goals if useful

---

## 13.8 Dashboard Endpoint

### Get Dashboard Data

`GET /api/dashboard`

Should return:

- today's log if it exists
- recent logs
- active weekly goals
- active monthly goals
- most-used tags this week
- count of logs this week
- latest saved summary if available

---

## 14. Frontend Page Requirements

## 14.1 Landing Page

The landing page should explain the product clearly.

Suggested headline:

> A daily work diary for software engineers.

Suggested subheading:

> Track what you worked on, what you learned, what blocked you, and turn your notes into standup updates and progress summaries.

Primary action:

- Get Started

Secondary action:

- Log In

---

## 14.2 Dashboard Page

The dashboard should be practical and focused.

Sections:

- Today's log card
- New log button
- Search bar
- Recent logs
- Active goals
- Quick standup button
- Weekly progress card

---

## 14.3 New Log Page

The new log page should be easy to fill in quickly.

Recommended layout:

- date picker
- title input
- worked on textarea
- tasks completed textarea
- blockers textarea
- difficulties textarea
- things learned textarea
- tools used input or textarea
- tags selector
- goals selector
- notes for tomorrow textarea
- confidence rating
- save button

The form should not feel too heavy. Some fields can be optional.

Required fields for MVP:

- log date
- title
- worked on

Optional fields:

- tasks completed
- blockers
- difficulties
- things learned
- tools used
- notes for tomorrow
- confidence rating
- tags
- goals

---

## 14.4 Logs List Page

Displays previous logs.

Features:

- reverse chronological list
- filter by tag
- filter by date range
- filter by goal
- click to open log details

---

## 14.5 Log Detail Page

Shows full details for one log.

Sections:

- title
- date
- worked on
- tasks completed
- blockers
- difficulties
- things learned
- tools used
- tags
- linked goals
- notes for tomorrow
- edit button
- delete button

---

## 14.6 Search Page

Allows users to search old logs.

Features:

- keyword input
- date range filter
- tag filter
- goal filter
- result cards

The search result should make it easy to identify when something happened.

Each result should show:

- date
- title
- short matching preview
- tags

---

## 14.7 Goals Page

Shows weekly and monthly goals.

Features:

- active goals
- completed goals
- create goal button
- filter by weekly/monthly
- view linked logs

---

## 14.8 Goal Detail Page

Shows one goal and its progress.

Sections:

- title
- description
- type
- start date
- end date
- status
- tags
- linked daily logs

This page should help the user see evidence of progress toward the goal.

---

## 14.9 Standup Generator Page

Generates a simple standup update.

Suggested layout:

- selected date
- generated standup text
- source logs used
- copy button
- save button

Example generated text:

> Yesterday I worked on the daily log API and connected the service layer to PostgreSQL. Today I plan to connect the frontend form to the create-log endpoint. I am currently blocked by understanding how to display validation errors from the backend.

---

## 14.10 Weekly Summary Page

Allows user to generate or view a weekly summary.

Sections:

- week selector
- generated summary
- logs included
- goals included
- save summary button

---

## 14.11 Monthly Summary Page

Allows user to generate or view a monthly summary.

Sections:

- month selector
- generated summary
- goals completed
- repeated blockers
- most-used tags
- progress notes
- save summary button

---

## 15. Summary Generation Logic

For the first version, summaries can be generated without AI.

The backend can use structured templates.

### Weekly Summary Template

The backend should collect:

- all logs in the week
- all tasks completed
- all blockers
- all things learned
- all tools used
- all tags used
- goals linked to those logs

Then generate text like:

> This week you worked on [main topics]. You completed [task list]. You encountered blockers around [blockers]. You learned [learning points]. You made progress toward [goals].

### Monthly Summary Template

The backend should collect:

- all logs in the month
- most common tags
- completed goals
- active/incomplete goals
- repeated blockers
- recurring learning topics

Then generate text like:

> This month you focused mainly on [topics]. Your most common work areas were [tags]. You completed [goals]. You continued making progress on [active goals]. Your recurring blockers were [blockers]. Next month, useful focus areas may include [topics].

### Standup Template

The backend should collect:

- yesterday's log
- notes for tomorrow from yesterday
- current active blockers

Then generate text like:

> Yesterday I worked on [worked on]. I completed [tasks]. Today I plan to [notes for tomorrow]. My current blocker is [blocker].

---

## 16. Possible Later AI Features

AI is **not required** for the MVP.

Later, AI could be added to:

- rewrite standup summaries more naturally
- produce cleaner weekly summaries
- identify skills from logs
- suggest goals based on repeated work
- detect recurring blockers
- generate review talking points
- generate CV bullets from logs
- answer questions like "When did I last work on CORS?"

These should be treated as future enhancements, not MVP requirements.

---

## 17. Security Requirements

### Authentication

Users must log in to access their data.

### Authorization

A user must only be able to access their own logs, tags, goals, and summaries.

For every backend endpoint that uses an ID, the backend must check that the record belongs to the logged-in user.

Example:

If user A requests:

`GET /api/logs/5`

The backend must confirm that log 5 belongs to user A.

### Password Storage

Passwords must be hashed.

Plain text passwords must never be stored.

### Input Validation

Backend should validate all request data.

Example validation rules:

- title cannot be blank
- log date cannot be null
- confidence rating must be between 1 and 5 if provided
- goal type must be weekly or monthly
- goal status must be one of the allowed statuses

---

## 18. Error Handling Requirements

The API should return clear error responses.

Examples:

### Validation Error

HTTP status: 400

```json
{
  "message": "Validation failed",
  "errors": {
    "title": "Title is required"
  }
}
```

### Not Found

HTTP status: 404

```json
{
  "message": "Daily log not found"
}
```

### Unauthorized

HTTP status: 401

```json
{
  "message": "You must be logged in"
}
```

### Forbidden

HTTP status: 403

```json
{
  "message": "You do not have permission to access this resource"
}
```

---

## 19. Suggested Development Phases

These phases are ordered to make the project easier to build as a first full personal project.

The first priority should be to build the smallest useful version of the core product before adding authentication and more advanced features.

The most important early milestone is:

> A user can create a daily log and see it again.

Authentication is still required for the MVP, but it should not be the first feature built. Building the core logging feature first makes the project easier to understand, test, and develop step by step.

---

## Phase 0 - Project Foundation

Goal:

- Get the frontend, backend, and database running cleanly before building real features.

Tasks:

- Set up the Next.js frontend.
- Install and configure shadcn/ui.
- Set up the Spring Boot backend.
- Set up the PostgreSQL database.
- Connect the backend to PostgreSQL.
- Create a basic backend health check endpoint.
- Confirm the frontend can run locally.
- Confirm the backend can run locally.
- Confirm the database connection works.

Example health check endpoint:

```text
GET /api/health
```

Example response:

```json
{
  "status": "ok"
}
```

This phase is complete when all parts of the project can run locally without errors.

---

## Phase 1 - Daily Logs Backend

Goal:

- Build the main data feature of the application first.

For this phase, do not add authentication yet.

Use a temporary hardcoded user ID, such as `userId = 1`, so that the daily log feature can be built and tested before login/register is added.

Tasks:

- Create the `daily_logs` database table.
- Create the `DailyLog` entity/model.
- Create the `DailyLogRepository`.
- Create the `DailyLogService`.
- Create the `DailyLogController`.
- Add an endpoint to create a daily log.
- Add an endpoint to get all daily logs.
- Add an endpoint to get one daily log by ID.
- Add an endpoint to update a daily log.
- Add an endpoint to delete a daily log.

Required fields for the first version:

- log date
- title
- worked on

Optional fields can still be included, but they should not block the first working version.

This phase is complete when daily logs can be created, viewed, updated, and deleted using backend API requests.

---

## Phase 2 - Daily Logs Frontend

Goal:

- Build the first usable version of the app in the browser.

Tasks:

- Create a basic dashboard page.
- Create a logs list page.
- Create a new log page.
- Create a log detail page.
- Create an edit log page.
- Connect the new log form to the backend create endpoint.
- Display saved logs in reverse chronological order.
- Allow a user to open a log and view the full details.
- Allow a user to edit a log.
- Allow a user to delete a log.

The new log form should start simple.

Required fields:

- log date
- title
- worked on

Optional fields:

- tasks completed
- blockers
- difficulties
- things learned
- tools used
- notes for tomorrow
- confidence rating

This phase is complete when a daily log can be created from the frontend and then viewed again in the app.

---

## Phase 3 - Validation and Error Handling

Goal:

- Make the core daily log feature more reliable.

Tasks:

- Add backend validation for daily log requests.
- Ensure required fields cannot be blank.
- Ensure confidence rating is between 1 and 5 if provided.
- Return clear validation error responses.
- Display useful error messages on the frontend.
- Handle not found errors clearly.
- Handle failed API requests clearly.

Example validation error response:

```json
{
  "message": "Validation failed",
  "errors": {
    "title": "Title is required"
  }
}
```

This phase is complete when invalid daily log data is rejected clearly and the frontend shows useful feedback to the user.

---

## Phase 4 - Authentication

Goal:

- Add real user accounts after the core logging feature works.

Tasks:

- Create the users table.
- Create user registration endpoint.
- Create login endpoint.
- Hash passwords before storing them.
- Add frontend register page.
- Add frontend login page.
- Store login state on the frontend.
- Protect authenticated pages.
- Add logout functionality.

Authentication means proving who the user is.

Example:

> A user logs in with their email and password.

This phase is complete when a user can register, log in, access protected pages, and log out.

---

## Phase 5 - User Ownership and Authorization

Goal:

- Make sure users can only access their own data.

Tasks:

- Replace the temporary hardcoded user ID with the logged-in user's ID.
- Ensure created logs are saved against the logged-in user.
- Ensure `GET /api/logs` only returns the logged-in user's logs.
- Ensure `GET /api/logs/{id}` checks ownership.
- Ensure update and delete operations check ownership.
- Return `403 Forbidden` when a user tries to access another user's data.
- Retest all daily log pages after ownership checks are added.

Authorization means checking what the logged-in user is allowed to access.

Example:

> A user can view their own logs, but not another user's logs.

This phase is complete when daily logs are private to each user.

---

## Phase 6 - Tags

Goal:

- Add simple organisation to daily logs.

Tasks:

- Create the `tags` table.
- Create the `daily_log_tags` join table.
- Add tag CRUD endpoints.
- Allow tags to be linked to daily logs.
- Show tags on log cards.
- Show tags on the log detail page.
- Add a tag selector to the new/edit log form.
- Add a basic tag filter to the logs list page.

Tags should stay simple in the MVP.

Examples:

- Java
- Spring Boot
- PostgreSQL
- Next.js
- Debugging
- Authentication
- CORS
- UI

This phase is complete when a user can create tags, attach them to logs, and filter logs by tag.

---

## Phase 7 - Goals

Goal:

- Add weekly and monthly goal tracking.

Tasks:

- Create the `goals` table.
- Create the `daily_log_goals` join table.
- Create goal CRUD endpoints.
- Create a goals list page.
- Create a new goal page.
- Create a goal detail page.
- Create an edit goal page.
- Allow daily logs to be linked to goals.
- Show linked logs on the goal detail page.

Goal types:

- weekly
- monthly

Goal statuses:

- active
- completed
- paused
- cancelled

This phase is complete when a user can create goals and link daily logs to those goals.

---

## Phase 8 - Basic Search

Goal:

- Make previous work easy to find.

Tasks:

- Add a backend search endpoint for daily logs.
- Add keyword search across daily log fields.
- Add a search page on the frontend.
- Display search results as cards.
- Show the date, title, preview text, and tags for each result.
- Add optional filters for tag, date range, and goal.

For the MVP, simple PostgreSQL text matching is enough.

Do not start with advanced full-text search.

This phase is complete when a user can search for a word such as `CORS` and find matching daily logs.

---

## Phase 9 - Standup Summary

Goal:

- Generate a useful standup update from recent logs.

Tasks:

- Add a standup summary generation endpoint.
- Use yesterday's daily log as the main source.
- Use `worked on` for yesterday's work.
- Use `tasks completed` for completed items.
- Use `notes for tomorrow` as today's plan.
- Use `blockers` for blockers.
- Create a frontend standup generator page.
- Add a copy button for the generated text.
- Allow the standup summary to be saved if required.

The MVP should use simple template-based logic.

AI is not required.

This phase is complete when the user can generate a standup summary from recent logs.

---

## Phase 10 - Weekly Summary

Goal:

- Generate a structured weekly review.

Tasks:

- Add a weekly summary generation endpoint.
- Allow the user to select a week.
- Collect all logs within the selected week.
- Collect completed tasks.
- Collect blockers.
- Collect things learned.
- Collect tools used.
- Collect tags used.
- Include linked goals where useful.
- Create a frontend weekly summary page.
- Allow the generated summary to be saved.

The MVP should use simple template-based logic.

This phase is complete when the user can generate and view a weekly summary.

---

## Phase 11 - Monthly Summary

Goal:

- Generate a higher-level monthly progress review.

Tasks:

- Add a monthly summary generation endpoint.
- Allow the user to select a month.
- Collect all logs within the selected month.
- Identify most-used tags.
- Include completed goals.
- Include unfinished goals.
- Include repeated blockers.
- Include recurring learning areas.
- Create a frontend monthly summary page.
- Allow the generated summary to be saved.

The MVP should use simple template-based logic.

This phase is complete when the user can generate and view a monthly summary.

---

## Phase 12 - Dashboard Polish

Goal:

- Make the app feel like a practical daily tool.

Tasks:

- Show today's log status.
- Add a create today's log button.
- Show recent logs.
- Show active weekly goals.
- Show active monthly goals.
- Show most-used tags this week.
- Add a quick standup button.
- Add a quick search bar.
- Improve spacing, layout, and visual hierarchy with shadcn/ui.

This phase should come after the main data features exist, because the dashboard depends on logs, tags, goals, and summaries.

This phase is complete when the dashboard gives a useful overview of the user's recent work.

---

## Phase 13 - Testing, Cleanup, and Portfolio Preparation

Goal:

- Prepare the project to be shown as a portfolio piece.

Tasks:

- Add backend unit tests for important service methods.
- Add tests for important API endpoints if possible.
- Add frontend form validation.
- Clean up unused code.
- Improve error messages.
- Review naming consistency.
- Write a clear README.
- Add setup instructions.
- Add screenshots.
- Add a short portfolio description.
- Add a future improvements section.

This phase is complete when the project can be explained, run locally, and shown confidently as a portfolio project.

---

## Recommended Build Order Summary

1. Project foundation
2. Daily logs backend
3. Daily logs frontend
4. Validation and error handling
5. Authentication
6. User ownership and authorization
7. Tags
8. Goals
9. Basic search
10. Standup summary
11. Weekly summary
12. Monthly summary
13. Dashboard polish
14. Testing, cleanup, and portfolio preparation

Do not start with AI, charts, calendar sync, integrations, or advanced analytics.

Build the core logging tool first.

## 20. MVP Acceptance Criteria

The MVP is complete when:

1. A user can register and log in.
2. A user can create a daily log.
3. A user can edit and delete their own daily logs.
4. A user can add tags to logs.
5. A user can create weekly and monthly goals.
6. A user can link logs to goals.
7. A user can search past logs by keyword.
8. A user can filter logs by tag, date, and goal.
9. A user can generate a standup summary.
10. A user can generate a weekly summary.
11. A user can generate a monthly summary.
12. A user cannot access another user's data.
13. The dashboard shows useful recent activity.
14. The app has a clear README explaining the project.

---

## 21. Portfolio Positioning

This project should be presented as a practical developer productivity web application.

Suggested portfolio description:

> DevLog is a full-stack developer diary web application that helps software engineers record daily work, track goals, search previous notes, generate standup updates, and create weekly or monthly progress summaries.

Suggested CV bullet:

> Built DevLog, a full-stack software engineer diary using Next.js, Spring Boot, and PostgreSQL. Implemented secure authentication, daily work logs, tags, weekly/monthly goals, searchable work history, standup summary generation, and progress review summaries.

Backend-focused CV bullet:

> Developed the Spring Boot REST API for a developer diary application, including authentication, PostgreSQL persistence, daily log CRUD operations, tag and goal relationships, search endpoints, summary generation, validation, and user-specific authorization checks.

Frontend-focused CV bullet:

> Built a responsive Next.js frontend for a developer productivity app, including daily log forms, searchable history views, goal tracking pages, dashboard cards, standup summary screens, and weekly/monthly review pages.

---

## 22. Important Design Principles

### Keep the App Simple

The first version should not try to do everything.

The most important feature is this:

> A developer can quickly record what they did and easily find it again later.

### Make Daily Logging Fast

The new log form should not feel like homework.

The user should be able to create a useful daily log in a few minutes.

### Make Recall Easy

Search should be one of the most important features.

The user should be able to answer questions like:

- When did I work on authentication?
- What did I learn about PostgreSQL?
- What blocked me last week?
- What did I say I would do tomorrow?
- What progress did I make toward my Spring Boot goal?

### Make Summaries Useful

Summaries should be written in a way the user can use for:

- standup
- weekly review
- manager one-to-one
- monthly self-review
- performance review preparation

### Treat Tags as Flexible

For the MVP, tags can cover skills, tools, topics, and goals.

Do not build a complex skills system yet.

A proper skills page can be added later.

---

## 23. Future Enhancements

Possible features after the MVP:

- AI-enhanced summaries
- AI skill detection
- calendar view
- GitHub commit import
- Jira ticket import
- Slack standup export
- markdown support
- file attachments
- code snippet storage
- recurring goals
- private/public portfolio export
- CV bullet generator
- manager review report export
- PDF export
- reminder notifications
- browser extension
- mobile responsive PWA mode

---

## 24. Short Context Prompt for Future AI Chats

Use this section when starting a new AI chat or coding-agent session.

> I am building DevLog, a full-stack web application for software engineers to keep a daily work diary. The stack is Next.js frontend, Spring Boot backend, and PostgreSQL database. The app lets a developer create daily logs about what they worked on, what they found difficult, what they learned, tools used, blockers, notes for tomorrow, tags, and linked weekly/monthly goals. The MVP includes authentication, daily log CRUD, tags, weekly/monthly goals, search, standup summary generation, weekly summaries, monthly summaries, and a dashboard. AI is not required in the MVP; summaries can be generated with backend templates first. The product goal is to help developers stay organised, recall previous work, prepare for standups, and review progress over time.

---

## 25. First Build Recommendation

Start with the smallest useful version:

1. Create backend project.
2. Connect PostgreSQL.
3. Create user registration/login.
4. Create daily log model and CRUD endpoints.
5. Create Next.js dashboard and daily log form.
6. Add logs list and detail page.
7. Add basic keyword search.
8. Add tags.
9. Add goals.
10. Add standup and weekly summary templates.

Do not start with AI, charts, calendar sync, or integrations.

Build the core logging tool first.

