const labels = ["bug","help wanted","enhancement"]
const priorities = ["low", "medium", "high"]

const issues=[]

{
   
issues.push({
      "id": 1,
      "title": "Fix navigation menu on mobile devices",
      "description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",
      "status": "open",
      "labels": [
        "bug",
        "help wanted"
      ],
      "priority": "high",
      "author": "john_doe",
      "assignee": "jane_smith",
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-15T10:30:00Z"
    },
    {
      "id": 2,
      "title": "Add dark mode support",
      "description": "Users are requesting a dark mode option. This would improve accessibility and user experience.",
      "status": "open",
      "labels": [
        "enhancement",
        "good first issue"
      ],
      "priority": "medium",
      "author": "sarah_dev",
      "assignee": "",
      "createdAt": "2024-01-14T14:20:00Z",
      "updatedAt": "2024-01-16T09:15:00Z"
    },
    {
      "id": 3,
      "title": "Update README with installation instructions",
      "description": "The README file needs better installation instructions for new contributors.",
      "status": "closed",
      "labels": [
        "documentation"
      ],
      "priority": "low",
      "author": "mike_docs",
      "assignee": "sarah_dev",
      "createdAt": "2024-01-10T08:00:00Z",
      "updatedAt": "2024-01-12T16:45:00Z"
    },
    {
      "id": 4,
      "title": "Performance issues with large datasets",
      "description": "Application becomes slow when loading more than 1000 items. Need to implement pagination or virtual scrolling.",
      "status": "open",
      "labels": [
        "bug",
        "enhancement"
      ],
      "priority": "high",
      "author": "alex_perf",
      "assignee": "john_doe",
      "createdAt": "2024-01-18T11:00:00Z",
      "updatedAt": "2024-01-18T11:00:00Z"
    },
    {
      "id": 5,
      "title": "Add user authentication system",
      "description": "Implement JWT-based authentication with login, registration, and password reset functionality.",
      "status": "open",
      "labels": [
        "enhancement"
      ],
      "priority": "high",
      "author": "security_sam",
      "assignee": "john_doe",
      "createdAt": "2024-01-20T09:00:00Z",
      "updatedAt": "2024-01-20T09:00:00Z"
    },
    {
      "id": 6,
      "title": "Fix broken image uploads",
      "description": "Users are unable to upload images larger than 5MB. Need to increase the file size limit or add compression.",
      "status": "open",
      "labels": [
        "bug"
      ],
      "priority": "medium",
      "author": "emma_ui",
      "assignee": "",
      "createdAt": "2024-01-19T15:30:00Z",
      "updatedAt": "2024-01-19T15:30:00Z"
    },
    {
      "id": 7,
      "title": "Improve search functionality",
      "description": "Add filters for advanced search including date ranges, status, and tags.",
      "status": "open",
      "labels": [
        "enhancement",
        "good first issue"
      ],
      "priority": "low",
      "author": "search_guru",
      "assignee": "emma_ui",
      "createdAt": "2024-01-17T12:00:00Z",
      "updatedAt": "2024-01-17T12:00:00Z"
    },
    {
      "id": 8,
      "title": "Database migration fails on production",
      "description": "The latest migration script fails when running on production database. Works fine locally.",
      "status": "open",
      "labels": [
        "bug"
      ],
      "priority": "high",
      "author": "db_admin",
      "assignee": "alex_perf",
      "createdAt": "2024-01-21T08:45:00Z",
      "updatedAt": "2024-01-21T08:45:00Z"
    },
    {
      "id": 9,
      "title": "Add export to PDF feature",
      "description": "Users want to export reports and dashboards to PDF format for sharing and printing.",
      "status": "open",
      "labels": [
        "enhancement"
      ],
      "priority": "medium",
      "author": "feature_fred",
      "assignee": "",
      "createdAt": "2024-01-16T10:15:00Z",
      "updatedAt": "2024-01-16T10:15:00Z"
    },
    {
      "id": 10,
      "title": "Update dependencies to latest versions",
      "description": "Several npm packages are outdated and have security vulnerabilities. Need to update and test.",
      "status": "closed",
      "labels": [
        "documentation"
      ],
      "priority": "medium",
      "author": "security_sam",
      "assignee": "john_doe",
      "createdAt": "2024-01-05T14:00:00Z",
      "updatedAt": "2024-01-15T11:30:00Z"
    }
    )

}