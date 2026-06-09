# Attendance System Milestones

## Target

Build a Django attendance system in 30 days that supports user login, check-in, check-out, attendance history, location validation, deployment, and a portfolio-ready project description.

## 30-Day Daily Execution Plan

### Week 1: Backend Control

**Days 1-7 focus:** Get Django running, build the core backend models, and complete the first working attendance flow.

| Day | Milestone |
| --- | --- |
| Day 1 | Install Django, create the project and apps `users` and `attendance`, then run the server. |
| Day 2 | Create the user model or extend Django auth, then build the register/login system. |
| Day 3 | Create the Attendance model with `user`, `check_in`, and `check_out` fields. |
| Day 4 | Run migrations and test saving data manually through the admin panel. |
| Day 5 | Create basic views, including the check-in endpoint. |
| Day 6 | Add check-out logic and prevent double check-in. |
| Day 7 | Test the full flow: login, check-in, check-out. Push the project to GitHub. |

### Week 2: Usable System

**Days 8-14 focus:** Turn the backend into a simple working product with pages, buttons, history, and a cleaner interface.

| Day | Milestone |
| --- | --- |
| Day 8 | Create the dashboard page. |
| Day 9 | Add Check-In and Check-Out buttons. |
| Day 10 | Connect the frontend to the backend. |
| Day 11 | Show attendance history. |
| Day 12 | Improve the UI with a clean layout. Keep it useful, not fancy. |
| Day 13 | Customize the Django admin. |
| Day 14 | Fix bugs and refactor weak code. |

### Week 3: Real Feature

**Days 15-21 focus:** Add geolocation so the system feels like a real attendance product.

| Day | Milestone |
| --- | --- |
| Day 15 | Learn the browser geolocation API. |
| Day 16 | Capture the user's location on the frontend. |
| Day 17 | Send coordinates to the backend. |
| Day 18 | Implement radius validation. |
| Day 19 | Block check-in outside the allowed zone. |
| Day 20 | Improve error messages. |
| Day 21 | Test the full system. |

### Week 4: Deployment And Polish

**Days 22-30 focus:** Deploy the app, connect the production database, polish the interface, and prepare the project for your portfolio.

| Day | Milestone |
| --- | --- |
| Day 22 | Prepare the project for deployment. |
| Day 23 | Deploy to Render or Railway. |
| Day 24 | Fix deployment errors. Expect them and work through them. |
| Day 25 | Connect the database. |
| Day 26 | Add environment variables. |
| Day 27 | Create the Attendance History page. |
| Day 28 | Polish the UI. |
| Day 29 | Complete final bug fixes. |
| Day 30 | Write a portfolio-ready project description. |

## Weekly Reviewer System

Every 7 days, I will check in and review progress.

### I Will Report

- What I built
- What broke
- What I did not understand

### Reviewer Will

- Point out weak spots
- Force improvements
- Give next-level challenges

## Example Week 1 Review Questions

- Can I explain migrations clearly?
- What happens when two users check in at the same time?
- Where is the business logic located?

If I cannot answer these questions, that is the gap I need to fix next.

## Success Criteria

By the end of Day 30, the project should have:

- A working Django backend
- User registration and login
- Attendance check-in and check-out
- Protection against double check-in
- Attendance history
- Location-based check-in validation
- A deployed version online
- A clean UI
- A clear portfolio-ready README and project description
